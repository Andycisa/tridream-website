import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  createAboutPageStructuredData,
  createBreadcrumbStructuredData,
} from "../lib/structured-data";
import { createPageMetadata } from "../lib/site";

const INTRO_CALL_URL = BOOKING_URLS.intro;

const PAGE_TITLE = "About Andreas Schönherr | TriDream Coaching";
const PAGE_DESCRIPTION =
  "Meet Andreas Schönherr, endurance coach and athlete. Learn about his coaching philosophy, experience, certifications and the Train Smart. Not Hard. approach behind TriDream Coaching.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/about",
  }),
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/about",
    locale: "en_CH",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/**
 * Certification visuals:
 * - Swiss Triathlon / IRONMAN U / CORE: supplied badge assets under /images/portraits/
 * - ESCI: logo cropped from the supplied certificate header for a clean row
 *   (full certificate is not shown).
 */
const CERTIFICATIONS = [
  {
    organization: "Swiss Triathlon",
    credential: "Trainer B",
    imageSrc: "/images/portraits/swiss-triathlon.png",
  },
  {
    organization: "IRONMAN U",
    credential: "Certified Coach",
    imageSrc: "/images/portraits/IronmanU_Certified_Coach.png",
  },
  {
    organization: "ESCI",
    credential: "Certified Coach",
    imageSrc: "/images/logos/certifications/esci.png",
  },
  {
    organization: "CORE",
    credential: "Certified Coach",
    imageSrc: "/images/portraits/Core_CoachesBadge_White-1.png",
  },
] as const;

const EXPERIENCE_STATS = [
  {
    value: "3×",
    label: "IRONMAN World Championship Finisher",
  },
  {
    value: "2×",
    label: "IRONMAN 70.3 World Championship Finisher",
  },
  {
    value: "30+",
    label: "IRONMAN & IRONMAN 70.3 Finishes",
  },
  {
    value: "50+",
    label: "Marathon & Ultramarathon Finishes",
  },
  {
    value: "20+ Years",
    label: "Endurance Racing",
  },
] as const;

const COACHING_PILLARS = [
  {
    title: "Training",
    piece: "top-left" as const,
    text: "Individualized training based on your goals, current fitness, available time and life around the sport. Data and technology help us make better decisions, but never replace communication between athlete and coach.",
  },
  {
    title: "Equipment",
    piece: "top-right" as const,
    text: "From running shoes and bike setup to sensors and race equipment. The right equipment should support performance, not make training unnecessarily complicated.",
  },
  {
    title: "Nutrition",
    piece: "bottom-left" as const,
    text: "Training and racing only work when they are properly fueled. We develop practical nutrition and hydration strategies for everyday training, key sessions and race day.",
  },
  {
    title: "Mindset & Environment",
    piece: "bottom-right" as const,
    text: "Work, family, motivation, stress, confidence and recovery all influence performance. Good coaching takes the complete athlete into account, not just the numbers in a training platform.",
  },
] as const;

type PuzzlePieceVariant =
  (typeof COACHING_PILLARS)[number]["piece"];

/**
 * Four outline pieces of one 2×2 puzzle.
 * Connector shapes are complementary so the set reads as one whole.
 */
