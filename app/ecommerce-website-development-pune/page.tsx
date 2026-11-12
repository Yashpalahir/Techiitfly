import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EcommercePuneWhatsAppButton from "@/components/ui/EcommercePuneWhatsAppButton";
import EcommerceScrollBackdrop from "@/components/ecommerce/EcommerceScrollBackdrop";
import { SITE } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: "Ecommerce Website Development in Pune | From ₹59,999",
  },
  description:
    "Ecommerce website development company in Pune. Online stores with payment gateway and admin dashboard from ₹59,999, live in 14–21 days. Free 15-minute call.",
  keywords: [
    "ecommerce website development in Pune",
    "ecommerce website development company in Pune",
    "online store development Pune",
    "ecommerce web designer Pune",
    "ecommerce website cost in Pune",
  ],
  alternates: {
    canonical: "/ecommerce-website-development-pune",
  },
  openGraph: buildOpenGraph({
    title: "Ecommerce Website Development in Pune | From ₹59,999",
    description:
      "Ecommerce website development company in Pune. Online stores with payment gateway and admin dashboard from ₹59,999, live in 14–21 days. Free 15-minute call.",
    path: "/ecommerce-website-development-pune",
    image: "/og/industry-pune.png",
    alt: "Ecommerce Website Development in Pune | techiitfly",
  }),
  twitter: buildTwitter({
    title: "Ecommerce Website Development in Pune | From ₹59,999",
    description:
      "Ecommerce website development company in Pune. Online stores with payment gateway and admin dashboard from ₹59,999, live in 14–21 days. Free 15-minute call.",
    image: "/og/industry-pune.png",
  }),
};

const WHAT_YOU_GET = [
  "An online store or a website with 15+ pages",
  "Payment gateway or booking",
  "Custom design and animations",
  "Advanced SEO",
  "Admin dashboard to manage your store",
  "Speed and security hardening",
  "2 rounds of design changes",
  "90 days of free support after launch",
  "Live in 14–21 days",
];

const COST_ROWS = [
  { item: "Online store (Premium package)", price: "From ₹59,999", highlight: true },
  { item: "Extra page", price: "₹1,500 per page" },
  { item: "Domain + hosting (1 year)", price: "₹4,000" },
  { item: "Content writing (standard page)", price: "₹800 per page" },
  { item: "Content writing (home or landing page)", price: "₹2,000 per page" },
  { item: "AI Search Setup (with a new website)", price: "₹7,999" },
  { item: "Maintenance", price: "₹2,500 per month" },
  { item: "Express delivery", price: "+30%" },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: "Fixed price.",
    desc: "You get a clear quote before work starts. No surprise bills.",
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
    desc: "90 days of free support, then optional website maintenance at ₹2,500 per month.",
    hasMaintenanceLink: true,
  },
  {
    title: "Built for more than brochure sites.",
    desc: "We built Mathsy, a 4-portal learning platform, and we run our own product, Mathsy Meet. See our selected work.",
    hasProductLinks: true,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Share what you sell",
    text: "Share what you sell and how you want to sell it, on WhatsApp or a free 15-minute call.",
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
    title: "Launch & 90-day support",
    text: "Launch, pay the rest on delivery, and get 90 days of free support.",
  },
];

const FAQS = [
  {
    q: "How much does an ecommerce website cost in Pune?",
    a: "Online stores start at ₹59,999 (excluding GST) with the Premium package, which includes a payment gateway, an admin dashboard and advanced SEO. Add-ons such as extra pages, content writing and domain and hosting are priced separately.",
  },
  {
    q: "How long does it take to build an online store?",
    a: "Premium websites and online stores go live in 14–21 days. Express delivery is available for an extra 30%.",
  },
  {
    q: "Is a payment gateway included?",
    a: "The Premium package includes payment gateway or booking set up. Transaction fees charged by the payment provider are paid directly to that provider.",
  },
  {
    q: "Do I own my online store and its code?",
    a: "Yes. After the final payment, the complete code, assets and design files are yours.",
  },
  {
    q: "How does payment work?",
    a: "You pay 50% to confirm your start date and the remaining 50% on final delivery.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Premium includes 90 days of free support. After that, you can choose the monthly maintenance plan at ₹2,500 per month.",
  },
  {
    q: "Can you guarantee Google rankings or sales?",
    a: "No. Anyone who guarantees rankings or sales is overpromising. Technical fixes help within weeks, and rankings usually build over 3 to 6 months.",
  },
];

