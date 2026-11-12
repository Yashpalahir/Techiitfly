import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutWhatsAppButton from "@/components/ui/AboutWhatsAppButton";
import { SITE } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: "About techiitfly | Website Development Company in Pune",
  },
  description:
    "Meet the three co-founders of techiitfly, a Pune website development company. Two IIT Bombay alumni and one NIT Durgapur alumnus building fixed-price websites.",
  keywords: [
    "about techiitfly",
    "website development company in Pune",
    "web design company Pune",
    "IIT Bombay web developers",
    "Aditya Chavhan",
    "Yashpal Baldaniya",
    "Rahul Singh Kotiyal",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: buildOpenGraph({
    title: "About techiitfly | Website Development Company in Pune",
    description:
      "Meet the three co-founders of techiitfly, a Pune website development company. Two IIT Bombay alumni and one NIT Durgapur alumnus building fixed-price websites.",
    path: "/about",
    image: "/og/home.png",
    alt: "About techiitfly — Website Development Company in Pune",
  }),
  twitter: buildTwitter({
    title: "About techiitfly | Website Development Company in Pune",
    description:
      "Meet the three co-founders of techiitfly, a Pune website development company. Two IIT Bombay alumni and one NIT Durgapur alumnus building fixed-price websites.",
    image: "/og/home.png",
  }),
};

const CO_FOUNDERS = [
  {
    initials: "YB",
    name: "Yashpal Baldaniya",
    role: "Co-founder",
    credential: "IIT Bombay alumnus.",
    accent: "#F59E0B",
  },
  {
    initials: "RK",
    name: "Rahul Singh Kotiyal",
    role: "Co-founder",
    credential: "IIT Bombay alumnus.",
    accent: "#06B6D4",
  },
  {
    initials: "AC",
    name: "Aditya Chavhan",
    role: "Co-founder",
    credential: "NIT Durgapur alumnus.",
    accent: "#10B981",
  },
];

const GLANCE_ROWS = [
  {
    label: "What we do",
    value: "Websites, mobile apps, SEO and AI search setup",
  },
  {
    label: "Based in",
    value: "Pune, India",
  },
  {
    label: "Websites from",
    value: "₹12,999 (excluding GST)",
  },
  {
    label: "Mobile apps from",
    value: "₹99,999 (excluding GST)",
  },
  {
    label: "Delivery",
    value: "Starter websites live in 7 days",
  },
  {
    label: "Contact",
    value: "+91 93739 17738 · contact@techiitfly.com",
    isContact: true,
  },
];

const HOW_WE_WORK_ITEMS = [
  {
    title: "Fixed prices.",
    desc: "You get a clear quote before work starts. No surprise bills.",
  },
  {
    title: "Honest advice.",
    desc: "We tell you what you need and what you do not. We do not guarantee rankings, because nobody can.",
  },
  {
    title: "You own your website.",
    desc: "After the final payment, the complete code, assets and design files are yours.",
  },
  {
    title: "Simple payment.",
    desc: "50% to start and 50% on delivery.",
  },
  {
    title: "Support after launch.",
    desc: "Free support for 7, 30 or 90 days depending on the package, then optional website maintenance at ₹2,500 per month.",
    hasMaintenanceLink: true,
  },
];

