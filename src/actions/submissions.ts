"use server";

import { hasLocale } from "@/i18n/config";
import { createClient } from "@/lib/supabase/server";

const submissionTypes =["contact", "membership", "academy", "event", "entertainment", "dialogue"] as const;

export type SubmitState = { status: "idle" | "success" } | { status: "error"; error: "invalid" | "config" | "server" };

const text = (formData: FormData, key: string, max: number) =>
  String(formData.get(key) ?? "").trim().slice(0, max);

export async function submitRequest(_prev: SubmitState, formData: FormData): Promise<SubmitState> {
  // Honeypot: real visitors never fill this hidden field
  if (text(formData, "website", 100)) return { status: "success" };

  const type = text(formData, "type", 20);
  const locale = text(formData, "locale", 2);
  const submission = {
    type,
    name: text(formData, "name", 120),
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 30) || null,
    topic: text(formData, "topic", 200) || null,
    message: text(formData, "message", 5000),
    locale: hasLocale(locale) ? locale : "ar",
  };

  const valid =
    (submissionTypes as readonly string[]).includes(type) &&
    submission.name.length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email) &&
    submission.message.length >= 5;
  if (!valid) return { status: "error", error: "invalid" };

  const supabase = await createClient();
  if (!supabase) return { status: "error", error: "config" };

  // user_id is filled by the database from the session, so a member's requests show in their portal
  const { error } = await supabase.from("submissions").insert(submission);
  if (error) {
    console.error("submitRequest failed:", error.message);
    return { status: "error", error: "server" };
  }
  return { status: "success" };
}
