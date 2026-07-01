import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { LegalSection } from "../components/LegalSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  breadcrumbHome,
  createBreadcrumbStructuredData,
} from "../lib/structured-data";
import { createPageMetadata } from "../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Imprint | TriDream Coaching",
  description: "Imprint and legal information for TriDream Coaching.",
  path: "/imprint",
});

export default function ImprintPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData([
          breadcrumbHome,
          { name: "Imprint", path: "/imprint" },
        ])}
      />
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Imprint
        </h1>
        <div className="mt-12 max-w-2xl space-y-10">
          <LegalSection title="Business">
            <p className="text-foreground">TriDream Coaching</p>
          </LegalSection>

          <LegalSection title="Founder">
            <p className="text-foreground">Andreas Schoenherr</p>
          </LegalSection>

          <LegalSection title="Address">
            <p>Böndlerstrasse 3A</p>
            <p>8803 Rüschlikon</p>
            <p>Switzerland</p>
          </LegalSection>

          <LegalSection title="Email">
            <p>
              <a
                href="mailto:Andreas.Schoenherr@tridot.com"
                className="text-foreground transition-colors hover:text-muted"
              >
                Andreas.Schoenherr@tridot.com
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Responsible for website content">
            <p className="text-foreground">Andreas Schoenherr</p>
          </LegalSection>

          <LegalSection title="Website hosting">
            <p>Website hosted on Vercel.</p>
          </LegalSection>

          <LegalSection title="Copyright">
            <p>
              All website content is protected by copyright unless otherwise
              stated.
            </p>
          </LegalSection>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
