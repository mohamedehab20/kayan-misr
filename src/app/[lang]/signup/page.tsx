import { SignupForm } from "@/components/auth/auth-forms";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/signup">) {
  return pageMetadata(params, "signup");
}

export default async function SignupPage({ params }: PageProps<"/[lang]/signup">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.signup} />
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg shadow-navy/5">
          <SignupForm lang={lang} t={dict.auth} />
        </div>
      </section>
    </>
  );
}
