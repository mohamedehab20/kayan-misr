import { About } from "@/components/home/about";
import { Stats } from "@/components/home/stats";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  return pageMetadata(params, "about");
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.about} />
      <About t={dict.home.about} />
      <Stats t={dict.home.stats} />
    </>
  );
}
