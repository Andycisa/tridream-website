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
  createBreadcrumbStructuredData,
  createWebPageStructuredData,
} from "../lib/structured-data";
import { createPageMetadata } from "../lib/site";

const INTRO_CALL_URL = BOOKING_URLS.intro;
const TRIDOT_URL =
  "https://app.tridot.com/onboard/sign-up/andreasschoenherr";
const RUNDOT_URL =
  "https://app.rundot.com/onboard/sign-up/andreasschoenherr";

const PAGE_TITLE =
  "Kona & The Dream Behind TriDream Coaching | Andreas Schönherr";
const PAGE_DESCRIPTION =
  "Kona helped inspire TriDream Coaching. Andreas Schönherr shares his journey from first races to the IRONMAN World Championship and the philosophy behind Train Smart. Not Hard.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/kona",
  }),
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/kona",
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const DREAM_GOALS = [
  "Your first triathlon.",
  "Your first 70.3.",
  "Your first Ironman.",
  "A new personal best.",
  "A World Championship qualification.",
  "Or simply discovering how good you can become.",
] as const;

function OutlineLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex w-full items-center justify-center rounded-full border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white sm:w-auto"
    >
      {children}
    </Link>
  );
}

function ExternalOutlineLink({
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

function CoachingOption({
  title,
  price,
  items,
  buttonLabel,
  bookingUrl,
  href,
  primary = false,
}: {
  title: string;
  price: string;
  items: string[];
  buttonLabel: string;
  bookingUrl?: string;
  href?: string;
  primary?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${primary ? "mx-auto max-w-lg text-center" : "text-center"}`}
    >
      {primary ? (
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h3>
      ) : (
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      )}
      <p className="mt-4 text-sm font-medium tracking-wide text-muted">
        {price}
      </p>
      <ul
        className={`mt-8 space-y-3 text-left ${primary ? "mx-auto max-w-md" : "w-full"}`}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-relaxed text-muted"
          >
            <span className="text-foreground">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className={`mt-10 ${primary ? "" : "w-full sm:mx-auto sm:w-auto"}`}>
        {primary && bookingUrl ? (
          <BookingButton url={bookingUrl}>{buttonLabel}</BookingButton>
        ) : href ? (
          <ExternalOutlineLink href={href}>{buttonLabel}</ExternalOutlineLink>
        ) : null}
      </div>
    </div>
  );
}

export default function KonaPage() {
  return (
    <BookingProvider>
      <JsonLd
        data={createBreadcrumbStructuredData([
          breadcrumbHome,
          { name: "Kona", path: "/kona" },
        ])}
      />
      <JsonLd
        data={createWebPageStructuredData({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          path: "/kona",
        })}
      />
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* 1. Hero */}
        <section>
          <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28">
            <p className="text-sm font-medium tracking-[0.18em] text-muted uppercase">
              Kona
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Every dream starts somewhere.
            </h1>
            <p className="mt-8 text-xl font-medium leading-snug tracking-tight md:text-2xl">
              Mine didn&apos;t start with Kona.
            </p>
            <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                When I started endurance sports, Kona wasn&apos;t the goal. Like
                most athletes, my dreams were much smaller.
              </p>
              <p>
                Finish my first race.
                <br />
                Maybe one day a half distance.
                <br />
                Maybe even an Ironman.
              </p>
              <p>
                And then, somewhere along the way, the dream got bigger.
              </p>
            </div>

            <div className="relative mt-16 aspect-[4/3] w-full overflow-hidden rounded-2xl md:mt-20 md:aspect-[3/2]">
              <Image
                src="/images/portraits/IMG_0201.JPG"
                alt="Andreas Schoenherr with his Canyon Speedmax on the Kona lava fields overlooking the Pacific Ocean"
                fill
                priority
                quality={85}
                sizes="(min-width: 1280px) 80rem, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* 2. The dream gets bigger */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-28 md:px-12 md:py-40 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col justify-center lg:w-[48%] lg:shrink-0">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                The dream gets bigger.
              </h2>
              <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  What starts as the simple goal of finishing a race can become
                  something much bigger.
                </p>
                <p>
                  For me, that journey eventually led all the way to the IRONMAN
                  World Championship in Kailua-Kona, Hawaii — or simply, Kona.
                </p>
                <p>
                  By 2026, the IRONMAN World Championship has brought me to
                  Hawaii four times — three times as an athlete and once as a
                  coach.
                </p>
                <p>
                  And it became much more than another race.
                </p>
                <p>
                  It became one of the experiences that inspired the idea behind
                  TriDream Coaching.
                </p>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-[52%] lg:shrink-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/portraits/IMG_5997.jpeg"
                  alt="Andreas Schoenherr pointing to his name on the IRONMAN World Championship athlete wall in Kona"
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[58%_42%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. And eventually, there was Hawaii. */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                And eventually, there was Hawaii.
              </h2>
              <div className="relative mx-auto mt-16 aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl md:mt-20">
                <Image
                  src="/images/portraits/IMG_6444.jpeg"
                  alt="Andreas Schoenherr wearing his IRONMAN World Championship Kona finisher medal"
                  fill
                  quality={85}
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <div className="mt-10 space-y-2 text-base font-medium tracking-tight text-foreground md:text-lg">
                <p>3× IRONMAN World Championship Finisher</p>
                <p>1× Kona as Coach</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What makes this place so special? */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                What makes this place so special?
              </h2>
              <div className="mt-10 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>Kona is difficult to explain until you&apos;ve experienced it.</p>
                <p>It&apos;s the race. But it&apos;s also everything around it.</p>
                <p>
                  The atmosphere on Ali&apos;i Drive. The morning swims at the
                  pier. Training through the lava fields. Meeting athletes and
                  coaches from around the world. Seeing professionals you
                  normally only watch racing on a screen. The energy of race
                  week.
                </p>
                <p>
                  And somehow, all of it makes you want to come back.
                </p>
              </div>
              <p className="mt-12 text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
                Kona is addictive.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Once you&apos;ve experienced it, part of you wants to come back.
              </p>
            </div>
          </div>
        </section>

        {/* 5. More than a race */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-28 md:px-12 md:py-40 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-[48%] lg:shrink-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/portraits/IMG_1714.jpeg"
                  alt="Andreas Schoenherr with his daughter in the water in Kona"
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>

            <div className="mt-16 flex flex-col justify-center lg:mt-0 lg:w-[52%] lg:shrink-0">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                More than a race.
              </h2>
              <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  For me, this experience has also become something I can share
                  with my family.
                </p>
                <p>
                  The memories are not only about finish times, watts or race
                  results. They are about places, people and experiences — and
                  about showing the next generation what can happen when a dream
                  slowly becomes a goal.
                </p>
                <p>
                  That is probably one of the reasons Kona means so much to me.
                </p>
                <p>
                  If you&apos;ve made it here yourself, you probably know exactly
                  what I mean.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. From dream to TriDream */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-28 md:px-12 md:py-40 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col justify-center lg:w-[45%] lg:shrink-0">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                From dream to TriDream.
              </h2>
              <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  These experiences helped shape the idea behind TriDream
                  Coaching.
                </p>
                <p>
                  Not because every athlete needs to qualify for a World
                  Championship.
                </p>
                <p>
                  But because sport has a way of changing what we believe might
                  be possible.
                </p>
                <p>
                  A first race becomes a longer race.
                  <br />
                  Finishing becomes improving.
                  <br />
                  Improving becomes competing.
                  <br />
                  And sometimes a dream that once seemed completely unrealistic
                  becomes a real goal.
                </p>
              </div>
              <p className="mt-10 text-xl font-medium leading-snug tracking-tight text-foreground md:text-2xl">
                Dreams grow.
                <br />
                Good coaching helps turn them into a plan.
              </p>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-[55%] lg:shrink-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/portraits/IMG_3556.jpeg"
                  alt="Andreas Schoenherr pointing to his message on the Kona My Why wall"
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-[38%_42%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Your dream doesn't have to be Kona. */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Your dream doesn&apos;t have to be Kona.
              </h2>
              <p className="mt-10 text-base leading-relaxed text-muted md:text-lg">
                That&apos;s the idea behind TriDream Coaching.
              </p>
              <ul className="mt-12 space-y-4">
                {DREAM_GOALS.map((goal) => (
                  <li
                    key={goal}
                    className="text-lg font-medium tracking-tight text-foreground md:text-xl"
                  >
                    {goal}
                  </li>
                ))}
              </ul>
              <div className="mt-14 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>The dream is yours.</p>
                <p>
                  My job as a coach is to help you find the smartest way to get
                  there.
                </p>
              </div>
              <p className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
                Train Smart. Not Hard.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Maybe we just met in Kona. */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Maybe we just met in Kona.
              </h2>
              <div className="mt-10 space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Perhaps at the pier. On Ali&apos;i Drive. At the Expo. During
                  training. Over coffee. Or somewhere completely unexpected
                  during race week.
                </p>
                <p>
                  If I gave you this link, there&apos;s probably a reason.
                </p>
                <p>
                  Maybe you&apos;re already thinking about your next goal. Maybe
                  that goal is coming back to Kona. Or maybe you simply want to
                  see what Train Smart. Not Hard. could mean for your training.
                </p>
                <p>Either way, have a look around.</p>
              </div>
            </div>

            <div className="mt-20 text-center">
              <CoachingOption
                primary
                title="Premium Coaching"
                price="CHF 150–300/month"
                items={[
                  "Highly individualized training plan",
                  "Daily review of your training and progress",
                  "Continuous plan adjustments whenever needed",
                  "Personal feedback and direct communication",
                  "Race planning and race-day strategy",
                  "Nutrition guidance including Fuelin integration",
                  "Swim, bike and run technique analysis",
                  "Equipment and training advice",
                  "Coaching that adapts to your life, your goals and your performance",
                ]}
                buttonLabel="Apply for Coaching"
                bookingUrl={INTRO_CALL_URL}
              />

              <div className="mx-auto mt-24 max-w-3xl border-t border-border pt-20">
                <div className="grid gap-16 sm:grid-cols-2 sm:gap-12">
                  <CoachingOption
                    title="Individualized Triathlon Plan"
                    price="From CHF 15/month"
                    items={[
                      "Highly individualized training plan",
                      "Personal onboarding",
                      "My supervision and guidance",
                      "Training that adapts to your progress",
                      "Upgrade to Premium Coaching at any time",
                    ]}
                    buttonLabel="Start with TriDot"
                    href={TRIDOT_URL}
                  />
                  <CoachingOption
                    title="Individualized Running Plan"
                    price="From CHF 15/month"
                    items={[
                      "Highly individualized training plan",
                      "Personal onboarding",
                      "My supervision and guidance",
                      "Training that adapts to your progress",
                      "Upgrade to Premium Coaching at any time",
                    ]}
                    buttonLabel="Start with RunDot"
                    href={RUNDOT_URL}
                  />
                </div>
              </div>

              <div className="mt-20 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                <BookingButton url={INTRO_CALL_URL}>
                  Book a free coaching call
                </BookingButton>
                <OutlineLink href="/">Explore Coaching</OutlineLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </BookingProvider>
  );
}
