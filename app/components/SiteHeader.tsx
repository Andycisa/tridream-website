import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-6 md:px-12 md:py-8">
        <Link href="/">
          <Image
            src="/images/logos/tridream-logo.jpg"
            alt="TriDream Coaching"
            width={150}
            height={100}
            priority
            sizes="(min-width: 768px) 150px, 120px"
            className="h-auto w-[120px] md:w-[150px]"
          />
        </Link>
      </div>
    </header>
  );
}
