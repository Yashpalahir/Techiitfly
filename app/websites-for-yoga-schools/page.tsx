import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE, getConsultUrl, getWhatsAppUrl } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { PROCESS_STEPS } from "@/content/process";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";
import YogaFixedZenBackdrop from "@/components/yoga/YogaFixedZenBackdrop";
import styles from "./yoga.module.css";

export const metadata: Metadata = {
  title: "Websites for Yoga Schools & Retreats",
  description:
    "Websites for yoga schools, TTC academies and retreats. Live in 7 days with clear course schedules, teacher bios and direct WhatsApp enquiry buttons.",
  alternates: {
    canonical: "/websites-for-yoga-schools",
  },
  openGraph: buildOpenGraph({
    title: "Websites for Yoga Schools & Retreats | techiitfly",
    description:
      "Website design for yoga schools and retreats with curriculum showcases, WhatsApp lead capture, and international enquiry forms.",
    path: "/websites-for-yoga-schools",
    image: "/og/industry-yoga.png",
    alt: "Websites for Yoga Schools & Retreats | techiitfly",
  }),
  twitter: buildTwitter({
    title: "Websites for Yoga Schools & Retreats | techiitfly",
    description:
      "Website design for yoga schools and retreats with curriculum showcases, WhatsApp lead capture, and international enquiry forms.",
    image: "/og/industry-yoga.png",
  }),
};



// ─── Gentle Organic Wave Divider ──────────────────────────────────────────────
function OrganicDivider() {
  return (
    <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, opacity: 0.5, color: "var(--yoga-border)" }}>
      <svg
        viewBox="0 0 1200 36"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "24px", display: "block" }}
        aria-hidden="true"
      >
        <path d="M0,18 C300,34 900,2 1200,18" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

// ─── Empty Photo Slot Component ───────────────────────────────────────────────
function EmptyPhotoSlot({
  slotName,
  filePath,
  dimensions,
  recommendedUse,
}: {
  slotName: string;
  filePath: string;
  dimensions: string;
  recommendedUse: string;
}) {
  return (
    <div className={styles.imageSlot}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        style={{ color: "var(--yoga-sage)", marginBottom: "12px", opacity: 0.85 }}
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.78rem",
          fontWeight: 700,
          color: "var(--yoga-sage)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}
      >
        [ Owner Photo Slot: {slotName} ]
      </span>
      <p
        style={{
          fontFamily: "var(--font-geist-sans)",
          fontSize: "0.88rem",
          color: "var(--yoga-text)",
          margin: "0 0 6px",
          fontWeight: 500,
        }}
      >
        {recommendedUse}
      </p>
      <code
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.74rem",
          color: "var(--yoga-muted)",
          background: "var(--yoga-surface)",
          padding: "3px 8px",
          borderRadius: "6px",
          border: "1px solid var(--yoga-border)",
        }}
      >
        {filePath} ({dimensions})
      </code>
    </div>
  );
}

// ─── 9 What a Yoga Website Needs Elements ─────────────────────────────────────
const YOGA_WEBSITE_ESSENTIALS = [
  {
    icon: "🗓️",
    title: "Class Schedule & TTC Dates",
    desc: "Clear daily timetables, upcoming 200h/300h cohort intakes, syllabus modules, and seat countdowns so seekers can plan their training dates.",
  },
  {
    icon: "🧘",
    title: "Teacher Bios & Lineage Credentials",
    desc: "Highlight lead gurus, Yoga Alliance (E-RYT) accreditations, ashram traditions, and authentic philosophies to build deep trust with international students.",
  },
  {
    icon: "🌿",
    title: "Online Class & Retreat Booking",
    desc: "Timezone-aware enquiry forms and direct reservation workflows for retreats in Rishikesh, Bali, Goa, or abroad.",
  },
  {
    icon: "💳",
    title: "Direct Deposit Payment Links",
    desc: "Frictionless advance deposit payments via UPI, Razorpay, or international credit card links with zero recurring LMS subscription commissions.",
  },
  {
    icon: "💬",
    title: "1-Tap WhatsApp Lead Capture",
    desc: "Floating and inline WhatsApp buttons pre-filled with the exact course or retreat date the visitor is inquiring about.",
  },
  {
    icon: "🎥",
    title: "YouTube & Class Video Embeds",
    desc: "Lightweight, fast video embeds showing real shala walkthroughs, meditation sound baths, and genuine student feedback.",
  },
  {
    icon: "🏡",
    title: "Dedicated Retreat & Room Pages",
    desc: "Rich showcases of accommodation tiers (private vs. shared shala), sattvic organic meal menus, local excursions, and packing lists.",
  },
  {
    icon: "📖",
    title: "Yoga Blog & SEO Knowledge Base",
    desc: "Publish guides on asanas, pranayama, and Vedic philosophy that rank on Google search and bring organic student enquiries year-round.",
    link: "/blog?category=Yoga+%26+Wellness",
    linkText: "View Yoga & Wellness articles →",
  },
  {
    icon: "⚡",
    title: "Mobile-First & Ultra Fast (Sub-1s)",
    desc: "Over 75% of yoga seekers discover schools on mobile phones while traveling. Clean static export ensures instant load times worldwide.",
  },
];

