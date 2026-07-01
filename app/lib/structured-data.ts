import { SITE_URL, siteConfig } from "./site";

export const entityIds = {
  website: `${SITE_URL}/#website`,
  organization: `${SITE_URL}/#organization`,
  localBusiness: `${SITE_URL}/#localbusiness`,
  person: `${SITE_URL}/#person`,
} as const;

export const businessInfo = {
  organizationName: "TriDream Coaching",
  slogan: "Train Smart. Not Hard.",
  email: "Andreas.Schoenherr@tridot.com",
  personName: "Andreas Schoenherr",
  jobTitle: "Swiss Triathlon Certified Coach",
  personDescription:
    "Founder of TriDream Coaching and TriDot Coach Coordinator DACH.",
  address: {
    streetAddress: "Böndlerstrasse 3A",
    addressLocality: "Rüschlikon",
    postalCode: "8803",
    addressCountry: "CH",
  },
  logoPath: "/images/logos/tridream-logo.jpg",
  heroImagePath: "/images/andreas-hero.jpeg",
} as const;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: businessInfo.address.streetAddress,
  addressLocality: businessInfo.address.addressLocality,
  postalCode: businessInfo.address.postalCode,
  addressCountry: businessInfo.address.addressCountry,
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const breadcrumbHome: BreadcrumbItem = {
  name: "Home",
  path: "/",
};

function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function createSiteStructuredData() {
  const logoUrl = `${SITE_URL}${businessInfo.logoPath}`;
  const heroImageUrl = `${SITE_URL}${businessInfo.heroImagePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": entityIds.website,
        url: `${SITE_URL}/`,
        name: businessInfo.organizationName,
        description: siteConfig.description,
        inLanguage: "en-CH",
        publisher: { "@id": entityIds.organization },
        about: { "@id": entityIds.organization },
      },
      {
        "@type": "Organization",
        "@id": entityIds.organization,
        name: businessInfo.organizationName,
        url: `${SITE_URL}/`,
        slogan: businessInfo.slogan,
        description: siteConfig.description,
        email: businessInfo.email,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        image: logoUrl,
        founder: { "@id": entityIds.person },
        employee: { "@id": entityIds.person },
      },
      {
        "@type": "LocalBusiness",
        "@id": entityIds.localBusiness,
        name: businessInfo.organizationName,
        url: `${SITE_URL}/`,
        description: siteConfig.description,
        email: businessInfo.email,
        image: [logoUrl, heroImageUrl],
        address: postalAddress,
        parentOrganization: { "@id": entityIds.organization },
      },
      {
        "@type": "Person",
        "@id": entityIds.person,
        name: businessInfo.personName,
        jobTitle: businessInfo.jobTitle,
        description: businessInfo.personDescription,
        email: businessInfo.email,
        url: `${SITE_URL}/`,
        image: heroImageUrl,
        worksFor: { "@id": entityIds.organization },
      },
    ],
  };
}

export function createBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
