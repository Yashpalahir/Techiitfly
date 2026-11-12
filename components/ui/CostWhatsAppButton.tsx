"use client";

import { getWhatsAppHref, trackEvent } from "@/lib/tracking";

export default function CostWhatsAppButton() {
  const href = getWhatsAppHref("Hi techiitfly, I'd like to book a free 15-minute consultation.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", "website_cost_india")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "16px 32px",
        borderRadius: "8px",
        background: "var(--accent)",
        color: "var(--primary-btn-text, #0e0d0b)",
        fontFamily: "var(--font-geist-sans)",
        fontSize: "1.05rem",
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 6px 24px rgba(245, 158, 11, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(245, 158, 11, 0.3)";
      }}
    >
      <span>Book a free 15-minute call on WhatsApp</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
