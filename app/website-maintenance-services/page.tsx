import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MaintenanceWhatsAppButton from "@/components/ui/MaintenanceWhatsAppButton";
import { SITE } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: "Website Maintenance Services in India | ₹2,500/month",
  },
  description:
    "Website maintenance from ₹2,500 per month: security updates, backups, speed checks and content edits. Month-to-month billing. Get a quote on WhatsApp.",
  keywords: [
    "website maintenance services",
    "website maintenance india",
    "website maintenance cost",
    "website support india",
    "wordpress maintenance pune",
  ],
  alternates: {
    canonical: "/website-maintenance-services",
  },
  openGraph: buildOpenGraph({
    title: "Website Maintenance Services in India | ₹2,500/month",
    description:
      "Website maintenance from ₹2,500 per month: security updates, backups, speed checks and content edits. Month-to-month billing. Get a quote on WhatsApp.",
    path: "/website-maintenance-services",
    image: "/og/pricing.png",
    alt: "Website Maintenance Services in India — techiitfly",
  }),
  twitter: buildTwitter({
    title: "Website Maintenance Services in India | ₹2,500/month",
    description:
      "Website maintenance from ₹2,500 per month: security updates, backups, speed checks and content edits. Month-to-month billing. Get a quote on WhatsApp.",
    image: "/og/pricing.png",
  }),
};

const FAQ_ITEMS = [
  {
    q: "How much does website maintenance cost?",
    a: "Website maintenance costs ₹2,500 per month, excluding GST.",
  },
  {
    q: "What does the maintenance plan include?",
    a: "It includes regular security patches, backups, speed checks, fast turnaround for design and text updates, technical support, and domain and hosting care.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Maintenance is billed month to month.",
  },
  {
    q: "What is the difference between free support and maintenance?",
    a: "Free support after launch covers fixes for 7 days (Starter), 30 days (Business) or 90 days (Premium). When that ends, the monthly maintenance plan keeps your website looked after.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. After the final payment, the complete code, content and design files are yours.",
  },
];

export default function WebsiteMaintenanceServicesPage() {
  const pageDate = getPageDate("/website-maintenance-services");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Maintenance Services",
    serviceType: "Website Maintenance",
    description:
      "Website maintenance from ₹2,500 per month: security updates, backups, speed checks and content edits. Month-to-month billing. Get a quote on WhatsApp.",
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      telephone: SITE.structuredPhone,
      email: SITE.contactEmail,
      url: SITE.siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      price: "2500",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2500",
        priceCurrency: "INR",
        unitText: "MONTH",
        billingIncrement: "1",
      },
      description: "Month-to-month billing. Covers security updates, backups, speed checks and content edits.",
    },
    url: `${SITE.siteUrl}/website-maintenance-services`,
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
        name: "Services",
        item: `${SITE.siteUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Website Maintenance Services",
        item: `${SITE.siteUrl}/website-maintenance-services`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
            <span style={{ color: "var(--text)" }}>Website Maintenance Services</span>
          </nav>

          {/* Section Label & Single H1 */}
          <span className="section-label">MAINTENANCE &amp; SUPPORT · ₹2,500/MO</span>

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
            Website Maintenance Services in India: ₹2,500 per Month
          </h1>

          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--text)",
              marginBottom: "32px",
            }}
          >
            Website maintenance from ₹2,500 per month covers security updates, backups, speed checks and content edits, so your website stays fast, safe and up to date. It is billed month to month. Prices exclude GST.
          </p>

          <div style={{ marginBottom: "56px" }}>
            <MaintenanceWhatsAppButton text="Get a maintenance quote on WhatsApp" />
          </div>

          {/* Section: What is included in website maintenance */}
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
              What is included in website maintenance
            </h2>

            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg, 12px)",
                padding: "32px 28px",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "18px 24px",
                }}
              >
                {[
                  "Regular security patches",
                  "Backups",
                  "Speed checks",
                  "Fast turnaround for design and text updates",
                  "Technical support",
                  "Domain and hosting care",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      color: "var(--text)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Why website maintenance matters */}
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
              Why website maintenance matters
            </h2>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                {
                  title: "Security.",
                  text: "Outdated software can leave a website open to attacks. Regular patches reduce that risk.",
                },
                {
                  title: "Backups.",
                  text: "If something breaks, a recent backup helps you get back online quickly.",
                },
                {
                  title: "Speed.",
                  text: "Slow pages lose visitors and can hurt your Google rankings. Regular speed checks catch problems early.",
                },
                {
                  title: "Fresh content.",
                  text: "Old prices, offers or contact details can cost you enquiries. Quick edits keep your site accurate.",
                },
              ].map((reason, idx) => (
                <li
                  key={idx}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius, 8px)",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                    }}
                  >
                    <strong style={{ color: "var(--text)", fontWeight: 700 }}>{reason.title}</strong>{" "}
                    {reason.text}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Maintenance plan price */}
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
              Maintenance plan price
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
                  minWidth: "480px",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.94rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "40%" }}>
                      Plan
                    </th>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "30%" }}>
                      Price
                    </th>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "30%" }}>
                      Billing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "18px 20px", fontWeight: 700, color: "var(--text)" }}>
                      Website maintenance
                    </td>
                    <td style={{ padding: "18px 20px", fontWeight: 700, color: "var(--accent)", fontSize: "1.05rem" }}>
                      ₹2,500 per month
                    </td>
                    <td style={{ padding: "18px 20px", color: "var(--muted)" }}>
                      Month to month
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.9rem", color: "var(--muted)", margin: 0 }}>
              Prices are in INR and exclude GST.
            </p>
          </section>

          {/* Section: Free support after launch, then maintenance */}
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
              Free support after launch, then maintenance
            </h2>

            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.02rem",
                lineHeight: 1.6,
                color: "var(--muted)",
                marginBottom: "20px",
              }}
            >
              Every website we build includes free support after launch. After that period ends, you can continue with the monthly maintenance plan.
            </p>

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
                  minWidth: "400px",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.94rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "50%" }}>
                      Package
                    </th>
                    <th style={{ padding: "16px 20px", color: "var(--muted)", fontWeight: 600, width: "50%" }}>
                      Free support after launch
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--text)" }}>Starter</td>
                    <td style={{ padding: "16px 20px", color: "var(--accent)", fontWeight: 600 }}>7 days</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--text)" }}>Business</td>
                    <td style={{ padding: "16px 20px", color: "var(--accent)", fontWeight: 600 }}>30 days</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--text)" }}>Premium</td>
                    <td style={{ padding: "16px 20px", color: "var(--accent)", fontWeight: 600 }}>90 days</td>
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

          {/* Section: Get a maintenance quote */}
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
              Get a maintenance quote
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
              Tell us about your website and we will reply within 24 hours (Mon–Sat).
            </p>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "22px" }}>
              <MaintenanceWhatsAppButton text="Chat on WhatsApp" />
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
                +91 93739 17738
              </a>
              {" · "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                contact@techiitfly.com
              </a>
            </p>

            {/* Related links */}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "24px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px 14px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.92rem",
                color: "var(--muted)",
              }}
            >
              <span>Related:</span>
              <Link
                href="/pricing"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Pricing
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/website-cost-india"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Website cost in India
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/website-development-pune"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Website development in Pune
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
