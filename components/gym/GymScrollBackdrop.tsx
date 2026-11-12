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
  const flameGlowId = `gymGlow-${uid}`;
  const muscleGradId = `muscleGrad-${uid}`;

  // References for scroll-driven animations
  const torsoRef = useRef<SVGGElement | null>(null);
  const leftArmRef = useRef<SVGGElement | null>(null);
  const rightArmRef = useRef<SVGGElement | null>(null);
  const leftDumbbellRef = useRef<SVGGElement | null>(null);
  const rightDumbbellRef = useRef<SVGGElement | null>(null);
  const pulseWaveRef = useRef<SVGPathElement | null>(null);
  const energyBurstRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let targetPhase = 0;
    let currentPhase = 0;
    let autoTimer = 0;
    let rafId: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Cyclical rep motion: each ~350px of scrolling completes an up-and-down rep!
      targetPhase = (scrollY / 180) * Math.PI;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const animate = () => {
      autoTimer += 0.015;
      // Smooth lerp to scroll phase + gentle ambient breathing
      currentPhase += (targetPhase + Math.sin(autoTimer) * 0.2 - currentPhase) * 0.12;

      // repFactor oscillates smoothly between 0 (down: squat/lowered arms) and 1 (up: contracted lift/curled dumbbells)
      // Math.sin oscillates -1 to 1; (sin + 1) / 2 maps it to 0 to 1
      const repFactor = (Math.sin(currentPhase) + 1) / 2;

      // 1. Torso & Body: Squats down by ~18px when down, rises upright when up
      if (torsoRef.current) {
        const squatY = (1 - repFactor) * 22;
        torsoRef.current.style.transform = `translateY(${squatY}px)`;
      }

      // 2. Left Arm & Dumbbell: Curls up by ~55 degrees at the elbow
      // Arm pivots at shoulder (235, 205)
      if (leftArmRef.current) {
        const curlAngle = repFactor * 75 - 10; // -10 deg when down, 65 deg when up
        leftArmRef.current.style.transform = `rotate(${-curlAngle}deg)`;
      }
      if (leftDumbbellRef.current) {
        // Dumbbell moves vertically from Y=320 (down) to Y=210 (up)
        const dbY = -repFactor * 105;
        const dbX = repFactor * 18;
        leftDumbbellRef.current.style.transform = `translate(${dbX}px, ${dbY}px) rotate(${repFactor * 25}deg)`;
      }

      // 3. Right Arm & Dumbbell
      // Arm pivots at shoulder (365, 205)
      if (rightArmRef.current) {
        const curlAngle = repFactor * 75 - 10;
        rightArmRef.current.style.transform = `rotate(${curlAngle}deg)`;
      }
      if (rightDumbbellRef.current) {
        const dbY = -repFactor * 105;
        const dbX = -repFactor * 18;
        rightDumbbellRef.current.style.transform = `translate(${dbX}px, ${dbY}px) rotate(${-repFactor * 25}deg)`;
      }

      // 4. Energy Glow Burst at peak contraction (when repFactor > 0.8)
      if (energyBurstRef.current) {
        const burstOpacity = Math.max(0, (repFactor - 0.5) * 2);
        energyBurstRef.current.style.opacity = `${burstOpacity}`;
        energyBurstRef.current.style.transform = `scale(${0.9 + repFactor * 0.25})`;
      }

      // 5. Dynamic heartbeat pulse wave speed
      if (pulseWaveRef.current) {
        const waveScale = 1 + repFactor * 0.3;
        pulseWaveRef.current.style.transform = `scaleY(${waveScale})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

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
          viewBox="0 0 600 620"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={flameGlowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={muscleGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Central Power Flame Aura */}
          <circle cx="300" cy="300" r="260" fill={`url(#${flameGlowId})`} />

          {/* Gym Floor / Platform Mat line */}
          <line x1="80" y1="520" x2="520" y2="520" stroke="#F97316" strokeWidth="3" opacity="0.4" />
          <line x1="120" y1="528" x2="480" y2="528" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />

          {/* Energy Burst Rings (triggers at peak lift) */}
          <g
            ref={energyBurstRef}
            style={{ transformOrigin: "300px 220px", willChange: "transform, opacity", opacity: 0 }}
          >
            <circle cx="300" cy="220" r="140" stroke="#F97316" strokeWidth="2" strokeDasharray="8 10" opacity="0.6" />
            <polygon
              points="300,100 380,140 420,220 380,300 300,340 220,300 180,220 220,140"
              stroke="#EF4444"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.4"
            />
            {/* Sparkle energy spikes */}
            <line x1="300" y1="70" x2="300" y2="95" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="430" y1="120" x2="410" y2="135" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="170" y1="120" x2="190" y2="135" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* ── ATHLETIC LIFTER BODY GROUP (Squats & Rises on Scroll) ── */}
          <g ref={torsoRef} style={{ willChange: "transform" }}>
            {/* Head & Athletic Headband */}
            <circle cx="300" cy="140" r="32" stroke="#F97316" strokeWidth="3" fill="#1a1814" />
            {/* Athletic Headband */}
            <path
              d="M 270,132 C 285,127 315,127 330,132"
              stroke="#EF4444"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Neck */}
            <path d="M 290,172 L 290,192 L 310,192 L 310,172 Z" fill="#F97316" opacity="0.6" />

            {/* Powerful Traps & Shoulders */}
            <path
              d="M 240,205 C 265,188 285,186 300,186 C 315,186 335,188 360,205 L 348,270 C 330,285 315,290 300,290 C 285,290 270,285 252,270 Z"
              stroke="#F97316"
              strokeWidth="3.5"
              fill="#1a1814"
              strokeLinejoin="round"
            />

            {/* Chest & Abdominals muscle contours */}
            <path d="M 275,225 C 290,235 310,235 325,225" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="300" y1="225" x2="300" y2="285" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <path d="M 285,248 L 315,248" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M 288,266 L 312,266" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

            {/* Athletic Belt */}
            <rect x="264" y="285" width="72" height="18" rx="4" stroke="#F97316" strokeWidth="2" fill="#221f1a" />
            <rect x="292" y="288" width="16" height="12" rx="2" fill="#F59E0B" />

            {/* Legs & Knees (Squatting stance) */}
            {/* Left Thigh & Shin */}
            <path
              d="M 268,303 L 244,395 L 230,490 L 255,490 L 268,405 L 285,303 Z"
              stroke="#F97316"
              strokeWidth="2.5"
              fill="#1a1814"
              strokeLinejoin="round"
            />
            {/* Right Thigh & Shin */}
            <path
              d="M 332,303 L 356,395 L 370,490 L 345,490 L 332,405 L 315,303 Z"
              stroke="#F97316"
              strokeWidth="2.5"
              fill="#1a1814"
              strokeLinejoin="round"
            />
            {/* Weightlifting Shoes */}
            <path d="M 220,490 L 258,490 L 258,510 L 210,510 Z" fill="#EF4444" opacity="0.8" />
            <path d="M 380,490 L 342,490 L 342,510 L 390,510 Z" fill="#EF4444" opacity="0.8" />

            {/* ── LEFT ARM (Shoulder at 240, 205) ── */}
            <g
              ref={leftArmRef}
              style={{ transformOrigin: "240px 205px", willChange: "transform" }}
            >
              {/* Bicep & Forearm */}
              <path
                d="M 240,205 C 220,230 205,260 200,295 C 196,320 202,335 210,340"
                stroke="#F97316"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M 240,205 C 220,230 205,260 200,295 C 196,320 202,335 210,340"
                stroke="#1a1814"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </g>

            {/* ── LEFT DUMBBELL (Moves up and down with curl) ── */}
            <g
              ref={leftDumbbellRef}
              style={{ transformOrigin: "190px 330px", willChange: "transform" }}
            >
              <g transform="translate(140, 310)">
                {/* Dumbbell Handle */}
                <line x1="20" y1="20" x2="80" y2="20" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
                {/* Left Inner & Outer Weight Plates */}
                <rect x="25" y="0" width="8" height="40" rx="3" fill="#F97316" stroke="#1a1814" strokeWidth="1.5" />
                <rect x="15" y="4" width="8" height="32" rx="3" fill="#EF4444" stroke="#1a1814" strokeWidth="1.5" />
                {/* Right Inner & Outer Weight Plates */}
                <rect x="67" y="0" width="8" height="40" rx="3" fill="#F97316" stroke="#1a1814" strokeWidth="1.5" />
                <rect x="77" y="4" width="8" height="32" rx="3" fill="#EF4444" stroke="#1a1814" strokeWidth="1.5" />
                {/* Knurling center */}
                <line x1="45" y1="17" x2="55" y2="17" stroke="#1a1814" strokeWidth="2" />
                <line x1="45" y1="23" x2="55" y2="23" stroke="#1a1814" strokeWidth="2" />
              </g>
            </g>

            {/* ── RIGHT ARM (Shoulder at 360, 205) ── */}
            <g
              ref={rightArmRef}
              style={{ transformOrigin: "360px 205px", willChange: "transform" }}
            >
              {/* Bicep & Forearm */}
              <path
                d="M 360,205 C 380,230 395,260 400,295 C 404,320 398,335 390,340"
                stroke="#F97316"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M 360,205 C 380,230 395,260 400,295 C 404,320 398,335 390,340"
                stroke="#1a1814"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </g>

            {/* ── RIGHT DUMBBELL (Moves up and down with curl) ── */}
            <g
              ref={rightDumbbellRef}
              style={{ transformOrigin: "410px 330px", willChange: "transform" }}
            >
              <g transform="translate(360, 310)">
                {/* Dumbbell Handle */}
                <line x1="20" y1="20" x2="80" y2="20" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
                {/* Left Inner & Outer Weight Plates */}
                <rect x="25" y="0" width="8" height="40" rx="3" fill="#F97316" stroke="#1a1814" strokeWidth="1.5" />
                <rect x="15" y="4" width="8" height="32" rx="3" fill="#EF4444" stroke="#1a1814" strokeWidth="1.5" />
                {/* Right Inner & Outer Weight Plates */}
                <rect x="67" y="0" width="8" height="40" rx="3" fill="#F97316" stroke="#1a1814" strokeWidth="1.5" />
                <rect x="77" y="4" width="8" height="32" rx="3" fill="#EF4444" stroke="#1a1814" strokeWidth="1.5" />
                {/* Knurling center */}
                <line x1="45" y1="17" x2="55" y2="17" stroke="#1a1814" strokeWidth="2" />
                <line x1="45" y1="23" x2="55" y2="23" stroke="#1a1814" strokeWidth="2" />
              </g>
            </g>
          </g>

          {/* ── CARDIAC PULSE / HEARTBEAT WAVEFORM (Synchronized to effort) ── */}
          <g transform="translate(0, 545)">
            <path
              ref={pulseWaveRef}
              d="M 60,0 L 190,0 L 210,-24 L 225,28 L 240,-35 L 255,22 L 270,-12 L 285,0 L 330,0 L 345,-26 L 360,30 L 375,-38 L 390,20 L 405,0 L 540,0"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              style={{ transformOrigin: "300px 0px", willChange: "transform" }}
            />
          </g>

          {/* Rep Counter / Status Badge */}
          <g transform="translate(230, 565)">
            <rect x="0" y="0" width="140" height="24" rx="12" fill="#221f1a" stroke="#F97316" strokeWidth="1" />
            <text x="70" y="16" fill="#F97316" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">
              ⚡ STRENGTH &amp; REPS
            </text>
          </g>
        </svg>
      </div>

      {/* Floating Athletic Icons */}
      <span className={`${styles.floatingIcon} ${styles.icon1}`} aria-hidden="true">
        🏋️
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon2}`} aria-hidden="true">
        💪
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon3}`} aria-hidden="true">
        ⚡
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon4}`} aria-hidden="true">
        🔥
      </span>
    </div>
  );
}
