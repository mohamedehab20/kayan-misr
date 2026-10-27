"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/config";
import { createClient } from "@/lib/supabase/server";

export type AuthError = "invalid" | "credentials" | "notConfirmed" | "exists" | "weakPassword" | "config" | "server";
export type AuthState = { status: "idle" | "checkEmail" } | { status: "error"; error: AuthError };

const field = (formData: FormData, key: string, max = 200) =>
  String(formData.get(key) ?? "").trim().slice(0, max);

const getLocale = (formData: FormData): Locale => {
  const locale = field(formData, "locale", 2);
  return hasLocale(locale) ? locale : "ar";
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function mapError(code: string | undefined): AuthError {
  switch (code) {
    case "invalid_credentials":
      return "credentials";
    case "email_not_confirmed":
      return "notConfirmed";
    case "user_already_exists":
      return "exists";
    case "weak_password":
      return "weakPassword";
    default:
      return "server";
  }
}

export async function signIn(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const lang = getLocale(formData);
  const email = field(formData, "email");
  const password = String(formData.get("password") ?? "");
  if (!isEmail(email) || !password) return { status: "error", error: "invalid" };

  const supabase = await createClient();
  if (!supabase) return { status: "error", error: "config" };

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { status: "error", error: mapError(error.code) };

  redirect(`/${lang}/account`);
}

export async function signUp(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const lang = getLocale(formData);
  const email = field(formData, "email");
  const password = String(formData.get("password") ?? "");
  const fullName = field(formData, "fullName", 120);
  if (!isEmail(email) || fullName.length < 2) return { status: "error", error: "invalid" };
  if (password.length < 8) return { status: "error", error: "weakPassword" };

  const supabase = await createClient();
  if (!supabase) return { status: "error", error: "config" };

  const origin = (await headers()).get("origin") ?? "";
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // Read by the database trigger that creates the member profile
      data: {
        full_name: fullName,
        phone: field(formData, "phone", 30) || null,
        governorate: field(formData, "governorate", 60) || null,
      },
      emailRedirectTo: `${origin}/auth/callback?next=/${lang}/account`,
    },
  });
  if (error) return { status: "error", error: mapError(error.code) };

  // With email confirmation turned off, Supabase signs the member in straight away
  if (data.session) redirect(`/${lang}/account`);
  return { status: "checkEmail" };
}

export async function signOut(formData: FormData) {
  const supabase = await createClient();
  await supabase?.auth.signOut();
  redirect(`/${getLocale(formData)}/login`);
}
