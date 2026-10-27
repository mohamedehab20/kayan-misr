export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-gold">
          <span className="size-1.5 rounded-full bg-gold-bright" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{subtitle}</p>
      )}
    </div>
  );
}
