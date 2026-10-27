import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["ar"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
