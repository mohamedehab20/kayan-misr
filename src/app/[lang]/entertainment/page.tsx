import { Entertainment } from "@/components/entertainment";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/entertainment">) {
  return pageMetadata(params, "entertainment");
}

export default async function EntertainmentPage({ params }: PageProps<"/[lang]/entertainment">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.entertainment} />
      <Entertainment lang={lang} t={dict.entertainment} />
    </>
  );
}
