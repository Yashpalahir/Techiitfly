import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false, // non-critical, lazy
});

import { SITE } from "@/content/site";
import Analytics from "@/components/analytics/Analytics";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";
import { ORGANIZATION_SCHEMA } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techiitfly.com"),
  title: {
    default: "techiitfly — Website Development in Pune | Live in 7 Days",
    template: "%s | techiitfly",
  },
  description: SITE.metaDescription,
  keywords: ["website development", "Pune", "web design", "business websites", "techiitfly", "7 day website"],
  authors: [
    { name: "Yashpal Baldaniya", url: "https://www.techiitfly.com/about" },
    { name: "Rahul Singh Kotiyal", url: "https://www.techiitfly.com/about" },
    { name: "Aditya Chavhan", url: "https://www.techiitfly.com/about" },
  ],
  creator: "techiitfly",
  openGraph: buildOpenGraph({
    title: "techiitfly — Website Development in Pune | Live in 7 Days",
    description: SITE.metaDescription,
    path: "/",
    image: "/og/home.png",
    alt: "techiitfly — Website Development in Pune",
  }),
  twitter: buildTwitter({
    title: "techiitfly — Website Development in Pune | Live in 7 Days",
    description: SITE.metaDescription,
    image: "/og/home.png",
  }),
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Single Shared Schema.org Organization (ProfessionalService) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        {/* Theme: default dark, avoids FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(!t||t==='dark')document.documentElement.setAttribute('data-theme','dark');else document.documentElement.setAttribute('data-theme','light');})();`,
          }}
        />
        {/* GA4 dataLayer stub (lightweight, non-render-blocking, queues events safely) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());window.gtag=gtag;`,
          }}
        />
      </head>
      <body className="grain">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
