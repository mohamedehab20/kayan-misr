import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Locale } from "@/i18n/config";

export function PageHeader({
  lang,
  home,
  title,
  subtitle,
  parent,
}: {
  lang: Locale;
  home: string;
  title: string;
  subtitle: string;
  parent?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(184,144,47,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60">
          <Link href={`/${lang}`} className="hover:text-white">
            {home}
          </Link>
          <ChevronLeft className="size-4 ltr:rotate-180" />
          {parent && (
            <>
              <Link href={parent.href} className="hover:text-white">
                {parent.label}
              </Link>
              <ChevronLeft className="size-4 ltr:rotate-180" />
            </>
          )}
          <span className="text-gold-bright">{title}</span>
        </nav>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
      </div>
    </section>
  );
}
