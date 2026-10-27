import Link from "next/link";
import { redirect } from "next/navigation";
import { Calendar, LogOut, Mail, MapPin, Phone, Send } from "lucide-react";
import { signOut } from "@/actions/auth";
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
    supabase.from("profiles").select("full_name, phone, governorate, membership_status, created_at").eq("id", user.id).single(),
    supabase
      .from("submissions")
      .select("id, type, topic, status, created_at")
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const status = (profile?.membership_status ?? "pending") as Status;
  const typeLabel = (value: string) => dict.home.contact.form.types.find((type) => type.value === value)?.label ?? value;
  const date = (value: string) => new Date(value).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB");

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
        <p className="text-sm text-muted">{t.welcome}</p>
        <h2 className="text-2xl font-extrabold text-navy">{profile?.full_name || user.email}</h2>
        <p className="mt-4 text-xs font-semibold text-muted">{t.status}</p>
        <span className={`mt-1 inline-block rounded-full px-3 py-1 text-sm font-bold ${statusStyles[status]}`}>
          {t.statuses[status]}
        </span>

        <h3 className="mt-6 border-t border-line pt-5 font-bold text-navy">{t.details}</h3>
        <ul className="mt-3 space-y-2.5 text-sm text-muted">
          <li className="flex items-center gap-2" dir="ltr">
            <Mail className="size-4 shrink-0" />
            {user.email}
          </li>
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
            {dict.auth.logout}
          </button>
        </form>
      </aside>

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
  );
}
