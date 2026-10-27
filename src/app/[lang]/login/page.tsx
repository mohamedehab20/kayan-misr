import { LoginForm } from "@/components/auth/auth-forms";
import { PageHeader } from "@/components/page-header";
import { loadPage, pageMetadata } from "@/i18n/load-page";

export function generateMetadata({ params }: PageProps<"/[lang]/login">) {
  return pageMetadata(params, "login");
}

export default async function LoginPage({ params }: PageProps<"/[lang]/login">) {
  const { lang, dict } = await loadPage(params);
  return (
    <>
      <PageHeader lang={lang} home={dict.nav.items[0].label} {...dict.pages.login} />
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg shadow-navy/5">
          <LoginForm lang={lang} t={dict.auth} />
        </div>
      </section>
    </>
  );
}
