import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CostWhatsAppButton from "@/components/ui/CostWhatsAppButton";
import { SITE } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: "Website Cost in India (2026): Prices from ₹12,999",
  },
  description:
    "How much does a website cost in India? See fixed prices for Starter, Business and Premium websites, add-ons, and what changes the price. Get a quote in 24 hours.",
  keywords: [
    "website development charges",
    "website design cost",
    "website design price",
    "website cost in india",
  ],
  alternates: {
    canonical: "/website-cost-india",
  },
  openGraph: buildOpenGraph({
    title: "Website Cost in India (2026): Prices from ₹12,999 | techiitfly",
    description:
      "How much does a website cost in India? See fixed prices for Starter, Business and Premium websites, add-ons, and what changes the price. Get a quote in 24 hours.",
    path: "/website-cost-india",
    image: "/og/pricing.png",
    alt: "Website Cost in India (2026) — techiitfly",
  }),
  twitter: buildTwitter({
    title: "Website Cost in India (2026): Prices from ₹12,999 | techiitfly",
    description:
      "How much does a website cost in India? See fixed prices for Starter, Business and Premium websites, add-ons, and what changes the price. Get a quote in 24 hours.",
    image: "/og/pricing.png",
  }),
};

const FAQ_ITEMS = [
  {
    q: "How much does a website cost in India?",
    a: "At techiitfly, a Starter website starts at ₹12,999, a Business website at ₹29,999 and a Premium website or online store at ₹59,999. Prices exclude GST.",
  },
  {
    q: "How much does a 5-page website cost?",
    a: "A 5-page Starter website starts at ₹12,999 and goes live in 7 days after we receive your content.",
  },
  {
    q: "Are domain and hosting included?",
    a: "No. Domain and hosting are an add-on at ₹4,000 for one year. You can also buy them yourself.",
  },
  {
    q: "Do I pay everything upfront?",
    a: "No. You pay 50% to confirm your start date and the remaining 50% on delivery, once you are satisfied.",
  },
  {
    q: "What does website maintenance cost?",
    a: "Maintenance is ₹2,500 per month. It covers security updates, backups, speed checks and content edits. Every package also includes free support after launch: 7 days for Starter, 30 days for Business and 90 days for Premium.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. After the final payment, the full code, content and design files are yours.",
  },
  {
    q: "Can you guarantee Google rankings?",
    a: "No. Anyone who guarantees rankings is overpromising. Technical fixes help within weeks, and rankings usually build over 3 to 6 months.",
  },
];

