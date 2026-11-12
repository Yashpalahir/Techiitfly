import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SelectedWork from "@/components/sections/SelectedWork";
import Guarantee from "@/components/sections/Guarantee";
import ConsultationBand from "@/components/sections/ConsultationBand";
import PuneWhatsAppButton from "@/components/ui/PuneWhatsAppButton";
import { SITE, getConsultUrl, getWhatsAppUrl } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: "Web Design & Development Company in Pune | From ₹12,999",
  },
  description:
    "Web design and development company in Pune. Fixed-price websites live in 7 days, from ₹12,999. Free 15-minute consultation. Get a quote today.",
  keywords: [
    "web design company in Pune",
    "website designer in Pune",
    "web developer in Pune",
    "website development company in Pune",
    "website development Pune",
    "web design Pune",
  ],
  alternates: {
    canonical: "/website-development-pune",
  },
  openGraph: buildOpenGraph({
    title: "Web Design & Development Company in Pune | From ₹12,999",
    description:
      "Web design and development company in Pune. Fixed-price websites live in 7 days, from ₹12,999. Free 15-minute consultation. Get a quote today.",
    path: "/website-development-pune",
    image: "/og/industry-pune.png",
    alt: "Web Design & Development Company in Pune | techiitfly",
  }),
  twitter: buildTwitter({
    title: "Web Design & Development Company in Pune | From ₹12,999",
    description:
      "Web design and development company in Pune. Fixed-price websites live in 7 days, from ₹12,999. Free 15-minute consultation. Get a quote today.",
    image: "/og/industry-pune.png",
  }),
};

const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    price: "₹12,999",
    badge: "Live in 7 days",
    badgeColor: "var(--accent)",
    summary: "up to 5 pages, template-based design, contact form and WhatsApp button, basic SEO setup.",
    bullets: [
      "Up to 5 pages",
      "Template-based design",
      "Contact form and WhatsApp button",
      "Basic SEO setup",
      "Live in 7 days",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: "₹29,999",
    badge: "Live in 7–10 days",
    badgeColor: "var(--accent)",
    summary: "up to 10 pages, custom design, admin panel to edit content, Google Analytics and Maps.",
    bullets: [
      "Up to 10 pages",
      "Custom design",
      "Admin panel to edit content",
      "Google Analytics and Maps",
      "Live in 7–10 days",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹59,999",
    badge: "Live in 14–21 days",
    badgeColor: "var(--accent)",
    summary: "15+ pages or an online store, payment gateway or booking, advanced SEO.",
    bullets: [
      "15+ pages or an online store",
      "Payment gateway or booking",
      "Advanced SEO",
      "Custom integrations & animations",
      "Live in 14–21 days",
    ],
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: "Fixed price.",
    desc: "You get a clear quote before work starts. No surprise bills.",
  },
  {
    title: "Fast delivery.",
    desc: "Starter websites go live in 7 days after we receive your content.",
  },
  {
    title: "You own everything.",
    desc: "After final payment, the complete code, assets and design files are yours.",
  },
  {
    title: "Simple payment.",
    desc: "50% to start, 50% on delivery.",
  },
  {
    title: "Support after launch.",
    desc: "Free support for 7, 30 or 90 days depending on the package, then optional website maintenance at ₹2,500 per month.",
    hasMaintenanceLink: true,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Share your idea",
    text: "Share your idea on WhatsApp or book a free 15-minute call.",
  },
  {
    num: "02",
    title: "Get a fixed price",
    text: "Get a fixed price and timeline the same day.",
  },
  {
    num: "03",
    title: "Pay 50% & start",
    text: "Pay 50% and we start. You see progress at every stage.",
  },
  {
    num: "04",
    title: "Launch & support",
    text: "Launch, pay the rest on delivery, and get free support.",
  },
];

const FAQS = [
  {
    q: "How much does a website cost in Pune?",
    a: "Websites start at ₹12,999 for a 5-page Starter site, ₹29,999 for a Business site and ₹59,999 for a Premium site or online store. Prices exclude GST.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Starter websites go live in 7 days once we receive your content. Business websites take 7–10 days and Premium websites 14–21 days.",
  },
  {
    q: "Do I own my website and its code?",
    a: "Yes. After the final payment, the complete code, assets and design files are yours.",
  },
  {
    q: "How does payment work?",
    a: "You pay 50% to confirm your start date and the remaining 50% on final delivery.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Starter includes 7 days of free support, Business 30 days and Premium 90 days. After that, you can choose the monthly maintenance plan at ₹2,500 per month.",
  },
  {
    q: "Can you guarantee Google rankings?",
    a: "No. Anyone who guarantees rankings is overpromising. Technical fixes help within weeks, and rankings usually build over 3 to 6 months.",
  },
];

