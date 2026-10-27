import Link from "next/link";
import { ArrowLeft, BookOpen, HandHeart, Info } from "lucide-react";
import { guide, intro, labels, programs, rights } from "@/content/barrier-free";
import type { Locale } from "@/i18n/config";
import { requestHref } from "@/lib/links";
import { AccessibilityTools } from "./accessibility-tools";
import { getIcon } from "./icons";
import { SectionHeading } from "./section-heading";

export function BarrierFree({ lang }: { lang: Locale }) {
  const joinHref = requestHref(lang, "contact", labels.join[lang]);
  const tools = Object.fromEntries(Object.entries(labels.tools).map(([key, value]) => [key, value[lang]])) as {
    [K in keyof typeof labels.tools]: string;
  };

  return (
    <>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[3fr_2fr]">
          <div>
            <SectionHeading eyebrow={intro.eyebrow[lang]} title={intro.title[lang]} />
            <p className="mt-5 text-lg leading-loose text-muted">{intro.text[lang]}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {intro.pillars.map((pillar) => {
                const Icon = getIcon(pillar.icon);
                return (
                  <li key={pillar.title.en} className="rounded-2xl bg-surface p-5">
                    <span className="grid size-11 place-items-center rounded-xl bg-navy text-gold-bright">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <p className="mt-4 font-bold text-navy">{pillar.title[lang]}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.text[lang]}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-6">
            <AccessibilityTools t={tools} />
            <Link
              href={joinHref}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-5 text-lg font-bold text-white hover:bg-gold/90"
            >
              <HandHeart className="size-6" aria-hidden />
              {labels.join[lang]}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title={rights.title[lang]} subtitle={rights.subtitle[lang]} />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {rights.items.map((item) => (
              <li key={item.ref.en} className="rounded-2xl border-s-4 border-gold bg-white p-6 shadow-sm">
                <p className="flex items-center gap-2 font-bold text-navy">
                  <BookOpen className="size-5 shrink-0 text-gold" aria-hidden />
                  {item.ref[lang]}
                </p>
                <p className="mt-3 leading-relaxed text-muted">{item.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title={labels.programsTitle[lang]} subtitle={labels.programsSubtitle[lang]} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = getIcon(program.icon);
              return (
                <li key={program.title.en} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold-soft text-gold">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{program.title[lang]}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{program.text[lang]}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading title={guide.title[lang]} dark />
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {guide.steps.map((step, i) => (
              <li key={step.title.en} className="rounded-2xl bg-navy-soft p-6">
                <span className="grid size-10 place-items-center rounded-full bg-gold text-lg font-bold">{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{step.title[lang]}</h3>
                <p className="mt-2 leading-relaxed text-white/80">{step.text[lang]}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="flex max-w-2xl gap-2 text-sm text-white/70">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
              {labels.note[lang]}
            </p>
            <Link
              href={joinHref}
              className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 font-bold hover:bg-gold/90"
            >
              {labels.join[lang]}
              <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
