import Link from "next/link";
import { redirect } from "next/navigation";
import { Calendar, LogOut, Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { signOut } from "@/actions/auth";
import { SetPasswordForm, UpgradeGuestForm } from "./auth-forms";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { createClient } from "@/lib/supabase/server";

type Status = keyof Dictionary["auth"]["account"]["statuses"];
type RequestStatus = keyof Dictionary["auth"]["account"]["requestStatuses"];

const statusStyles: Record<Status, string> = {
  pending: "bg-gold-soft text-gold",
  active: "bg-green-50 text-green-700",
  rejected: "bg-red-50 text-red",
};

// Reads the session, so it must render inside <Suspense>
export async function AccountPanel({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.auth.account;
  const supabase = await createClient();
  if (!supabase) redirect(`/${lang}/login`);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect(`/${lang}/login`);

  const [{ data: profile }, { data: requests }] = await Promise.all([
    supabase
      .from("profiles")
      .select("full_name, phone, governorate, membership_status, created_at")
      .eq("id", user.id)
      .single(),
    supabase
      .from("submissions")
      .select("id, type, topic, status, created_at")
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const status = (profile?.membership_status ?? "pending") as Status;
  const isGuest = user.is_anonymous === true;
  // Members who started as guests confirm their email first, then still need a password
  const needsPassword = !isGuest && user.user_metadata?.password_set !== true;
  const typeLabel = (value: string) =>
    dict.home.contact.form.types.find((type) => type.value === value)?.label ?? value;
  const date = (value: string) => new Date(value).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB");

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
        {isGuest ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-strong px-3 py-1 text-sm font-bold text-navy">
              <UserRound className="size-4" />
              {dict.auth.guest.badge}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy">{dict.auth.guest.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{dict.auth.guest.text}</p>
          </>
        ) : (
          <>
            <p className="text-sm text-muted">{t.welcome}</p>
            <h2 className="text-2xl font-extrabold text-navy">{profile?.full_name || user.email}</h2>
            <p className="mt-4 text-xs font-semibold text-muted">{t.status}</p>
            <span className={`mt-1 inline-block rounded-full px-3 py-1 text-sm font-bold ${statusStyles[status]}`}>
              {t.statuses[status]}
            </span>
          </>
        )}

        <h3 className="mt-6 border-t border-line pt-5 font-bold text-navy">{t.details}</h3>
        <ul className="mt-3 space-y-2.5 text-sm text-muted">
          {user.email && (
            <li className="flex items-center gap-2" dir="ltr">
              <Mail className="size-4 shrink-0" />
              {user.email}
            </li>
          )}
          {profile?.phone && (
            <li className="flex items-center gap-2" dir="ltr">
              <Phone className="size-4 shrink-0" />
              {profile.phone}
            </li>
          )}
          {profile?.governorate && (
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" />
              {profile.governorate}
            </li>
          )}
          {profile?.created_at && (
            <li className="flex items-center gap-2">
              <Calendar className="size-4 shrink-0" />
              {t.memberSince} {date(profile.created_at)}
            </li>
          )}
        </ul>

        <form action={signOut} className="mt-6">
          <input type="hidden" name="locale" value={lang} />
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-surface py-3 text-sm font-bold text-navy hover:bg-surface-strong">
            <LogOut className="size-4 rtl:-scale-x-100" />
            {isGuest ? dict.auth.guest.logout : dict.auth.logout}
          </button>
          {isGuest && <p className="mt-2 text-center text-xs text-muted">{dict.auth.guest.logoutWarning}</p>}
        </form>
      </aside>

      <div className="space-y-6">
        {isGuest && (
          <div className="rounded-2xl border-t-4 border-gold-bright bg-white p-6 shadow-sm ring-1 ring-line">
            <h2 className="mb-5 text-xl font-bold text-navy">{dict.auth.guest.upgradeTitle}</h2>
            <UpgradeGuestForm lang={lang} t={dict.auth} />
          </div>
        )}
        {needsPassword && (
          <div className="rounded-2xl border-t-4 border-gold-bright bg-white p-6 shadow-sm ring-1 ring-line">
            <h2 className="text-xl font-bold text-navy">{dict.auth.setPassword.title}</h2>
            <p className="mb-5 mt-2 text-sm text-muted">{dict.auth.setPassword.text}</p>
            <SetPasswordForm t={dict.auth} />
          </div>
        )}

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-navy">{t.requests}</h2>
            <Link
              href={`/${lang}/contact`}
              className="flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-white hover:bg-gold/90"
            >
              <Send className="size-4 rtl:-scale-x-100" />
              {t.newRequest}
            </Link>
          </div>

          {requests?.length ? (
            <ul className="mt-5 divide-y divide-line">
              {requests.map((request) => (
                <li key={request.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <div>
                    <p className="font-semibold text-navy">{typeLabel(request.type)}</p>
                    {request.topic && <p className="text-sm text-gold">{request.topic}</p>}
                    <p className="mt-1 text-xs text-muted">{date(request.created_at)}</p>
                  </div>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-bold text-navy">
                    {t.requestStatuses[request.status as RequestStatus] ?? request.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 rounded-xl bg-surface p-8 text-center text-muted">{t.noRequests}</p>
          )}
        </div>
      </div>
    </div>
  );
}
