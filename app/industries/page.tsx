import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { INDUSTRIES } from "@/content/industries";
import { SITE, getConsultUrl, getWhatsAppUrl } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Websites for Yoga, Clinics & Coaching Classes",
  description:
    "Websites for yoga schools, dental clinics, and coaching classes. Fast delivery, fixed prices, and direct WhatsApp lead capture.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: buildOpenGraph({
    title: "Websites for Yoga, Clinics & Coaching Classes | techiitfly",
    description:
      "Websites for yoga schools, dental clinics, and coaching classes. Fast delivery, fixed prices, and direct WhatsApp lead capture.",
    path: "/industries",
    image: "/og/home.png",
    alt: "Websites for Every Industry | techiitfly",
  }),
  twitter: buildTwitter({
    title: "Websites for Yoga, Clinics & Coaching Classes | techiitfly",
    description:
      "Websites for yoga schools, dental clinics, and coaching classes. Fast delivery, fixed prices, and direct WhatsApp lead capture.",
    image: "/og/home.png",
  }),
};

export default function IndustriesPage() {
  const pageDate = getPageDate("/industries");

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
        name: "Industries",
        item: `${SITE.siteUrl}/industries`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px", position: "relative" }}>
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(100vw, 980px)",
            height: "360px",
            background:
              "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.12) 0%, rgba(6, 182, 212, 0.05) 45%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            padding: "80px 24px 40px",
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              marginBottom: "24px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
            >
              Home
            </Link>
            <span style={{ opacity: 0.6 }}>/</span>
            <span style={{ color: "var(--text)" }}>Industries</span>
          </nav>

          <span className="section-label">SPECIALIZED SOLUTIONS</span>

          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text)",
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            Websites for Every Industry
          </h1>

          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "680px",
              margin: "0 auto 16px",
            }}
          >
            Purpose-built websites engineered for the specific enquiry, scheduling, and conversion workflows of service
            businesses.
          </p>

          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.78rem",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            Last updated: {pageDate.display}
          </p>
        </section>

        {/* Industry Cards Grid */}
        <section
          style={{
            position: "relative",
            padding: "20px 24px 100px",
            maxWidth: "1140px",
            margin: "0 auto",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.id}
                href={industry.href}
                className="industry-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    Industry Focus
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "2rem",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: "var(--text)",
                      margin: "0 0 12px",
                    }}
                  >
                    {industry.name}
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {industry.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "28px",
                    paddingTop: "20px",
                    borderTop: "1px solid var(--border)",
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  <span>Explore websites for {industry.name}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Consultation Callout */}
          <div
            style={{
              marginTop: "48px",
              padding: "36px 32px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "1.65rem",
                  fontWeight: 400,
                  color: "var(--text)",
                  margin: "0 0 8px",
                }}
              >
                Don&apos;t see your specific field listed?
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                  color: "var(--muted)",
                  margin: 0,
                  maxWidth: "560px",
                  lineHeight: 1.5,
                }}
              >
                We build custom, high-speed websites for all service-driven businesses. Book a free 15-minute call or
                message us directly on WhatsApp to discuss your requirements.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={getConsultUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "var(--primary-btn-text)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Book a free call ↗
              </a>
              <a
                href={getWhatsAppUrl("Hi techiitfly, I have a question about a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                WhatsApp Us ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
