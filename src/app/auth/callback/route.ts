import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Target of the activation email: confirms the account, signs the member in, then sends them on
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const rawNext = searchParams.get("next") ?? "/ar/account";
  // Only allow same-site paths, never an external redirect
  const next = rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/ar/account";
  const lang = next.startsWith("/en") ? "en" : "ar";

  const supabase = await createClient();
  if (supabase) {
    const code = searchParams.get("code");
    const tokenHash = searchParams.get("token_hash");
    const type = searchParams.get("type") as EmailOtpType | null;

    const { error } = code
      ? await supabase.auth.exchangeCodeForSession(code)
      : tokenHash && type
        ? await supabase.auth.verifyOtp({ token_hash: tokenHash, type })
        : { error: new Error("missing code") };

    if (!error) return NextResponse.redirect(`${origin}${next}`);
  }

  return NextResponse.redirect(`${origin}/${lang}/login?error=confirm`);
}