export default function AboutPage() {
  const pageDate = getPageDate("/about");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.techiitfly.com/about#webpage",
        url: "https://www.techiitfly.com/about",
        name: "About techiitfly | Website Development Company in Pune",
        description:
          "Meet the three co-founders of techiitfly, a Pune website development company. Two IIT Bombay alumni and one NIT Durgapur alumnus building fixed-price websites.",
        about: {
          "@id": "https://www.techiitfly.com/#organization",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.techiitfly.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About",
              item: "https://www.techiitfly.com/about",
            },
          ],
        },
        dateModified: pageDate.iso,
      },
      {
        "@type": "Person",
        "@id": "https://www.techiitfly.com/about#yashpal-baldaniya",
        name: "Yashpal Baldaniya",
        jobTitle: "Co-founder",
        worksFor: {
          "@id": "https://www.techiitfly.com/#organization",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "IIT Bombay",
        },
        sameAs: [
          // TODO: Add LinkedIn URL for Yashpal Baldaniya
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.techiitfly.com/about#rahul-singh-kotiyal",
        name: "Rahul Singh Kotiyal",
        jobTitle: "Co-founder",
        worksFor: {
          "@id": "https://www.techiitfly.com/#organization",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "IIT Bombay",
        },
        sameAs: [
          // TODO: Add LinkedIn URL for Rahul Singh Kotiyal
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.techiitfly.com/about#aditya-chavhan",
        name: "Aditya Chavhan",
        jobTitle: "Co-founder",
        worksFor: {
          "@id": "https://www.techiitfly.com/#organization",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "NIT Durgapur",
        },
        sameAs: [
          // TODO: Add LinkedIn URL for Aditya Chavhan
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px" }}>
        <article style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 24px 100px" }}>
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              marginBottom: "28px",
            }}
          >
            <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "var(--text)" }}>About</span>
          </nav>

          {/* Hero Section */}
          <header style={{ marginBottom: "50px" }}>
            <span className="section-label">PUNE, INDIA · COMPANY PROFILE</span>
            <h1
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--text)",
                marginTop: "12px",
                marginBottom: "20px",
              }}
            >
              About techiitfly
            </h1>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                lineHeight: 1.6,
                color: "var(--muted)",
                maxWidth: "760px",
                margin: "0 0 16px",
              }}
            >
              techiitfly is a website development company in Pune. We build fast, mobile-friendly websites and mobile
              apps for businesses at fixed prices, and Starter websites go live in 7 days. Three co-founders run the
              company.
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
          </header>

          {/* techiitfly at a glance */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              techiitfly at a glance
            </h2>

            <div
              style={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                background: "var(--surface)",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "320px",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                }}
              >
                <tbody>
                  {GLANCE_ROWS.map((row, index) => (
                    <tr
                      key={row.label}
                      style={{
                        borderBottom:
                          index === GLANCE_ROWS.length - 1 ? "none" : "1px solid var(--border)",
                      }}
                    >
                      <th
                        scope="row"
                        style={{
                          textAlign: "left",
                          padding: "16px 20px",
                          fontWeight: 700,
                          color: "var(--text)",
                          width: "36%",
                          verticalAlign: "top",
                          background: "rgba(255, 255, 255, 0.02)",
                          borderRight: "1px solid var(--border)",
                        }}
                      >
                        {row.label}
                      </th>
                      <td
                        style={{
                          padding: "16px 20px",
                          color: "var(--muted)",
                          verticalAlign: "top",
                        }}
                      >
                        {row.isContact ? (
                          <span>
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
                          </span>
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Meet the co-founders */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              Meet the co-founders
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {CO_FOUNDERS.map((founder) => (
                <div
                  key={founder.name}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    padding: "32px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {/* Clean Initials Avatar Placeholder (ready for future photo swap) */}
                  <div
                    style={{
                      width: "84px",
                      height: "84px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0.04) 100%)",
                      border: "2px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      marginBottom: "18px",
                      letterSpacing: "0.04em",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                    }}
                    aria-label={`Avatar for ${founder.name}`}
                  >
                    {founder.initials}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      margin: "0 0 6px",
                    }}
                  >
                    {founder.name}
                  </h3>

                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "12px",
                    }}
                  >
                    {founder.role}
                  </span>

                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {founder.credential}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How we work */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              How we work
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {HOW_WE_WORK_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
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
                        fontSize: "1.06rem",
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
                      fontSize: "0.92rem",
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
          </section>

          {/* What we build */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              What we build
            </h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <li
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "18px 22px",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>●</span>
                <span>
                  Websites for businesses, from ₹12,999. See our{" "}
                  <Link
                    href="/pricing"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
                  >
                    pricing
                  </Link>{" "}
                  and our guide to{" "}
                  <Link
                    href="/website-cost-india"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
                  >
                    website cost in India
                  </Link>
                  .
                </span>
              </li>

              <li
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "18px 22px",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>●</span>
                <span>Mobile apps, from ₹99,999.</span>
              </li>

              <li
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "18px 22px",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>●</span>
                <span>
                  SEO and AI search setup, so your website can be found on Google and understood by AI assistants like
                  ChatGPT, Gemini and Perplexity.
                </span>
              </li>

              <li
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "18px 22px",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>●</span>
                <span>
                  Websites for specific industries:{" "}
                  <Link
                    href="/websites-for-dentists"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    dentists and clinics
                  </Link>
                  ,{" "}
                  <Link
                    href="/websites-for-coaching-classes"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    coaching classes
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/websites-for-yoga-schools"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    yoga schools
                  </Link>
                  . Local work:{" "}
                  <Link
                    href="/website-development-pune"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    website development in Pune
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </section>

          {/* Our own products */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--text)",
                marginBottom: "16px",
              }}
            >
              Our own products
            </h2>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  margin: 0,
                }}
              >
                We also build and run software ourselves. One of them is{" "}
                <Link
                  href="/mathsy-meet"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    fontWeight: 700,
                  }}
                >
                  Mathsy Meet
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Policies */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--text)",
                marginBottom: "16px",
              }}
            >
              Policies
            </h2>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px 24px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px 16px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.95rem",
              }}
            >
              <Link
                href="/terms"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Terms
              </Link>
              <span style={{ color: "var(--border)" }}>·</span>
              <Link
                href="/privacy"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Privacy policy
              </Link>
              <span style={{ color: "var(--border)" }}>·</span>
              <Link
                href="/refund-policy"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Refund and cancellation policy
              </Link>
              <span style={{ color: "var(--border)" }}>·</span>
              <Link
                href="/delivery-policy"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Service delivery policy
              </Link>
            </div>
          </section>

          {/* Talk to us */}
          <section
            id="contact"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "48px 28px",
              textAlign: "center",
            }}
          >
            <span className="section-label">GET IN TOUCH</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--text)",
                marginTop: "10px",
                marginBottom: "14px",
              }}
            >
              Talk to us
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.6,
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto 28px",
              }}
            >
              Tell us what you want to build and we will reply within 24 hours (Mon–Sat). The first 15-minute call is free.
            </p>

            <div style={{ marginBottom: "24px" }}>
              <AboutWhatsAppButton text="Book a free 15-minute call" location="about_bottom_cta" />
            </div>

            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.85rem",
                color: "var(--muted)",
                margin: 0,
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
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
