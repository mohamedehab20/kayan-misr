import { BookOpenCheck, Info, Vote } from "lucide-react";
import { citizenGuide, historyLabels as l, partyEras, partyFormation } from "@/content/political-history";
import { parties } from "@/content/political-life";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "./section-heading";

export function PartyHistory({ lang }: { lang: Locale }) {
  const formed = parties.filter((party) => partyFormation[party.name.en]);

  return (
    <>
      <section id="party-history" className="scroll-mt-28 bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow={l.erasEyebrow[lang]} title={l.erasTitle[lang]} subtitle={l.erasSubtitle[lang]} />
          <ol className="relative mt-12 space-y-8 border-s-2 border-gold-bright/40 ps-8">
            {partyEras.map((era) => (
              <li key={era.years} className="relative">
                <span className="absolute -start-[41px] top-1 size-4 rounded-full border-4 border-surface bg-gold" />
                <p className="text-sm font-bold text-gold" dir="ltr">
                  {era.years}
                </p>
                <h3 className="mt-1 text-xl font-bold text-navy">{era.title[lang]}</h3>
                <p className="mt-2 leading-relaxed text-muted">{era.text[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="party-formation" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title={l.formationTitle[lang]} subtitle={l.formationSubtitle[lang]} />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {formed.map((party) => (
              <li key={party.name.en} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-extrabold text-navy">{party.name[lang]}</h3>
                  <span className="shrink-0 rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
                    {party.seats} {l.seats[lang]}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold text-gold">
                  {l.founded[lang]}: {party.founded}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{partyFormation[party.name.en][lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function CitizenGuide({ lang }: { lang: Locale }) {
  return (
    <section id="citizen-guide" className="scroll-mt-28 bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={l.guideEyebrow[lang]} title={l.guideTitle[lang]} subtitle={l.guideSubtitle[lang]} dark />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {citizenGuide.map((item, i) => (
            <article key={item.title.en} className="rounded-2xl bg-navy-soft p-6 ring-1 ring-white/5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold font-bold">{i + 1}</span>
                <h3 className="text-lg font-bold">{item.title[lang]}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {item.points.map((point) => (
                  <li key={point.en} className="flex gap-2 text-sm leading-relaxed text-white/80">
                    <BookOpenCheck className="mt-0.5 size-4 shrink-0 text-gold-bright" />
                    {point[lang]}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <div className="flex flex-col justify-center gap-3 rounded-2xl border border-gold-bright/40 p-6 text-sm leading-relaxed text-white/75">
            <Vote className="size-8 text-gold-bright" />
            <p className="flex gap-2">
              <Info className="mt-0.5 size-4 shrink-0" />
              {l.guideNote[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
