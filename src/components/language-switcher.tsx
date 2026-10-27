"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import type { Locale } from "@/i18n/config";

// Keeps the visitor on the same page, swapping only the locale segment
export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const target = lang === "ar" ? "en" : "ar";
  const href = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), `/${target}`);

  return (
    <Link
      href={href}
      hrefLang={target}
      className="flex items-center gap-1.5 rounded-md px-2 py-1 font-semibold text-navy hover:bg-surface"
    >
      <Globe className="size-3.5" />
      {label}
    </Link>
  );
}
