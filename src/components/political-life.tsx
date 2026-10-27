import { CalendarClock, ExternalLink, Info, Landmark, MapPin, Scale, UserRound, Users } from "lucide-react";
import {
  asOf,
  deputyPrimeMinisters,
  houseTotal,
  independents,
  ministries,
  parties,
  president,
  primeMinister,
  regions,
  sources,
} from "@/content/political-life";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "./section-heading";

type T = Dictionary["politicalLife"];

const sectionIds = ["president", "government", "ministryStructure", "parties", "ngos", "governors", "governorateStructure"] as const;

export function PoliticalLife({ lang, t }: { lang: Locale; t: T }) {
  return (
    <>
      <nav className="sticky top-[73px] z-20 border-b border-line bg-white/95 backdrop-blur">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 text-sm font-semibold">
          {sectionIds.map((id) => (
            <li key={id} className="shrink-0">
              <a href={`#${id}`} className="block rounded-lg px-3 py-2 text-muted hover:bg-surface hover:text-navy">
                {t.tabs[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl px-4 pt-8">
        <p className="flex flex-wrap items-center gap-2 rounded-xl bg-gold-soft px-4 py-3 text-sm text-gold">
          <CalendarClock className="size-4 shrink-0" />
          <strong>
            {t.asOfLabel}: {asOf[lang]}
          </strong>
          <span className="text-gold/80">— {t.disclaimer}</span>
        </p>
      </div>

      <President lang={lang} t={t} />
      <Government lang={lang} t={t} />
      <Structure id="ministryStructure" t={t.ministryStructure} tone="surface" />
      <Parties lang={lang} t={t} />
      <Ngos t={t} />
      <Governors lang={lang} t={t} />
      <Structure id="governorateStructure" t={t.governorateStructure} tone="white" note={t.governorateStructure.note} />

      <section className="border-t border-line bg-surface py-10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-bold text-navy">{t.sourcesLabel}</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-gold"
                >
                  <ExternalLink className="size-3.5 shrink-0" />
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function President({ lang, t }: { lang: Locale; t: T }) {
  return (
    <section id="president" className="scroll-mt-40 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center gap-6 rounded-3xl bg-navy p-8 text-white">
          <span className="grid size-20 place-items-center rounded-2xl bg-gold text-white">
            <Landmark className="size-9" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gold-bright">{t.president.title}</p>
            <h2 className="mt-1 text-3xl font-extrabold">{president.name[lang]}</h2>
            <p className="mt-2 text-white/70">{t.president.role}</p>
          </div>
          <dl className="flex gap-3 text-center">
            <div className="rounded-xl bg-navy-soft px-5 py-3">
              <dt className="text-xs text-white/60">{t.president.since}</dt>
              <dd className="text-xl font-bold text-gold-bright">{president.since}</dd>
            </div>
            <div className="rounded-xl bg-navy-soft px-5 py-3">
              <dd className="text-sm font-semibold">{president.term[lang]}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Government({ lang, t }: { lang: Locale; t: T }) {
  return (
    <section id="government" className="scroll-mt-40 bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={t.government.title} subtitle={t.government.subtitle} />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-s-4 border-gold bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gold">{t.government.pm}</p>
            <p className="mt-1 text-2xl font-extrabold text-navy">{primeMinister.name[lang]}</p>
            <p className="mt-1 text-sm text-muted">{primeMinister.note[lang]}</p>
          </div>
          {deputyPrimeMinisters.map((deputy) => (
            <div key={deputy.name.en} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gold">{deputy.role[lang]}</p>
              <p className="mt-1 text-2xl font-extrabold text-navy">{deputy.name[lang]}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm font-semibold text-muted">
          {ministries.length} {t.government.ministriesCount}
        </p>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((item) => (
            <li key={item.ministry.en} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-line">
              <p className="text-xs font-semibold text-gold">{item.ministry[lang]}</p>
              <p className="mt-1.5 flex items-center gap-2 font-bold text-navy">
                <UserRound className="size-4 shrink-0 text-muted" />
                {item.minister[lang]}
              </p>
              {item.deputies && (
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {t.government.deputies}: <span dir="rtl">{item.deputies.join("، ")}</span>
                </p>
              )}
              {item.note && <p className="mt-2 text-xs text-gold">{item.note[lang]}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Structure({
  id,
  t,
  tone,
  note,
}: {
  id: string;
  t: { title: string; subtitle: string; levels: { title: string; text: string }[] };
  tone: "surface" | "white";
  note?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-40 py-16 ${tone === "surface" ? "bg-white" : "bg-surface"}`}>
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} center />
        {/* A top-down chain: each level reports to the one above it */}
        <ol className="relative mt-10 space-y-4 before:absolute before:inset-y-6 before:start-[27px] before:w-0.5 before:bg-line">
          {t.levels.map((level, i) => (
            <li key={level.title} className="relative flex gap-4">
              <span
                className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl text-lg font-extrabold ${
                  i === 0 ? "bg-navy text-gold-bright" : "bg-white text-navy ring-1 ring-line"
                }`}
              >
                {i + 1}
              </span>
              <div className="flex-1 rounded-xl bg-white p-4 shadow-sm ring-1 ring-line">
                <h3 className="font-bold text-navy">{level.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{level.text}</p>
              </div>
            </li>
          ))}
        </ol>
        {note && (
          <p className="mt-6 flex gap-2 rounded-xl bg-gold-soft p-4 text-sm text-gold">
            <Info className="mt-0.5 size-4 shrink-0" />
            {note}
          </p>
        )}
      </div>
    </section>
  );
}

function Parties({ lang, t }: { lang: Locale; t: T }) {
  const rows = [...parties.map((party) => ({ ...party, independent: false })), {
    name: { ar: t.parties.independents, en: t.parties.independents },
    founded: "—",
    seats: independents,
    about: { ar: "", en: "" },
    independent: true,
  }];
  const max = Math.max(...rows.map((row) => row.seats));
  const share = (seats: number) => ((seats / houseTotal) * 100).toFixed(1);

  return (
    <section id="parties" className="scroll-mt-40 bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={t.parties.title} subtitle={t.parties.subtitle} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[3fr_2fr]">
          {/* Seats per party: one hue, sorted, value printed on every bar; independents in neutral grey */}
          <figure className="rounded-2xl bg-white p-6 shadow-sm">
            <figcaption className="mb-5 flex items-center justify-between text-sm">
              <span className="font-bold text-navy">{t.parties.chartLabel}</span>
              <span className="text-muted">
                {t.parties.total}: <strong className="text-navy">{houseTotal}</strong>
              </span>
            </figcaption>
            <ul className="space-y-2.5">
              {rows.map((row) => (
                <li
                  key={row.name.en}
                  className="group grid grid-cols-[9rem_1fr] items-center gap-3 rounded-md px-1 py-0.5 hover:bg-surface sm:grid-cols-[12rem_1fr]"
                  title={`${row.name[lang]}: ${row.seats} (${share(row.seats)}%)`}
                >
                  <span className="truncate text-sm text-navy">{row.name[lang]}</span>
                  <span className="flex items-center gap-2">
                    <span
                      className={`h-3 rounded-e ${row.independent ? "bg-muted/40" : "bg-navy group-hover:bg-gold"}`}
                      style={{ width: `${Math.max((row.seats / max) * 100, 1)}%` }}
                    />
                    <span className="text-xs font-bold text-navy">{row.seats}</span>
                  </span>
                </li>
              ))}
            </ul>
          </figure>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3 text-start font-semibold">{t.parties.party}</th>
                  <th className="px-3 py-3 text-center font-semibold">{t.parties.founded}</th>
                  <th className="px-3 py-3 text-center font-semibold">{t.parties.seats}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {parties.map((party) => (
                  <tr key={party.name.en} className="align-top">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-navy">{party.name[lang]}</p>
                      {party.about[lang] && <p className="mt-0.5 text-xs leading-relaxed text-muted">{party.about[lang]}</p>}
                    </td>
                    <td className="px-3 py-3 text-center text-muted">{party.founded}</td>
                    <td className="px-3 py-3 text-center font-bold text-navy">{party.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ngos({ t }: { t: T }) {
  const { ngos } = t;
  return (
    <section id="ngos" className="scroll-mt-40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={ngos.title} subtitle={ngos.subtitle} />
        <h3 className="mt-10 flex items-center gap-2 text-lg font-bold text-navy">
          <Scale className="size-5 text-gold-bright" />
          {ngos.typesTitle}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ngos.types.map((type) => (
            <div key={type.title} className="rounded-xl bg-surface p-5">
              <p className="font-bold text-navy">{type.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{type.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line lg:col-span-2">
            <h3 className="font-bold text-navy">{ngos.stepsTitle}</h3>
            <ol className="mt-4 space-y-3">
              {ngos.steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold text-xs font-bold text-white">{i + 1}</span>
                  <p className="pt-0.5 text-sm leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border-s-4 border-red bg-white p-6 shadow-sm ring-1 ring-line">
              <h3 className="font-bold text-navy">{ngos.rulesTitle}</h3>
              <ul className="mt-3 list-disc space-y-2 ps-5 text-sm text-muted">
                {ngos.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="font-bold text-gold-bright">{ngos.examplesTitle}</h3>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {ngos.examples.map((example) => (
                  <li key={example} className="rounded-full bg-navy-soft px-3 py-1">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Governors({ lang, t }: { lang: Locale; t: T }) {
  return (
    <section id="governors" className="scroll-mt-40 bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={t.governors.title} subtitle={t.governors.subtitle} />
        <div className="mt-8 space-y-10">
          {regions.map((region) => (
            <div key={region.name.en}>
              <h3 className="flex items-center gap-2 font-bold text-navy">
                <MapPin className="size-5 text-gold-bright" />
                {region.name[lang]}
                <span className="text-sm font-normal text-muted">({region.governorates.length})</span>
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {region.governorates.map((gov) => (
                  <li key={gov.name.en} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-line">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-lg font-extrabold text-navy">{gov.name[lang]}</p>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          gov.renewed ? "bg-gold-soft text-gold" : "bg-surface-strong text-navy"
                        }`}
                      >
                        {gov.renewed ? t.governors.renewed : t.governors.continued}
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-muted">{t.governors.governor}</p>
                    <p className="flex items-center gap-1.5 font-semibold text-navy">
                      <UserRound className="size-4 shrink-0 text-muted" />
                      {gov.governor[lang]}
                    </p>
                    {gov.deputies && (
                      <>
                        <p className="mt-3 text-xs text-muted">{t.governors.deputies}</p>
                        <p className="flex items-start gap-1.5 text-sm text-navy" dir="rtl">
                          <Users className="mt-0.5 size-4 shrink-0 text-muted" />
                          {gov.deputies.join("، ")}
                        </p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
