import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import { updateSession } from "@/lib/supabase/proxy";

// Picks the first supported language from Accept-Language, e.g. "en-US,en;q=0.9" -> "en"
function getLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const language = part.split(";")[0].trim().split("-")[0].toLowerCase();
    if (hasLocale(language)) return language;
  }
  return defaultLocale;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return updateSession(request);
}

export const config = {
  // Skip Next.js internals, the auth callback, and files with an extension (images, favicon, ...)
  matcher: ["/((?!_next|api|auth|.*\\..*).*)"],
};
