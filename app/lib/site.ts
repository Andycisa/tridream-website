import type { Metadata } from "next";

export const SITE_URL = "https://www.tridreamcoaching.com";

export const siteConfig = {
  name: "TriDream Coaching",
  ogImage: "/images/andreas-hero.jpeg",
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
  };
}

export const sharedOpenGraph: NonNullable<Metadata["openGraph"]> = {
  siteName: siteConfig.name,
  title: "Train Smart. Not Hard.",
  description: "Premium triathlon coaching by Andreas Schoenherr.",
  images: [
    {
      url: siteConfig.ogImage,
      alt: "Andreas Schoenherr — TriDream Coaching",
    },
  ],
  locale: "en_CH",
  type: "website",
};

export const sharedTwitter: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  title: "Train Smart. Not Hard.",
  description: "Premium triathlon coaching by Andreas Schoenherr.",
  images: [siteConfig.ogImage],
};
