import { Dialogue } from "@/components/dialogue";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/national-dialogue">) {
  return pageMetadata(params, "dialogue");
}

export default async function NationalDialoguePage({ params }: PageProps<"/[lang]/national-dialogue">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.dialogue} />
      <Dialogue lang={lang} t={dict.dialogue} />
    </>
  );
}
