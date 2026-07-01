import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="space-y-3 text-sm text-muted">
          <p className="font-medium text-foreground">TriDream Coaching</p>
          <p className="font-medium tracking-tight text-foreground">
            Train Smart. Not Hard.
          </p>
          <div className="space-y-1 pt-1">
            <p>Founded by</p>
            <p className="text-foreground">Andreas Schoenherr</p>
          </div>
          <p>Swiss Triathlon Certified Coach</p>
          <p>TriDot Coach Coordinator DACH</p>
          <p>Böndlerstrasse 3A</p>
          <p>8803 Rüschlikon</p>
          <p>Switzerland</p>
          <p>
            <a
              href="mailto:Andreas.Schoenherr@tridot.com"
              className="transition-colors hover:text-foreground"
            >
              Andreas.Schoenherr@tridot.com
            </a>
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <nav className="flex items-center gap-2">
            <Link
              href="/imprint"
              className="transition-colors hover:text-foreground"
            >
              Imprint
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </nav>
          <p>© 2026 TriDream Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