// ─── 6 Factual FAQs ───────────────────────────────────────────────────────────
const YOGA_FAQS = [
  {
    q: "How much does a website for a yoga school or retreat cost?",
    a: "Our yoga school website packages start from ₹12,999 with fixed, upfront pricing. There are zero monthly platform commissions or hidden software fees. You can view our full tier options and optional add-ons on our pricing page.",
  },
  {
    q: "How fast will our yoga school website be ready?",
    a: "Your website goes live on your domain within 7 days guaranteed, counted from when we receive your course syllabi, teacher bios, and studio photos.",
  },
  {
    q: "Can students book online classes and submit enquiries from abroad?",
    a: "Yes. We configure multi-channel booking paths: direct click-to-chat WhatsApp buttons that work worldwide, timezone-friendly contact forms, and instant email alerts.",
  },
  {
    q: "Can we showcase retreat accommodations, daily schedules, and meal plans?",
    a: "Yes. We build dedicated retreat pages displaying room options (private cottages or shared ashram shalas), hour-by-hour daily routines, sattvic dining details, and excursion schedules.",
  },
  {
    q: "How do students pay advance booking deposits or retreat fees?",
    a: "We integrate direct payment links using gateways like Razorpay, Stripe, or direct UPI/bank transfer links. Students can pay registration deposits directly without you having to pay recurring LMS platform cuts.",
  },
  {
    q: "What maintenance is included after the website launches?",
    a: "Every website includes 14 days of post-launch warranty support. After launch, you own the website completely with zero lock-in. You can manage updates yourself, or subscribe to our monthly care plan for ongoing updates, backups, and SEO.",
  },
];

