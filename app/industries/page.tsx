import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { INDUSTRIES } from "@/content/industries";
import { SITE, getConsultUrl, getWhatsAppUrl } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";
import YogaZenAnimation from "@/components/yoga/YogaZenAnimation";

export const metadata: Metadata = {
  title: "Websites for Ecommerce, Yoga, Clinics & Coaching Classes",
  description:
    "Websites for ecommerce stores, yoga schools, dental clinics, and coaching classes. Fast delivery, fixed prices, and direct WhatsApp lead capture.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: buildOpenGraph({
    title: "Websites for Ecommerce, Yoga, Clinics & Coaching Classes | techiitfly",
    description:
      "Websites for ecommerce stores, yoga schools, dental clinics, and coaching classes. Fast delivery, fixed prices, and direct WhatsApp lead capture.",
    path: "/industries",
    image: "/og/home.png",
    alt: "Websites for Every Industry | techiitfly",
  }),
  twitter: buildTwitter({
    title: "Websites for Ecommerce, Yoga, Clinics & Coaching Classes | techiitfly",
    description:
      "Websites for ecommerce stores, yoga schools, dental clinics, and coaching classes. Fast delivery, fixed prices, and direct WhatsApp lead capture.",
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
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* For Yoga & Wellness: Delightful animated Dhyan Mudra + Rotating Mandala flourish */}
                {industry.id === "yoga-wellness" && (
                  <>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "-20px",
                        right: "-20px",
                        width: "160px",
                        height: "160px",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    >
                      <YogaZenAnimation variant="card" size={160} opacity={0.9} />
                    </div>
                    {/* Subtle warm zen aura inside card */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 85% 20%, rgba(245, 158, 11, 0.08) 0%, rgba(124, 169, 139, 0.06) 40%, transparent 70%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  </>
                )}

                {/* For Ecommerce & Stores: Dynamic Cart & Ambient Commerce Aura */}
                {industry.id === "ecommerce-stores" && (
                  <>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        width: "140px",
                        height: "140px",
                        pointerEvents: "none",
                        zIndex: 0,
                        opacity: 0.18,
                      }}
                    >
                      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--accent, #F59E0B)">
                        <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="3 4" />
                        <circle cx="50" cy="50" r="28" strokeWidth="1.2" />
                        <path d="M36,44 L64,44 L60,66 L40,66 Z" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M43,44 C43,36 57,36 57,44" strokeWidth="1.8" />
                        <circle cx="44" cy="72" r="2.5" fill="var(--accent, #F59E0B)" />
                        <circle cx="56" cy="72" r="2.5" fill="var(--accent, #F59E0B)" />
                      </svg>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 85% 20%, rgba(245, 158, 11, 0.12) 0%, transparent 60%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  </>
                )}

                {/* For Dentists & Clinics: Fresh Cyan Dental Tooth Flourish */}
                {industry.id === "dentists-clinics" && (
                  <>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        width: "140px",
                        height: "140px",
                        pointerEvents: "none",
                        zIndex: 0,
                        opacity: 0.16,
                      }}
                    >
                      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="#06B6D4">
                        <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="4 6" />
                        <path d="M38,36 C42,26 58,26 62,36 C66,46 64,56 60,70 C58,74 54,72 52,62 C50,58 50,58 48,62 C46,72 42,74 40,70 C36,56 34,46 38,36 Z" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 85% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  </>
                )}

                {/* For Coaching & Tutors: Academic Blue Cap & Compass Flourish */}
                {industry.id === "coaching-classes" && (
                  <>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        width: "140px",
                        height: "140px",
                        pointerEvents: "none",
                        zIndex: 0,
                        opacity: 0.18,
                      }}
                    >
                      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="#3B82F6">
                        <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="4 6" />
                        <polygon points="50,32 72,42 50,52 28,42" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M36,46 L36,56 C36,62 64,62 64,56 L64,46" strokeWidth="1.5" />
                        <line x1="68" y1="44" x2="68" y2="58" strokeWidth="1.5" />
                        <circle cx="68" cy="60" r="2" fill="#3B82F6" />
                      </svg>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 85% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  </>
                )}

                {/* For Gyms & Fitness: Athletic Barbell & Strength Octagon Flourish */}
                {industry.id === "gyms-fitness" && (
                  <>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        width: "140px",
                        height: "140px",
                        pointerEvents: "none",
                        zIndex: 0,
                        opacity: 0.22,
                      }}
                    >
                      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="#F97316">
                        <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="4 6" />
                        <line x1="26" y1="50" x2="74" y2="50" strokeWidth="3" strokeLinecap="round" />
                        <rect x="22" y="38" width="5" height="24" rx="2" strokeWidth="1.8" fill="#F97316" fillOpacity="0.4" />
                        <rect x="29" y="42" width="4" height="16" rx="1.5" strokeWidth="1.5" />
                        <rect x="73" y="38" width="5" height="24" rx="2" strokeWidth="1.8" fill="#F97316" fillOpacity="0.4" />
                        <rect x="67" y="42" width="4" height="16" rx="1.5" strokeWidth="1.5" />
                        <circle cx="50" cy="50" r="6" strokeWidth="1.5" strokeDasharray="2 3" />
                      </svg>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at 85% 20%, rgba(249, 115, 22, 0.12) 0%, rgba(239, 68, 68, 0.05) 40%, transparent 60%)",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  </>
                )}

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color:
                        industry.id === "yoga-wellness"
                          ? "#B45309"
                          : industry.id === "dentists-clinics"
                          ? "#0891B2"
                          : industry.id === "coaching-classes"
                          ? "#3B82F6"
                          : industry.id === "gyms-fitness"
                          ? "#EA580C"
                          : "var(--accent)",
                      background:
                        industry.id === "yoga-wellness"
                          ? "rgba(180, 83, 9, 0.12)"
                          : industry.id === "dentists-clinics"
                          ? "rgba(8, 145, 178, 0.12)"
                          : industry.id === "coaching-classes"
                          ? "rgba(59, 130, 246, 0.12)"
                          : industry.id === "gyms-fitness"
                          ? "rgba(234, 88, 12, 0.12)"
                          : "var(--accent-dim)",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    {industry.badge || "Industry Focus"}
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
