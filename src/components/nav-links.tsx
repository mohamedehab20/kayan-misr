"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLink = { href: string; label: string };

// Home matches exactly; every other link also matches its sub-pages
export function useIsActive() {
  const pathname = usePathname();
  return (href: string, index: number) =>
    index === 0 ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({ links }: { links: NavLink[] }) {
  const isActive = useIsActive();

  return (
    <nav className="hidden items-center gap-0.5 xl:flex">
      {links.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={isActive(link.href, i) ? "page" : undefined}
          className={`rounded-lg px-2 py-2 text-[13px] font-semibold transition-colors 2xl:px-2.5 ${
            isActive(link.href, i) ? "bg-surface-strong text-navy" : "text-muted hover:bg-surface hover:text-navy"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
