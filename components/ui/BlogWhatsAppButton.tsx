"use client";

import { trackEvent } from "@/lib/tracking";

interface BlogWhatsAppButtonProps {
  text?: string;
  location?: string;
}

export default function BlogWhatsAppButton({
  text = "Get a fixed quote on WhatsApp",
  location = "blog_post",
}: BlogWhatsAppButtonProps) {
  const href =
    "https://wa.me/919373917738?text=Hi%20techiitfly%2C%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", location)}
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
      <span>{text}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
