import Image from "next/image";

const INTRO_CALL_URL =
  "https://predictivefitness.pipedrive.com/scheduler/drBkYjfDk/coaching-call-for-my-premium-athletes";
const PREMIUM_COACHING_URL = INTRO_CALL_URL;
const TRIDOT_URL =
  "https://app.tridot.com/onboard/sign-up/andreasschoenherr";
const RUNDOT_URL =
  "https://app.rundot.com/onboard/sign-up/andreasschoenherr";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?client=safari&hs=3JVV&sca_esv=9c297ecd27ddd5cd&cs=0&hl=de-AT&biw=1501&bih=841&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_0sPBgz4-nyrgwzJ75Z9BpFPoIH-Ey50eIIpFjZWzJWu3gDUe3i3YkB8BZu3LbRkklR9vuYmJfn5qutOs5_QjX5SkXh3hI2F-tGYh9vMNdtMjHsA0g%3D%3D&q=TriDreamCoaching+Rezensionen&sa=X&ved=2ahUKEwjDyciTv66VAxUDSPEDHX4qEjYQ0bkNegQIKRAF";

function CtaButton({
  children,
  href = INTRO_CALL_URL,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover ${className}`}
    >
      {children}
    </a>
  );
}

function OutlineButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center rounded-full border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-muted">{children}</p>
  );
}

function BulletCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border-t border-border pt-8 md:border-t-0 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <ul className="mt-6 space-y-3">
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
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-6 md:px-12 md:py-8">
          <Image
            src="/images/logos/tridream-logo.jpg"
            alt="TriDream Coaching"
            width={150}
            height={100}
            priority
            sizes="(min-width: 768px) 150px, 120px"
            className="h-auto w-[120px] md:w-[150px]"
          />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="min-h-screen">
          <div className="mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28 lg:min-h-screen lg:flex-row lg:items-center lg:gap-16 lg:pt-0 lg:pb-0">
            <div className="flex flex-col justify-center lg:w-[55%] lg:shrink-0 lg:py-24">
              <h1 className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.25rem]">
                Train Smart.
                <br />
                Not Hard.
              </h1>

              <p className="mt-8 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                Personal coaching built on real racing experience.
              </p>

              <p className="mt-10 max-w-md text-lg font-medium leading-relaxed tracking-tight text-foreground md:text-xl">
                Ironman finisher. Kona finisher. Certified coach.
              </p>

              <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                I&apos;ve spent more than twenty years in endurance sport — as
                an athlete and as a coach. Now I help others train with the
                discipline, care and experience that only comes from living
                this sport every day.
              </p>

              <div className="mt-12">
                <CtaButton href={INTRO_CALL_URL}>
                  Book your free consultation
                </CtaButton>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-[45%] lg:shrink-0">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-none">
                <Image
                  src="/images/andreas-hero.jpeg"
                  alt="Andreas Schönherr — endurance coach, TriDream Coaching"
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

        {/* My Story */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-28 md:px-12 md:py-40 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col justify-center lg:w-[55%] lg:shrink-0">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                My Story
              </h2>
              <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                <p>I don&apos;t coach because I love training plans.</p>
                <p>
                  I coach because endurance sport has given me so much over the
                  years.
                </p>
                <p>
                  It has taught me discipline, resilience and confidence.
                </p>
                <p>
                  It has taken me around the world, introduced me to lifelong
                  friends and allowed me to experience moments I will never
                  forget.
                </p>
                <p>Today, my goal is simple.</p>
                <p>
                  I want to give other athletes the opportunity to experience
                  what endurance sport has given me.
                </p>
                <p>
                  Whether your goal is your first 10K, your first marathon, your
                  first Ironman 70.3 or qualifying for Kona, I&apos;m here to
                  help you become the best athlete you can be.
                </p>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-[45%] lg:shrink-0">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-none">
                <Image
                  src="/images/portraits/andreas-kona.jpg"
                  alt="Andreas Schönherr crossing the finish line at the Ironman World Championship in Kona"
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why athletes choose TriDream */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <SectionLabel>Why athletes choose TriDream</SectionLabel>
            <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
              <BulletCard
                title="Experience"
                items={[
                  "Ironman World Championship Finisher",
                  "Multiple Ironman finishes",
                  "Multiple Ironman 70.3 finishes",
                  "Multiple marathon finishes",
                  "Over 20 years of endurance sport",
                ]}
              />
              <BulletCard
                title="Qualifications"
                items={[
                  "Swiss Triathlon Certified Coach",
                  "Ironman University Certified Coach",
                  "TriDot Certified Coach",
                  "Swiss Aquatics Video Analysis",
                  "SLRG Pool / Lake / River",
                ]}
              />
              <BulletCard
                title="Coaching Philosophy"
                items={[
                  "Personal coaching",
                  "Intelligent training",
                  "Holistic athlete development",
                  "Training that adapts to your life",
                  "Long-term performance instead of short-term success",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Coaching options */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 text-center md:px-12 md:py-40">
            <div className="mx-auto max-w-lg">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Premium Coaching
              </h2>
              <p className="mt-4 text-sm font-medium tracking-wide text-muted">
                starting from CHF 300/month
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                Work directly with Andreas through personalised coaching, race
                planning, regular reviews and continuous personal support.
              </p>
              <div className="mt-10">
                <CtaButton href={PREMIUM_COACHING_URL}>
                  Apply for Coaching
                </CtaButton>
              </div>
            </div>

            <div className="mx-auto mt-24 max-w-3xl border-t border-border pt-20">
              <div className="grid gap-16 sm:grid-cols-2 sm:gap-12">
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold tracking-tight">
                    AI-supported Triathlon Coaching
                  </h3>
                  <p className="mt-3 text-sm font-medium tracking-wide text-muted">
                    starting from USD 14.99/month
                  </p>
                  <div className="mt-8 w-full sm:w-auto">
                    <OutlineButton href={TRIDOT_URL}>
                      Start with TriDot
                    </OutlineButton>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold tracking-tight">
                    AI-supported Run Coaching
                  </h3>
                  <p className="mt-3 text-sm font-medium tracking-wide text-muted">
                    starting from USD 14.99/month
                  </p>
                  <div className="mt-8 w-full sm:w-auto">
                    <OutlineButton href={RUNDOT_URL}>
                      Start with RunDot
                    </OutlineButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-20 max-w-xl rounded-2xl border border-border px-8 py-10 text-left md:px-10">
              <h3 className="text-lg font-semibold tracking-tight">
                Not sure which option is right for you?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Let&apos;s discuss your goals together. During a{" "}
                <a
                  href={INTRO_CALL_URL}
                  className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-hover hover:decoration-accent"
                >
                  free introductory call
                </a>{" "}
                we&apos;ll decide whether Premium Coaching, TriDot or RunDot is
                the best fit for you.
              </p>
            </div>
          </div>
        </section>

        {/* Google reviews */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted by athletes.
            </h2>
            <p className="mt-6 text-base font-medium tracking-tight">
              ★★★★★ 5.0 Google Rating
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Read what athletes say about their coaching experience.
            </p>
            <div className="mt-10">
              <OutlineButton href={GOOGLE_REVIEWS_URL}>
                Read Google Reviews
              </OutlineButton>
            </div>
          </div>
        </section>

        {/* About technology */}
        <section className="border-t border-border bg-foreground text-white">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Technology supports every decision.
              <br />
              Experience makes the difference.
            </h2>
            <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-white/60 md:text-lg">
              <p>
                Technology helps analyse data, personalise training and identify
                opportunities.
              </p>
              <p>Experience helps knowing when to adapt the plan.</p>
              <p>That&apos;s what coaching is about.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted md:flex-row md:px-12">
          <span className="font-medium text-foreground">TriDream Coaching</span>
          <nav className="flex gap-8">
            <a href="#" className="transition-colors hover:text-foreground">
              Impressum
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Datenschutz
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
