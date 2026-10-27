import Link from "next/link";
import { ArrowLeft, FileText, GraduationCap, Search, Sparkles } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { LogoMark } from "../logo";

export function Hero({ lang, t }: { lang: Locale; t: Dictionary["home"]["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white">
      {/* Decorative hexagon behind the content */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 text-surface-strong"
        aria-hidden
      >
        <polygon points="50,2 92,26 92,74 50,98 8,74 8,26" fill="currentColor" opacity="0.6" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1fr_380px] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-muted">
            <Sparkles className="size-3.5 text-gold-bright" />
            {t.badge}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.35] text-navy sm:text-5xl lg:text-[3.4rem]">
            {t.titleStart}
            <br />
            <span className="text-gold-bright">{t.titleHighlight}</span> {t.titleEnd}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.text}</p>

          <form role="search" className="mt-8 flex max-w-2xl gap-2 rounded-xl border border-line bg-white p-2 shadow-sm">
            <label className="flex flex-1 items-center gap-2 px-2">
              <Search className="size-4 shrink-0 text-muted" />
              <input
                type="search"
                placeholder={t.searchPlaceholder}
                aria-label={t.searchButton}
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted/70"
              />
            </label>
            <button type="submit" className="shrink-0 rounded-lg bg-navy px-5 text-sm font-bold text-white hover:bg-navy-soft">
              {t.searchButton}
            </button>
          </form>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/constitution`}
              className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 font-bold text-white shadow-md shadow-gold/20 hover:bg-gold/90"
            >
              {t.primaryCta}
              <ArrowLeft className="size-4 ltr:rotate-180" />
            </Link>
            <Link
              href={`/${lang}/institute`}
              className="flex items-center gap-2 rounded-lg bg-surface-strong px-6 py-3.5 font-bold text-navy hover:bg-surface-strong/70"
            >
              <GraduationCap className="size-4" />
              {t.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Identity card */}
        <aside className="rounded-2xl border-t-4 border-gold-bright bg-white p-8 text-center shadow-xl shadow-navy/10">
          <LogoMark className="mx-auto size-24" />
          <p className="mt-5 text-xs font-semibold text-gold">{t.card.eyebrow}</p>
          <h2 className="mt-2 text-xl font-extrabold text-navy">{t.card.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t.card.text}</p>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {t.card.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-surface px-3 py-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-navy">{stat.value}</dd>
                <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <Link
            href={`/${lang}/about`}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
          >
            <FileText className="size-4" />
            {t.card.link}
          </Link>
        </aside>
      </div>
    </section>
  );
}
