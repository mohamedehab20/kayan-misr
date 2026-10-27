import { InitiativesGrid } from "@/components/initiatives";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/initiatives">) {
  return pageMetadata(params, "initiatives");
}

export default async function InitiativesPage({ params }: PageProps<"/[lang]/initiatives">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.initiatives} />
      <InitiativesGrid lang={lang} t={dict.initiatives} />
    </>
  );
}
