"use client";

import React, { useEffect, useRef, useId } from "react";
import styles from "./YogaFixedZenBackdrop.module.css";

interface YogaFixedZenBackdropProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function YogaFixedZenBackdrop({
  className = "",
  style = {},
}: YogaFixedZenBackdropProps) {
  const uid = useId().replace(/:/g, "-");
  const auraId = `zenFixedAura-${uid}`;
  const fillId = `yogiFixedFill-${uid}`;

  const outerMandalaRef = useRef<SVGGElement | null>(null);
  const innerMandalaRef = useRef<SVGGElement | null>(null);
  const coreMandalaRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let currentAngle = 0;
    let velocity = 0;
    let lastScrollY = window.scrollY;
    let rafId: number;

    // Base idle speed: ultra-slow, tranquil and meditative (~95s per rotation at 60fps)
    const baseIdleSpeed = 0.04;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;

      // Add angular momentum proportional to scroll movement
      velocity += delta * 0.045;

      // Cap maximum speed so it remains peaceful and never stressful
      if (velocity > 1.5) {
        velocity = 1.5;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      // Advance angle by idle baseline + current momentum
      currentAngle = (currentAngle + baseIdleSpeed + velocity) % 360;

      // Exponential damping: smoothly returns to zero extra velocity when scrolling stops
      velocity *= 0.935;
      if (velocity < 0.001) velocity = 0;

      // Apply hardware-accelerated transforms directly to SVG groups (zero React re-renders)
      if (outerMandalaRef.current) {
        outerMandalaRef.current.style.transform = `rotate(${currentAngle}deg)`;
      }
      if (innerMandalaRef.current) {
        innerMandalaRef.current.style.transform = `rotate(-${currentAngle * 0.8}deg)`;
      }
      if (coreMandalaRef.current) {
        coreMandalaRef.current.style.transform = `rotate(${currentAngle * 1.35}deg)`;
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
            {/* Ambient Radial Sage Aura Gradient (Soft, calming, zero yellow glare) */}
            <radialGradient id={auraId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--yoga-sage, #7CA98B)" stopOpacity="0.14" />
              <stop offset="42%" stopColor="var(--yoga-sage, #7CA98B)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            {/* Yogi Surface Tint */}
            <linearGradient id={fillId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--yoga-surface, #FAF6F0)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--yoga-surface-2, #F2ECE3)" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {/* Ambient Radial Glow */}
          <circle cx="250" cy="250" r="236" fill={`url(#${auraId})`} />

          {/* ── CONCENTRIC AURA PULSE RINGS ── */}
          <circle
            className={styles.auraRing2}
            cx="250"
            cy="240"
            r="190"
            fill="none"
            stroke="var(--yoga-sage, #7CA98B)"
            strokeWidth="1.1"
            strokeDasharray="4 6"
          />
          <circle
            className={styles.auraRing1}
            cx="250"
            cy="240"
            r="135"
            fill="none"
            stroke="var(--yoga-sage, #7CA98B)"
            strokeWidth="1.1"
            strokeDasharray="6 6"
            opacity="0.6"
          />

          {/* ── 1. OUTER SACRED MANDALA (Scroll-Accelerated Clockwise Rotation) ── */}
          <g
            ref={outerMandalaRef}
            style={{ transformOrigin: "250px 250px", transformBox: "view-box" }}
            stroke="var(--yoga-sage, #385E46)"
            strokeWidth="1.1"
            fill="none"
            opacity="0.75"
          >
            <circle cx="250" cy="250" r="234" strokeDasharray="3 4" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="222" strokeWidth="1.2" />
            <circle cx="250" cy="250" r="206" strokeWidth="0.75" />
            <circle cx="250" cy="250" r="172" strokeDasharray="2 3" strokeWidth="0.9" />

            {/* 16 Outer Sacred Lotus Petals */}
            {[
              0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270,
              292.5, 315, 337.5,
            ].map((angle) => (
              <g key={`outer-${angle}`} transform={`rotate(${angle} 250 250)`}>
                <path
                  d="M 250,28 C 268,85 272,145 250,206 C 228,145 232,85 250,28 Z"
                  stroke="var(--yoga-sage, #385E46)"
                  strokeWidth="1"
                />
                <path
                  d="M 250,56 C 260,105 262,150 250,195 C 238,150 240,105 250,56 Z"
                  stroke="var(--yoga-sage, #7CA98B)"
                  strokeWidth="0.7"
                  opacity="0.6"
                />
                <circle cx="250" cy="28" r="2.5" fill="var(--yoga-sage, #385E46)" stroke="none" />
                <circle cx="250" cy="42" r="1.3" fill="var(--yoga-sage, #7CA98B)" stroke="none" />
              </g>
            ))}
          </g>

          {/* ── 2. INNER SACRED MANDALA (Scroll-Accelerated Counter-Clockwise Rotation) ── */}
          <g
            ref={innerMandalaRef}
            style={{ transformOrigin: "250px 250px", transformBox: "view-box" }}
            stroke="var(--yoga-sage, #7CA98B)"
            strokeWidth="0.95"
            fill="none"
            opacity="0.6"
          >
            <circle cx="250" cy="250" r="148" strokeDasharray="4 4" />
            <circle cx="250" cy="250" r="115" strokeWidth="1.1" />
            <circle cx="250" cy="250" r="74" strokeDasharray="2 2" strokeWidth="0.75" />

            {/* 12 Inner Petals & Rays */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <g key={`inner-${angle}`} transform={`rotate(${angle} 250 250)`}>
                <path
                  d="M 250,105 C 265,145 265,185 250,215 C 235,185 235,145 250,105 Z"
                  stroke="var(--yoga-sage, #385E46)"
                  strokeWidth="0.85"
                />
                <circle cx="250" cy="115" r="1.6" fill="var(--yoga-sage, #7CA98B)" stroke="none" />
                <line
                  x1="250"
                  y1="135"
                  x2="250"
                  y2="155"
                  stroke="var(--yoga-sage, #7CA98B)"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </g>
            ))}
          </g>

          {/* ── 3. SACRED GEOMETRY CORE ── */}
          <g
            ref={coreMandalaRef}
            style={{ transformOrigin: "250px 250px", transformBox: "view-box" }}
            stroke="var(--yoga-sage, #7CA98B)"
            strokeWidth="0.75"
            fill="none"
            opacity="0.45"
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <g key={`diamond-${angle}`} transform={`rotate(${angle} 250 250)`}>
                <polygon
                  points="250,175 262,210 250,245 238,210"
                  stroke="var(--yoga-sage, #7CA98B)"
                  strokeWidth="0.75"
                />
              </g>
            ))}
          </g>

          {/* ── 4. FLOATING PRANA PARTICLES (Ascending) ── */}
          <g fill="var(--yoga-sage, #7CA98B)" opacity="0.5">
            <circle className={styles.particle1} cx="210" cy="280" r="1.6" />
            <circle className={styles.particle2} cx="290" cy="290" r="1.9" />
            <circle className={styles.particle3} cx="180" cy="230" r="1.4" />
            <circle className={styles.particle4} cx="320" cy="220" r="1.8" />
            <circle className={styles.particle5} cx="270" cy="170" r="1.7" />
          </g>

          {/* ── 5. YOGI MEDITATING IN DHYAN MUDRA (Gentle Pranayama Breathing Float) ── */}
          <g className={styles.yogiBody}>
            {/* Halo behind Crown / Sahasrara (Soft sage stroke, zero yellow fill) */}
            <circle
              cx="250"
              cy="150"
              r="28"
              fill="none"
              stroke="var(--yoga-sage, #7CA98B)"
              strokeWidth="0.8"
              opacity="0.4"
              strokeDasharray="3 3"
            />

            {/* Lotus Asana Base (Petals beneath crossed legs) */}
            <g
              stroke="var(--yoga-sage, #385E46)"
              strokeWidth="1.2"
              fill={`url(#${fillId})`}
            >
              {/* Center Petal */}
              <path
                d="M 250,336 C 244,352 256,352 250,336 Z"
                fill="var(--yoga-sage, #7CA98B)"
                fillOpacity="0.15"
              />
              {/* Left Petals */}
              <path d="M 230,332 C 205,346 220,356 242,336 Z" />
              <path d="M 200,328 C 172,342 188,354 216,334 Z" />
              <path d="M 170,322 C 144,334 160,348 190,328 Z" />
              {/* Right Petals */}
              <path d="M 270,332 C 295,346 280,356 258,336 Z" />
              <path d="M 300,328 C 328,342 312,354 284,334 Z" />
              <path d="M 330,322 C 356,334 340,348 310,328 Z" />
            </g>

            {/* Silhouette & Linework of Seated Yogi in Padmasana */}
            <path
              d="
                M 250,132
                C 254,126 257,126 258,132
                C 264,136 266,145 264,154
                C 262,162 257,168 254,171
                C 260,174 278,181 292,192
                C 304,202 312,216 312,234
                C 312,252 306,270 316,288
                C 322,298 334,302 344,306
                C 352,310 354,316 348,322
                C 338,330 312,332 284,328
                C 268,326 258,324 250,324
                C 242,324 232,326 216,328
                C 188,332 162,330 152,322
                C 146,316 148,310 156,306
                C 166,302 178,298 184,288
                C 194,270 188,252 188,234
                C 188,216 196,202 208,192
                C 222,181 240,174 246,171
                C 243,168 238,162 236,154
                C 234,145 236,136 242,132
                Z
              "
              fill={`url(#${fillId})`}
              stroke="var(--yoga-text, #231C16)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Detailed Linework: Arms, Dhyan Mudra (Gyan Mudra Hands on Knees), Crossed Legs */}
            <g
              stroke="var(--yoga-text, #231C16)"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              {/* Topknot & Serene Brow */}
              <path d="M 246,132 C 246,124 254,124 254,132" fill="var(--yoga-text, #231C16)" />
              <path d="M 242,151 C 246,153 254,153 258,151" strokeWidth="0.8" opacity="0.6" />

              {/* Left Arm & Dhyan Mudra (Chin Mudra circle on Knee) */}
              <path d="M 212,192 C 198,206 192,230 192,248 C 192,270 184,290 178,302" />
              <ellipse
                cx="174"
                cy="304"
                rx="3.5"
                ry="3.5"
                stroke="var(--yoga-sage, #7CA98B)"
                strokeWidth="1.1"
              />
              <path d="M 172,308 C 167,311 161,311 156,308" strokeWidth="1" />
              <path d="M 174,310 C 169,313 164,313 159,310" strokeWidth="0.8" opacity="0.6" />

              {/* Right Arm & Dhyan Mudra (Chin Mudra circle on Knee) */}
              <path d="M 288,192 C 302,206 308,230 308,248 C 308,270 316,290 322,302" />
              <ellipse
                cx="326"
                cy="304"
                rx="3.5"
                ry="3.5"
                stroke="var(--yoga-sage, #7CA98B)"
                strokeWidth="1.1"
              />
              <path d="M 328,308 C 333,311 339,311 344,308" strokeWidth="1" />
              <path d="M 326,310 C 331,313 336,313 341,310" strokeWidth="0.8" opacity="0.6" />

              {/* Folded Padmasana Crossed Legs */}
              <path d="M 156,308 C 172,316 210,320 252,308 C 274,302 295,296 308,298" />
              <path d="M 306,296 C 309,293 314,295 312,300" strokeWidth="1" />
              <path d="M 344,308 C 328,316 290,320 248,308 C 226,302 205,296 192,298" />
              <path d="M 194,296 C 191,293 186,295 188,300" strokeWidth="1" />
            </g>

            {/* ── Sushumna Nadi & Harmonized Subtle Chakras (Zero Clashing Colors) ── */}
            <line
              x1="250"
              y1="145"
              x2="250"
              y2="315"
              stroke="var(--yoga-sage, #7CA98B)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              opacity="0.5"
            />

            {/* Subtle, Harmonious Sage Chakra Nodes */}
            <circle cx="250" cy="132" r="2.2" fill="var(--yoga-sage, #7CA98B)" opacity="0.7" />
            <circle cx="250" cy="148" r="2.2" fill="var(--yoga-sage, #7CA98B)" opacity="0.7" />
            <circle cx="250" cy="176" r="2.2" fill="var(--yoga-sage, #7CA98B)" opacity="0.7" />
            {/* Anahata (Heart - Radiant Center with pulsing glow) */}
            <circle
              className={styles.heartGlow}
              cx="250"
              cy="214"
              r="3.6"
              fill="var(--yoga-sage, #385E46)"
              stroke="var(--yoga-surface, #FAF6F0)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="214"
              r="7"
              fill="none"
              stroke="var(--yoga-sage, #7CA98B)"
              strokeWidth="0.7"
              opacity="0.5"
            />
            <circle cx="250" cy="250" r="2.2" fill="var(--yoga-sage, #7CA98B)" opacity="0.7" />
            <circle cx="250" cy="282" r="2.2" fill="var(--yoga-sage, #7CA98B)" opacity="0.7" />
            <circle cx="250" cy="314" r="2.4" fill="var(--yoga-sage, #7CA98B)" opacity="0.7" />
          </g>
        </svg>
      </div>
    </div>
  );
}
