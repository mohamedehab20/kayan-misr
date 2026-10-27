import Link from "next/link";
import { ArrowLeft, Calendar, CircleCheck, MapPin, MessagesSquare } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { requestHref } from "@/lib/links";
import { getIcon } from "./icons";
import { SectionHeading } from "./section-heading";

export function Dialogue({ lang, t }: { lang: Locale; t: Dictionary["dialogue"] }) {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.intro.eyebrow} title={t.intro.title} />
            <p className="mt-6 leading-loose text-muted">{t.intro.text}</p>
            <ul className="mt-6 space-y-3">
              {t.intro.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <CircleCheck className="mt-1 size-5 shrink-0 text-gold-bright" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-gradient-to-br from-navy via-navy-soft to-gold shadow-2xl shadow-navy/20">
            <MessagesSquare className="size-24 text-white/25" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title={t.axesTitle} subtitle={t.axesSubtitle} center />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.axes.map((axis) => {
              const Icon = getIcon(axis.icon);
              return (
                <article key={axis.title} className="rounded-2xl bg-white p-7 shadow-sm">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{axis.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{axis.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading title={t.sessionsTitle} />
          <ul className="mt-10 space-y-4">
            {t.sessions.map((session) => (
              <li
                key={session.title}
                className="flex flex-wrap items-center gap-5 rounded-2xl border border-line p-5 transition hover:shadow-md"
              >
                <div className="min-w-0 flex-1">
                  <span className="rounded bg-gold-soft px-2 py-1 text-xs font-semibold text-gold">{session.axis}</span>
                  <h3 className="mt-3 text-lg font-bold text-navy">{session.title}</h3>
                  <p className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {session.place}
                    </span>
                  </p>
                </div>
                <Link
                  href={requestHref(lang, "dialogue", session.title)}
                  className="rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white hover:bg-navy-soft"
                >
                  {t.register}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-navy p-10 text-center text-white">
          <h2 className="text-3xl font-extrabold">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{t.cta.text}</p>
          <Link
            href={requestHref(lang, "dialogue")}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-bold hover:bg-gold/90"
          >
            {t.cta.button}
            <ArrowLeft className="size-4 ltr:rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