export default function PuneWebDevPage() {
  const pageDate = getPageDate("/website-development-pune");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design & Development",
    serviceType: "Web Design and Development",
    description:
      "Web design and development company in Pune. Fixed-price websites live in 7 days, from ₹12,999. Free 15-minute consultation. Get a quote today.",
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      telephone: "+919373917738",
      email: SITE.contactEmail,
      url: SITE.siteUrl,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    offers: {
      "@type": "Offer",
      price: "12999",
      priceCurrency: "INR",
      description: "Starter website up to 5 pages, live in 7 days, from ₹12,999.",
      url: `${SITE.siteUrl}/website-development-pune`,
    },
    url: `${SITE.siteUrl}/website-development-pune`,
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
        name: "Web Design & Development Company in Pune",
        item: `${SITE.siteUrl}/website-development-pune`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
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
        {/* Hero Section */}
        <section
          style={{
            padding: "80px 24px 60px",
            maxWidth: "1140px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="section-label">PUNE, MAHARASHTRA · WEB STUDIO</span>
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text)",
              marginTop: "12px",
              marginBottom: "18px",
            }}
          >
            Web Design &amp; Development Company in Pune: Live in 7 Days
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "740px",
              margin: "0 auto 16px",
            }}
          >
            techiitfly is a <strong>web design company in Pune</strong> and full-service{" "}
            <strong>website development company in Pune</strong>. We build fast, mobile-friendly websites for
            businesses at fixed prices, and Starter websites go live in 7 days. Prices start at ₹12,999 (excluding
            GST).
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "0.98rem",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "700px",
              margin: "0 auto 20px",
            }}
          >
            Whether you need an experienced <strong>website designer in Pune</strong> for clean, brand-defining UI or a
            dedicated <strong>web developer in Pune</strong> for fast, conversion-optimized code, founder Aditya Chavhan
            delivers guaranteed timelines and complete ownership.
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.78rem",
              color: "var(--muted)",
              marginBottom: "28px",
            }}
          >
            Last updated: {pageDate.display}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <PuneWhatsAppButton
              text="Book a free 15-minute call"
              variant="primary"
              action="consult"
              location="pune_hero_consult"
            />
            <PuneWhatsAppButton
              text="Chat on WhatsApp"
              variant="secondary"
              action="whatsapp"
              message="Hi techiitfly, I'm looking for a web design company in Pune."
              location="pune_hero_whatsapp"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.8rem",
              color: "var(--muted)",
            }}
          >
            <span>Direct contact in Pune</span>
            <span>·</span>
            <span>7-day launch guarantee</span>
            <span>·</span>
            <span>Fixed quote in 24 hours</span>
          </div>
        </section>

        {/* Website packages for Pune businesses */}
        <section
          id="packages"
          style={{
            padding: "70px 24px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="section-label">FIXED PRICING</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Website packages for Pune businesses
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  lineHeight: 1.55,
                  color: "var(--muted)",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Clear inclusions, guaranteed turnaround, and no surprise invoices.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                marginBottom: "36px",
              }}
            >
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "14px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-instrument-serif)",
                          fontSize: "1.9rem",
                          fontWeight: 400,
                          color: "var(--text)",
                          margin: 0,
                        }}
                      >
                        {pkg.name}
                      </h3>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          color: pkg.badgeColor,
                          border: `1px solid ${pkg.badgeColor}`,
                          padding: "3px 8px",
                          borderRadius: "4px",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {pkg.badge}
                      </span>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "1.85rem",
                          fontWeight: 700,
                          color: "var(--text)",
                        }}
                      >
                        {pkg.price}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-sans)",
                          fontSize: "0.85rem",
                          color: "var(--muted)",
                          marginLeft: "6px",
                        }}
                      >
                        excl. GST
                      </span>
                    </div>

                    <p
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.92rem",
                        lineHeight: 1.55,
                        color: "var(--muted)",
                        marginBottom: "20px",
                      }}
                    >
                      {pkg.summary}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {pkg.bullets.map((b, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "10px",
                            fontFamily: "var(--font-geist-sans)",
                            fontSize: "0.9rem",
                            color: "var(--text)",
                          }}
                        >
                          <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem" }}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <PuneWhatsAppButton
                    text={`Choose ${pkg.name}`}
                    variant={pkg.id === "business" ? "primary" : "secondary"}
                    action="whatsapp"
                    message={`Hi techiitfly, I'm interested in the ${pkg.name} website package in Pune.`}
                    location={`pune_pkg_${pkg.id}`}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                textAlign: "center",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.98rem",
                color: "var(--muted)",
              }}
            >
              See the full details on the{" "}
              <Link
                href="/pricing"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                pricing page
              </Link>{" "}
              and our guide to{" "}
              <Link
                href="/website-cost-india"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                website cost in India
              </Link>
              .
            </div>

            <div
              style={{
                textAlign: "center",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                marginTop: "12px",
              }}
            >
              Need an online store? See our{" "}
              <Link
                href="/ecommerce-website-development-pune"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                ecommerce website development in Pune
              </Link>
              .
            </div>
          </div>
        </section>

        {/* Selected Work (Client Case Studies & Live Proof) */}
        <SelectedWork />

        {/* Custom Platforms & SaaS Banner */}
        <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px 40px" }}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                FULL-STACK PLATFORMS &amp; SAAS
              </span>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  margin: "4px 0 0",
                  fontWeight: 500,
                }}
              >
                Need more than a website? We engineered Mathsy, a 4-portal learning platform for an education academy, and
                we build Mathsy Meet, our own live classroom product.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                href="/work/mathsy"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Mathsy Case Study →
              </Link>
              <Link
                href="/mathsy-meet"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Mathsy Meet →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Pune businesses choose techiitfly */}
        <section
          style={{
            padding: "80px 24px",
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="section-label">WHY TECHIITFLY</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Why Pune businesses choose techiitfly
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  lineHeight: 1.55,
                  color: "var(--muted)",
                  maxWidth: "580px",
                  margin: "0 auto",
                }}
              >
                Engineered for speed, full transparency, and zero technical debt.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {WHY_CHOOSE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.94rem",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {item.hasMaintenanceLink ? (
                      <>
                        Free support for 7, 30 or 90 days depending on the package, then optional{" "}
                        <Link
                          href="/website-maintenance-services"
                          style={{
                            color: "var(--accent)",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                            fontWeight: 600,
                          }}
                        >
                          website maintenance
                        </Link>{" "}
                        at ₹2,500 per month.
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          style={{
            padding: "80px 24px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="section-label">OUR PROCESS</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                How it works
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  lineHeight: 1.55,
                  color: "var(--muted)",
                  maxWidth: "580px",
                  margin: "0 auto",
                }}
              >
                A clear, predictable roadmap from initial discussion to launch.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
              }}
            >
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "32px 26px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <Guarantee />

        {/* Consultation Band */}
        <ConsultationBand />

        {/* Frequently asked questions */}
        <section
          id="faq"
          style={{
            padding: "80px 24px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="section-label">PUNE WEB DESIGN FAQS</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginTop: "8px",
                }}
              >
                Frequently asked questions
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="faq-item group"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <summary
                    style={{
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "14px",
                      cursor: "pointer",
                      listStyle: "none",
                      userSelect: "none",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "var(--text)",
                        margin: 0,
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
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div style={{ padding: "0 24px 20px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        color: "var(--muted)",
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Get a fixed quote */}
        <section
          id="quote"
          style={{
            padding: "80px 24px 60px",
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <span className="section-label">GET A QUOTE</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: "10px",
                marginBottom: "14px",
              }}
            >
              Get a fixed quote
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.06rem",
                lineHeight: 1.6,
                color: "var(--muted)",
                marginBottom: "32px",
              }}
            >
              Tell us what you want to build and we will reply within 24 hours (Mon–Sat).
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "28px",
              }}
            >
              <PuneWhatsAppButton
                text="Chat on WhatsApp"
                variant="primary"
                action="whatsapp"
                message="Hi techiitfly, I'd like to get a fixed quote for website development in Pune."
                location="pune_bottom_quote"
              />
            </div>

            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginBottom: "36px",
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
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                Pricing
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/website-cost-india"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                Website cost in India
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/website-maintenance-services"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                Website maintenance services
              </Link>
            </div>
          </div>
        </section>

        {/* Industry solutions callout */}
        <div style={{ textAlign: "center", padding: "24px 20px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.92rem", color: "var(--muted)", margin: 0 }}>
            Looking for specialized industry solutions? We build websites tailored for{" "}
            <Link
              href="/websites-for-dentists"
              style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
            >
              Dentists &amp; Dental Clinics in Pune
            </Link>
            ,{" "}
            <Link
              href="/websites-for-coaching-classes"
              style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Coaching Classes &amp; Tutors
            </Link>
            , and{" "}
            <Link
              href="/websites-for-yoga-schools"
              style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Yoga Schools &amp; Retreats
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
