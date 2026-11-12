"use client";

import React, { useEffect, useRef, useId } from "react";
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
  const auraId = `ecommerceAura-${uid}`;
  const fillId = `ecommerceFill-${uid}`;

  const outerOrbitRef = useRef<SVGGElement | null>(null);
  const innerOrbitRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let currentAngle = 0;
    let velocity = 0;
    let lastScrollY = window.scrollY;
    let rafId: number;

    const baseIdleSpeed = 0.045;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;

      velocity += delta * 0.05;
      if (velocity > 1.6) velocity = 1.6;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      currentAngle = (currentAngle + baseIdleSpeed + velocity) % 360;
      velocity *= 0.935;
      if (velocity < 0.001) velocity = 0;

      if (outerOrbitRef.current) {
        outerOrbitRef.current.style.transform = `rotate(${currentAngle}deg)`;
      }
      if (innerOrbitRef.current) {
        innerOrbitRef.current.style.transform = `rotate(-${currentAngle * 0.75}deg)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
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
          viewBox="0 0 500 500"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible", display: "block" }}
        >
          <defs>
            <radialGradient id={auraId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent, #F59E0B)" stopOpacity="0.22" />
              <stop offset="45%" stopColor="var(--accent, #F59E0B)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent, #F59E0B)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="250" cy="250" r="230" fill={`url(#${auraId})`} />

          {/* Concentric Pulse Rings */}
          <circle
            className={styles.commercePulseRing}
            cx="250"
            cy="250"
            r="195"
            fill="none"
            stroke="var(--accent, #F59E0B)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            opacity="0.4"
          />
          <circle
            cx="250"
            cy="250"
            r="140"
            fill="none"
            stroke="var(--border, #333)"
            strokeWidth="1"
            strokeDasharray="6 6"
            opacity="0.3"
          />

          {/* ── 1. OUTER COMMERCE ORBIT (Scroll Accelerated) ── */}
          <g
            ref={outerOrbitRef}
            style={{ transformOrigin: "250px 250px", transformBox: "view-box" }}
          >
            <circle
              cx="250"
              cy="250"
              r="215"
              fill="none"
              stroke="var(--accent, #F59E0B)"
              strokeWidth="1"
              strokeDasharray="3 9"
              opacity="0.5"
            />

            {/* Node 1: Shopping Bag (Top: 250, 35) */}
            <g transform="translate(250, 35)">
              <circle cx="0" cy="0" r="16" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <path d="M -6,-2 L -6,8 C -6,9 5,9 6,8 L 6,-2 Z" fill="none" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <path d="M -3,-2 C -3,-6 3,-6 3,-2" fill="none" stroke="var(--accent, #F59E0B)" strokeWidth="1" />
            </g>

            {/* Node 2: Payment Card / Secure Chip (Right: 465, 250) */}
            <g transform="translate(465, 250)">
              <circle cx="0" cy="0" r="16" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <rect x="-8" y="-5" width="16" height="10" rx="2" fill="none" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <line x1="-8" y1="-1" x2="8" y2="-1" stroke="var(--accent, #F59E0B)" strokeWidth="1" />
              <circle cx="-4" cy="2" r="1" fill="var(--accent, #F59E0B)" />
            </g>

            {/* Node 3: Parcel Box (Bottom: 250, 465) */}
            <g transform="translate(250, 465)">
              <circle cx="0" cy="0" r="16" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <rect x="-7" y="-7" width="14" height="14" rx="1.5" fill="none" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <line x1="0" y1="-7" x2="0" y2="7" stroke="var(--accent, #F59E0B)" strokeWidth="1" />
              <line x1="-7" y1="0" x2="7" y2="0" stroke="var(--accent, #F59E0B)" strokeWidth="1" />
            </g>

            {/* Node 4: Discount Tag % (Left: 35, 250) */}
            <g transform="translate(35, 250)">
              <circle cx="0" cy="0" r="16" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <path d="M -4,-6 L 4,-6 L 7,-1 L 0,6 L -7,1 Z" fill="none" stroke="var(--accent, #F59E0B)" strokeWidth="1.2" />
              <circle cx="-2" cy="-3" r="1" fill="var(--accent, #F59E0B)" />
            </g>
          </g>

          {/* ── 2. INNER TECH ORBIT (Counter-Rotating) ── */}
          <g
            ref={innerOrbitRef}
            style={{ transformOrigin: "250px 250px", transformBox: "view-box" }}
          >
            <circle
              cx="250"
              cy="250"
              r="160"
              fill="none"
              stroke="var(--accent, #F59E0B)"
              strokeWidth="0.8"
              strokeDasharray="2 12"
              opacity="0.4"
            />
            {/* Satellite 1: Speed Bolt */}
            <g transform="translate(250, 90)">
              <circle cx="0" cy="0" r="11" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1" />
              <path d="M 1,-5 L -3,0 L 0,0 L -1,5 L 3,0 L 0,0 Z" fill="var(--accent, #F59E0B)" />
            </g>
            {/* Satellite 2: Lock/Shield */}
            <g transform="translate(250, 410)">
              <circle cx="0" cy="0" r="11" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1" />
              <rect x="-4" y="-1" width="8" height="6" rx="1" fill="none" stroke="var(--accent, #F59E0B)" strokeWidth="1" />
              <path d="M -2.5,-1 L -2.5,-3 C -2.5,-4.5 2.5,-4.5 2.5,-3 L 2.5,-1" fill="none" stroke="var(--accent, #F59E0B)" strokeWidth="0.9" />
            </g>
          </g>

          {/* ── 3. CENTERPIECE: Isometric Storefront & Shopping Cart ── */}
          <g className={styles.centerCart} transform="translate(250, 250)">
            {/* Cart Body */}
            <g stroke="var(--accent, #F59E0B)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Handle */}
              <path d="M -36,-24 L -24,-24 L -16,14 L 28,14 L 38,-12 L -19,-12" />
              {/* Basket Grid Lines */}
              <line x1="-12" y1="-6" x2="33" y2="-6" strokeWidth="1" opacity="0.6" />
              <line x1="-8" y1="0" x2="30" y2="0" strokeWidth="1" opacity="0.6" />
              <line x1="-4" y1="6" x2="26" y2="6" strokeWidth="1" opacity="0.6" />
              <line x1="-6" y1="-12" x2="-2" y2="14" strokeWidth="1" opacity="0.6" />
              <line x1="8" y1="-12" x2="10" y2="14" strokeWidth="1" opacity="0.6" />
              <line x1="22" y1="-12" x2="20" y2="14" strokeWidth="1" opacity="0.6" />
            </g>
            {/* Wheels */}
            <circle cx="-12" cy="22" r="5" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1.6" />
            <circle cx="24" cy="22" r="5" fill="var(--surface, #1A1A1A)" stroke="var(--accent, #F59E0B)" strokeWidth="1.6" />

            {/* Glowing Item in Cart */}
            <rect
              x="-6"
              y="-20"
              width="16"
              height="16"
              rx="2"
              fill={`url(#${fillId})`}
              stroke="var(--accent, #F59E0B)"
              strokeWidth="1.2"
              transform="rotate(12)"
            />
          </g>

          {/* ── 4. FLOATING CONVERSION SPARKLES ── */}
          <g fill="var(--accent, #F59E0B)">
            <g className={styles.sparkle1} transform="translate(190, 230)">
              <text fontSize="12" fontFamily="monospace" fontWeight="bold">₹</text>
            </g>
            <g className={styles.sparkle2} transform="translate(310, 210)">
              <text fontSize="13" fontFamily="monospace" fontWeight="bold">★</text>
            </g>
            <g className={styles.sparkle3} transform="translate(220, 280)">
              <text fontSize="11" fontFamily="monospace" fontWeight="bold">✓</text>
            </g>
            <g className={styles.sparkle4} transform="translate(290, 270)">
              <text fontSize="13" fontFamily="monospace" fontWeight="bold">₹</text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
