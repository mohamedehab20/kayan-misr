import { Events } from "@/components/home/events";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/events">) {
  return pageMetadata(params, "events");
}

export default async function EventsPage({ params }: PageProps<"/[lang]/events">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.events} />
      <Events t={dict.home.events} />
    </>
  );
}
