import Link from "next/link";
import { Clock } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { requestHref } from "@/lib/links";
import { getIcon } from "./icons";
import { SectionHeading } from "./section-heading";

// Stand-in backgrounds until real activity photos are added
const covers = [
  "from-[#0f5e5a] to-[#d4a537]",
  "from-[#1f3b7a] to-[#3fa36b]",
  "from-[#5b0f1c] to-[#b8902f]",
  "from-[#2d4a1f] to-[#c98a2e]",
  "from-[#3b1f6b] to-[#c8102e]",
  "from-[#101b30] to-[#4a9fd8]",
];

export function Entertainment({ lang, t }: { lang: Locale; t: Dictionary["entertainment"] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <article key={item.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line">
                <div className={`relative grid aspect-[16/9] place-items-center bg-gradient-to-br ${covers[i % covers.length]}`}>
                  <Icon className="size-14 text-white/40" />
                  <span className="absolute end-4 top-4 rounded bg-white/90 px-2.5 py-1 text-xs font-bold text-navy">
                    {item.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock className="size-3.5" />
                      {item.date}
                    </span>
                    <Link
                      href={requestHref(lang, "entertainment", item.title)}
                      className="rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-white hover:bg-gold/90"
                    >
                      {t.join}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
