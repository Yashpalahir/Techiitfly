"use client";

import React, { useEffect, useRef, useId } from "react";
import styles from "./CoachingScrollBackdrop.module.css";

interface CoachingScrollBackdropProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function CoachingScrollBackdrop({
  className = "",
  style = {},
}: CoachingScrollBackdropProps) {
  const uid = useId().replace(/:/g, "-");
  const auraId = `coachingAura-${uid}`;
  const fillId = `coachingFill-${uid}`;

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

    const baseIdleSpeed = 0.04;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;

      velocity += delta * 0.05;
      if (velocity > 1.5) velocity = 1.5;
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
        innerOrbitRef.current.style.transform = `rotate(-${currentAngle * 0.7}deg)`;
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
              <stop offset="0%" stopColor="var(--accent, #3B82F6)" stopOpacity="0.22" />
              <stop offset="50%" stopColor="var(--accent, #3B82F6)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent, #3B82F6)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="250" cy="250" r="230" fill={`url(#${auraId})`} />

          {/* Concentric Geometry / Protractor Rings */}
          <circle
            cx="250"
            cy="250"
            r="215"
            fill="none"
            stroke="var(--accent, #3B82F6)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            opacity="0.35"
          />
          <circle
            cx="250"
            cy="250"
            r="170"
            fill="none"
            stroke="var(--accent, #3B82F6)"
            strokeWidth="1.5"
            strokeDasharray="16 10"
            opacity="0.4"
          />
          <circle
            cx="250"
            cy="250"
            r="125"
            fill="none"
            stroke="var(--accent, #3B82F6)"
            strokeWidth="1"
            strokeDasharray="2 6"
            opacity="0.3"
          />
          <circle
            cx="250"
            cy="250"
            r="75"
            fill="none"
            stroke="var(--accent, #3B82F6)"
            strokeWidth="1.5"
            opacity="0.5"
          />

          {/* Protractor degree tick marks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="250"
              y1="37"
              x2="250"
              y2={deg % 90 === 0 ? "47" : "42"}
              stroke="var(--accent, #3B82F6)"
              strokeWidth={deg % 90 === 0 ? "1.8" : "1"}
              opacity="0.5"
              transform={`rotate(${deg} 250 250)`}
            />
          ))}

          {/* Center Emblem: Open Knowledge Book with Ascending Star */}
          <g transform="translate(250, 250)">
            {/* Open Book Base */}
            <path
              d="M-32,10 C-18,2 -5,8 0,14 C5,8 18,2 32,10 L32,-12 C18,-20 5,-14 0,-8 C-5,-14 -18,-20 -32,-12 Z"
              fill={`url(#${fillId})`}
              stroke="var(--accent, #3B82F6)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Center Spine */}
            <line
              x1="0"
              y1="-8"
              x2="0"
              y2="14"
              stroke="var(--accent, #3B82F6)"
              strokeWidth="1.8"
            />
            {/* Book Page Lines */}
            <line
              x1="-24"
              y1="-4"
              x2="-6"
              y2="-2"
              stroke="var(--accent, #3B82F6)"
              strokeWidth="1"
              opacity="0.6"
            />
            <line
              x1="-24"
              y1="3"
              x2="-6"
              y2="5"
              stroke="var(--accent, #3B82F6)"
              strokeWidth="1"
              opacity="0.6"
            />
            <line
              x1="6"
              y1="-2"
              x2="24"
              y2="-4"
              stroke="var(--accent, #3B82F6)"
              strokeWidth="1"
              opacity="0.6"
            />
            <line
              x1="6"
              y1="5"
              x2="24"
              y2="3"
              stroke="var(--accent, #3B82F6)"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Rising Star of Excellence */}
            <path
              d="M0,-24 L3,-17 L10,-17 L5,-13 L7,-6 L0,-10 L-7,-6 L-5,-13 L-10,-17 L-3,-17 Z"
              fill="var(--accent, #3B82F6)"
              opacity="0.9"
            />
          </g>

          {/* Outer Orbit (Radius 215px): Graduation Cap, Diploma Ribbon, Target Bullseye, Learning Lamp */}
          <g
            ref={outerOrbitRef}
            style={{
              transformOrigin: "250px 250px",
              willChange: "transform",
            }}
          >
            {/* 1. Top (0 deg): Graduation Mortarboard Cap */}
            <g transform="translate(250, 35)">
              <polygon
                points="0,-12 24,0 0,12 -24,0"
                fill={`url(#${fillId})`}
                stroke="var(--accent, #3B82F6)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M-14,4 L-14,14 C-14,19 14,19 14,14 L14,4"
                fill="none"
                stroke="var(--accent, #3B82F6)"
                strokeWidth="1.6"
              />
              {/* Tassel */}
              <line x1="0" y1="0" x2="18" y2="9" stroke="var(--accent, #3B82F6)" strokeWidth="1.5" />
              <circle cx="18" cy="11" r="2" fill="var(--accent, #3B82F6)" />
            </g>

            {/* 2. Right (90 deg): Certificate / Medal of Merit */}
            <g transform="translate(465, 250)">
              <circle
                cx="0"
                cy="-4"
                r="13"
                fill={`url(#${fillId})`}
                stroke="var(--accent, #3B82F6)"
                strokeWidth="1.8"
              />
              <circle cx="0" cy="-4" r="7" fill="none" stroke="var(--accent, #3B82F6)" strokeWidth="1" />
              {/* Ribbons */}
              <path
                d="M-5,7 L-9,20 L-2,17 L1,20 L3,9"
                fill="none"
                stroke="var(--accent, #3B82F6)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M5,7 L9,20 L2,17 L-1,20 L-3,9"
                fill="none"
                stroke="var(--accent, #3B82F6)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </g>

            {/* 3. Bottom (180 deg): Target Bullseye / Goal */}
            <g transform="translate(250, 465)">
              <circle
                cx="0"
                cy="0"
                r="14"
                fill={`url(#${fillId})`}
                stroke="var(--accent, #3B82F6)"
                strokeWidth="1.8"
              />
              <circle cx="0" cy="0" r="9" fill="none" stroke="var(--accent, #3B82F6)" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="4" fill="var(--accent, #3B82F6)" />
              {/* Crosshair marks */}
              <line x1="-16" y1="0" x2="-10" y2="0" stroke="var(--accent, #3B82F6)" strokeWidth="1.2" />
              <line x1="10" y1="0" x2="16" y2="0" stroke="var(--accent, #3B82F6)" strokeWidth="1.2" />
              <line x1="0" y1="-16" x2="0" y2="-10" stroke="var(--accent, #3B82F6)" strokeWidth="1.2" />
              <line x1="0" y1="10" x2="0" y2="16" stroke="var(--accent, #3B82F6)" strokeWidth="1.2" />
            </g>

            {/* 4. Left (270 deg): Geometric Compass / Caliper */}
            <g transform="translate(35, 250)">
              <circle cx="0" cy="-12" r="3" fill="var(--accent, #3B82F6)" />
              <line x1="0" y1="-9" x2="-12" y2="14" stroke="var(--accent, #3B82F6)" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="0" y1="-9" x2="12" y2="14" stroke="var(--accent, #3B82F6)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M-8,4 A12,12 0 0,1 8,4" fill="none" stroke="var(--accent, #3B82F6)" strokeWidth="1.2" strokeDasharray="2 3" />
            </g>
          </g>

          {/* Inner Counter-Rotating Orbit (Radius 125px): Math & Science Glyphs */}
          <g
            ref={innerOrbitRef}
            style={{
              transformOrigin: "250px 250px",
              willChange: "transform",
            }}
          >
            {/* ∑ (Sigma / Summation) at 45 deg */}
            <g transform="translate(338, 162)">
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontSize="18"
                fontFamily="var(--font-geist-mono, serif)"
                fontWeight="700"
                fill="var(--accent, #3B82F6)"
                opacity="0.85"
              >
                ∑
              </text>
            </g>

            {/* π (Pi) at 135 deg */}
            <g transform="translate(338, 338)">
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontSize="18"
                fontFamily="var(--font-geist-mono, serif)"
                fontWeight="700"
                fill="var(--accent, #3B82F6)"
                opacity="0.85"
              >
                π
              </text>
            </g>

            {/* ∫ (Integral) at 225 deg */}
            <g transform="translate(162, 338)">
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fontSize="20"
                fontFamily="var(--font-geist-mono, serif)"
                fontWeight="700"
                fill="var(--accent, #3B82F6)"
                opacity="0.85"
              >
                ∫
              </text>
            </g>

            {/* A+ at 315 deg */}
            <g transform="translate(162, 162)">
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontSize="16"
                fontFamily="var(--font-geist-mono, monospace)"
                fontWeight="800"
                fill="var(--accent, #3B82F6)"
                opacity="0.9"
              >
                A+
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Floating Ambient Academic Glyphs */}
      <span className={`${styles.floatingParticle} ${styles.particle1}`} aria-hidden="true">
        ∑
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle2}`} aria-hidden="true">
        π
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle3}`} aria-hidden="true">
        ∫
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle4}`} aria-hidden="true">
        √x
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle5}`} aria-hidden="true">
        100%
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle6}`} aria-hidden="true">
        A+
      </span>
    </div>
  );
}
