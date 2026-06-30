import Image from "next/image";

const BOOKING_URL = "#";

function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      className={`inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover ${className}`}
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

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <span className="text-sm font-medium tracking-tight">
            TriDream Coaching
          </span>
          <a
            href={BOOKING_URL}
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Book consultation
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="min-h-screen">
          <div className="mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28 lg:min-h-screen lg:flex-row lg:items-center lg:gap-16 lg:pt-0 lg:pb-0">
            {/* Left — copy */}
            <div className="flex flex-col justify-center lg:w-[55%] lg:shrink-0 lg:py-24">
              <h1 className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.25rem]">
                Train Smart.
                <br />
                Not Hard.
              </h1>

              <p className="mt-8 text-xl font-medium leading-snug tracking-tight md:text-2xl">
                AI-powered.
                <br />
                Personally coached.
              </p>

              <div className="mt-10 max-w-md space-y-4 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  The future of endurance coaching combines the power of
                  artificial intelligence with the experience of a dedicated
                  human coach.
                </p>
                <p>
                  Technology creates the plan.
                  <br />
                  Personal coaching creates the athlete.
                </p>
              </div>

              <div className="mt-12">
                <CtaButton>Book your free consultation</CtaButton>
              </div>
            </div>

            {/* Right — portrait */}
            <div className="mt-16 lg:mt-0 lg:w-[45%] lg:shrink-0">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:max-w-none">
                <Image
                  src="/images/andreas-hero.jpeg"
                  alt="Andreas — certified triathlon coach, TriDream Coaching"
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

        {/* The future of coaching */}
        <section className="bg-foreground text-white">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <SectionLabel>
              <span className="text-white/50">The future of coaching</span>
            </SectionLabel>
            <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              AI alone is not enough.
              <br />
              Coaching alone is no longer enough.
            </p>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              The future is the combination of both — intelligent technology
              that adapts to your data, guided by a certified coach who knows
              you, your goals, and your life.
            </p>
          </div>
        </section>

        {/* Why TriDream Coaching */}
        <section className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
          <SectionLabel>Why TriDream Coaching</SectionLabel>
          <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
            {[
              {
                title: "Intelligent",
                description:
                  "Training decisions backed by data and AI — so every session has purpose, not guesswork.",
              },
              {
                title: "Adaptive",
                description:
                  "Your plan evolves with your fitness, schedule, and recovery. Life changes; your coaching keeps up.",
              },
              {
                title: "Personal",
                description:
                  "A real coach who knows your story. Technology supports the relationship — it doesn't replace it.",
              },
            ].map((card) => (
              <div key={card.title}>
                <h3 className="text-xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Andreas */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <SectionLabel>About Andreas</SectionLabel>
            <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Certified coach. Ironman finisher. Kona finisher.
            </p>
            <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Andreas brings together traditional, certified triathlon coaching
                expertise with modern AI-supported training technology. As an
                Ironman and Kona finisher, he understands what it takes to
                perform at the highest level — and what busy age-group athletes
                need to get there on limited time.
              </p>
              <p>
                His approach combines the personal attention of one-on-one
                coaching with intelligent tools that make every hour count.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
            <SectionLabel>How it works</SectionLabel>
            <ol className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
              {[
                {
                  step: "1",
                  title: "Initial consultation",
                  description:
                    "We discuss your goals, experience, schedule, and constraints — so coaching starts with understanding you.",
                },
                {
                  step: "2",
                  title: "AI-supported training plan",
                  description:
                    "A personalised plan built on certified coaching principles, enhanced by intelligent training technology.",
                },
                {
                  step: "3",
                  title: "Personal coaching and adaptation",
                  description:
                    "Ongoing support, regular check-ins, and continuous plan adjustments as you progress.",
                },
              ].map((item) => (
                <li key={item.step}>
                  <span className="text-sm font-medium text-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-28 text-center md:px-12 md:py-40">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to train smarter?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Book a free consultation and discover how AI-powered, personally
              coached training can work for you.
            </p>
            <div className="mt-12">
              <CtaButton>Book your free consultation</CtaButton>
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