export default function WebsiteCostIndiaPage() {
  const pageDate = getPageDate("/website-cost-india");

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Website Cost in India (2026): Prices from ₹12,999 | techiitfly",
    description:
      "How much does a website cost in India? See fixed prices for Starter, Business and Premium websites, add-ons, and what changes the price. Get a quote in 24 hours.",
    url: `${SITE.siteUrl}/website-cost-india`,
    dateModified: pageDate.iso,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pricing",
        item: `${SITE.siteUrl}/pricing`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Website Cost in India",
        item: `${SITE.siteUrl}/website-cost-india`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a website cost in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At techiitfly, a Starter website starts at ₹12,999, a Business website at ₹29,999 and a Premium website or online store at ₹59,999. Prices exclude GST.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a 5-page website cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 5-page Starter website starts at ₹12,999 and goes live in 7 days after we receive your content.",
        },
      },
      {
        "@type": "Question",
        name: "Are domain and hosting included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Domain and hosting are an add-on at ₹4,000 for one year. You can also buy them yourself.",
        },
      },
      {
        "@type": "Question",
        name: "What does website maintenance cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maintenance is ₹2,500 per month and covers security updates, backups, speed checks and content edits.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. After the final payment, the full code, content and design files are yours.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px" }}>
        <article style={{ maxWidth: "920px", margin: "0 auto", padding: "48px 24px 80px" }}>
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.8rem",
              color: "var(--muted)",
              marginBottom: "24px",
            }}
          >
            <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/pricing" style={{ color: "var(--muted)", textDecoration: "none" }}>
              Pricing
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "var(--text)" }}>Website Cost in India</span>
          </nav>

          {/* Section Label & Single H1 */}
          <span className="section-label">PRICING GUIDE · 2026</span>

          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.3rem, 5.2vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--text)",
              marginTop: "12px",
              marginBottom: "24px",
            }}
          >
            Website Cost in India (2026): Fixed Prices from ₹12,999
          </h1>

          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            A business website in India costs from ₹12,999 for a 5-page Starter site, from ₹29,999 for a custom 10-page Business site, and from ₹59,999 for an online store or booking platform. Prices exclude GST. The final cost depends on the number of pages, how custom the design is, and what features you need.
          </p>

          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "1.02rem",
              lineHeight: 1.6,
              color: "var(--muted)",
              marginBottom: "48px",
            }}
          >
            At techiitfly we quote a fixed price after a free 15-minute call, so you know the total before work starts. Last updated: November 2026.
          </p>

          {/* Section: Website prices at a glance */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              Website prices at a glance
            </h2>

            <div
              style={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "var(--radius-lg, 12px)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                boxShadow: "var(--card-shadow)",
                marginBottom: "14px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  minWidth: "600px",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.94rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "20%" }}>
                      Package
                    </th>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "22%" }}>
                      Starting price
                    </th>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "38%" }}>
                      Best for
                    </th>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "20%" }}>
                      Live in
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--text)" }}>Starter</td>
                    <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--accent)" }}>₹12,999</td>
                    <td style={{ padding: "16px 20px", color: "var(--muted)", lineHeight: 1.5 }}>
                      New or small businesses that need a clean online presence
                    </td>
                    <td style={{ padding: "16px 20px", color: "var(--text)" }}>7 days</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--text)" }}>Business</td>
                    <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--accent)" }}>₹29,999</td>
                    <td style={{ padding: "16px 20px", color: "var(--muted)", lineHeight: 1.5 }}>
                      Companies that want a custom look and Google visibility
                    </td>
                    <td style={{ padding: "16px 20px", color: "var(--text)" }}>7–10 days</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--text)" }}>Premium</td>
                    <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--accent)" }}>₹59,999</td>
                    <td style={{ padding: "16px 20px", color: "var(--muted)", lineHeight: 1.5 }}>
                      Online stores, booking systems and custom web platforms
                    </td>
                    <td style={{ padding: "16px 20px", color: "var(--text)" }}>14–21 days</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--text)" }}>Mobile app</td>
                    <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--accent)" }}>₹99,999</td>
                    <td style={{ padding: "16px 20px", color: "var(--muted)", lineHeight: 1.5 }}>
                      iOS and Android apps built from one codebase
                    </td>
                    <td style={{ padding: "16px 20px", color: "var(--text)" }}>Quoted per project</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.9rem", color: "var(--muted)", margin: 0 }}>
              All prices are in INR and exclude GST.
            </p>
          </section>

          {/* Section: What is included in each package */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              What is included in each package
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Starter */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg, 12px)",
                  padding: "28px 24px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginTop: 0,
                    marginBottom: "16px",
                  }}
                >
                  Starter (from ₹12,999)
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  <li>Up to 5 pages with a template-based design</li>
                  <li>Mobile-friendly layout</li>
                  <li>Contact form and WhatsApp button</li>
                  <li>Basic SEO setup and Google Maps</li>
                  <li>1 round of design changes and 7 days of free support</li>
                </ul>
              </div>

              {/* Business */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-lg, 12px)",
                  padding: "28px 24px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginTop: 0,
                    marginBottom: "16px",
                  }}
                >
                  Business (from ₹29,999)
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  <li>Up to 10 pages with a custom design</li>
                  <li>Admin panel so you can edit content yourself</li>
                  <li>Basic SEO setup, Google Analytics and Google Maps</li>
                  <li>2 rounds of design changes and 30 days of free support</li>
                </ul>
              </div>

              {/* Premium */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg, 12px)",
                  padding: "28px 24px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginTop: 0,
                    marginBottom: "16px",
                  }}
                >
                  Premium (from ₹59,999)
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  <li>15+ pages or an online store</li>
                  <li>Payment gateway or booking system</li>
                  <li>Custom design with animations and advanced SEO</li>
                  <li>Admin dashboard, speed and security hardening</li>
                  <li>2 rounds of design changes and 90 days of free support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Add-on prices */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              Add-on prices
            </h2>

            <div
              style={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "var(--radius-lg, 12px)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <table
                style={{
                  width: "100%",
                  minWidth: "480px",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.94rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "65%" }}>
                      Add-on
                    </th>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "35%" }}>
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Extra page</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>₹1,500</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Basic logo (2 concepts, 1 revision)</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>₹3,000</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Domain + hosting (1 year)</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>₹4,000</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Business email</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>
                      ₹1,500 per mailbox per year
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Website maintenance</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>
                      ₹2,500 per month
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Content writing (standard page)</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>
                      ₹800 per page
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Content writing (home or landing page)</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>
                      ₹2,000 per page
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>AI Search Setup (with a new website)</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>₹7,999</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "14px 20px", color: "var(--text)" }}>Express delivery</td>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--accent)" }}>+30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: What changes the cost of a website */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              What changes the cost of a website
            </h2>

            <ol
              style={{
                margin: 0,
                paddingLeft: "24px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--muted)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <li>
                <strong style={{ color: "var(--text)" }}>Number of pages.</strong> More pages mean more design, content and testing time.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>Custom design or template.</strong> A template-based design costs less than a layout made for your brand.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>Features.</strong> Online payments, bookings, logins and admin panels add development work.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>Content.</strong> If you send your text and photos, the cost stays lower. Writing it for you is an add-on.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>Speed of delivery.</strong> A faster launch than the standard timeline adds to the price.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>After-launch care.</strong> Security updates, backups and edits can be a monthly plan.
              </li>
            </ol>
          </section>

          {/* Section: Costs people forget to ask about */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "16px",
              }}
            >
              Costs people forget to ask about
            </h2>

            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1rem",
                color: "var(--muted)",
                marginBottom: "18px",
              }}
            >
              Before you sign with any developer, ask these questions:
            </p>

            <ul
              style={{
                margin: 0,
                paddingLeft: "24px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--muted)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <li>
                Is <strong style={{ color: "var(--text)" }}>GST</strong> included in the quote?
              </li>
              <li>
                Are <strong style={{ color: "var(--text)" }}>domain and hosting</strong> included, and who owns them?
              </li>
              <li>
                Do you get the <strong style={{ color: "var(--text)" }}>source code</strong> after final payment? (With techiitfly you do.)
              </li>
              <li>
                How many <strong style={{ color: "var(--text)" }}>revision rounds</strong> are included?
              </li>
              <li>
                What does <strong style={{ color: "var(--text)" }}>support after launch</strong> cost, and for how long is it free?
              </li>
              <li>
                Is <strong style={{ color: "var(--text)" }}>basic SEO</strong> included, or charged separately?
              </li>
            </ul>
          </section>

          {/* Section: DIY builder, freelancer or agency: how to choose */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              DIY builder, freelancer or agency: how to choose
            </h2>

            <div
              style={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "var(--radius-lg, 12px)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <table
                style={{
                  width: "100%",
                  minWidth: "540px",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                    <th style={{ padding: "16px 18px", color: "var(--muted)", fontWeight: 600, width: "24%" }}>
                      &nbsp;
                    </th>
                    <th style={{ padding: "16px 18px", color: "var(--muted)", fontWeight: 500, width: "19%" }}>
                      DIY builder
                    </th>
                    <th style={{ padding: "16px 18px", color: "var(--muted)", fontWeight: 500, width: "19%" }}>
                      Freelancer
                    </th>
                    <th style={{ padding: "16px 18px", color: "var(--muted)", fontWeight: 500, width: "19%" }}>
                      Agency
                    </th>
                    <th
                      style={{
                        padding: "16px 18px",
                        color: "var(--accent)",
                        fontWeight: 700,
                        width: "19%",
                        background: "var(--accent-dim)",
                        borderLeft: "2px solid var(--accent)",
                      }}
                    >
                      techiitfly
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "15px 18px", fontWeight: 600, color: "var(--text)" }}>Price</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Monthly fees</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Varies</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Higher</td>
                    <td
                      style={{
                        padding: "15px 18px",
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "var(--accent-dim)",
                        borderLeft: "2px solid var(--accent)",
                      }}
                    >
                      Fixed, agreed upfront
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "15px 18px", fontWeight: 600, color: "var(--text)" }}>Time to launch</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Your own time</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Often unclear</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>4–12 weeks</td>
                    <td
                      style={{
                        padding: "15px 18px",
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "var(--accent-dim)",
                        borderLeft: "2px solid var(--accent)",
                      }}
                    >
                      7 days for Starter
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "15px 18px", fontWeight: 600, color: "var(--text)" }}>Done for you</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>No</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Yes</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Yes</td>
                    <td
                      style={{
                        padding: "15px 18px",
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "var(--accent-dim)",
                        borderLeft: "2px solid var(--accent)",
                      }}
                    >
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "15px 18px", fontWeight: 600, color: "var(--text)" }}>You own the code</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Often no</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Varies</td>
                    <td style={{ padding: "15px 18px", color: "var(--muted)" }}>Varies</td>
                    <td
                      style={{
                        padding: "15px 18px",
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "var(--accent-dim)",
                        borderLeft: "2px solid var(--accent)",
                      }}
                    >
                      Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Frequently asked questions */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.9rem, 3.8vw, 2.7rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              Frequently asked questions
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {FAQ_ITEMS.map((faq, index) => (
                <details
                  key={index}
                  className="faq-item group"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius, 8px)",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <summary
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      background: "transparent",
                      textAlign: "left",
                      cursor: "pointer",
                      listStyle: "none",
                      userSelect: "none",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "1.02rem",
                        fontWeight: 600,
                        color: "var(--text)",
                        lineHeight: 1.45,
                      }}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className="faq-icon"
                      aria-hidden="true"
                      style={{
                        color: "var(--accent)",
                        fontSize: "1.3rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        transition: "transform 0.2s ease",
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div style={{ padding: "0 24px 20px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.95rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section: Get your fixed price */}
          <section
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg, 12px)",
              padding: "40px 32px",
              textAlign: "center",
              marginTop: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.9rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: 0,
                marginBottom: "12px",
              }}
            >
              Get your fixed price
            </h2>

            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                lineHeight: 1.6,
                maxWidth: "600px",
                margin: "0 auto 28px",
              }}
            >
              Tell us what you need and get a fixed quote within 24 hours. The call is free and there is no obligation.
            </p>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "22px" }}>
              <CostWhatsAppButton />
            </div>

            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginBottom: "32px",
              }}
            >
              Or call{" "}
              <a
                href={`tel:${SITE.phoneRaw}`}
                style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                {SITE.phone}
              </a>
              {" · "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                {SITE.contactEmail}
              </a>
            </p>

            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "24px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.88rem",
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "8px 12px",
              }}
            >
              <span style={{ fontWeight: 600, color: "var(--text)" }}>Related:</span>
              <Link
                href="/pricing"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Full pricing page
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/website-development-pune"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Website development in Pune
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/websites-for-dentists"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Websites for dentists
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/websites-for-coaching-classes"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Websites for coaching classes
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/websites-for-yoga-schools"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Websites for yoga schools
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
