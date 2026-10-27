"use client";

import { useState } from "react";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../section-heading";

export function Articles({ t }: { t: Dictionary["home"]["articles"] }) {
  // -1 shows every category
  const [category, setCategory] = useState(-1);
  const filters = [t.all, ...t.categories];
  const items = category === -1 ? t.items : t.items.filter((item) => item.category === category);

  return (
    <section id="articles" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {filters.map((label, i) => {
            const active = category === i - 1;
            return (
              <button
                key={label}
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(i - 1)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                  active ? "bg-gold text-white" : "bg-white text-muted hover:text-navy"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded bg-surface-strong px-2 py-1 font-semibold text-navy">
                  {t.categories[item.category]}
                </span>
                <span className="flex items-center gap-1 text-muted">
                  <Calendar className="size-3.5" />
                  {item.date}
                </span>
              </div>
              <h3 className="mt-4 line-clamp-2 font-bold leading-relaxed text-navy">{item.title}</h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{item.excerpt}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold-soft font-bold text-gold">
                  {item.author.replace(/^(أ\.د\.|د\.|Prof\.|Dr\.)\s*/, "").charAt(0)}
                </span>
                <span className="text-xs leading-tight">
                  <span className="block font-semibold text-navy">{item.author}</span>
                  <span className="text-muted">{item.role}</span>
                </span>
              </div>
              <a
                href="#"
                className="mt-5 flex items-center justify-center gap-1.5 rounded-lg bg-surface py-2.5 text-xs font-bold text-navy hover:bg-surface-strong"
              >
                <BookOpen className="size-3.5" />
                {t.read}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-bold text-white shadow-md shadow-gold/20 hover:bg-gold/90"
          >
            {t.cta}
            <ArrowLeft className="size-4 ltr:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}
