"use client";

import React, { useEffect, useRef, useId, useState } from "react";
import styles from "./EcommerceScrollBackdrop.module.css";

interface EcommerceScrollBackdropProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function EcommerceScrollBackdrop({
  className = "",
  style = {},
}: EcommerceScrollBackdropProps) {
  const uid = useId().replace(/:/g, "-");
  const glowId = `ecomGlow-${uid}`;
  const gradientId = `ecomGrad-${uid}`;

  const pkg1Ref = useRef<SVGGElement | null>(null);
  const pkg2Ref = useRef<SVGGElement | null>(null);
  const pkg3Ref = useRef<SVGGElement | null>(null);
  const cartRef = useRef<SVGGElement | null>(null);
  const screenPulseRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let scrollProgress = 0;
    let targetProgress = 0;
    let rafId: number;

    // Bezier control points for the arc from computer screen to cart
    // Start: P0(270, 240), Control: P1(480, 70), End: P2(690, 260)
    const p0 = { x: 270, y: 240 };
    const p1 = { x: 480, y: 70 };
    const p2 = { x: 690, y: 260 };

    const getBezierPoint = (t: number) => {
      // Wrap t between 0 and 1
      const normalizedT = ((t % 1) + 1) % 1;
      const u = 1 - normalizedT;
      const tt = normalizedT * normalizedT;
      const uu = u * u;

      const x = uu * p0.x + 2 * u * normalizedT * p1.x + tt * p2.x;
      const y = uu * p0.y + 2 * u * normalizedT * p1.y + tt * p2.y;
      return { x, y, t: normalizedT };
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      // Continuous loop as user scrolls
      targetProgress = (scrollY / docHeight) * 3.5;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let autoIdle = 0;

    const render = () => {
      autoIdle += 0.0015;
      // Smooth interpolation
      scrollProgress += (targetProgress + autoIdle - scrollProgress) * 0.1;

      // Update Package 1
      const pt1 = getBezierPoint(scrollProgress);
      if (pkg1Ref.current) {
        pkg1Ref.current.style.transform = `translate(${pt1.x}px, ${pt1.y}px) rotate(${pt1.t * 30 - 15}deg)`;
        pkg1Ref.current.style.opacity = `${pt1.t < 0.1 ? pt1.t * 10 : pt1.t > 0.9 ? (1 - pt1.t) * 10 : 1}`;
      }

      // Update Package 2 (offset by 0.33)
      const pt2 = getBezierPoint(scrollProgress + 0.33);
      if (pkg2Ref.current) {
        pkg2Ref.current.style.transform = `translate(${pt2.x}px, ${pt2.y}px) rotate(${pt2.t * 30 - 15}deg)`;
        pkg2Ref.current.style.opacity = `${pt2.t < 0.1 ? pt2.t * 10 : pt2.t > 0.9 ? (1 - pt2.t) * 10 : 1}`;
      }

      // Update Package 3 (offset by 0.66)
      const pt3 = getBezierPoint(scrollProgress + 0.66);
      if (pkg3Ref.current) {
        pkg3Ref.current.style.transform = `translate(${pt3.x}px, ${pt3.y}px) rotate(${pt3.t * 30 - 15}deg)`;
        pkg3Ref.current.style.opacity = `${pt3.t < 0.1 ? pt3.t * 10 : pt3.t > 0.9 ? (1 - pt3.t) * 10 : 1}`;
      }

      // Cart spring bounce when a package arrives near t = 0.95
      const arrival = Math.sin(scrollProgress * Math.PI * 6);
      if (cartRef.current) {
        const bounce = Math.max(0, arrival) * 4;
        cartRef.current.style.transform = `translateY(${bounce}px)`;
      }

      // Screen pulse
      if (screenPulseRef.current) {
        const pulse = 1 + Math.sin(scrollProgress * Math.PI * 4) * 0.15;
        screenPulseRef.current.setAttribute("r", `${14 * pulse}`);
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`${styles.fixedBackdrop} ${className}`}
      aria-hidden="true"
      style={style}
    >
      <div className={styles.canvasWrapper}>
        <svg
          viewBox="0 0 920 500"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Central Ambient Flow Aura */}
          <ellipse cx="480" cy="240" rx="360" ry="160" fill={`url(#${glowId})`} />

          {/* ── Connecting Flight Trajectory Arc (Screen -> Cart) ── */}
          <path
            d="M 270,240 Q 480,70 690,260"
            stroke={`url(#${gradientId})`}
            strokeWidth="2.5"
            strokeDasharray="6 8"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* ── LEFT SIDE: COMPUTER SCREEN / ONLINE STORE ── */}
          <g transform="translate(70, 110)">
            {/* Monitor Base & Neck Stand */}
            <path
              d="M 120,270 L 140,270 L 134,220 L 126,220 Z"
              fill="#F59E0B"
              opacity="0.4"
            />
            <rect
              x="90"
              y="265"
              width="80"
              height="8"
              rx="4"
              fill="#F59E0B"
              opacity="0.5"
            />

            {/* Monitor Outer Chassis */}
            <rect
              x="20"
              y="20"
              width="220"
              height="160"
              rx="12"
              stroke="#F59E0B"
              strokeWidth="2.5"
              fill="#1a1814"
              fillOpacity="0.8"
            />

            {/* Browser Header Bar */}
            <rect
              x="20"
              y="20"
              width="220"
              height="24"
              rx="12"
              fill="#221f1a"
            />
            {/* Window control dots */}
            <circle cx="36" cy="32" r="3.5" fill="#EF4444" opacity="0.8" />
            <circle cx="48" cy="32" r="3.5" fill="#F59E0B" opacity="0.8" />
            <circle cx="60" cy="32" r="3.5" fill="#10B981" opacity="0.8" />

            {/* URL bar indicator */}
            <rect
              x="76"
              y="26"
              width="140"
              height="12"
              rx="3"
              fill="#2a2721"
              stroke="#F59E0B"
              strokeWidth="0.8"
              opacity="0.5"
            />

            {/* Screen Content: Online Store UI */}
            {/* Store Banner */}
            <rect
              x="32"
              y="54"
              width="196"
              height="28"
              rx="4"
              fill="#F59E0B"
              fillOpacity="0.12"
              stroke="#F59E0B"
              strokeWidth="1"
            />
            <text
              x="42"
              y="72"
              fill="#F59E0B"
              fontFamily="monospace"
              fontSize="10"
              fontWeight="bold"
            >
              STORE ONLINE · ₹ SALE
            </text>

            {/* Product Card 1 */}
            <rect
              x="32"
              y="90"
              width="92"
              height="74"
              rx="6"
              stroke="#F59E0B"
              strokeWidth="1"
              fill="#221f1a"
            />
            {/* Product image mockup */}
            <rect x="40" y="98" width="76" height="34" rx="3" fill="#F59E0B" fillOpacity="0.2" />
            <circle cx="78" cy="115" r="9" fill="#F59E0B" opacity="0.4" />
            {/* BUY NOW Button */}
            <rect x="40" y="140" width="76" height="16" rx="4" fill="#10B981" fillOpacity="0.8" />
            <text x="56" y="152" fill="#0e0d0b" fontFamily="sans-serif" fontSize="8" fontWeight="bold">
              ORDER
            </text>

            {/* Product Card 2 */}
            <rect
              x="134"
              y="90"
              width="94"
              height="74"
              rx="6"
              stroke="#F59E0B"
              strokeWidth="1"
              fill="#221f1a"
            />
            <rect x="142" y="98" width="78" height="34" rx="3" fill="#10B981" fillOpacity="0.2" />
            <polygon points="181,106 172,122 190,122" fill="#10B981" opacity="0.4" />
            <rect x="142" y="140" width="78" height="16" rx="4" fill="#F59E0B" fillOpacity="0.8" />
            <text x="156" y="152" fill="#0e0d0b" fontFamily="sans-serif" fontSize="8" fontWeight="bold">
              BUY ₹
            </text>

            {/* Screen Emission Beacon / Order Outflow Node */}
            <circle
              ref={screenPulseRef}
              cx="220"
              cy="130"
              r="14"
              fill="#10B981"
              fillOpacity="0.3"
            />
            <circle cx="220" cy="130" r="6" fill="#10B981" />
          </g>

          {/* ── RIGHT SIDE: SHOPPING CART ── */}
          <g transform="translate(640, 150)">
            <g ref={cartRef} style={{ transformOrigin: "center", willChange: "transform" }}>
              {/* Cart Handle */}
              <path
                d="M 14,35 L 42,35 L 56,120 L 160,120 L 176,46 L 46,46"
                stroke="#F59E0B"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Cart Basket Mesh Lines */}
              <line x1="52" y1="65" x2="170" y2="65" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
              <line x1="54" y1="88" x2="164" y2="88" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
              <line x1="80" y1="48" x2="74" y2="120" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
              <line x1="110" y1="48" x2="104" y2="120" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
              <line x1="140" y1="48" x2="134" y2="120" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />

              {/* Lower Chassis & Wheel Connectors */}
              <line x1="68" y1="120" x2="72" y2="145" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="145" y1="120" x2="141" y2="145" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="64" y1="145" x2="148" y2="145" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

              {/* Rear Wheel */}
              <circle cx="72" cy="148" r="14" stroke="#F59E0B" strokeWidth="2.5" fill="#1a1814" />
              <circle cx="72" cy="148" r="4" fill="#F59E0B" />
              {/* Front Wheel */}
              <circle cx="141" cy="148" r="14" stroke="#F59E0B" strokeWidth="2.5" fill="#1a1814" />
              <circle cx="141" cy="148" r="4" fill="#F59E0B" />

              {/* Order Count Notification Badge */}
              <g transform="translate(148, 22)">
                <circle cx="14" cy="14" r="15" fill="#10B981" />
                <circle cx="14" cy="14" r="15" stroke="#0e0d0b" strokeWidth="2" />
                <text
                  x="14"
                  y="18"
                  fill="#0e0d0b"
                  fontFamily="sans-serif"
                  fontSize="12"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  ✓
                </text>
              </g>

              {/* Inside Cart: Stacked items already received */}
              <rect x="74" y="85" width="34" height="28" rx="4" fill="#F59E0B" opacity="0.4" stroke="#F59E0B" strokeWidth="1" />
              <rect x="114" y="78" width="36" height="35" rx="4" fill="#10B981" opacity="0.4" stroke="#10B981" strokeWidth="1" />
            </g>
          </g>

          {/* ── STREAMING ORDER PACKAGES (MOVING ALONG ARC ON SCROLL) ── */}
          {/* Package 1: E-commerce Shipping Carton Box */}
          <g ref={pkg1Ref} style={{ willChange: "transform" }}>
            <g transform="translate(-16, -16)">
              <rect
                x="0"
                y="0"
                width="32"
                height="32"
                rx="5"
                fill="#F59E0B"
                stroke="#1a1814"
                strokeWidth="1.5"
              />
              {/* Box tape ribbon */}
              <line x1="16" y1="0" x2="16" y2="32" stroke="#0e0d0b" strokeWidth="2.5" />
              <line x1="0" y1="16" x2="32" y2="16" stroke="#0e0d0b" strokeWidth="2.5" />
              {/* Shipping barcode badge */}
              <rect x="5" y="5" width="8" height="6" fill="#0e0d0b" opacity="0.6" />
            </g>
          </g>

          {/* Package 2: Express Delivery Bag / Parcel with Checkmark */}
          <g ref={pkg2Ref} style={{ willChange: "transform" }}>
            <g transform="translate(-16, -16)">
              <rect
                x="0"
                y="0"
                width="32"
                height="30"
                rx="6"
                fill="#10B981"
                stroke="#1a1814"
                strokeWidth="1.5"
              />
              <path
                d="M 8,16 L 14,22 L 24,10"
                stroke="#0e0d0b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Package 3: Premium Gift / Retail Box */}
          <g ref={pkg3Ref} style={{ willChange: "transform" }}>
            <g transform="translate(-16, -16)">
              <rect
                x="0"
                y="0"
                width="30"
                height="30"
                rx="6"
                fill="#F97316"
                stroke="#1a1814"
                strokeWidth="1.5"
              />
              {/* Bow on top */}
              <ellipse cx="11" cy="4" rx="4" ry="3" fill="#F59E0B" />
              <ellipse cx="19" cy="4" rx="4" ry="3" fill="#F59E0B" />
              <line x1="15" y1="0" x2="15" y2="30" stroke="#F59E0B" strokeWidth="2.5" />
            </g>
          </g>
        </svg>
      </div>

      {/* Floating E-commerce Floating Indicators */}
      <span className={`${styles.floatingIcon} ${styles.icon1}`} aria-hidden="true">
        🛍️
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon2}`} aria-hidden="true">
        ₹
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon3}`} aria-hidden="true">
        📦
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon4}`} aria-hidden="true">
        💳
      </span>
    </div>
  );
}
