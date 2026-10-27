import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "./config";
import { getDictionary, type Dictionary } from "./get-dictionary";

type Params = Promise<{ lang: string }>;
export type PageKey = keyof Dictionary["pages"];

// Shared by every inner page: validates the locale and loads its dictionary
export async function loadPage(params: Params) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang, dict: await getDictionary(lang) };
}

export async function pageMetadata(params: Params, key: PageKey): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const page = (await getDictionary(lang)).pages[key];
  return { title: page.title, description: page.subtitle };
}
