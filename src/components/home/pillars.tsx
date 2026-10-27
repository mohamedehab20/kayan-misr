import { ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { getIcon } from "../icons";
import { SectionHeading } from "../section-heading";

export function Pillars({ t }: { t: Dictionary["home"]["pillars"] }) {
  return (
    <section id="pillars" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <article
                key={item.title}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-surface-strong text-navy transition group-hover:bg-navy group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <p className="mt-5 text-xs font-semibold text-gold">{item.eyebrow}</p>
                <h3 className="mt-1.5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                <a
                  href="#"
                  className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold text-navy hover:text-gold"
                >
                  {item.link}
                  <ArrowLeft className="size-4 ltr:rotate-180" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
