"use client";

import { createElement, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CircleCheck, Users } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { requestHref } from "@/lib/links";
import { getIcon } from "./icons";
import { SectionHeading } from "./section-heading";

export function Simulations({ lang, t }: { lang: Locale; t: Dictionary["simulations"] }) {
  const [activeId, setActiveId] = useState(t.models[0].id);
  const model = t.models.find((item) => item.id === activeId) ?? t.models[0];

  return (
    <section id="simulations" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[18rem_1fr]">
          <div role="tablist" aria-orientation="vertical" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {t.models.map((item) => {
              const Icon = getIcon(item.icon);
              const active = item.id === model.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  id={`sim-tab-${item.id}`}
                  aria-selected={active}
                  aria-controls="sim-panel"
                  onClick={() => setActiveId(item.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl p-4 text-start transition ${
                    active ? "bg-navy text-white shadow-lg" : "bg-surface text-navy hover:bg-surface-strong"
                  }`}
                >
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-lg ${
                      active ? "bg-gold text-white" : "bg-white text-gold"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-bold">{item.title}</span>
                    <span className={`block text-xs ${active ? "text-white/70" : "text-muted"}`}>{item.subtitle}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="sim-panel"
            role="tabpanel"
            aria-labelledby={`sim-tab-${model.id}`}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line sm:p-8"
          >
            <div className="flex flex-wrap items-start gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-navy text-gold-bright">
                {createElement(getIcon(model.icon), { className: "size-7" })}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-navy">{model.title}</h3>
                <p className="text-sm font-semibold text-gold">{model.subtitle}</p>
              </div>
            </div>
            <p className="mt-5 leading-loose text-muted">{model.about}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-2 font-bold text-navy">
                  <Users className="size-5 text-gold-bright" />
                  {t.labels.roles}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {model.roles.map((role) => (
                    <li key={role} className="rounded-full bg-surface px-3 py-1.5 text-sm text-navy">
                      {role}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 flex items-center gap-2 font-bold text-navy">
                  <CircleCheck className="size-5 text-gold-bright" />
                  {t.labels.skills}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {model.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-gold-soft px-3 py-1.5 text-sm font-semibold text-gold">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-navy">{t.labels.stages}</h4>
                <ol className="mt-3 space-y-3">
                  {model.stages.map((stage, i) => (
                    <li key={stage} className="flex gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="pt-0.5 text-sm leading-relaxed text-muted">{stage}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <p className="flex items-center gap-2 text-sm text-muted">
                <BookOpen className="size-4 shrink-0 text-gold" />
                <span>
                  <strong className="text-navy">{t.labels.reference}:</strong> {model.reference}
                </span>
              </p>
              <Link
                href={requestHref(lang, "academy", model.title)}
                className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-bold text-white hover:bg-gold/90"
              >
                {t.labels.register}
                <ArrowLeft className="size-4 ltr:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
