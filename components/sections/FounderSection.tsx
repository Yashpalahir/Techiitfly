"use client";

import Link from "next/link";
import { SITE } from "@/content/site";
import { trackEvent } from "@/lib/tracking";

const FOUNDERS = [
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

export default function FounderSection() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label">CO-FOUNDERS</span>
          <h2
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--text)",
              marginTop: "8px",
              marginBottom: "14px",
            }}
          >
            Meet the Co-founders
          </h2>
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "1.05rem",
              lineHeight: 1.55,
              color: "var(--muted)",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Founded by engineers from IIT Bombay and NIT Durgapur. You work directly with the founders who build your website — no middlemen, no sales reps.
          </p>
        </div>

        {/* 3 Co-founder cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Circular Avatar with Initials */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${founder.accent}22 0%, ${founder.accent}08 70%)`,
                  border: `2px solid ${founder.accent}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: founder.accent,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  marginBottom: "20px",
                }}
              >
                {founder.initials}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  margin: 0,
                  marginBottom: "6px",
                }}
              >
                {founder.name}
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.82rem",
                  color: "var(--accent)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "10px",
                }}
              >
                {founder.role}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {founder.credential}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", "founder_section")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "8px",
                background: "var(--accent)",
                color: "var(--primary-btn-text)",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.94rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <span>Chat with the founders on WhatsApp</span>
              <span>↗</span>
            </a>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 22px",
                borderRadius: "8px",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.94rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              <span>Read our story on the About page →</span>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--muted)",
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
        </div>
      </div>
    </section>
  );
}
