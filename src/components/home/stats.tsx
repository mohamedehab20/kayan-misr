import type { Dictionary } from "@/i18n/get-dictionary";
import { getIcon } from "../icons";
import { SectionHeading } from "../section-heading";

export function Stats({ t }: { t: Dictionary["home"]["stats"] }) {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} center dark />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.label} className="rounded-2xl border border-white/5 bg-navy-soft p-8 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-xl bg-gold text-white">
                  <Icon className="size-5" />
                </span>
                <p className="mt-5 text-4xl font-extrabold text-gold-bright" dir="ltr">
                  {item.value}
                </p>
                <p className="mt-2 font-bold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-white/60">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
