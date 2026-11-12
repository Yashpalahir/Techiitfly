import React, { useId } from "react";
import styles from "./YogaZenAnimation.module.css";

interface YogaZenAnimationProps {
  /**
   * "backdrop": Ambient peaceful background (large, positioned behind hero text)
   * "card": Compact delightful illustration for cards (e.g. /industries)
   * "centerpiece": Standalone showcase art
   */
  variant?: "backdrop" | "card" | "centerpiece";
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function YogaZenAnimation({
  variant = "backdrop",
  size,
  opacity,
  className = "",
  style = {},
}: YogaZenAnimationProps) {
  const uid = useId().replace(/:/g, "-");
  const auraId = `zenAura-${variant}-${uid}`;
  const fillId = `yogiFill-${variant}-${uid}`;

  const defaultSize = variant === "backdrop" ? 640 : variant === "card" ? 140 : 380;
  const currentSize = size ?? defaultSize;
  const defaultOpacity = variant === "backdrop" ? 0.22 : 1;
  const currentOpacity = opacity ?? defaultOpacity;

  const containerClass = [
    styles.zenContainer,
    variant === "backdrop" ? styles.backdropVariant : styles.cardVariant,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClass}
      aria-hidden="true"
      style={{
        width: `${currentSize}px`,
        maxWidth: "94vw",
        height: `${currentSize}px`,
        maxHeight: "94vw",
        opacity: currentOpacity,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 500 500"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", display: "block" }}
      >
        <defs>
          {/* Subtle Ambient Radial Aura Gradient */}
          <radialGradient id={auraId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7CA98B" stopOpacity="0.14" />
            <stop offset="50%" stopColor="#7CA98B" stopOpacity="0.04" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Lotus & Yogi Surface Tint */}
          <linearGradient id={fillId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--yoga-surface, #FAF6F0)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--yoga-surface-2, #F2ECE3)" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Ambient Radial Soft Glow */}
        <circle cx="250" cy="250" r="236" fill={`url(#${auraId})`} />

        {/* ── AURA PULSE RIPPLE WAVES ── */}
        <circle
          className={styles.auraRing2}
          cx="250"
          cy="240"
          r="190"
          fill="none"
          stroke="var(--yoga-sage, #7CA98B)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <circle
          className={styles.auraRing1}
          cx="250"
          cy="240"
          r="135"
          fill="none"
          stroke="var(--yoga-saffron, #F59E0B)"
          strokeWidth="1.4"
          strokeDasharray="6 6"
        />

        {/* ── 1. OUTER SACRED MANDALA (Clockwise Smooth Slow Rotation) ── */}
        <g
          className={styles.mandalaOuter}
          stroke="var(--yoga-sage, #385E46)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.75"
        >
          <circle cx="250" cy="250" r="234" strokeDasharray="3 4" strokeWidth="0.9" />
          <circle cx="250" cy="250" r="222" strokeWidth="1.4" />
          <circle cx="250" cy="250" r="206" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="172" strokeDasharray="2 3" strokeWidth="1" />

          {/* 16 Outer Sacred Lotus Petals */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle) => (
            <g key={`outer-petal-${angle}`} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M 250,28 C 268,85 272,145 250,206 C 228,145 232,85 250,28 Z"
                stroke="var(--yoga-sage, #385E46)"
                strokeWidth="1.1"
              />
              <path
                d="M 250,56 C 260,105 262,150 250,195 C 238,150 240,105 250,56 Z"
                stroke="var(--yoga-saffron, #B45309)"
                strokeWidth="0.75"
                opacity="0.65"
              />
              <circle cx="250" cy="28" r="3" fill="var(--yoga-saffron, #B45309)" stroke="none" />
              <circle cx="250" cy="42" r="1.5" fill="var(--yoga-sage, #385E46)" stroke="none" />
            </g>
          ))}
        </g>

        {/* ── 2. INNER SACRED MANDALA (Counter-Clockwise Smooth Rotation) ── */}
        <g
          className={styles.mandalaInner}
          stroke="var(--yoga-saffron, #B45309)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        >
          <circle cx="250" cy="250" r="148" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="115" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="74" strokeDasharray="2 2" strokeWidth="0.8" />

