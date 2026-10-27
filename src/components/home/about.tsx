import { ArrowLeft, CircleCheck, Play, Video } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../section-heading";

export function About({ t }: { t: Dictionary["home"]["about"] }) {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
          <p className="mt-2 text-2xl font-bold text-gold-bright">{t.subtitle}</p>
          <p className="mt-6 leading-loose text-muted">{t.text}</p>
          <ul className="mt-6 space-y-4">
            {t.points.map((point) => (
              <li key={point.title} className="flex gap-3">
                <CircleCheck className="mt-1 size-5 shrink-0 text-gold-bright" />
                <p className="leading-relaxed text-muted">
                  <strong className="text-navy">{point.title}</strong> {point.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 font-bold text-white hover:bg-navy-soft">
              {t.primaryCta}
              <ArrowLeft className="size-4 ltr:rotate-180" />
            </a>
            <a href="#" className="flex items-center gap-2 rounded-lg bg-surface px-6 py-3.5 font-bold text-navy hover:bg-surface-strong">
              <Video className="size-4 text-red" />
              {t.secondaryCta}
            </a>
          </div>
        </div>

        {/* Video card — replace the gradient with a real thumbnail and link the video */}
        <a
          href="#"
          className="group relative block aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-soft to-gold shadow-2xl shadow-navy/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          <span className="absolute start-4 top-4 rounded bg-gold-bright px-2.5 py-1 text-xs font-bold text-white">
            {t.video.badge}
          </span>
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-red text-white shadow-lg transition group-hover:scale-110">
            <Play className="size-7 fill-current" />
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
            <p className="text-lg font-bold">{t.video.title}</p>
            <p className="text-sm text-white/75">{t.video.subtitle}</p>
            <p className="mt-3 text-xs text-white/60">{t.video.caption}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
