import { Pillars } from "@/components/home/pillars";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/constitution">) {
  return pageMetadata(params, "constitution");
}

export default async function ConstitutionPage({ params }: PageProps<"/[lang]/constitution">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.constitution} />
      <Pillars t={dict.home.pillars} />
    </>
  );
}
