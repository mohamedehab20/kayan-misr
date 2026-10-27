import Link from "next/link";
import { LogIn, Radio, Search, UserPlus } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { LanguageSwitcher } from "./language-switcher";
import { LogoMark } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = dict.nav.items.map((item) => ({ ...item, href: `/${lang}${item.href}` }));

  return (
    <>
      {/* Top bar */}
      <div className="border-b border-line bg-white text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <p className="flex min-w-0 items-center gap-2">
            <span className="shrink-0 rounded bg-red px-2 py-0.5 font-bold text-white">
              {dict.topbar.badge}
            </span>
            <span className="truncate text-muted">{dict.topbar.text}</span>
          </p>
          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button className="flex items-center gap-1.5 rounded-md bg-surface px-3 py-1 text-muted hover:text-navy">
              <Search className="size-3.5" />
              {dict.topbar.search}
            </button>
            <LanguageSwitcher lang={lang} label={dict.nav.switchLanguage} />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href={`/${lang}`} className="flex shrink-0 items-center gap-2.5">
            <LogoMark />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold text-navy">{dict.meta.title}</span>
              <span className="block text-[11px] text-muted">{dict.meta.tagline}</span>
            </span>
          </Link>

          <NavLinks links={links} />

          <div className="flex items-center gap-2">
            <Link
              href={`/${lang}/account`}
              aria-label={dict.nav.members}
              title={dict.nav.members}
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg bg-surface px-3 py-2.5 text-[13px] font-semibold text-navy hover:bg-surface-strong md:flex"
            >
              <LogIn className="size-4" />
              {/* Icon only while the full nav is squeezed (xl), label again once there is room */}
              <span className="xl:hidden 2xl:inline">{dict.nav.members}</span>
            </Link>
            <Link
              href={`/${lang}/signup`}
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg bg-gold px-4 py-2.5 text-[13px] font-bold text-white hover:bg-gold/90 sm:flex"
            >
              <UserPlus className="size-4" />
              {dict.nav.join}
            </Link>
            <MobileMenu
              links={links}
              label={dict.nav.openMenu}
              join={{ href: `/${lang}/signup`, label: dict.nav.join }}
              language={<LanguageSwitcher lang={lang} label={dict.nav.switchLanguage} />}
            />
          </div>
        </div>
      </header>

      {/* News ticker */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5 text-[13px]">
          <span className="flex shrink-0 items-center gap-1.5 rounded bg-red px-2.5 py-1 text-xs font-bold">
            <Radio className="size-3.5" />
            {dict.ticker.label}
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="ticker-track flex w-max gap-12 whitespace-nowrap">
              {[...dict.ticker.items, ...dict.ticker.items].map((item, i) => (
                <span key={i} className="flex items-center gap-3 text-white/85" aria-hidden={i >= dict.ticker.items.length}>
                  <span className="size-1.5 rounded-full bg-gold-bright" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
