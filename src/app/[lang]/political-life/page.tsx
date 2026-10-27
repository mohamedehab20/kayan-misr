import { PageHeader } from "@/components/page-header";
import { PoliticalLife } from "@/components/political-life";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/political-life">) {
  return pageMetadata(params, "politicalLife");
}

export default async function PoliticalLifePage({ params }: PageProps<"/[lang]/political-life">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.politicalLife} />
      <PoliticalLife lang={lang} t={dict.politicalLife} />
    </>
  );
}
