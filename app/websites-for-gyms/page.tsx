import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GymScrollBackdrop from "@/components/gym/GymScrollBackdrop";
import { SITE, getConsultUrl, getWhatsAppUrl } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Websites for Gyms & Fitness Centers | From ₹12,999",
  description:
    "Website development for gyms, fitness clubs and CrossFit boxes in Pune & India. Membership pricing tables, trainer profiles, class schedules and 1-tap WhatsApp free trial bookings. Live in 7 days.",
  keywords: [
    "websites for gyms",
    "gym website development",
    "fitness center website design",
    "gym website pune",
    "gym membership website",
    "crossfit box website",
    "website for personal trainers",
    "fitness club website cost",
  ],
  alternates: {
    canonical: "/websites-for-gyms",
  },
  openGraph: buildOpenGraph({
    title: "Websites for Gyms & Fitness Centers | From ₹12,999",
    description:
      "Website development for gyms, fitness clubs and CrossFit boxes in Pune & India. Membership pricing tables, trainer profiles, class schedules and 1-tap WhatsApp free trial bookings. Live in 7 days.",
    path: "/websites-for-gyms",
    image: "/og/pricing.png",
    alt: "Websites for Gyms & Fitness Centers | techiitfly",
  }),
  twitter: buildTwitter({
    title: "Websites for Gyms & Fitness Centers | From ₹12,999",
    description:
      "Website development for gyms, fitness clubs and CrossFit boxes in Pune & India. Membership pricing tables, trainer profiles, class schedules and 1-tap WhatsApp free trial bookings. Live in 7 days.",
    image: "/og/pricing.png",
  }),
};

const GYM_FAQS = [
  {
    q: "How does the WhatsApp free trial booking work?",
    a: "Visitors tap a 1-click button on your website ('Claim Free 1-Day Trial Pass') that opens WhatsApp with a pre-filled message mentioning their preferred workout time or goal (e.g. 'Hi, I'd like to book a free 1-day workout trial at your gym'). You get their direct phone number instantly without friction.",
  },
  {
    q: "Can members check our workout class timetable and batch timings on their phones?",
    a: "Yes. We build responsive, swipe-friendly weekly schedules showing morning and evening batches for Strength & Conditioning, HIIT, Zumba, CrossFit, Cardio, and Yoga with timings and trainer names clearly displayed.",
  },
  {
    q: "Will this website help our gym rank on Google Maps when people search 'gym near me'?",
    a: "Yes. Every website includes Local Business (ExerciseGym / HealthClub) Schema, exact NAP (Name, Address, Phone) parity with your Google Business Profile, and high Core Web Vitals speed scores (100% on mobile) that Google rewards in local Pune search rankings.",
  },
  {
    q: "Can we display membership fees and personal training rates transparently?",
    a: "Yes. We create clean, mobile-optimized comparison tables for Monthly, Quarterly, Half-Yearly, and Annual packages, plus Personal Training (PT) tiers, eliminating repetitive DMs asking 'Bhai gym ki fee kitni hai?'.",
  },
  {
    q: "Can we collect online membership payments and renewals on the website?",
    a: "Yes. On our Business and Premium packages, we integrate secure payment gateways (UPI, Google Pay, PhonePe, Debit/Credit Cards, Net Banking via Razorpay or Stripe) so members can pay and renew their subscriptions online with automated receipt generation.",
  },
  {
    q: "How fast will our gym website go live, and what do we need to provide?",
    a: "Starter gym websites launch in 7 days guaranteed once we receive your photos, trainer details, pricing tiers, and contact information. We handle all design, copywriting, mobile speed optimization, and deployment.",
  },
];

