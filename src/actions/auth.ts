"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { hasLocale, type Locale } from "@/i18n/config";
import { createClient } from "@/lib/supabase/server";

export type AuthError =
  | "invalid"
  | "credentials"
  | "notConfirmed"
  | "exists"
  | "weakPassword"
  | "config"
  | "guestDisabled"
  | "server";
export type AuthState = { status: "idle" | "checkEmail" | "success" } | { status: "error"; error: AuthError };

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
    case "email_exists":
      return "exists";
    case "anonymous_provider_disabled":
      return "guestDisabled";
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
        password_set: true,
      },
      emailRedirectTo: `${origin}/auth/callback?next=/${lang}/account`,
    },
  });
  if (error) return { status: "error", error: mapError(error.code) };

  // With email confirmation turned off, Supabase signs the member in straight away
  if (data.session) redirect(`/${lang}/account`);
  return { status: "checkEmail" };
}

// Guest = Supabase anonymous user: a real session without email or password,
// so requests sent as a guest are linked to it and show in the portal
export async function signInAsGuest(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const supabase = await createClient();
  if (!supabase) return { status: "error", error: "config" };

  const { error } = await supabase.auth.signInAnonymously();
  if (error) return { status: "error", error: mapError(error.code) };

  redirect(`/${getLocale(formData)}/account`);
}

// Step 1 of turning a guest into a member: save their details and link an email (Supabase emails a confirmation link).
// The password comes in step 2, because Supabase only allows it once the email is verified.
export async function upgradeGuest(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const lang = getLocale(formData);
  const email = field(formData, "email");
  const fullName = field(formData, "fullName", 120);
  if (!isEmail(email) || fullName.length < 2) return { status: "error", error: "invalid" };

  const supabase = await createClient();
  if (!supabase) return { status: "error", error: "config" };

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.is_anonymous) return { status: "error", error: "invalid" };

  const { error: profileError } = await supabase
    .from("profiles")
    .update({
      full_name: fullName,
      phone: field(formData, "phone", 30) || null,
      governorate: field(formData, "governorate", 60) || null,
    })
    .eq("id", user.id);
  if (profileError) return { status: "error", error: "server" };

  const origin = (await headers()).get("origin") ?? "";
  const { error } = await supabase.auth.updateUser(
    { email },
    { emailRedirectTo: `${origin}/auth/callback?next=/${lang}/account` },
  );
  if (error) return { status: "error", error: mapError(error.code) };
  return { status: "checkEmail" };
}

// Step 2: a confirmed former guest sets the password they'll sign in with
export async function setPassword(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const password = String(formData.get("password") ?? "");
  if (password.length < 8) return { status: "error", error: "weakPassword" };

  const supabase = await createClient();
  if (!supabase) return { status: "error", error: "config" };

  const { error } = await supabase.auth.updateUser({ password, data: { password_set: true } });
  if (error) return { status: "error", error: mapError(error.code) };
  return { status: "success" };
}

export async function signOut(formData: FormData) {
  const supabase = await createClient();
  await supabase?.auth.signOut();
  redirect(`/${getLocale(formData)}/login`);
}
