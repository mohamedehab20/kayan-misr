"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useIsActive, type NavLink } from "./nav-links";

export function MobileMenu({
  links,
  label,
  join,
  language,
}: {
  links: NavLink[];
  label: string;
  join: NavLink;
  language: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const isActive = useIsActive();
  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={label}
        aria-expanded={open}
        className="grid size-10 place-items-center rounded-lg bg-surface text-navy"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-line bg-white shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={isActive(link.href, i) ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 font-semibold text-navy hover:bg-surface ${
                  isActive(link.href, i) ? "bg-surface-strong" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-4">
              {language}
              <Link
                href={join.href}
                onClick={close}
                className="rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-white"
              >
                {join.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
