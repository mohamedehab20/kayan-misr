import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InitiativeDetail } from "@/components/initiatives";
import { PageHeader } from "@/components/page-header";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import ar from "@/i18n/dictionaries/ar.json";

// Slugs are the same in every language, so one dictionary is enough to list them
export function generateStaticParams() {
  return ar.initiatives.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/initiatives/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const item = (await getDictionary(lang)).initiatives.items.find((entry) => entry.slug === slug);
  return item ? { title: item.title, description: item.idea } : {};
}

export default async function InitiativePage({ params }: PageProps<"/[lang]/initiatives/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const item = dict.initiatives.items.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        lang={lang}
        home={dict.nav.items[0].label}
        parent={{ href: `/${lang}/initiatives`, label: dict.pages.initiatives.title }}
        title={item.title}
        subtitle={item.tag}
      />
      <InitiativeDetail lang={lang} t={dict.initiatives} item={item} />
    </>
  );
}
