import Link from "next/link";
import { Award, BookOpen } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../section-heading";

export function Academy({ lang, t }: { lang: Locale; t: Dictionary["home"]["academy"] }) {
  return (
    <section id="academy" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg border border-surface-strong bg-surface px-5 py-3 text-sm font-semibold text-navy hover:bg-surface-strong"
          >
            <BookOpen className="size-4" />
            {t.guide}
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => (
            <article key={item.title} className="flex flex-col rounded-2xl border border-line bg-surface/60 p-6">
              <span className="flex w-fit items-center gap-1.5 rounded bg-gold-soft px-2.5 py-1 text-xs font-semibold text-gold">
                <Award className="size-3.5" />
                {item.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>

              <div className="mt-6">
                <div className="flex justify-between text-xs text-muted">
                  <span>{t.occupancy}</span>
                  <span className="font-bold text-navy">{item.progress}%</span>
                </div>
                <div
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-strong"
                  role="progressbar"
                  aria-valuenow={item.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={t.occupancy}
                >
                  <div className="h-full rounded-full bg-gold" style={{ width: `${item.progress}%` }} />
                </div>
              </div>

              <Link
                href={`/${lang}/contact`}
                className="mt-5 rounded-lg bg-navy py-3 text-center text-sm font-bold text-white hover:bg-navy-soft"
              >
                {t.apply}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
