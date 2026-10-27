import { Articles } from "@/components/home/articles";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/research">) {
  return pageMetadata(params, "research");
}

export default async function ResearchPage({ params }: PageProps<"/[lang]/research">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.research} />
      <Articles t={dict.home.articles} />
    </>
  );
}
