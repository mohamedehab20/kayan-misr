import Link from "next/link";
import { Globe, Mail, Share2, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { LogoMark } from "./logo";

// Cached at build time so the page stays fully static
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { footer } = dict;
  const year = await currentYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Link href={`/${lang}`} className="flex items-center gap-2.5">
            <LogoMark className="size-9" />
            <span className="text-lg font-extrabold text-navy">{dict.meta.title}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">{footer.about}</p>
          <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold">
            <ShieldCheck className="size-4" />
            {footer.badge}
          </p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-bold text-navy">{column.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-bold text-navy">{footer.contactTitle}</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {footer.contactLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="mt-5 flex gap-2">
            {[Globe, Share2, Mail].map((Icon, i) => (
              <a key={i} href="#" className="grid size-9 place-items-center rounded-lg bg-white text-navy hover:bg-navy hover:text-white">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-muted">
          <p>
            © {year} — {footer.rights}
          </p>
          <ul className="flex flex-wrap gap-5">
            {footer.legal.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-navy">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