const GYM_FEATURES = [
  {
    icon: "💳",
    title: "Transparent Membership Tables",
    desc: "Display monthly, quarterly, and annual fee plans with exact inclusions (steam, cardio, lockers, trainer support) so prospects are pre-sold before visiting.",
  },
  {
    icon: "📲",
    title: "1-Tap WhatsApp Trial Passes",
    desc: "Capture walk-in leads directly on WhatsApp with pre-filled messages: 'Hi, I want to book a free 1-day trial workout'. Eliminates drop-offs.",
  },
  {
    icon: "🗓️",
    title: "Live Class Timetable & Schedule",
    desc: "Mobile-friendly daily and weekly slots for Zumba, HIIT, Strength, CrossFit, and functional training with coach names and batch capacities.",
  },
  {
    icon: "🏋️‍♂️",
    title: "Trainer & Coach Showcase",
    desc: "Highlight certified personal trainers (ACE, ACSM, K11, ISSA), specializations (fat loss, powerlifting, bodybuilding), and coaching track records.",
  },
  {
    icon: "📸",
    title: "Virtual Gym Floor & Equipment Tour",
    desc: "Showcase imported gym machines, free weights section, Olympic barbells, turf area, changing rooms, and hygiene standards with high-speed photos.",
  },
  {
    icon: "📍",
    title: "Google Maps & Local Pune SEO",
    desc: "Rank higher when local fitness enthusiasts search 'best gym near me' or 'fitness center in [locality]' with localized Schema.org markup.",
  },
  {
    icon: "🔥",
    title: "Member Transformations & Results",
    desc: "Inspire trust with before-and-after photo galleries, fat-loss milestones, and verified Google reviews from real members.",
  },
  {
    icon: "⚡",
    title: "100% Mobile Speed Performance",
    desc: "Engineered with Next.js and Tailwind CSS for instant sub-second loading on 4G/5G mobile phones, ensuring zero bounce rate.",
  },
];

const PACKAGES = [
  {
    name: "Starter Gym Website",
    price: "₹12,999",
    timeline: "Live in 7 days",
    badge: "ESSENTIAL",
    desc: "Perfect for single-location gyms, personal training studios, and CrossFit boxes getting their first professional presence.",
    features: [
      "Up to 5 pages (Home, About, Pricing, Timetable, Contact)",
      "Transparent membership fee comparison table",
      "Mobile-friendly class timetable & workout schedule",
      "1-tap WhatsApp 'Book Free Trial' conversion button",
      "Google Maps integration with 1-tap directions",
      "Local Business SEO Schema markup (ExerciseGym)",
      "14 days of post-launch support and bug fixes",
    ],
  },
  {
    name: "Business Gym Website",
    price: "₹29,999",
    timeline: "Live in 7–10 days",
    badge: "MOST POPULAR",
    desc: "For established gyms, multi-sport fitness clubs, and premium health clubs wanting to dominate local search.",
    features: [
      "Up to 10 custom designed pages",
      "Trainer profile directory with certification badges",
      "Transformation gallery with filterable before/after tags",
      "CMS admin panel to update batch timings, offers & seasonal fees",
      "Google Analytics 4 & Meta Pixel conversion tracking",
      "Full local SEO optimization for 'gym near me' queries",
      "30 days of post-launch priority support",
    ],
  },
  {
    name: "Premium / Franchise Gym",
    price: "₹59,999",
    timeline: "Live in 14–21 days",
    badge: "ADVANCED",
    desc: "For gym chains, multi-branch fitness franchises, or clubs requiring online membership renewal and payments.",
    features: [
      "15+ pages or multi-branch location selector (e.g. Kothrud, Baner, Wakad)",
      "Online membership payment gateway (UPI, Cards, Net Banking)",
      "Automated PDF invoice & renewal receipt generation",
      "Member lead management database & CRM connection",
      "Advanced speed hardening and enterprise security",
      "Custom member enquiry forms & trial passes per branch",
      "90 days of dedicated priority support",
    ],
  },
];

