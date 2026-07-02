import type { Metadata } from "next";
import Image from "next/image";
import {
  BookingButton,
  BookingProvider,
} from "../components/BookingProvider";
import { JsonLd } from "../components/JsonLd";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { BOOKING_URLS } from "../lib/booking";
import {
  breadcrumbHome,
  createBreadcrumbStructuredData,
} from "../lib/structured-data";
import { createPageMetadata } from "../lib/site";

const INTRO_CALL_URL = BOOKING_URLS.intro;
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=TriDreamCoaching+Rezensionen";

const pageMetadata = createPageMetadata({
  title: "Triathlon Coaching Challenge Roth | Andreas Schoenherr",
  description:
    "Persönliches Triathlon Coaching von Andreas Schoenherr. Train Smart. Not Hard. Kostenloses Kennenlerngespräch für Challenge Roth Teilnehmer und alle ambitionierten Ausdauersportler.",
  path: "/roth",
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    title: "Triathlon Coaching Challenge Roth | Andreas Schoenherr",
    description:
      "Persönliches Triathlon Coaching von Andreas Schoenherr. Train Smart. Not Hard. Kostenloses Kennenlerngespräch für Challenge Roth Teilnehmer und alle ambitionierten Ausdauersportler.",
    url: "/roth",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triathlon Coaching Challenge Roth | Andreas Schoenherr",
    description:
      "Persönliches Triathlon Coaching von Andreas Schoenherr. Train Smart. Not Hard. Kostenloses Kennenlerngespräch für Challenge Roth Teilnehmer und alle ambitionierten Ausdauersportler.",
  },
};

const ROTH_REVIEWS = [
  {
    name: "Scott Tindal",
    role: "Founder and CEO, Fuelin",
    text: "Responsive and knowledgeable. I achieved a PR in Cairns 70.3 and Sydney Marathon. I would recommend Andreas as a coach to anyone.",
  },
  {
    name: "Ines Pereira",
    role: "Student",
    text: "Andreas is incredibly knowledgeable, supportive and motivating. His excitement and curiosity are truly contagious.",
  },
  {
    name: "Sacha Ludwig",
    role: "Architect",
    text: "From zero to Ironman in one year. Passionate, dedicated and tailored coaching.",
  },
] as const;

function OutlineButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-full border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white sm:w-auto"
    >
      {children}
    </a>
  );
}

function ReviewCard({
  name,
  role,
  text,
}: {
  name: string;
  role?: string;
  text: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-background px-8 py-10 shadow-sm md:px-10">
      <p className="font-semibold tracking-tight text-foreground">{name}</p>
      {role ? <p className="mt-1 text-sm text-muted">{role}</p> : null}
      <p className="mt-3 text-sm tracking-wide text-[#c8920a]">★★★★★</p>
      <blockquote className="mt-6 flex-1 text-base leading-relaxed text-muted">
        &ldquo;{text}&rdquo;
      </blockquote>
    </article>
  );
}

