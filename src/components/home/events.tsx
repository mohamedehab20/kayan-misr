import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../section-heading";

// Stand-in backgrounds until real event photos are added
const covers = [
  "from-[#5b0f1c] via-[#8e1b2c] to-[#d4a537]",
  "from-[#1d2a44] via-[#3b4a6b] to-[#b8902f]",
  "from-[#0b1430] via-[#1f3b7a] to-[#c8102e]",
];

export function Events({ t }: { t: Dictionary["home"]["events"] }) {
  return (
    <section id="events" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          <a href="#" className="flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
            {t.all}
            <ArrowLeft className="size-4 ltr:rotate-180" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <article key={item.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className={`relative grid aspect-[16/10] place-items-center bg-gradient-to-br ${covers[i % covers.length]}`}>
                <Users className="size-14 text-white/25" />
                <span
                  className={`absolute end-4 top-4 rounded px-2.5 py-1 text-xs font-bold text-white ${
                    item.live ? "bg-red" : "bg-gold-bright"
                  }`}
                >
                  {item.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {item.place}
                  </span>
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-navy">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                <a
                  href="#"
                  className={`mt-6 rounded-lg py-3 text-center text-sm font-bold ${
                    item.primary
                      ? "bg-gold text-white hover:bg-gold/90"
                      : "bg-surface-strong text-navy hover:bg-surface-strong/70"
                  }`}
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