function PuzzlePiece({ variant }: { variant: PuzzlePieceVariant }) {
  // Shared geometry: body from 6..26, complementary tabs/sockets on shared edges.
  const paths: Record<PuzzlePieceVariant, string> = {
    // Flat top/left · tab right · tab bottom
    "top-left":
      "M6 6 H26 V16 C26 16 28.8 16 28.8 19 C28.8 22 26 22 26 22 V26 H16 C16 26 16 28.8 13 28.8 C10 28.8 10 26 10 26 H6 Z",
    // Flat top/right · socket left · tab bottom
    "top-right":
      "M6 6 H26 V26 H16 C16 26 16 28.8 13 28.8 C10 28.8 10 26 10 26 H6 V22 C6 22 8.8 22 8.8 19 C8.8 16 6 16 6 16 Z",
    // Flat left/bottom · tab right · socket top
    "bottom-left":
      "M6 6 H10 C10 6 10 8.8 13 8.8 C16 8.8 16 6 16 6 H26 V16 C26 16 28.8 16 28.8 19 C28.8 22 26 22 26 22 V26 H6 Z",
    // Flat right/bottom · socket left · socket top
    "bottom-right":
      "M6 6 H10 C10 6 10 8.8 13 8.8 C16 8.8 16 6 16 6 H26 V26 H6 V22 C6 22 8.8 22 8.8 19 C8.8 16 6 16 6 16 Z",
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="mb-4 text-foreground"
    >
      <path
        d={paths[variant]}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CertificationSlot({
  organization,
  credential,
  imageSrc,
}: {
  organization: string;
  credential: string;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex h-24 w-full max-w-[11rem] items-center justify-center">
        <Image
          src={imageSrc}
          alt={`${organization} ${credential}`}
          fill
          sizes="176px"
          className="object-contain"
        />
      </div>
      <p className="mt-5 text-sm font-semibold tracking-tight text-foreground">
        {organization}
      </p>
      <p className="mt-1 text-sm text-muted">{credential}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <BookingProvider>
      <JsonLd
        data={createBreadcrumbStructuredData([
          breadcrumbHome,
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLd
        data={createAboutPageStructuredData({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
        })}
      />
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* Hero / About Andreas */}
        <section>
          <div className="mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col justify-center lg:w-[55%] lg:shrink-0">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                About Andreas
              </h1>
              <p className="mt-6 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                Endurance athlete. Coach. Still learning.
              </p>
              <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Sport has been part of my life for more than 20 years, but it
                  did not start with a carefully designed training plan.
                </p>
                <p>
                  Early in my professional career, I was working as a
                  consultant, travelling frequently and spending long hours at
                  work. Running became my way to switch off, clear my head and
                  create some balance.
                </p>
                <p>
                  For many years, I simply trained because I enjoyed it. There
                  was little structure and even fewer races. That gradually
                  changed with my first marathon and, later, triathlon.
                </p>
                <p>
                  Since then, the journey has taken me through marathons and
                  ultramarathons, more than 30 Ironman and Ironman 70.3
                  finishes, and three finishes at the Ironman World Championship
                  in Kona.
                </p>
                <p className="font-medium text-foreground">
                  But racing experience alone does not make a good coach.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-16 w-full max-w-md lg:mt-0 lg:w-[45%] lg:max-w-none lg:shrink-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/andreas-hero.jpeg"
                  alt="Portrait of Andreas Schoenherr, Swiss Triathlon certified endurance coach and founder of TriDream Coaching"
                  fill
                  priority
                  quality={85}
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[88%_32%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why I Coach */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-28 md:px-12 md:py-40 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col justify-center lg:w-[55%] lg:shrink-0">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Why I Coach
              </h2>
              <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  My own transition from largely unstructured training to
                  structured, data-driven training eventually led me into
                  coaching and formal coach education.
                </p>
                <p>
                  Today, I enjoy helping athletes discover what they can achieve
                  without making sport take over the rest of their lives.
                </p>
                <p>
                  Most of the athletes I work with have jobs, families and other
                  commitments. They don&apos;t need a generic plan that assumes
                  training is the most important thing in their week. They need
                  training that adapts to their goals, abilities and real life.
                </p>
                <p className="text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
                  Make the training fit the athlete.
                  <br />
                  Not the athlete fit the training.
                </p>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-[45%] lg:shrink-0">
              <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl md:aspect-[3/2] lg:max-w-none">
                <Image
                  src="/images/portraits/andreas-roth.jpg"
                  alt="Andreas Schoenherr with an athlete after a race finish"
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[center_35%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Train Smart. Not Hard. */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Train Smart. Not Hard.
            </h2>
            <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Train Smart. Not Hard. doesn&apos;t mean training less or
                avoiding hard work.
              </p>
              <p>
                It means making every hour of training count. Using data where
                it helps. Recovering when recovery is needed. Adjusting when
                life gets in the way. And understanding that performance is
                influenced by much more than the workout scheduled for today.
              </p>
              <p>
                For me, coaching brings together four areas that need to work as
                one.
              </p>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {COACHING_PILLARS.map((pillar) => (
                <div key={pillar.title} className="border-t border-border pt-8">
                  <PuzzlePiece variant={pillar.piece} />
                  <h3 className="text-xl font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More than a training plan */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              More than a training plan
            </h2>
            <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
              <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  With my Premium athletes, I support all four areas throughout
                  the entire journey.
                </p>
                <p>
                  Sometimes that means adjusting tomorrow&apos;s training.
                  Sometimes it is reviewing race nutrition, discussing
                  equipment, analysing a session, preparing a race strategy or
                  simply talking through a difficult week.
                </p>
                <p>
                  Support happens where it makes sense: through TriDot or
                  RunDot, WhatsApp, calls and direct feedback. Coaching
                  shouldn&apos;t have to wait for the next scheduled call.
                </p>
                <p className="font-medium text-foreground">
                  Not every athlete needs this level of support.
                </p>
                <p>
                  For athletes who prefer to train independently or are looking
                  for a more affordable option, I also offer individualized
                  TriDot and RunDot training plans without full Premium
                  Coaching.
                </p>
              </div>
              <p className="text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl md:leading-snug">
                A training plan tells you what to do.
                <br />
                Coaching helps you make it work in real life.
              </p>
            </div>

            <div className="mx-auto mt-20 w-full max-w-4xl md:mt-24">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/portraits/Lucy_Finish_Roth.jpg"
                  alt="Andreas Schoenherr with an athlete after a successful race finish"
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 56rem, (min-width: 768px) 80vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Experience
            </h2>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {EXPERIENCE_STATS.map((stat) => (
                <div key={stat.label} className="border-t border-border pt-6">
                  <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Education & Certifications
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Experience matters. So does continuing to learn.
            </p>
            <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
              {CERTIFICATIONS.map((certification) => (
                <CertificationSlot
                  key={certification.organization}
                  organization={certification.organization}
                  credential={certification.credential}
                  imageSrc={certification.imageSrc}
                />
              ))}
            </div>
            <div className="mt-16 border-t border-border pt-8">
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                Coaching Role
              </p>
              <p className="mt-2 text-base font-medium tracking-tight text-foreground md:text-lg">
                TriDot Coach Coordinator DACH
              </p>
            </div>
          </div>
        </section>

        {/* Always Learning */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Always Learning
                </h2>
                <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                  <p>
                    Coaching is a continuous learning process. I continue to
                    learn through formal education, conversations with athletes
                    and coaches, and by staying close to the highest level of
                    endurance sport.
                  </p>
                  <p>
                    Science and data matter. But so does listening to people who
                    have spent years testing ideas in training and racing. I try
                    to bring both together and turn what I learn into practical
                    coaching for my athletes.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-5 sm:items-end">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:col-span-3">
                  <Image
                    src="/images/portraits/Panel_Discussion_Kristian_Gustav.jpg"
                    alt="Panel discussion at a high-level endurance sport event"
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 55vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:col-span-2 sm:mb-10">
                  <Image
                    src="/images/portraits/HouseofChampions.jpg"
                    alt="Inside a professional triathlon house of champions event space"
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 35vw, 100vw"
                    className="object-cover object-[center_30%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to see what you can achieve?
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Whether you&apos;re preparing for your first race or chasing
                your next personal best, let&apos;s talk about your goals and
                see what kind of support makes sense for you.
              </p>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <BookingButton url={INTRO_CALL_URL}>
                  Book a free coaching call
                </BookingButton>
                <Link
                  href="/"
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  Explore Coaching Options
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </BookingProvider>
  );
}
