import { Pillars } from "@/components/home/pillars";
import { PageHeader } from "@/components/page-header";
import { CitizenGuide, PartyHistory } from "@/components/political-history";
import { Simulations } from "@/components/simulations";
import { historyLabels } from "@/content/political-history";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/constitution">) {
  return pageMetadata(params, "constitution");
}

export default async function ConstitutionPage({ params }: PageProps<"/[lang]/constitution">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.constitution} />
      <nav className="sticky top-[73px] z-20 border-b border-line bg-white/95 backdrop-blur">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 text-sm font-semibold">
          {historyLabels.jump.map((item) => (
            <li key={item.href} className="shrink-0">
              <a href={item.href} className="block rounded-lg px-3 py-2 text-muted hover:bg-surface hover:text-navy">
                {item.label[lang]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Pillars t={dict.home.pillars} />
      <Simulations lang={lang} t={dict.simulations} />
      <PartyHistory lang={lang} />
      <CitizenGuide lang={lang} />
    </>
  );
}
