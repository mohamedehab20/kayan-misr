import { notFound } from "next/navigation";
import { About } from "@/components/home/about";
import { Academy } from "@/components/home/academy";
import { Articles } from "@/components/home/articles";
import { Contact } from "@/components/home/contact";
import { Events } from "@/components/home/events";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { Stats } from "@/components/home/stats";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { home } = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} t={home.hero} />
      <Pillars t={home.pillars} />
      <About t={home.about} />
      <Articles t={home.articles} />
      <Academy lang={lang} t={home.academy} />
      <Events t={home.events} />
      <Stats t={home.stats} />
      <Faq t={home.faq} />
      <Contact t={home.contact} />
    </>
  );
}
