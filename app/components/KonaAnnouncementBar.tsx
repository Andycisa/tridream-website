import Link from "next/link";

/**
 * Temporary Kona 2026 homepage announcement.
 * Remove this component (and its homepage render) after race week.
 */
export function KonaAnnouncementBar() {
  return (
    <Link
      href="/kona"
      aria-label="Kona 2026 — Every dream starts somewhere. Open the Kona story page."
      className="block bg-foreground px-4 py-2.5 text-center text-sm font-medium tracking-tight text-background"
    >
      Kona 2026 — Every dream starts somewhere. →
    </Link>
  );
}
