"use client";

import { SITE, getConsultUrl, getWhatsAppUrl } from "@/content/site";
import { trackEvent } from "@/lib/tracking";

interface PuneWhatsAppButtonProps {
  text?: string;
  variant?: "primary" | "secondary" | "chat";
  action?: "consult" | "whatsapp";
  message?: string;
  location?: string;
}

export default function PuneWhatsAppButton({
  text = "Book a free 15-minute call",
  variant = "primary",
  action = "consult",
  message,
  location = "pune_page",
}: PuneWhatsAppButtonProps) {
  const href =
    action === "consult"
      ? getConsultUrl()
      : getWhatsAppUrl(
          message || "Hi techiitfly, I'm looking for a web design company in Pune."
        );

  const handleClick = () => {
    trackEvent("whatsapp_click", location);
    if (action === "consult") {
      trackEvent("consult_click", location);
    }
  };

  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: isPrimary ? "16px 32px" : "14px 26px",
        borderRadius: "8px",
        background: isPrimary ? "var(--accent)" : "transparent",
        color: isPrimary ? "var(--primary-btn-text, #0e0d0b)" : "var(--text)",
        border: isPrimary ? "none" : "1.5px solid var(--border)",
        fontFamily: "var(--font-geist-sans)",
        fontSize: isPrimary ? "1.02rem" : "0.96rem",
        fontWeight: isPrimary ? 700 : 600,
        textDecoration: "none",
        boxShadow: isPrimary ? "0 4px 20px rgba(245, 158, 11, 0.28)" : "none",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(245, 158, 11, 0.4)";
        } else {
          e.currentTarget.style.borderColor = "var(--accent)";
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(245, 158, 11, 0.28)";
        } else {
          e.currentTarget.style.borderColor = "var(--border)";
        }
      }}
    >
      <span>{text}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
