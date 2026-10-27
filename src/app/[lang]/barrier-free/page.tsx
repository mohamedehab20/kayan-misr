import { BarrierFree } from "@/components/barrier-free";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/barrier-free">) {
  return pageMetadata(params, "barrierFree");
}

export default async function BarrierFreePage({ params }: PageProps<"/[lang]/barrier-free">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.barrierFree} />
      <BarrierFree lang={lang} />
    </>
  );
}
