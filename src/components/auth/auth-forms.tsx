"use client";

import { useActionState } from "react";
import Link from "next/link";
import { CircleAlert, CircleCheck, KeyRound, LogIn, UserPlus, UserRound } from "lucide-react";
import { setPassword, signIn, signInAsGuest, signUp, upgradeGuest, type AuthState } from "@/actions/auth";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { useQueryParam } from "@/lib/use-query-param";

type Props = { lang: Locale; t: Dictionary["auth"] };

const fieldClass =
  "mt-2 w-full rounded-lg border border-transparent bg-surface px-4 py-3 text-sm outline-none transition focus:border-gold-bright focus:bg-white";
const labelClass = "block text-sm font-semibold text-navy";
const buttonClass =
  "flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-3.5 font-bold text-white shadow-md shadow-gold/20 hover:bg-gold/90 disabled:opacity-60";

function Message({
  state,
  t,
  checkEmail = t.checkEmail,
  success,
}: {
  state: AuthState;
  t: Dictionary["auth"];
  checkEmail?: string;
  success?: string;
}) {
  const text = state.status === "checkEmail" ? checkEmail : state.status === "success" ? success : null;
  if (text)
    return (
      <p className="flex gap-2 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-700" role="status">
        <CircleCheck className="mt-0.5 size-4 shrink-0" />
        {text}
      </p>
    );
  if (state.status === "error")
    return (
      <p className="flex gap-2 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red" role="alert">
        <CircleAlert className="mt-0.5 size-4 shrink-0" />
        {t.errors[state.error]}
      </p>
    );
  return null;
}

export function LoginForm({ lang, t }: Props) {
  const [state, action, pending] = useActionState<AuthState, FormData>(signIn, { status: "idle" });
  // The activation link redirects here with ?error=confirm when it fails
  const confirmFailed = useQueryParam("error") === "confirm";

  return (
    <>
      <form action={action} className="space-y-5">
        <input type="hidden" name="locale" value={lang} />
        {confirmFailed && state.status === "idle" && (
          <p className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red" role="alert">
            {t.confirmFailed}
          </p>
        )}
        <label className={labelClass}>
          {t.email}
          <input name="email" type="email" required autoComplete="email" className={fieldClass} dir="ltr" />
        </label>
        <label className={labelClass}>
          {t.password}
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className={fieldClass}
            dir="ltr"
          />
        </label>
        <Message state={state} t={t} />
        <button type="submit" disabled={pending} className={buttonClass}>
          <LogIn className="size-4" />
          {pending ? t.loading : t.login}
        </button>
        <p className="text-center text-sm text-muted">
          {t.noAccount}{" "}
          <Link href={`/${lang}/signup`} className="font-bold text-gold hover:underline">
            {t.createAccount}
          </Link>
        </p>
      </form>
      <GuestButton lang={lang} t={t} />
    </>
  );
}

export function GuestButton({ lang, t }: Props) {
  const [state, action, pending] = useActionState<AuthState, FormData>(signInAsGuest, { status: "idle" });

  return (
    <form action={action} className="mt-6 space-y-3">
      <input type="hidden" name="locale" value={lang} />
      <div className="flex items-center gap-3 text-xs text-muted">
        <span className="h-px flex-1 bg-line" />
        {t.guest.or}
        <span className="h-px flex-1 bg-line" />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface py-3.5 font-bold text-navy hover:bg-surface-strong disabled:opacity-60"
      >
        <UserRound className="size-4" />
        {pending ? t.loading : t.guest.button}
      </button>
      <p className="text-center text-xs text-muted">{t.guest.hint}</p>
      <Message state={state} t={t} />
    </form>
  );
}

export function UpgradeGuestForm({ lang, t }: Props) {
  const [state, action, pending] = useActionState<AuthState, FormData>(upgradeGuest, { status: "idle" });

  if (state.status === "checkEmail") return <Message state={state} t={t} checkEmail={t.guest.checkEmail} />;

  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="locale" value={lang} />
      <label className={labelClass}>
        {t.fullName}
        <input name="fullName" required minLength={2} maxLength={120} autoComplete="name" className={fieldClass} />
      </label>
      <label className={labelClass}>
        {t.email}
        <input name="email" type="email" required autoComplete="email" className={fieldClass} dir="ltr" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          {t.phone}
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={fieldClass} dir="ltr" />
        </label>
        <label className={labelClass}>
          {t.governorate}
          <input name="governorate" maxLength={60} className={fieldClass} />
        </label>
      </div>
      <Message state={state} t={t} />
      <button type="submit" disabled={pending} className={buttonClass}>
        <UserPlus className="size-4" />
        {pending ? t.loading : t.guest.upgrade}
      </button>
    </form>
  );
}

export function SetPasswordForm({ t }: { t: Dictionary["auth"] }) {
  const [state, action, pending] = useActionState<AuthState, FormData>(setPassword, { status: "idle" });

  if (state.status === "success") return <Message state={state} t={t} success={t.setPassword.success} />;

  return (
    <form action={action} className="space-y-4">
      <label className={labelClass}>
        {t.password}
        <input
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          placeholder={t.passwordHint}
          className={fieldClass}
          dir="ltr"
        />
      </label>
      <Message state={state} t={t} />
      <button type="submit" disabled={pending} className={buttonClass}>
        <KeyRound className="size-4" />
        {pending ? t.loading : t.setPassword.button}
      </button>
    </form>
  );
}

export function SignupForm({ lang, t }: Props) {
  const [state, action, pending] = useActionState<AuthState, FormData>(signUp, { status: "idle" });

  if (state.status === "checkEmail") return <Message state={state} t={t} />;

  return (
    <>
      <form action={action} className="space-y-5">
        <input type="hidden" name="locale" value={lang} />
        <label className={labelClass}>
          {t.fullName}
          <input name="fullName" required minLength={2} maxLength={120} autoComplete="name" className={fieldClass} />
        </label>
        <label className={labelClass}>
          {t.email}
          <input name="email" type="email" required autoComplete="email" className={fieldClass} dir="ltr" />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            {t.phone}
            <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={fieldClass} dir="ltr" />
          </label>
          <label className={labelClass}>
            {t.governorate}
            <input name="governorate" maxLength={60} className={fieldClass} />
          </label>
        </div>
        <label className={labelClass}>
          {t.password}
          <input
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            placeholder={t.passwordHint}
            className={fieldClass}
            dir="ltr"
          />
        </label>
        <Message state={state} t={t} />
        <button type="submit" disabled={pending} className={buttonClass}>
          <UserPlus className="size-4" />
          {pending ? t.loading : t.signup}
        </button>
        <p className="text-center text-sm text-muted">
          {t.haveAccount}{" "}
          <Link href={`/${lang}/login`} className="font-bold text-gold hover:underline">
            {t.goLogin}
          </Link>
        </p>
      </form>
      <GuestButton lang={lang} t={t} />
    </>
  );
}
