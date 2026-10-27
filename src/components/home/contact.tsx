"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, Send, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { getIcon } from "../icons";
import { SectionHeading } from "../section-heading";

const fieldClass =
  "mt-2 w-full rounded-lg border border-transparent bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-gold-bright focus:bg-white";

export function Contact({ t }: { t: Dictionary["home"]["contact"] }) {
  const { form } = t;
  const [sent, setSent] = useState(false);

  // Frontend only: no backend yet, so just confirm to the visitor
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

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

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-lg shadow-navy/5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy">
              {form.name}
              <input name="name" required placeholder={form.namePlaceholder} className={fieldClass} />
            </label>
            <label className="text-sm font-semibold text-navy">
              {form.email}
              <input name="email" type="email" required placeholder={form.emailPlaceholder} className={fieldClass} />
            </label>
            <label className="text-sm font-semibold text-navy">
              {form.phone}
              <input name="phone" type="tel" placeholder={form.phonePlaceholder} className={fieldClass} />
            </label>
            <label className="text-sm font-semibold text-navy">
              {form.type}
              <select name="type" className={fieldClass}>
                {form.types.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-navy sm:col-span-2">
              {form.message}
              <textarea
                name="message"
                rows={5}
                required
                placeholder={form.messagePlaceholder}
                className={fieldClass}
              />
            </label>
          </div>

          {sent && (
            <p className="mt-5 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-700" role="status">
              <CircleCheck className="size-4" />
              {form.success}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-bold text-white shadow-md shadow-gold/20 hover:bg-gold/90"
            >
              <Send className="size-4 rtl:-scale-x-100" />
              {form.submit}
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
