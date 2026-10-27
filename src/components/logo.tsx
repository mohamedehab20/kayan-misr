// Placeholder emblem — swap for the official logo (e.g. next/image with /logo.png)
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M24 42S6 31 6 18a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 13-18 24-18 24Z" fill="#c8102e" />
      <path d="M24 36s-11-7-11-15a5.5 5.5 0 0 1 11-2 5.5 5.5 0 0 1 11 2c0 8-11 15-11 15Z" fill="#fff" />
      <path d="M24 30s-6-4-6-8.5a3 3 0 0 1 6-1 3 3 0 0 1 6 1C30 26 24 30 24 30Z" fill="#101b30" />
    </svg>
  );
}
