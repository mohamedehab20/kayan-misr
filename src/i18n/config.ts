export const locales = ["ar", "en"] as const;
export const defaultLocale = "ar";

export type Locale = (typeof locales)[number];

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

export const localeDir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");