          {/* 12 Inner Petals & Rays */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <g key={`inner-petal-${angle}`} transform={`rotate(${angle} 250 250)`}>
              <path
                d="M 250,105 C 265,145 265,185 250,215 C 235,185 235,145 250,105 Z"
                stroke="var(--yoga-sage, #385E46)"
                strokeWidth="0.9"
              />
              <circle cx="250" cy="115" r="2" fill="var(--yoga-saffron, #B45309)" stroke="none" />
              <line
                x1="250"
                y1="135"
                x2="250"
                y2="155"
                stroke="var(--yoga-saffron, #B45309)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </g>
          ))}
        </g>

        {/* ── 3. SACRED GEOMETRY CORE (Clockwise Rotation) ── */}
        <g
          className={styles.mandalaCore}
          stroke="var(--yoga-sage, #7CA98B)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.45"
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={`diamond-${angle}`} transform={`rotate(${angle} 250 250)`}>
              <polygon
                points="250,175 262,210 250,245 238,210"
                stroke="var(--yoga-sage, #7CA98B)"
                strokeWidth="0.8"
              />
            </g>
          ))}
        </g>

        {/* ── 4. FLOATING PRANA PARTICLES (Ascending) ── */}
        <g fill="var(--yoga-saffron, #F59E0B)" opacity="0.75">
          <circle className={styles.particle1} cx="210" cy="280" r="2" />
          <circle className={styles.particle2} cx="290" cy="290" r="2.4" />
          <circle className={styles.particle3} cx="180" cy="230" r="1.8" />
          <circle className={styles.particle4} cx="320" cy="220" r="2.1" />
          <circle className={styles.particle5} cx="270" cy="170" r="2.2" />
        </g>

        {/* ── 5. YOGI MEDITATING IN DHYAN MUDRA (Centerpiece with Pranayama Breathing) ── */}
        <g className={styles.yogiBody}>
          {/* Halo behind Crown / Sahasrara Radiance */}
          <circle
            cx="250"
            cy="150"
            r="32"
            fill="var(--yoga-saffron, #F59E0B)"
            fillOpacity="0.12"
            stroke="var(--yoga-saffron, #F59E0B)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <circle
            cx="250"
            cy="150"
            r="24"
            fill="none"
            stroke="var(--yoga-sage, #7CA98B)"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Lotus Asana Base (Throne beneath crossed legs) */}
          <g
            stroke="var(--yoga-sage, #385E46)"
            strokeWidth="1.3"
            fill={`url(#${fillId})`}
          >
            {/* Center Petal */}
            <path
              d="M 250,336 C 244,352 256,352 250,336 Z"
              fill="var(--yoga-saffron, #F59E0B)"
              fillOpacity="0.3"
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
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          {/* Detailed Linework: Arms, Dhyan Mudra (Gyan Mudra Hands on Knees), Crossed Legs */}
          <g
            stroke="var(--yoga-text, #231C16)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {/* Topknot & Serene Brow */}
            <path d="M 246,132 C 246,124 254,124 254,132" fill="var(--yoga-text, #231C16)" />
            <path d="M 242,151 C 246,153 254,153 258,151" strokeWidth="1" opacity="0.7" />

            {/* Left Arm & Dhyan Mudra (Chin Mudra circle on Knee) */}
            <path d="M 212,192 C 198,206 192,230 192,248 C 192,270 184,290 178,302" />
            <ellipse
              cx="174"
              cy="304"
              rx="4"
              ry="4"
              stroke="var(--yoga-saffron, #B45309)"
              strokeWidth="1.3"
            />
            <path d="M 172,308 C 167,311 161,311 156,308" strokeWidth="1.2" />
            <path d="M 174,310 C 169,313 164,313 159,310" strokeWidth="1" opacity="0.7" />

            {/* Right Arm & Dhyan Mudra (Chin Mudra circle on Knee) */}
            <path d="M 288,192 C 302,206 308,230 308,248 C 308,270 316,290 322,302" />
            <ellipse
              cx="326"
              cy="304"
              rx="4"
              ry="4"
              stroke="var(--yoga-saffron, #B45309)"
              strokeWidth="1.3"
            />
            <path d="M 328,308 C 333,311 339,311 344,308" strokeWidth="1.2" />
            <path d="M 326,310 C 331,313 336,313 341,310" strokeWidth="1" opacity="0.7" />

            {/* Folded Padmasana Crossed Legs */}
            <path d="M 156,308 C 172,316 210,320 252,308 C 274,302 295,296 308,298" />
            <path d="M 306,296 C 309,293 314,295 312,300" strokeWidth="1.2" />
            <path d="M 344,308 C 328,316 290,320 248,308 C 226,302 205,296 192,298" />
            <path d="M 194,296 C 191,293 186,295 188,300" strokeWidth="1.2" />
          </g>

          {/* ── Sushumna Nadi & 7 Sacred Chakras ── */}
          <line
            x1="250"
            y1="145"
            x2="250"
            y2="315"
            stroke="var(--yoga-sage, #7CA98B)"
            strokeWidth="1"
            strokeDasharray="2 3"
            opacity="0.65"
          />

          {/* 1. Sahasrara (Crown) */}
          <circle cx="250" cy="132" r="3" fill="#A855F7" />
          {/* 2. Ajna (Third Eye) */}
          <circle cx="250" cy="148" r="2.8" fill="var(--yoga-saffron, #F59E0B)" />
          {/* 3. Vishuddha (Throat) */}
          <circle cx="250" cy="176" r="2.8" fill="#06B6D4" />
          {/* 4. Anahata (Heart - Radiant Center with pulsing glow) */}
          <circle
            className={styles.heartGlow}
            cx="250"
            cy="214"
            r="4.2"
            fill="var(--yoga-sage, #385E46)"
            stroke="var(--yoga-surface, #FAF6F0)"
            strokeWidth="1.2"
          />
          <circle
            cx="250"
            cy="214"
            r="8"
            fill="none"
            stroke="var(--yoga-sage, #7CA98B)"
            strokeWidth="0.8"
            opacity="0.6"
          />
          {/* 5. Manipura (Solar Plexus) */}
          <circle cx="250" cy="250" r="3.2" fill="#EAB308" />
          {/* 6. Svadhisthana (Sacral) */}
          <circle cx="250" cy="282" r="3.2" fill="#F97316" />
          {/* 7. Muladhara (Root) */}
          <circle cx="250" cy="314" r="3.5" fill="#EF4444" />
        </g>
      </svg>
    </div>
  );
}