export default function WebsitesForGymsPage() {
  const pageDate = getPageDate("/websites-for-gyms");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Websites for Gyms & Fitness Centers",
    name: "Websites for Gyms & Fitness Centers",
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
    description:
      "Specialized website development for gyms, fitness clubs, CrossFit boxes, and personal trainers with membership pricing tables, class schedules, and WhatsApp booking.",
    offers: {
      "@type": "Offer",
      price: "12999",
      priceCurrency: "INR",
      description: "Starter gym website package live in 7 days starting at ₹12,999 (excluding GST).",
    },
    url: `${SITE.siteUrl}/websites-for-gyms`,
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
        name: "Industries",
        item: `${SITE.siteUrl}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Websites for Gyms & Fitness Centers",
        item: `${SITE.siteUrl}/websites-for-gyms`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GYM_FAQS.map((faq) => ({
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

      {/* Themed Interactive Athletic Scroll Backdrop */}
      <GymScrollBackdrop />

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
              alignItems: "center",
              justifyContent: "center",
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
            <Link href="/industries" style={{ color: "var(--muted)", textDecoration: "none" }}>
              Industries
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "var(--text)" }}>Websites for Gyms</span>
          </nav>

          <span className="section-label">🏋️ FITNESS &amp; GYM WEBSITES · LIVE IN 7 DAYS</span>

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
            Websites for Gyms &amp; Fitness Centers: Turn Enquiries into Long-Term Members
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
            techiitfly builds fast, mobile-friendly websites for gyms, CrossFit boxes, and fitness clubs.
            Showcase membership plans, batch timetables, certified trainers, and convert local fitness seekers
            with 1-tap WhatsApp free trial passes. Fixed prices from ₹12,999, live in 7 days.
          </p>

          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.78rem",
              color: "var(--muted)",
              marginBottom: "32px",
            }}
          >
            Last updated: {pageDate.display}
          </p>

          {/* Dual CTAs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "20px" }}>
            <a
              href={getConsultUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "8px",
                background: "var(--accent)",
                color: "var(--primary-btn-text, #0e0d0b)",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(245,158,11,0.25)",
              }}
            >
              <span>Book a free 15-min call</span>
              <span>↗</span>
            </a>

            <a
              href={getWhatsAppUrl("Hi techiitfly, I'd like to discuss a website for my gym / fitness center.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 24px",
                borderRadius: "8px",
                background: "transparent",
                color: "var(--text)",
                border: "1.5px solid var(--border)",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <span>Chat on WhatsApp</span>
              <span>↗</span>
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            Fixed quotes · 50% on start, 50% on delivery · Zero vendor lock-in
          </p>
        </section>

        {/* Why a Website Beats Just an Instagram Page */}
        <section style={{ padding: "40px 24px 80px", maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span className="section-label">REALITY CHECK</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: "8px",
                marginBottom: "12px",
              }}
            >
              Why Gyms Need a Website, Not Just an Instagram Page
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                maxWidth: "680px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Social media is great for hype, but your website is where local members convert into paying annual plans.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                num: "01",
                title: "High-Intent Google Searches",
                desc: "When someone types 'gym near me' or 'best CrossFit box in Pune', they are looking to pay today. Instagram algorithms hide your reels unless you pay daily ad spend.",
              },
              {
                num: "02",
                title: "Ends 50+ 'Bhai Fee Kitni Hai?' DMs",
                desc: "Prospects hate messaging and waiting 8 hours for gym fee details. Transparent pricing tables pre-qualify members so your front desk only talks to serious buyers.",
              },
              {
                num: "03",
                title: "Zero-Friction WhatsApp Trial Passes",
                desc: "A single tap creates an instant WhatsApp message with their preferred workout slot. You get their verified phone number directly in your chat box.",
              },
              {
                num: "04",
                title: "Builds Local Authority & Trust",
                desc: "An independent website featuring trainer qualifications (K11, ACE, ISSA), certified equipment, and clean locker rooms proves your facility is legitimate.",
              },
            ].map((card) => (
              <div
                key={card.num}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg, 12px)",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                  }}
                >
                  {card.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.92rem",
                    lineHeight: 1.55,
                    color: "var(--muted)",
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Features for Gym Websites */}
        <section
          style={{
            padding: "80px 24px",
            background: "var(--surface-2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <span className="section-label">BUILT FOR CONVERSIONS</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Everything a Modern Gym Website Needs
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  maxWidth: "680px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Every feature is engineered to remove friction, showcase your facility, and fill your gym floor with new members.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {GYM_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg, 12px)",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "4px" }} aria-hidden="true">
                    {feat.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      margin: 0,
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Interactive Timetable & Pricing Preview Card */}
        <section style={{ padding: "80px 24px", maxWidth: "1040px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-label">LIVE PREVIEW</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: "8px",
                marginBottom: "12px",
              }}
            >
              Clean, Mobile-First Timetables That Members Love
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                maxWidth: "680px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Here is an example of how your gym schedule and membership tiers look and feel on a phone.
            </p>
          </div>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "32px 28px",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "16px",
                marginBottom: "24px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  ⚡ Daily Batch Schedule (Example)
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.85rem", color: "var(--muted)", margin: "4px 0 0" }}>
                  Updated weekly · Morning &amp; Evening Batches
                </p>
              </div>

              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.78rem",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                🟢 1-Day Trial Passes Available
              </span>
            </div>

            <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <table
                style={{
                  width: "100%",
                  minWidth: "600px",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                    <th style={{ padding: "14px 16px", color: "var(--muted)", fontWeight: 600 }}>Time</th>
                    <th style={{ padding: "14px 16px", color: "var(--muted)", fontWeight: 600 }}>Class &amp; Format</th>
                    <th style={{ padding: "14px 16px", color: "var(--muted)", fontWeight: 600 }}>Lead Coach</th>
                    <th style={{ padding: "14px 16px", color: "var(--muted)", fontWeight: 600 }}>Intensity</th>
                    <th style={{ padding: "14px 16px", color: "var(--muted)", fontWeight: 600 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: "06:30 AM – 07:30 AM", class: "Strength & Conditioning", coach: "Head Coach Aman (CSCS)", intensity: "High 🔥", msg: "Strength batch (6:30 AM)" },
                    { time: "07:45 AM – 08:30 AM", class: "HIIT & Core Burn", coach: "Coach Priya (ACE)", intensity: "Very High ⚡", msg: "HIIT batch (7:45 AM)" },
                    { time: "09:00 AM – 10:00 AM", class: "Mobility & Recovery Yoga", coach: "Coach Rohan", intensity: "Moderate 🧘", msg: "Mobility Yoga (9:00 AM)" },
                    { time: "05:30 PM – 06:30 PM", class: "CrossFit & Kettlebell", coach: "Coach Aman (CrossFit L2)", intensity: "High 🔥", msg: "CrossFit batch (5:30 PM)" },
                    { time: "07:00 PM – 08:00 PM", class: "Cardio Kickboxing / Zumba", coach: "Coach Ananya", intensity: "High 🥊", msg: "Kickboxing batch (7:00 PM)" },
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "16px", fontFamily: "var(--font-geist-mono)", fontSize: "0.85rem", color: "var(--text)" }}>
                        {row.time}
                      </td>
                      <td style={{ padding: "16px", fontWeight: 600, color: "var(--text)" }}>{row.class}</td>
                      <td style={{ padding: "16px", color: "var(--muted)" }}>{row.coach}</td>
                      <td style={{ padding: "16px", color: "var(--accent)", fontWeight: 600 }}>{row.intensity}</td>
                      <td style={{ padding: "16px" }}>
                        <a
                          href={getWhatsAppUrl(`Hi, I'd like to book a free trial for the ${row.msg}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            background: "var(--accent-dim)",
                            color: "var(--accent)",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            textDecoration: "none",
                          }}
                        >
                          <span>Book Slot</span>
                          <span>↗</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Packages & Pricing Section */}
        <section
          id="packages"
          style={{
            padding: "80px 24px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <span className="section-label">FIXED-PRICE TIERS</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Website Packages for Gyms &amp; Fitness Clubs
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  maxWidth: "680px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Upfront quotes before work starts. Starter websites go live on your domain in 7 days guaranteed.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px",
                alignItems: "stretch",
              }}
            >
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "36px 28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "var(--card-shadow)",
                    position: "relative",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "16px",
                      }}
                    >
                      {pkg.badge}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-instrument-serif)",
                        fontSize: "1.85rem",
                        fontWeight: 400,
                        color: "var(--text)",
                        margin: "0 0 8px",
                      }}
                    >
                      {pkg.name}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-geist-sans)",
                          fontSize: "2.1rem",
                          fontWeight: 700,
                          color: "var(--accent)",
                        }}
                      >
                        {pkg.price}
                      </span>
                      <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.82rem", color: "var(--muted)" }}>
                        + GST
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.82rem",
                        color: "var(--text)",
                        fontWeight: 600,
                        marginBottom: "16px",
                      }}
                    >
                      ⚡ {pkg.timeline}
                    </div>

                    <p
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.92rem",
                        color: "var(--muted)",
                        lineHeight: 1.55,
                        marginBottom: "24px",
                      }}
                    >
                      {pkg.desc}
                    </p>

                    <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px", marginBottom: "28px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          display: "block",
                          marginBottom: "14px",
                        }}
                      >
                        What&apos;s Included:
                      </span>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                        {pkg.features.map((feat, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "10px",
                              fontFamily: "var(--font-geist-sans)",
                              fontSize: "0.88rem",
                              color: "var(--text)",
                              lineHeight: 1.45,
                            }}
                          >
                            <span style={{ color: "var(--accent)", fontWeight: 800, flexShrink: 0 }}>✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hi techiitfly, I'm interested in the ${pkg.name} for my gym.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "14px 22px",
                      borderRadius: "8px",
                      background: "var(--accent)",
                      color: "var(--primary-btn-text, #0e0d0b)",
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <span>Get a quote on WhatsApp</span>
                    <span>↗</span>
                  </a>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.92rem",
                color: "var(--muted)",
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              See all add-ons and maintenance tiers on our <Link href="/pricing" style={{ color: "var(--accent)", textDecoration: "underline" }}>Pricing Page</Link> and read our comprehensive <Link href="/website-cost-india" style={{ color: "var(--accent)", textDecoration: "underline" }}>Website Cost in India</Link> guide.
            </p>
          </div>
        </section>

        {/* 7-Day Roadmap */}
        <section style={{ padding: "80px 24px", maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-label">HOW WE WORK</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: "8px",
                marginBottom: "12px",
              }}
            >
              From Concept to Launch in 7 Days
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              We run a streamlined engineering sprint so your gym website goes live without dragging on for months.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                day: "Day 1",
                title: "15-Minute Discovery & Asset Collection",
                desc: "We discuss your membership tiers, batch timings, trainer profiles, and collect your gym logo and photos.",
              },
              {
                day: "Day 2–3",
                title: "UI Design & Schedule Architecture",
                desc: "We build your mobile-first layout with clean typography, class schedules, and high-visibility trial callouts.",
              },
              {
                day: "Day 4–5",
                title: "Copywriting, Membership Tables & WhatsApp Funnels",
                desc: "We write clean, persuasive copy, configure transparent fee comparison tables, and set up 1-tap WhatsApp lead triggers.",
              },
              {
                day: "Day 6",
                title: "Google Local SEO & Speed Optimization",
                desc: "We implement ExerciseGym Schema markup, connect Google Maps, and harden performance for 100% Google PageSpeed scores.",
              },
              {
                day: "Day 7",
                title: "Live Launch on Your Domain & Handover",
                desc: "Final testing, domain DNS setup, SSL deployment, and 100% transfer of code and assets to you. You own everything.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                >
                  {step.day}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      margin: "0 0 6px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.92rem",
                      lineHeight: 1.55,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section
          id="faq"
          style={{
            padding: "80px 24px",
            background: "var(--surface-2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="section-label">FAQS</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                Everything you need to know about our gym and fitness website development services.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {GYM_FAQS.map((faq, index) => (
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
          </div>
        </section>

        {/* Final CTA Band */}
        <section style={{ padding: "80px 24px", maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "48px 32px",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <span className="section-label">GET STARTED TODAY</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: "10px",
                marginBottom: "16px",
              }}
            >
              Ready to Pack Your Gym Floor with New Members?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              Tell us about your fitness center, training programs, and goals. We reply within 24 hours (Mon–Sat) with a fixed-price proposal.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "24px" }}>
              <a
                href={getWhatsAppUrl("Hi techiitfly, I'd like a fixed quote for my gym website.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "var(--primary-btn-text, #0e0d0b)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(245,158,11,0.25)",
                }}
              >
                <span>Chat on WhatsApp</span>
                <span>↗</span>
              </a>

              <a
                href={getConsultUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 24px",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "var(--text)",
                  border: "1.5px solid var(--border)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>Book a 15-min call</span>
                <span>↗</span>
              </a>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "12px",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.82rem",
                color: "var(--muted)",
                marginBottom: "28px",
              }}
            >
              <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--muted)", textDecoration: "none" }}>
                Call: {SITE.phone}
              </a>
              <span>·</span>
              <a href={`mailto:${SITE.contactEmail}`} style={{ color: "var(--muted)", textDecoration: "none" }}>
                {SITE.contactEmail}
              </a>
              <span>·</span>
              <span>Pune, Maharashtra, India</span>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "20px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px 14px",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.88rem",
                color: "var(--muted)",
              }}
            >
              <span>Explore more:</span>
              <Link href="/pricing" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                Pricing
              </Link>
              <span aria-hidden="true">·</span>
              <Link href="/website-cost-india" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                Website cost in India
              </Link>
              <span aria-hidden="true">·</span>
              <Link href="/website-development-pune" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                Website development in Pune
              </Link>
              <span aria-hidden="true">·</span>
              <Link href="/industries" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                All industries
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
