import { Academy } from "@/components/home/academy";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/institute">) {
  return pageMetadata(params, "institute");
}

export default async function InstitutePage({ params }: PageProps<"/[lang]/institute">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.institute} />
      <Academy lang={lang} t={dict.home.academy} />
    </>
  );
}
