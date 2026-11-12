"use client";

import React, { useEffect, useRef, useId } from "react";
import styles from "./GymScrollBackdrop.module.css";

interface GymScrollBackdropProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GymScrollBackdrop({
  className = "",
  style = {},
}: GymScrollBackdropProps) {
  const uid = useId().replace(/:/g, "-");
  const auraId = `gymAura-${uid}`;
  const fillId = `gymFill-${uid}`;

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
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id={auraId}
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Central Athletic Glow */}
          <circle cx="250" cy="250" r="230" fill={`url(#${auraId})`} />

          {/* Outer Orbit: Strength Octagon & Energy Dashes */}
          <g
            ref={outerOrbitRef}
            style={{ transformOrigin: "250px 250px", willChange: "transform" }}
          >
            {/* Outer boundary circle with athletic ticks */}
            <circle
              cx="250"
              cy="250"
              r="210"
              stroke={`url(#${fillId})`}
              strokeWidth="1.5"
              strokeDasharray="6 8"
              opacity="0.5"
            />
            {/* Athletic Octagon perimeter */}
            <polygon
              points="250,55 388,112 445,250 388,388 250,445 112,388 55,250 112,112"
              stroke={`url(#${fillId})`}
              strokeWidth="1.2"
              strokeDasharray="4 6"
              opacity="0.4"
            />

            {/* Orbiting weight plate markers */}
            <circle cx="250" cy="40" r="14" stroke="#F97316" strokeWidth="2" opacity="0.6" />
            <circle cx="250" cy="40" r="6" fill="#F97316" opacity="0.5" />

            <circle cx="460" cy="250" r="14" stroke="#EF4444" strokeWidth="2" opacity="0.6" />
            <circle cx="460" cy="250" r="6" fill="#EF4444" opacity="0.5" />

            <circle cx="250" cy="460" r="14" stroke="#F97316" strokeWidth="2" opacity="0.6" />
            <circle cx="250" cy="460" r="6" fill="#F97316" opacity="0.5" />

            <circle cx="40" cy="250" r="14" stroke="#EF4444" strokeWidth="2" opacity="0.6" />
            <circle cx="40" cy="250" r="6" fill="#EF4444" opacity="0.5" />
          </g>

          {/* Inner Orbit: Barbell Geometry & Cardiac Pulse Wave */}
          <g
            ref={innerOrbitRef}
            style={{ transformOrigin: "250px 250px", willChange: "transform" }}
          >
            {/* Inner Ring */}
            <circle
              cx="250"
              cy="250"
              r="140"
              stroke="#F97316"
              strokeWidth="1.8"
              opacity="0.45"
            />

            {/* Hexagon Strength Shield */}
            <polygon
              points="250,130 354,190 354,310 250,370 146,310 146,190"
              stroke="#EF4444"
              strokeWidth="1.4"
              strokeDasharray="6 6"
              opacity="0.4"
            />

            {/* Barbell motif horizontal */}
            <line
              x1="160"
              y1="250"
              x2="340"
              y2="250"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.7"
            />
            {/* Left weights */}
            <rect x="175" y="215" width="10" height="70" rx="3" fill="#F97316" opacity="0.55" />
            <rect x="190" y="225" width="8" height="50" rx="2" fill="#F97316" opacity="0.65" />
            {/* Right weights */}
            <rect x="302" y="225" width="8" height="50" rx="2" fill="#F97316" opacity="0.65" />
            <rect x="315" y="215" width="10" height="70" rx="3" fill="#F97316" opacity="0.55" />
          </g>

          {/* Static Center Core: Cardiac Pulse / Heartbeat waveform */}
          <path
            d="M 180,250 L 220,250 L 232,220 L 244,285 L 256,205 L 268,265 L 278,250 L 320,250"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Subtle Floating Ambient Indicators */}
      <span className={`${styles.floatingParticle} ${styles.particle1}`} aria-hidden="true">
        🏋️
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle2}`} aria-hidden="true">
        ⚡
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle3}`} aria-hidden="true">
        🔥
      </span>
      <span className={`${styles.floatingParticle} ${styles.particle4}`} aria-hidden="true">
        💪
      </span>
    </div>
  );
}
