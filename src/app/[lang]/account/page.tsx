import { Suspense } from "react";
import { AccountPanel } from "@/components/auth/account-panel";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/account">) {
  return pageMetadata(params, "account");
}

export default async function AccountPage({ params }: PageProps<"/[lang]/account">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.account} />
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* The header is static; the member's data streams in per request */}
          <Suspense fallback={<div className="h-72 animate-pulse rounded-2xl bg-white/70" />}>
            <AccountPanel lang={lang} dict={dict} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
