"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CircleAlert, CircleCheck, Send, ShieldCheck } from "lucide-react";
import { submitRequest, type SubmitState } from "@/actions/submissions";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { useQueryParam } from "@/lib/use-query-param";
import { getIcon } from "../icons";
import { SectionHeading } from "../section-heading";

const fieldClass =
  "mt-2 w-full rounded-lg border border-transparent bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-gold-bright focus:bg-white";

export function Contact({ lang, t }: { lang: Locale; t: Dictionary["home"]["contact"] }) {
  const { form } = t;
  const [state, action, pending] = useActionState<SubmitState, FormData>(submitRequest, { status: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  // Buttons elsewhere link here as /contact?type=academy&topic=..., so preselect what the visitor chose
  const requested = useQueryParam("type");
  const topic = useQueryParam("topic")?.slice(0, 200) ?? "";
  const [chosen, setChosen] = useState<string | null>(null);
  const type =
    chosen ?? (form.types.some((option) => option.value === requested) ? requested! : form.types[0].value);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <section id="contact" className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[2fr_3fr]">
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.text} />
          <ul className="mt-8 space-y-3">
            {t.channels.map((channel) => {
              const Icon = getIcon(channel.icon);
              return (
                <li key={channel.label} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-gold-soft text-gold">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-navy">{channel.label}</span>
                    <span className="block text-sm text-muted" dir="auto">
                      {channel.value}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <form ref={formRef} action={action} className="rounded-2xl bg-white p-6 shadow-lg shadow-navy/5 sm:p-8">
          <input type="hidden" name="locale" value={lang} />
          {/* Honeypot for spam bots, hidden from people and screen readers */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy">
              {form.name}
              <input name="name" required minLength={2} maxLength={120} placeholder={form.namePlaceholder} className={fieldClass} />
            </label>
            <label className="text-sm font-semibold text-navy">
              {form.email}
              <input name="email" type="email" required maxLength={200} placeholder={form.emailPlaceholder} className={fieldClass} />
            </label>
            <label className="text-sm font-semibold text-navy">
              {form.phone}
              <input name="phone" type="tel" maxLength={30} placeholder={form.phonePlaceholder} className={fieldClass} />
            </label>
            <label className="text-sm font-semibold text-navy">
              {form.type}
              <select name="type" value={type} onChange={(event) => setChosen(event.target.value)} className={fieldClass}>
                {form.types.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            {topic && (
              <label className="text-sm font-semibold text-navy sm:col-span-2">
                {form.topic}
                <input name="topic" value={topic} readOnly className={`${fieldClass} text-gold`} />
              </label>
            )}
            <label className="text-sm font-semibold text-navy sm:col-span-2">
              {form.message}
              <textarea
                name="message"
                rows={5}
                required
                minLength={5}
                maxLength={5000}
                placeholder={form.messagePlaceholder}
                className={fieldClass}
              />
            </label>
          </div>

          {state.status === "success" && (
            <p className="mt-5 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-700" role="status">
              <CircleCheck className="size-4 shrink-0" />
              {form.success}
            </p>
          )}
          {state.status === "error" && (
            <p className="mt-5 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red" role="alert">
              <CircleAlert className="size-4 shrink-0" />
              {form.errors[state.error]}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              disabled={pending}
              className="flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-bold text-white shadow-md shadow-gold/20 hover:bg-gold/90 disabled:opacity-60"
            >
              <Send className="size-4 rtl:-scale-x-100" />
              {pending ? form.sending : form.submit}
            </button>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <ShieldCheck className="size-4" />
              {form.privacy}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
