import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JsonLd } from "./components/JsonLd";
import { createSiteStructuredData } from "./lib/structured-data";
import {
  SITE_URL,
  sharedOpenGraph,
  sharedTwitter,
  siteConfig,
} from "./lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: siteConfig.logo, type: "image/jpeg" }],
    apple: [{ url: siteConfig.logo, type: "image/jpeg", sizes: "180x180" }],
    shortcut: [siteConfig.logo],
  },
  openGraph: sharedOpenGraph,
  twitter: sharedTwitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd data={createSiteStructuredData()} />
        {children}
      </body>
    </html>
  );
}
