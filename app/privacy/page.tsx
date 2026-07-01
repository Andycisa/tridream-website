import type { Metadata } from "next";
import { LegalSection } from "../components/LegalSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | TriDream Coaching",
  description: "Privacy policy for TriDream Coaching.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          This privacy policy explains how personal data is handled when you
          visit the TriDream Coaching website and use its services.
        </p>

        <div className="mt-12 max-w-2xl space-y-10">
          <LegalSection title="Responsible person">
            <p className="text-foreground">Andreas Schoenherr</p>
            <p>TriDream Coaching</p>
            <p>Böndlerstrasse 3A</p>
            <p>8803 Rüschlikon</p>
            <p>Switzerland</p>
            <p>
              <a
                href="mailto:Andreas.Schoenherr@tridot.com"
                className="text-foreground transition-colors hover:text-muted"
              >
                Andreas.Schoenherr@tridot.com
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Personal data collected">
            <p>
              When you use this website, the following categories of personal
              data may be processed:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Contact details you provide when requesting information</li>
              <li>
                Information submitted through scheduling or contact requests
              </li>
              <li>
                Technical data required to deliver the website, such as IP
                address, browser type and access time
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="Contact requests">
            <p>
              If you contact TriDream Coaching or book a consultation, the
              information you provide will be used solely to respond to your
              enquiry and to provide coaching-related services.
            </p>
          </LegalSection>

          <LegalSection title="Pipedrive Scheduling">
            <p>
              Consultation requests are managed using Pipedrive Scheduling.
              When you book an appointment, your personal data is processed by
              Pipedrive on behalf of TriDream Coaching for the purpose of
              arranging and managing your appointment. Further information is
              available in the Pipedrive Privacy Policy:{" "}
              <a
                href="https://www.pipedrive.com/en/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted"
              >
                https://www.pipedrive.com/en/privacy
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Vercel Hosting">
            <p>
              This website is hosted by Vercel Inc. Technical information such
              as IP address, browser type and access logs may be processed to
              ensure the secure and reliable operation of the website. Further
              information is available in the Vercel Privacy Policy:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-muted"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Links to TriDot and RunDot">
            <p>
              This website contains links to TriDot and RunDot. If you follow
              these links, your data will be processed by the respective
              provider under their own terms and privacy policies. TriDream
              Coaching does not control data processing on external platforms.
            </p>
          </LegalSection>

          <LegalSection title="Data Retention">
            <p>
              Personal data is retained only for as long as necessary to
              respond to your enquiry, provide coaching services, fulfil
              contractual obligations or comply with applicable legal
              requirements.
            </p>
          </LegalSection>

          <LegalSection title="Your rights under Swiss data protection law">
            <p>
              Under the Swiss Federal Act on Data Protection, you have the right
              to request information about your personal data, as well as
              correction or deletion where applicable. You may also object to
              certain processing or request restriction of processing.
            </p>
            <p className="mt-2">
              To exercise your rights, please contact the responsible person
              using the contact details above.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p className="text-foreground">Andreas Schoenherr, TriDream Coaching</p>
            <p>Böndlerstrasse 3A</p>
            <p>8803 Rüschlikon</p>
            <p>Switzerland</p>
            <p>
              <a
                href="mailto:Andreas.Schoenherr@tridot.com"
                className="text-foreground transition-colors hover:text-muted"
              >
                Andreas.Schoenherr@tridot.com
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Updates to this policy">
            <p>
              This privacy policy will be updated whenever additional services
              are introduced, such as analytics, embedded Google Reviews or
              cookies.
            </p>
          </LegalSection>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
