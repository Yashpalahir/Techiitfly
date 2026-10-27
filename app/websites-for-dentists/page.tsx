import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorks from "@/components/sections/HowItWorks";
import DentalScrollBackdrop from "@/components/sections/DentalScrollBackdrop";
import DentalInteractiveSmile from "@/components/sections/DentalInteractiveSmile";
import { SITE, getConsultUrl, getWhatsAppUrl } from "@/content/site";
import { getPageDate } from "@/content/dates";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Website for Dentists & Clinics in Pune",
  description:
    "Websites for dentists and clinics in Pune with treatment pages, clinic timings, appointment requests and WhatsApp booking. Live in 7 days, fixed price.",
  alternates: {
    canonical: "/websites-for-dentists",
  },
  openGraph: buildOpenGraph({
    title: "Website for Dentists & Clinics in Pune | techiitfly",
    description:
      "Websites for dentists and clinics in Pune with treatment pages, clinic timings, appointment requests and WhatsApp booking. Live in 7 days, fixed price.",
    path: "/websites-for-dentists",
    image: "/og/pricing.png",
    alt: "Websites for Dentists & Dental Clinics in Pune | techiitfly",
  }),
  twitter: buildTwitter({
    title: "Website for Dentists & Clinics in Pune | techiitfly",
    description:
      "Websites for dentists and clinics in Pune with treatment pages, clinic timings, appointment requests and WhatsApp booking. Live in 7 days, fixed price.",
    image: "/og/pricing.png",
  }),
};

const DENTIST_FAQS = [
  {
    q: "How much does a dental clinic website cost?",
    a: "Our dental clinic website packages start from ₹12,999 with fixed, upfront pricing and zero monthly platform fees. You can view full package tiers and optional add-ons on our pricing page.",
  },
  {
    q: "Will this website help our clinic rank on Google Maps and Local Search in Pune?",
    a: "Yes. Every website we build includes Local Business Schema (Dentist / MedicalClinic markup), clean NAP (Name, Address, Phone) consistency matching your Google Business Profile, and fast mobile performance that Google rewards in local Pune search rankings.",
  },
  {
    q: "How does the WhatsApp appointment booking feature work?",
    a: "Patients on your website can tap a WhatsApp button pre-filled with the exact treatment they are interested in (e.g. 'Hi Doctor, I'd like to book an appointment for Root Canal'). The message opens directly on their WhatsApp and connects straight to your clinic phone, saving staff time and eliminating booking friction.",
  },
  {
    q: "Can you embed our Google Maps location and driving directions?",
    a: "Yes. We embed interactive Google Maps and one-tap 'Navigate to Clinic' buttons with nearby landmark notes and parking details, so patients driving or walking can find your clinic without calling for directions.",
  },
  {
    q: "How is having our own clinic website better than relying solely on Practo or JustDial?",
    a: "Third-party directories charge recurring commissions and display ads for competing clinics right next to your profile. Having your own independent website establishes professional credibility, retains 100% of your patient leads directly on WhatsApp, and builds long-term brand equity in your locality.",
  },
  {
    q: "How long does it take, and what do you need from us to start?",
    a: "Your completed website launches live in 7 days guaranteed. All we need is your clinic name, consulting hours, doctor qualifications (BDS/MDS), a list of treatments offered, and clinic photos or logo. We handle all design, copywriting structure, mobile optimization, and technical deployment.",
  },
];

