import { Contact } from "@/components/home/contact";
import { Faq } from "@/components/home/faq";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  return pageMetadata(params, "contact");
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.contact} />
      <Contact t={dict.home.contact} />
      <Faq t={dict.home.faq} />
    </>
  );
}
