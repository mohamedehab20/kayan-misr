import Link from "next/link";
import { ArrowLeft, CircleCheck, Lightbulb, Route, ShieldAlert, Target } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { requestHref } from "@/lib/links";
import { getIcon } from "./icons";
import { SectionHeading } from "./section-heading";

type Initiatives = Dictionary["initiatives"];
type Initiative = Initiatives["items"][number];

export function InitiativesGrid({ lang, t }: { lang: Locale; t: Initiatives }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Link
                key={item.slug}
                href={`/${lang}/initiatives/${item.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-line transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-navy text-gold-bright transition group-hover:bg-gold group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <span className="text-5xl font-extrabold text-surface-strong">{i + 1}</span>
                </div>
                <p className="mt-6 text-xs font-semibold text-gold">{item.tag}</p>
                <h3 className="mt-1 flex flex-wrap items-baseline gap-x-2 text-2xl font-extrabold text-navy">
                  {item.title}
                  {item.latin !== item.title && (
                    <span className="text-sm font-semibold text-muted" dir="ltr">
                      {item.latin}
                    </span>
                  )}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{item.idea}</p>
                <span className="mt-6 flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold">
                  {t.labels.more}
                  <ArrowLeft className="size-4 ltr:rotate-180" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function InitiativeDetail({ lang, t, item }: { lang: Locale; t: Initiatives; item: Initiative }) {
  const { labels } = t;
  const others = t.items.filter((other) => other.slug !== item.slug);

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
              <Lightbulb className="size-5 text-gold-bright" />
              {labels.idea}
            </h2>
            <p className="mt-4 text-lg leading-loose text-foreground/85">{item.idea}</p>
          </article>

          {item.list.length > 0 && (
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy">{item.listTitle}</h2>
              <ol className="mt-6 space-y-4">
                {item.list.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 leading-relaxed text-muted">{step}</p>
                  </li>
                ))}
              </ol>
              {item.note && (
                <p className="mt-6 flex gap-2 rounded-xl bg-gold-soft p-4 text-sm leading-relaxed text-gold">
                  <CircleCheck className="mt-0.5 size-4 shrink-0" />
                  {item.note}
                </p>
              )}
            </article>
          )}

          {item.tracks.length > 0 && (
            <article className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-bold text-navy">
                <Route className="size-5 text-gold-bright" />
                {item.tracksTitle}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {item.tracks.map((track) => (
                  <div key={track.title} className="rounded-xl border border-line bg-surface/60 p-5">
                    <h3 className="font-bold text-navy">{track.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{track.text}</p>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-2xl bg-navy p-7 text-white">
            <h2 className="flex items-center gap-2 font-bold text-gold-bright">
              <Target className="size-5" />
              {labels.value}
            </h2>
            <p className="mt-3 leading-relaxed text-white/85">{item.value}</p>
          </div>

          {item.challenge && (
            <div className="rounded-2xl border-s-4 border-red bg-white p-7 shadow-sm">
              <h2 className="flex items-center gap-2 font-bold text-navy">
                <ShieldAlert className="size-5 text-red" />
                {labels.challenge}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{item.challenge}</p>
            </div>
          )}

          <Link
            href={requestHref(lang, "contact", item.title)}
            className="flex items-center justify-center gap-2 rounded-xl bg-gold py-4 font-bold text-white hover:bg-gold/90"
          >
            {labels.contact}
            <ArrowLeft className="size-4 ltr:rotate-180" />
          </Link>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold text-muted">{labels.others}</h2>
            <ul className="mt-3 space-y-1">
              {others.map((other) => {
                const Icon = getIcon(other.icon);
                return (
                  <li key={other.slug}>
                    <Link
                      href={`/${lang}/initiatives/${other.slug}`}
                      className="flex items-center gap-3 rounded-lg p-2 font-semibold text-navy hover:bg-surface"
                    >
                      <Icon className="size-4 text-gold" />
                      {other.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