function CoachingCard({
  title,
  price,
  items,
}: {
  title: string;
  price: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl border border-border px-8 py-10 md:px-10">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-sm font-medium tracking-wide text-muted">{price}</p>
      <ul className="mt-8 space-y-3 text-left">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
            <span className="text-foreground">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function RothPage() {
  return (
    <BookingProvider>
      <JsonLd
        data={createBreadcrumbStructuredData([
          breadcrumbHome,
          { name: "Challenge Roth", path: "/roth" },
        ])}
      />
      <SiteHeader />

      <main lang="de" className="overflow-x-hidden">
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Schön, dass wir uns in Roth kennengelernt haben.
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-muted md:text-xl">
                Vielleicht haben wir uns an der Strecke, im Zielbereich oder bei
                einem Kaffee getroffen.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                Wenn Du Dein nächstes sportliches Ziel mit persönlicher
                Betreuung, modernster Trainingsmethodik und einem erfahrenen
                Coach erreichen möchtest, freue ich mich darauf, Dich
                kennenzulernen.
              </p>
              <p className="mt-8 inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground">
                🏅 2× Challenge Roth Finisher (PB: 9:40)
              </p>
              <div className="mt-8">
                <BookingButton url={INTRO_CALL_URL}>
                  Kostenloses Kennenlerngespräch buchen
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-28 md:px-12 md:py-40 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col justify-center lg:w-[55%] lg:shrink-0">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Warum ich coache
              </h2>
              <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Ich coache, weil ich anderen Athletinnen und Athleten die
                  gleiche Begeisterung und Freude am Ausdauersport ermöglichen
                  möchte, die ich selbst seit über 20 Jahren erleben darf.
                </p>
                <p>
                  Dabei kombiniere ich modernste Trainingsplattformen mit
                  persönlicher Betreuung, täglichem Feedback und individueller
                  Anpassung Deines Trainings.
                </p>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-[45%] lg:shrink-0">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-none">
                <Image
                  src="/images/portraits/andreas-kona.jpg"
                  alt="Andreas Schoenherr crossing the finish line at the Ironman World Championship in Kona"
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-foreground">
                  Andreas Schoenherr
                </p>
                <p className="mt-1 text-sm text-muted">
                  Swiss Triathlon Certified Coach
                </p>
                <p className="text-sm text-muted">TriDot Coach Coordinator DACH</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Meine Erfahrung
            </h2>
            <ul className="mt-12 space-y-4">
              {[
                "Swiss Triathlon Certified Coach",
                "TriDot Coach Coordinator DACH",
                "3× Ironman World Championship Qualifier",
                "2× Ironman World Championship Finisher",
                "2× Ironman 70.3 World Championship Qualifier",
                "2× Challenge Roth Finisher (PB: 9:40)",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-muted md:text-lg">
                  <span className="text-foreground">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              So unterstütze ich Dich
            </h2>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <CoachingCard
                title="Premium Coaching"
                price="CHF 150–300 / Monat"
                items={[
                  "Hoch individualisierte Trainingsplanung",
                  "Tägliche Analyse Deiner Aktivitäten",
                  "Unbegrenzte Anpassungen Deines Trainingsplans",
                  "Fuelin Integration",
                  "Persönliches Coaching auf Deutsch oder Englisch",
                ]}
              />
              <CoachingCard
                title="Triathlon Coaching"
                price="ab CHF 15 / Monat"
                items={[
                  "Individualisierter Triathlon-Trainingsplan",
                  "TriDot Plattform in mehreren Sprachen verfügbar",
                ]}
              />
              <CoachingCard
                title="Run Coaching"
                price="ab CHF 15 / Monat"
                items={[
                  "Individualisierter Lauftrainingsplan",
                  "RunDot Plattform in mehreren Sprachen verfügbar",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Das sagen meine Athleten
            </h2>
            <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
              {ROTH_REVIEWS.map((review) => (
                <ReviewCard
                  key={review.name}
                  name={review.name}
                  role={review.role}
                  text={review.text}
                />
              ))}
            </div>
            <p className="mt-10 text-center text-base font-medium tracking-tight">
              ★★★★★ 5.0 auf Google
            </p>
            <div className="mt-10 flex justify-center">
              <OutlineButton href={GOOGLE_REVIEWS_URL}>
                Alle Google Bewertungen ansehen
              </OutlineButton>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Lass uns über Dein nächstes Ziel sprechen.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Ganz egal, ob Du Deinen ersten Triathlon planst oder Dich für
                  eine Langdistanz qualifizieren möchtest – ich freue mich
                  darauf, Dich kennenzulernen.
                </p>
                <p>
                  Auch wenn wir uns in Roth nicht persönlich getroffen haben,
                  bist Du selbstverständlich herzlich zu einem kostenlosen
                  Kennenlerngespräch eingeladen.
                </p>
              </div>
              <div className="mt-8">
                <BookingButton url={INTRO_CALL_URL}>
                  Kostenloses Kennenlerngespräch buchen
                </BookingButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </BookingProvider>
  );
}