export default function WebsitesForDentistsPage() {
  const pageDate = getPageDate("/websites-for-dentists");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Websites for Dentists & Dental Clinics",
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      telephone: SITE.structuredPhone,
      email: SITE.contactEmail,
      url: SITE.siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
    description:
      "Specialized website development for dentists, dental clinics, and healthcare practitioners in Pune with clinic timings, treatment pages, and WhatsApp booking.",
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
        name: "Websites for Dentists & Clinics in Pune",
        item: `${SITE.siteUrl}/websites-for-dentists`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DENTIST_FAQS.map((faq) => ({
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
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px", position: "relative" }}>
        {/* Scroll-Driven Dynamic Mouth & Jaw Background */}
        <DentalScrollBackdrop />

        {/* 1. Hero */}
        <section
          style={{
            padding: "80px 24px 50px",
            maxWidth: "1140px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              marginBottom: "16px",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.76rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              PUNE DENTAL CLINICS &amp; PRACTITIONERS
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.6rem, 5.8vw, 4.6rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text)",
              marginTop: "8px",
              marginBottom: "18px",
            }}
          >
            Websites for Dentists &amp; Dental Clinics in Pune
          </h1>

          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.22rem)",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "720px",
              margin: "0 auto 20px",
            }}
          >
            Websites for dentists and clinics in Pune with treatment pages, clinic timings, appointment requests and WhatsApp booking. Live in 7 days, fixed price.
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

          {/* Quick Trust Badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--text)",
              marginBottom: "32px",
            }}
          >
            <span>✓ 7-Day Launch Guarantee</span>
            <span>·</span>
            <span>✓ 1-Tap WhatsApp Booking</span>
            <span>·</span>
            <span>✓ Google Maps &amp; Local SEO</span>
            <span>·</span>
            <span>✓ 100% Code Ownership</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
            <a
              href={getWhatsAppUrl("Hi techiitfly, I'd like to discuss a website for my dental clinic in Pune.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "8px",
                background: "var(--accent)",
                color: "var(--primary-btn-text)",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(245,158,11,0.25)",
              }}
            >
              <span>WhatsApp us for a free consultation</span>
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
              <span>Book a free 15-min call</span>
              <span>↗</span>
            </a>
          </div>

          {/* Interactive Mobile Patient Experience Preview with Clinic Visual */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              overflow: "hidden",
              maxWidth: "820px",
              margin: "0 auto",
              textAlign: "left",
              boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
            }}
          >
            {/* Banner image showing modern clinic interior */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "220px",
                background: "var(--surface-2)",
              }}
            >
              <Image
                src="/images/dental/clinic-interior.jpg"
                alt="Modern dental clinic operatory and consultation room"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "20px",
                  right: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div>
                  <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", background: "rgba(0,0,0,0.6)", padding: "3px 8px", borderRadius: "4px" }}>
                    PATIENT VIEW PREVIEW
                  </span>
                  <h3 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.8rem", color: "#fff", margin: "4px 0 0", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    Your Dental Clinic &amp; Implant Center · Pune
                  </h3>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(16,185,129,0.9)", borderRadius: "999px", padding: "4px 12px", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff" }} />
                  <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.74rem", color: "#fff", fontWeight: 700 }}>
                    OPEN TODAY: 10 AM – 8:30 PM
                  </span>
                </div>
              </div>
            </div>

            <div style={{ padding: "24px 24px 28px" }}>
              <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.95rem", color: "var(--muted)", margin: "0 0 18px", lineHeight: 1.6 }}>
                Dr. [Doctor Name], BDS, MDS · 12+ Years Clinical Experience · Specializing in Painless Single-Sitting Root Canals, Dental Implants, and Clear Aligners.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "18px" }}>
                <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem" }}>📍</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>Kothrud / Baner, Pune</div>
                    <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--muted)" }}>1-Tap Google Maps Navigation</div>
                  </div>
                </div>
                <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem" }}>💬</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>Direct WhatsApp Booking</div>
                    <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--muted)" }}>Pre-filled Treatment Enquiries</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.74rem", color: "var(--muted)", fontWeight: 600 }}>TREATMENTS:</span>
                {["Single-Sitting RCT", "Clear Aligners", "Dental Implants", "Teeth Whitening", "Kids Dentistry"].map((t) => (
                  <span key={t} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "6px", padding: "4px 10px", fontFamily: "var(--font-geist-sans)", fontSize: "0.8rem", color: "var(--text)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive 3D Dental Arch Simulator */}
        <DentalInteractiveSmile />

        {/* 2. What a dentist's website needs */}
        <section style={{ padding: "60px 24px 80px", maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-label">ESSENTIAL CLINIC ARCHITECTURE</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: "8px",
              }}
            >
              What a Dentist&apos;s Website Needs to Convert Patients
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                maxWidth: "680px",
                margin: "12px auto 0",
                lineHeight: 1.6,
              }}
            >
              Patients searching for a dental clinic in Pune are usually in pain or seeking high-value treatments. Here is what converts them into booked appointments:
            </p>
          </div>

          {/* Visual Highlight Cards: 4 Visual Pillars with Real Photography */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "36px",
            }}
          >
            {/* Visual Card 1: Clinic Operatory & Ambience */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                <Image
                  src="/images/dental/clinic-interior.jpg"
                  alt="Modern dental operatory and patient chair"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700 }}>
                  CLINIC AMBIENCE
                </span>
                <h3 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.55rem", color: "var(--text)", margin: 0 }}>
                  Modern Operatory &amp; Chair
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.88rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  Showcases your ergonomic dental chairs, welcoming reception, and hygienic clinical setup so patients feel at ease before their first visit.
                </p>
              </div>
            </div>

            {/* Visual Card 2: Doctor Profile & Qualifications */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                <Image
                  src="/images/dental/dentist-patient.jpg"
                  alt="Professional dentist consulting with a patient"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700 }}>
                  PATIENT CONFIDENCE
                </span>
                <h3 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.55rem", color: "var(--text)", margin: 0 }}>
                  Doctor Profile &amp; Qualifications
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.88rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  Highlights BDS and MDS credentials, clinical associations, and empathetic consultation philosophy to build instant trust and rapport.
                </p>
              </div>
            </div>

            {/* Visual Card 3: Treatment Pages & Smile Makeovers */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                <Image
                  src="/images/dental/teeth-smile.jpg"
                  alt="Healthy smile from clear aligners and cosmetic dental care"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700 }}>
                  HIGH-VALUE TREATMENTS
                </span>
                <h3 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.55rem", color: "var(--text)", margin: 0 }}>
                  Dedicated Procedure Pages
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.88rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  Detailed procedure guides for Root Canals, Implants, Invisible Braces &amp; Aligners, and Whitening that answer common patient questions.
                </p>
              </div>
            </div>

            {/* Visual Card 4: Hygiene & Modern Instruments */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                <Image
                  src="/images/dental/dental-instruments.jpg"
                  alt="Sterilized dental instruments and modern technology"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700 }}>
                  ANXIETY REDUCTION
                </span>
                <h3 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.55rem", color: "var(--text)", margin: 0 }}>
                  Sterilization &amp; Painless Tech
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.88rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  Visual reassurance showing class-B autoclave sterilization, digital low-radiation RVG X-rays, and modern painless rotary dentistry.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Conversion Feature Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
            }}
          >
            {[
              {
                badge: "SCHEDULING",
                title: "Clinic Timings & Shift Hours",
                desc: "Clear morning and evening consulting hours (e.g. 10 AM–1 PM, 5 PM–9 PM), Sunday consultation slots, and emergency toothache protocol.",
              },
              {
                badge: "LOCAL PATIENT NAVIGATION",
                title: "Location & Google Maps",
                desc: "Embedded interactive Google Map with one-tap GPS navigation, landmark cues, and parking guidance so patients arrive on time without calling.",
              },
              {
                badge: "CONVENIENCE",
                title: "Appointment Request Form",
                desc: "A frictionless 3-field form allowing patients to pick their preferred day, time slot, and dental concern in under 30 seconds.",
              },
              {
                badge: "HIGHEST CONVERSION",
                title: "Direct WhatsApp Button",
                desc: "Persistent floating and inline WhatsApp buttons pre-filled with the exact procedure so patients connect with your clinic in a single tap.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "26px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.06em" }}>
                  {item.badge}
                </span>
                <h3 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.6rem", color: "var(--text)", margin: 0, lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.9rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. What you get */}
        <section style={{ padding: "70px 24px 80px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "44px" }}>
              <span className="section-label">PACKAGE DELIVERABLES</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginTop: "8px",
                }}
              >
                What You Get With techiitfly
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  maxWidth: "640px",
                  margin: "12px auto 0",
                  lineHeight: 1.6,
                }}
              >
                A turnkey, end-to-end dental website package tailored for Pune clinics, with every technical detail handled for you.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "22px",
              }}
            >
              {[
                { title: "5–15 Custom Pages", desc: "Structured website with Home, Doctor Profile, individual Treatment pages (RCT, Implants, Braces, Whitening), Clinic Gallery, and Contact." },
                { title: "Mobile-First Design", desc: "Over 80% of dental patients search on smartphones. Our layouts are designed specifically for phone screens first, looking crisp on all devices." },
                { title: "Appointment Enquiry Form", desc: "Integrated booking form that sends patient requests with preferred dates and contact details straight to your clinic email or phone." },
                { title: "Google Maps Embed", desc: "Interactive map integration so local patients in Pune can navigate straight to your clinic entrance with 1-tap driving directions." },
                { title: "Basic SEO & Schema", desc: "On-page local SEO setup, Dentist / MedicalClinic structured data schema, and meta tags so your clinic gets properly indexed and discovered." },
                { title: "Full Code Ownership", desc: "You own 100% of your website code, domain name, and clinic assets with zero proprietary lock-in and no recurring builder fees." },
                { title: "Guaranteed 7-Day Delivery", desc: "Your completed website goes live on your custom domain in 7 days guaranteed once content and clinic details are received." },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.74rem", color: "var(--accent)", fontWeight: 700 }}>
                    INCLUDED IN PACKAGE
                  </span>
                  <h3 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.55rem", color: "var(--text)", margin: 0 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.9rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How it works */}
        <HowItWorks />

        {/* 5. Pricing & Proof of Process with Real Work Screenshots */}
        <section style={{ padding: "80px 24px", maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="section-label">TRANSPARENT PRICING</span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 400,
                color: "var(--text)",
                marginTop: "8px",
              }}
            >
              Websites from ₹12,999
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "12px auto 0",
                lineHeight: 1.6,
              }}
            >
              Fixed, upfront price with zero surprise charges, zero recurring platform fees, and a 7-day launch guarantee.
            </p>
          </div>

          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "40px 32px",
              maxWidth: "760px",
              margin: "0 auto 60px",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", background: "var(--surface-2)", border: "1px solid var(--border)", marginBottom: "16px" }}>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.76rem", color: "var(--accent)", fontWeight: 700 }}>
                COMPLETE DENTAL CLINIC PACKAGE
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "clamp(2.6rem, 4.5vw, 3.6rem)", color: "var(--text)", marginBottom: "12px" }}>
              Websites from ₹12,999
            </div>
            <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.96rem", color: "var(--muted)", lineHeight: 1.6, maxWidth: "560px", margin: "0 auto 26px" }}>
              Includes custom mobile-first layout, doctor profile, treatment pages (root canal, implants, aligners, whitening), clinic timings, Google Maps directions, WhatsApp booking, and full source code ownership.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href="/pricing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "var(--primary-btn-text)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>View all pricing packages</span>
                <span>→</span>
              </Link>
              <a
                href={getWhatsAppUrl("Hi techiitfly, I'd like to get a quote for a dental clinic website starting from ₹12,999.")}
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
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>Enquire on WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Proof of Process / Real Projects with Screenshots */}
          <div>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span className="section-label">OUR REAL WORK</span>
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginTop: "8px",
                }}
              >
                Proven Engineering &amp; Delivery Track Record
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.98rem",
                  color: "var(--muted)",
                  maxWidth: "680px",
                  margin: "10px auto 0",
                  lineHeight: 1.6,
                }}
              >
                We apply the exact same proven 7-day engineering workflow, performance optimization, and conversion-focused design behind our real-world client platforms. Explore our live case studies:
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px",
              }}
            >
              {/* YogaGarhi */}
              <article
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Image
                    src="/screenshots/yogagarhi-desktop.webp"
                    alt="YogaGarhi client website preview"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h4 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.8rem", color: "var(--text)", margin: 0 }}>
                  YogaGarhi
                </h4>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.92rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  Clean, international wellness institute website with curriculum showcase and instant WhatsApp enquiry booking.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                  <a
                    href="https://www.yogagarhi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}
                  >
                    Visit live site ↗
                  </a>
                  <Link
                    href="/work/yogagarhi"
                    style={{ color: "var(--text)", fontSize: "0.88rem", textDecoration: "underline" }}
                  >
                    Read case study →
                  </Link>
                </div>
              </article>

              {/* Yogic Path */}
              <article
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Image
                    src="/screenshots/yogicpath-desktop.webp"
                    alt="Yogic Path client website preview"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h4 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.8rem", color: "var(--text)", margin: 0 }}>
                  Yogic Path
                </h4>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.92rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  High-converting landing pages highlighting authentic lineage, schedule dates, credentials, and WhatsApp lead capture.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                  <a
                    href="https://yogicpathytt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}
                  >
                    Visit live site ↗
                  </a>
                  <Link
                    href="/work/yogicpath"
                    style={{ color: "var(--text)", fontSize: "0.88rem", textDecoration: "underline" }}
                  >
                    Read case study →
                  </Link>
                </div>
              </article>

              {/* Mathsy */}
              <article
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Image
                    src="/screenshots/mathsy-desktop.webp"
                    alt="Mathsy 4-portal web platform preview"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h4 style={{ fontFamily: "var(--font-instrument-serif)", fontSize: "1.8rem", color: "var(--text)", margin: 0 }}>
                  Mathsy
                </h4>
                <p style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.92rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  Custom 4-portal learning platform engineered with role-based dashboards, student progress tracking, and test portals.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                  <Link
                    href="/mathsy-meet"
                    style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}
                  >
                    Explore Mathsy Meet ↗
                  </Link>
                  <Link
                    href="/work/mathsy"
                    style={{ color: "var(--text)", fontSize: "0.88rem", textDecoration: "underline" }}
                  >
                    Read case study →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 6. FAQ (6 questions) */}
        <section style={{ padding: "80px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="section-label">FAQS</span>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginTop: "8px",
                }}
              >
                Frequently Asked Questions by Dentists
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {DENTIST_FAQS.map((faq) => (
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

        {/* 7. Final CTA: Free 15-minute consultation on WhatsApp */}
        <section
          id="contact"
          style={{
            position: "relative",
            background: "var(--bg)",
            padding: "88px 24px 72px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="section-label">GET STARTED</span>

            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--text)",
                marginTop: "10px",
                marginBottom: "16px",
              }}
            >
              Ready for a Modern Website for Your Dental Clinic?
            </h2>

            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.08rem",
                lineHeight: 1.6,
                color: "var(--muted)",
                maxWidth: "600px",
                margin: "0 auto 32px",
              }}
            >
              Book a free 15-minute consultation on WhatsApp. Tell us about your clinic, and we&apos;ll provide honest recommendations and a fixed quote in 24 hours.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              <a
                href={getWhatsAppUrl("Hi techiitfly, I'd like to book a free 15-minute consultation on WhatsApp for my dental clinic website.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "var(--primary-btn-text)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(245,158,11,0.25)",
                }}
              >
                <span>Free 15-min consultation on WhatsApp</span>
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
                <span>Book a calendar call</span>
                <span>↗</span>
              </a>
            </div>

            {/* Internal links */}
            <div
              style={{
                paddingTop: "28px",
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.92rem",
              }}
            >
              <span style={{ color: "var(--muted)" }}>Explore more:</span>
              <Link href="/pricing" style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Pricing &amp; Packages
              </Link>
              <Link href="/website-development-pune" style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Website Development in Pune
              </Link>
              <Link href="/websites-for-coaching-classes" style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Websites for Coaching Classes
              </Link>
              <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
