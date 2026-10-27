import type { Locale } from "@/i18n/config";

// Link to the contact form with the request type (and optional subject) preselected
export function requestHref(lang: Locale, type: string, topic?: string) {
  const params = new URLSearchParams({ type });
  if (topic) params.set("topic", topic);
  return `/${lang}/contact?${params}`;
}