export default function EcommercePunePage() {
  const pageDate = getPageDate("/ecommerce-website-development-pune");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ecommerce Website Development",
    serviceType: "Ecommerce Website Development",
    description:
      "Ecommerce website development company in Pune. Online stores with payment gateway and admin dashboard from ₹59,999, live in 14–21 days. Free 15-minute call.",
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://www.techiitfly.com/#organization",
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
      price: "59999",
      priceCurrency: "INR",
      description: "Online store (Premium package) starting at ₹59,999.",
      url: `${SITE.siteUrl}/ecommerce-website-development-pune`,
    },
    url: `${SITE.siteUrl}/ecommerce-website-development-pune`,
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
        name: "Ecommerce Website Development in Pune",
        item: `${SITE.siteUrl}/ecommerce-website-development-pune`,
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
      {/* Themed background backdrop for Ecommerce */}
      <EcommerceScrollBackdrop />
      <main style={{ minHeight: "100vh", background: "transparent", paddingTop: "80px", position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <section
          style={{
            padding: "80px 24px 60px",
            maxWidth: "1140px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              marginBottom: "20px",
            }}
          >
            <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "var(--text)" }}>Ecommerce Website Development in Pune</span>
          </nav>

          <span className="section-label">PUNE, MAHARASHTRA · ECOMMERCE STUDIO</span>
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text)",
              marginTop: "12px",
              marginBottom: "18px",
            }}
          >
            Ecommerce Website Development Company in Pune
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "760px",
              margin: "0 auto 20px",
            }}
          >
            techiitfly is an ecommerce website development company in Pune. We build online stores with a payment
            gateway, an admin dashboard and advanced SEO, at a fixed price. Online stores start at ₹59,999 (excluding
            GST) and go live in 14–21 days.
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
            <EcommercePuneWhatsAppButton
              text="Get a fixed quote on WhatsApp"
              location="ecommerce_pune_hero"
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
            <span>14–21 day launch</span>
            <span>·</span>
            <span>Fixed quote in 24 hours</span>
          </div>
        </section>

        {/* What you get with an online store (Premium package, from ₹59,999) */}
        <section
          style={{
            padding: "70px 24px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span className="section-label">PACKAGE INCLUSIONS</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                What you get with an online store (Premium package, from ₹59,999)
              </h2>
            </div>

            {/* Clean checklist card in the same style as Premium on /pricing */}
            <div
              style={{
                background: "var(--bg)",
                border: "1.5px solid var(--accent)",
                borderRadius: "14px",
                padding: "36px 32px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "24px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      border: "1px solid var(--accent)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    PREMIUM STORE PACKAGE
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginTop: "10px",
                    }}
                  >
                    From ₹59,999{" "}
                    <span
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.88rem",
                        color: "var(--muted)",
                        fontWeight: 400,
                      }}
                    >
                      (excl. GST)
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                  }}
                >
                  ⏱ Live in 14–21 days
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "14px 20px",
                }}
              >
                {WHAT_YOU_GET.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.96rem",
                      color: "var(--text)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.95rem" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ textAlign: "center" }}>
                <EcommercePuneWhatsAppButton
                  text="Get a fixed quote on WhatsApp"
                  location="ecommerce_pune_inclusions_card"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ecommerce website cost in Pune */}
        <section
          style={{
            padding: "80px 24px",
            background: "var(--bg)",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span className="section-label">TRANSPARENT PRICING</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Ecommerce website cost in Pune
              </h2>
            </div>

            {/* Responsive Table (scrolls sideways on small screens) */}
            <div
              style={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                background: "var(--surface)",
                marginBottom: "24px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "480px",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                }}
              >
                <thead>
                  <tr style={{ background: "rgba(255, 255, 255, 0.03)", borderBottom: "1px solid var(--border)" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "16px 20px",
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.78rem",
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Item
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "16px 20px",
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.78rem",
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COST_ROWS.map((row, index) => (
                    <tr
                      key={row.item}
                      style={{
                        borderBottom: index === COST_ROWS.length - 1 ? "none" : "1px solid var(--border)",
                        background: row.highlight ? "rgba(245, 158, 11, 0.04)" : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "16px 20px",
                          fontWeight: row.highlight ? 700 : 500,
                          color: row.highlight ? "var(--accent)" : "var(--text)",
                        }}
                      >
                        {row.item}
                      </td>
                      <td
                        style={{
                          padding: "16px 20px",
                          textAlign: "right",
                          fontFamily: "var(--font-geist-mono)",
                          fontWeight: row.highlight ? 700 : 500,
                          color: row.highlight ? "var(--accent)" : "var(--text)",
                        }}
                      >
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "var(--muted)",
                margin: 0,
              }}
            >
              All prices are in INR and exclude GST. Every project gets a fixed price after a free 15-minute call. See
              the full{" "}
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
            </p>
          </div>
        </section>

        {/* What is not included */}
        <section
          style={{
            padding: "60px 24px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <span className="section-label">CLARITY FIRST</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--text)",
                marginTop: "8px",
                marginBottom: "16px",
              }}
            >
              What is not included
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1rem",
                lineHeight: 1.65,
                color: "var(--muted)",
                margin: 0,
              }}
            >
              Domain registration, third-party software subscriptions and payment gateway transaction fees are paid
              directly to the providers. Extra pages, blog platforms or custom web apps are quoted separately.
            </p>
          </div>
        </section>

        {/* Why Pune businesses choose techiitfly */}
        <section
          style={{
            padding: "80px 24px",
            background: "var(--bg)",
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
                        90 days of free support, then optional{" "}
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
                    ) : item.hasProductLinks ? (
                      <>
                        We built Mathsy, a 4-portal learning platform, and we run our own product,{" "}
                        <Link
                          href="/mathsy-meet"
                          style={{
                            color: "var(--accent)",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                            fontWeight: 600,
                          }}
                        >
                          Mathsy Meet
                        </Link>
                        . See our{" "}
                        <Link
                          href="/#work"
                          style={{
                            color: "var(--accent)",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                            fontWeight: 600,
                          }}
                        >
                          selected work
                        </Link>
                        .
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
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "var(--text)",
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

        {/* Frequently asked questions */}
        <section
          id="faq"
          style={{
            padding: "80px 24px",
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="section-label">COMMON QUESTIONS</span>
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
                    background: "var(--surface)",
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

        {/* Get a fixed quote for your online store */}
        <section
          id="quote"
          style={{
            padding: "80px 24px 60px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <span className="section-label">GET STARTED</span>
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
              Get a fixed quote for your online store
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
              Tell us what you sell and we will reply within 24 hours (Mon–Sat). The first 15-minute call is free.
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
              <EcommercePuneWhatsAppButton
                text="Chat on WhatsApp"
                location="ecommerce_pune_bottom"
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
              <span aria-hidden="true">·</span>
              <Link
                href="/website-development-pune"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                Website development in Pune
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
