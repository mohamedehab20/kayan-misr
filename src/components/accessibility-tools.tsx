"use client";

import { useSyncExternalStore } from "react";
import { ALargeSmall, Contrast, Minus, Plus, RotateCcw } from "lucide-react";

// Text size and contrast live on <html>, so they carry over to every page during client navigation
const MAX_STEP = 3;
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getSnapshot() {
  const root = document.documentElement;
  return `${root.dataset.textStep ?? "0"}|${root.classList.contains("high-contrast")}`;
}

function apply(step: number, contrast: boolean) {
  const root = document.documentElement;
  root.dataset.textStep = String(step);
  root.style.fontSize = step ? `${100 + step * 12.5}%` : "";
  root.classList.toggle("high-contrast", contrast);
  listeners.forEach((listener) => listener());
}

type Labels = { title: string; hint: string; bigger: string; smaller: string; contrast: string; reset: string };

export function AccessibilityTools({ t }: { t: Labels }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "0|false");
  const [stepText, contrastText] = snapshot.split("|");
  const step = Number(stepText);
  const contrast = contrastText === "true";

  const button =
    "flex items-center gap-2 rounded-lg border-2 border-navy px-4 py-2.5 font-bold text-navy hover:bg-navy hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-navy";

  return (
    <section aria-labelledby="a11y-tools" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
      <h2 id="a11y-tools" className="flex items-center gap-2 text-lg font-bold text-navy">
        <ALargeSmall className="size-5 text-gold" />
        {t.title}
      </h2>
      <p className="mt-1 text-sm text-muted">{t.hint}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className={button} onClick={() => apply(step + 1, contrast)} disabled={step >= MAX_STEP}>
          <Plus className="size-4" />
          {t.bigger}
        </button>
        <button className={button} onClick={() => apply(step - 1, contrast)} disabled={step <= 0}>
          <Minus className="size-4" />
          {t.smaller}
        </button>
        <button className={button} onClick={() => apply(step, !contrast)} aria-pressed={contrast}>
          <Contrast className="size-4" />
          {t.contrast}
        </button>
        <button className={button} onClick={() => apply(0, false)} disabled={step === 0 && !contrast}>
          <RotateCcw className="size-4" />
          {t.reset}
        </button>
      </div>
    </section>
  );
}