export default function YogaSchoolsPage() {
  const pageDate = getPageDate("/websites-for-yoga-schools");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Websites for Yoga Schools & Retreats",
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://www.techiitfly.com/#organization",
    },
    description:
      "Specialized website design and development for yoga schools, TTC institutes, and retreat centers.",
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
        name: "Websites for Yoga Schools & Retreats",
        item: `${SITE.siteUrl}/websites-for-yoga-schools`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: YOGA_FAQS.map((faq) => ({
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
      <div className={styles.yogaTheme}>
        {/* Fixed Sticky Background: Meditating Yogi in Dhyan Mudra + Scroll-Accelerated Rotating Sacred Mandala */}
        <YogaFixedZenBackdrop />

        <main style={{ minHeight: "100vh", paddingTop: "80px", position: "relative", zIndex: 1 }}>
          {/* Subtle Ambient Sage Radial Gradient (Zero Yellow/Saffron glare) */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(100vw, 1000px)",
              height: "400px",
              background:
                "radial-gradient(circle at 50% 25%, var(--yoga-sage-dim) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* ─── 1. HERO SECTION ─────────────────────────────────────────────────── */}
          <section
            style={{
              position: "relative",
              padding: "70px 24px 50px",
              maxWidth: "1100px",
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
                color: "var(--yoga-muted)",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Link
                href="/"
                style={{
                  color: "var(--yoga-muted)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
              >
                Home
              </Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <Link
                href="/industries"
                style={{
                  color: "var(--yoga-muted)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
              >
                Industries
              </Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <span style={{ color: "var(--yoga-text)" }}>Yoga Schools</span>
            </nav>

            <span className={styles.yogaBadge} style={{ marginBottom: "16px", position: "relative", zIndex: 1 }}>
              <span>🪷</span>
              <span>CALM &amp; CONVERSION-FOCUSED WEB DESIGN</span>
            </span>

            {/* Exactly one H1 */}
            <h1
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.7rem, 5.8vw, 4.6rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--yoga-text)",
                marginTop: "12px",
                marginBottom: "18px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Websites for Yoga Schools &amp; Retreats
            </h1>

            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "clamp(1.05rem, 1.8vw, 1.24rem)",
                lineHeight: 1.65,
                color: "var(--yoga-muted)",
                maxWidth: "700px",
                margin: "0 auto 24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Turn website visitors into booked students. Clean, serene aesthetics with clear course dates, teacher
              credentials, and instant WhatsApp enquiry paths. Live in 7 days, guaranteed.
            </p>

            {/* Hero CTAs: Primary WhatsApp + Secondary Free Call */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "28px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <a
                href={getWhatsAppUrl("Hi techiitfly, I'd like to discuss a website for our yoga school.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.yogaBtnPrimary}
              >
                <span>WhatsApp us</span>
                <span>↗</span>
              </a>

              <a
                href={getConsultUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.yogaBtnSecondary}
              >
                <span>Book a free 15-min call</span>
                <span>↗</span>
              </a>
            </div>

            {/* Value Badges Strip */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.8rem",
                color: "var(--yoga-muted)",
                marginBottom: "36px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span>✓ Live in 7 Days</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>✓ Yoga Alliance &amp; RYT Ready</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>✓ WhatsApp Direct Inquiries</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>✓ Zero Monthly Platform Fees</span>
            </div>

            {/* ─── OWNER PHOTO SLOT: MAIN STUDIO / SHALA HERO ─────────────────────────
                Replace with actual high-res photo from: /public/images/yoga/shala-hero.webp
                Recommended dimensions: 1200x700px
            ──────────────────────────────────────────────────────────────────────── */}
            <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
              <EmptyPhotoSlot
                slotName="Studio Shala / Practice Space"
                filePath="public/images/yoga/shala-hero.webp"
                dimensions="1200 × 700px"
                recommendedUse="Place your open-air yoga shala, main studio interior, or sunrise meditation photograph here."
              />
            </div>
          </section>

          <OrganicDivider />

          {/* ─── 2. WHAT A YOGA WEBSITE NEEDS ───────────────────────────────────── */}
          <section
            style={{
              position: "relative",
              padding: "70px 24px 80px",
              maxWidth: "1140px",
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className={styles.yogaBadge}>
                <span>🌿</span>
                <span>CORE ESSENTIALS</span>
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                  fontWeight: 400,
                  color: "var(--yoga-text)",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              >
                What a Yoga Website Needs
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  color: "var(--yoga-muted)",
                  maxWidth: "620px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Every element on your website should either clarify your authentic lineage or remove friction from booking a
                spot.
              </p>
            </div>

            {/* 9 Essentials Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {YOGA_WEBSITE_ESSENTIALS.map((item) => (
                <div
                  key={item.title}
                  className={styles.yogaCard}
                  style={{
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>{item.icon}</span>
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: "var(--yoga-text)",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.93rem",
                      lineHeight: 1.6,
                      color: "var(--yoga-muted)",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      style={{
                        marginTop: "auto",
                        paddingTop: "12px",
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--yoga-sage)",
                        textDecoration: "none",
                      }}
                    >
                      {item.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* ─── OWNER PHOTO SLOT: RETREAT ACCOMMODATION / SHALA DETAILS ─────────
                Replace with actual high-res photo from: /public/images/yoga/retreat-accommodation.webp
                Recommended dimensions: 800x520px
            ──────────────────────────────────────────────────────────────────────── */}
            <div style={{ marginTop: "40px" }}>
              <EmptyPhotoSlot
                slotName="Retreat Accommodations &amp; Dining"
                filePath="public/images/yoga/retreat-accommodation.webp"
                dimensions="800 × 520px"
                recommendedUse="Place your retreat cottage, ashram guest room, organic dining space, or herbal tea lounge photograph here."
              />
            </div>
          </section>

          <OrganicDivider />

          {/* ─── 3. OUR YOGA WORK (REAL PROJECTS: YOGAGARHI & YOGIC PATH) ───────── */}
          <section
            style={{
              position: "relative",
              padding: "70px 24px 80px",
              maxWidth: "1140px",
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className={styles.yogaBadge}>
                <span>✨</span>
                <span>PROVEN CASE STUDIES</span>
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                  fontWeight: 400,
                  color: "var(--yoga-text)",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              >
                Our Yoga Work
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  color: "var(--yoga-muted)",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Real websites we designed and engineered for active Yoga Alliance schools.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "32px",
              }}
            >
              {/* Project 1: YogaGarhi */}
              <article
                className={styles.yogaCard}
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid var(--yoga-border)",
                  }}
                >
                  <Image
                    src="/screenshots/yogagarhi-desktop.webp"
                    alt="YogaGarhi School of Yoga website screenshot"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.74rem",
                      color: "var(--yoga-saffron)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "6px",
                    }}
                  >
                    <span>Bali (Ubud) &amp; Rishikesh</span>
                    <span>·</span>
                    <span>Yoga Alliance RYS</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.9rem",
                      color: "var(--yoga-text)",
                      margin: "0 0 10px",
                    }}
                  >
                    YogaGarhi
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.93rem",
                      color: "var(--yoga-muted)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Conversion-focused platform for a residential Yoga Alliance school in Bali and Rishikesh. Features
                    included an interactive Ayurveda Prakriti diagnostic quiz, retreat cohort countdown timers, 200-Hour
                    syllabus modules, and direct WhatsApp course inquiry CTAs.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--yoga-border)",
                  }}
                >
                  <a
                    href="https://www.yogagarhi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--yoga-sage)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    Visit live site ↗
                  </a>
                  <Link
                    href="/work/yogagarhi"
                    style={{
                      color: "var(--yoga-text)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Read case study →
                  </Link>
                </div>
              </article>

              {/* Project 2: Yogic Path */}
              <article
                className={styles.yogaCard}
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid var(--yoga-border)",
                  }}
                >
                  <Image
                    src="/screenshots/yogicpath-desktop.webp"
                    alt="Yogic Path Yoga Teacher Training website screenshot"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.74rem",
                      color: "var(--yoga-saffron)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "6px",
                    }}
                  >
                    <span>Rishikesh, Himalayas</span>
                    <span>·</span>
                    <span>200H &amp; 300H RYT</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.9rem",
                      color: "var(--yoga-text)",
                      margin: "0 0 10px",
                    }}
                  >
                    Yogic Path
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.93rem",
                      color: "var(--yoga-muted)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Lead capture and course curriculum platform for authentic Yoga Alliance teacher training in Rishikesh.
                    Engineered structured course pages, teacher credentials, daily ashram routine tables, and WhatsApp
                    booking pathways that turn parent and international student interest into admissions.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--yoga-border)",
                  }}
                >
                  <a
                    href="https://yogicpathytt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--yoga-sage)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                    }}
                  >
                    Visit live site ↗
                  </a>
                  <Link
                    href="/work/yogicpath"
                    style={{
                      color: "var(--yoga-text)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Read case study →
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <OrganicDivider />

          {/* ─── 4. WHAT YOU GET, PROCESS & PRICING ─────────────────────────────── */}
          <section
            style={{
              position: "relative",
              padding: "70px 24px 80px",
              maxWidth: "1140px",
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className={styles.yogaBadge}>
                <span>📋</span>
                <span>CLEAR DELIVERABLES &amp; TIMELINE</span>
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                  fontWeight: 400,
                  color: "var(--yoga-text)",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              >
                What You Get &amp; The 7-Day Process
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  color: "var(--yoga-muted)",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                A transparent, step-by-step path from first conversation to a live school website on your own domain.
              </p>
            </div>

            {/* Deliverables + Pricing Cards Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px",
                marginBottom: "56px",
              }}
            >
              {/* Deliverables Card */}
              <div
                className={styles.yogaCard}
                style={{
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: "1.8rem",
                    color: "var(--yoga-text)",
                    margin: 0,
                  }}
                >
                  Everything Your Studio Receives
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.95rem",
                    color: "var(--yoga-text)",
                  }}
                >
                  <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--yoga-sage)", fontWeight: 700 }}>✓</span>
                    <span>Up to 5 custom pages (Home, About &amp; Lineage, Courses, Retreats, Contact)</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--yoga-sage)", fontWeight: 700 }}>✓</span>
                    <span>Interactive batch schedule, daily routine timetable, and syllabus tables</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--yoga-sage)", fontWeight: 700 }}>✓</span>
                    <span>1-tap floating and inline WhatsApp buttons with pre-filled course messages</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--yoga-sage)", fontWeight: 700 }}>✓</span>
                    <span>Google Business Profile &amp; Google Maps location embedding</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--yoga-sage)", fontWeight: 700 }}>✓</span>
                    <span>Basic SEO setup (Schema.org, OpenGraph social sharing preview tags)</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--yoga-sage)", fontWeight: 700 }}>✓</span>
                    <span>14 days of post-launch bug fixing and support</span>
                  </li>
                </ul>
              </div>

              {/* Pricing Box */}
              <div
                className={styles.yogaCard}
                style={{
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "var(--yoga-surface-2)",
                  border: "1.5px solid var(--yoga-sage-border)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "var(--yoga-saffron)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Fixed Price · Zero Monthly Cut
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "2.4rem",
                      color: "var(--yoga-text)",
                      margin: "0 0 10px",
                    }}
                  >
                    Websites from ₹12,999
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.95rem",
                      color: "var(--yoga-muted)",
                      lineHeight: 1.6,
                      margin: "0 0 20px",
                    }}
                  >
                    A clear, fixed-price quote before work starts. No recurring hosting platform fees, no monthly builder
                    subscriptions, and full ownership of your code and domain.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Link
                    href="/pricing"
                    className={styles.yogaBtnPrimary}
                    style={{ justifyContent: "center" }}
                  >
                    <span>View all packages on /pricing</span>
                    <span>→</span>
                  </Link>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.75rem",
                      color: "var(--yoga-muted)",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Need multi-currency or custom portals? Check add-ons on /pricing
                  </p>
                </div>
              </div>
            </div>

            {/* 7-Day Process Timeline Grid */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "2rem",
                  color: "var(--yoga-text)",
                  margin: "0 0 8px",
                }}
              >
                The 7-Day Launch Timeline
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  color: "var(--yoga-muted)",
                  margin: 0,
                }}
              >
                Counted from when we receive your course syllabi, teacher credentials, and photos.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "18px",
              }}
            >
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.day}
                  className={styles.yogaCard}
                  style={{
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--yoga-sage)",
                    }}
                  >
                    {step.day}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.3rem",
                      color: "var(--yoga-text)",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.85rem",
                      color: "var(--yoga-muted)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {step.sentence}
                  </p>
                </div>
              ))}
            </div>

            {/* ─── OWNER PHOTO SLOT: TEACHERS & GURU LINEAGE ─────────────────────────
                Replace with actual high-res photo from: /public/images/yoga/teachers-lineage.webp
                Recommended dimensions: 800x520px
            ──────────────────────────────────────────────────────────────────────── */}
            <div style={{ marginTop: "40px" }}>
              <EmptyPhotoSlot
                slotName="Teacher Faculty &amp; Lineage"
                filePath="public/images/yoga/teachers-lineage.webp"
                dimensions="800 × 520px"
                recommendedUse="Place your lead instructor portraits, teacher adjustments, or graduation ceremony group photograph here."
              />
            </div>
          </section>

          <OrganicDivider />

          {/* ─── 5. FREQUENTLY ASKED QUESTIONS (6 FAQS) ─────────────────────────── */}
          <section
            style={{
              position: "relative",
              padding: "70px 24px 80px",
              maxWidth: "840px",
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className={styles.yogaBadge}>
                <span>💬</span>
                <span>QUESTIONS &amp; ANSWERS</span>
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--yoga-text)",
                  marginTop: "12px",
                  marginBottom: "10px",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.98rem",
                  color: "var(--yoga-muted)",
                  margin: 0,
                }}
              >
                Clear details on cost, turnaround, payments, retreat workflows, and support.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {YOGA_FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="faq-item group"
                  style={{
                    background: "var(--yoga-surface)",
                    border: "1px solid var(--yoga-border)",
                    borderRadius: "14px",
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
                        color: "var(--yoga-text)",
                        margin: 0,
                      }}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className="faq-icon"
                      aria-hidden="true"
                      style={{
                        color: "var(--yoga-sage)",
                        fontSize: "1.3rem",
                        lineHeight: 1,
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div style={{ padding: "0 24px 22px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.94rem",
                        lineHeight: 1.65,
                        color: "var(--yoga-muted)",
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Cross-linking callout */}
            <div
              style={{
                marginTop: "32px",
                padding: "20px",
                textAlign: "center",
                background: "var(--yoga-surface-2)",
                borderRadius: "12px",
                border: "1px solid var(--yoga-border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                  color: "var(--yoga-muted)",
                  margin: 0,
                }}
              >
                Based in Maharashtra or expanding locally? Explore our{" "}
                <Link
                  href="/website-development-pune"
                  style={{ color: "var(--yoga-sage)", fontWeight: 600, textDecoration: "underline" }}
                >
                  website development in Pune
                </Link>{" "}
                services or view{" "}
                <Link
                  href="/industries"
                  style={{ color: "var(--yoga-sage)", fontWeight: 600, textDecoration: "underline" }}
                >
                  all industries
                </Link>
                .
              </p>
            </div>
          </section>

          <OrganicDivider />

          {/* ─── 6. FINAL CTA SECTION ───────────────────────────────────────────── */}
          <section
            style={{
              position: "relative",
              padding: "80px 24px 100px",
              maxWidth: "920px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className={styles.yogaBadge} style={{ marginBottom: "16px" }}>
                <span>🪷</span>
                <span>START YOUR RETREAT LAUNCH</span>
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--yoga-text)",
                  marginTop: "8px",
                  marginBottom: "16px",
                }}
              >
                Ready to welcome your next yoga cohort?
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: "var(--yoga-muted)",
                  maxWidth: "600px",
                  margin: "0 auto 28px",
                }}
              >
                Let&apos;s build a serene, high-converting home for your yoga school or retreat center. Live on your domain
                in 7 days.
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
                <a
                  href={getWhatsAppUrl("Hi techiitfly, I'd like to discuss a website for our yoga school.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.yogaBtnPrimary}
                >
                  <span>Chat on WhatsApp</span>
                  <span>↗</span>
                </a>

                <a
                  href={getConsultUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.yogaBtnSecondary}
                >
                  <span>Book a free 15-min call</span>
                  <span>↗</span>
                </a>

                <Link
                  href="/contact"
                  className={styles.yogaBtnSecondary}
                >
                  <span>Send a message on /contact</span>
                  <span>→</span>
                </Link>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.96rem",
                  color: "var(--yoga-muted)",
                  margin: "0 auto 20px",
                  textAlign: "center",
                }}
              >
                <Link
                  href="/blog/yoga-school-website-checklist"
                  style={{
                    color: "var(--yoga-text)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    fontWeight: 500,
                  }}
                >
                  Read our yoga school website checklist
                </Link>
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.78rem",
                  color: "var(--yoga-muted)",
                }}
              >
                <span>Last updated: {pageDate.display}</span>
                <span>·</span>
                <Link
                  href="/pricing"
                  style={{ color: "var(--yoga-muted)", textDecoration: "underline" }}
                >
                  Pricing from ₹12,999
                </Link>
                <span>·</span>
                <Link
                  href="/blog?category=Yoga+%26+Wellness"
                  style={{ color: "var(--yoga-muted)", textDecoration: "underline" }}
                >
                  Yoga &amp; Wellness Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
