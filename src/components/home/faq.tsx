import { ArrowLeft, ChevronDown } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../section-heading";

export function Faq({ t }: { t: Dictionary["home"]["faq"] }) {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} center />
        <div className="mt-12 space-y-3">
          {t.items.map((item, i) => (
            <details key={item.q} className="group rounded-xl bg-surface open:bg-white open:shadow-md open:ring-1 open:ring-line">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 font-semibold text-navy">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-strong text-xs font-bold">
                  {i + 1}
                </span>
                <span className="flex-1">{item.q}</span>
                <ChevronDown className="size-5 shrink-0 text-muted transition group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 ps-16 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
            {t.more}
            <ArrowLeft className="size-4 ltr:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}
