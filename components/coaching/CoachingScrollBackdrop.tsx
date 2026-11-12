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
  const glowId = `coachingGlow-${uid}`;
  const gradId = `coachingGrad-${uid}`;

  const teacherArmRef = useRef<SVGGElement | null>(null);
  const studentHandRef = useRef<SVGGElement | null>(null);
  const lightbulbRef = useRef<SVGGElement | null>(null);
  const formula1Ref = useRef<SVGGElement | null>(null);
  const formula2Ref = useRef<SVGGElement | null>(null);
  const formula3Ref = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let targetScroll = 0;
    let currentScroll = 0;
    let autoTimer = 0;
    let rafId: number;

    // Arc path from teacher's board (X: 300, Y: 210) across air (X: 500, Y: 130) to student's desk (X: 680, Y: 290)
    const p0 = { x: 300, y: 210 };
    const p1 = { x: 500, y: 130 };
    const p2 = { x: 680, y: 290 };

    const getArcPoint = (t: number) => {
      const normalizedT = ((t % 1) + 1) % 1;
      const u = 1 - normalizedT;
      const x = u * u * p0.x + 2 * u * normalizedT * p1.x + normalizedT * normalizedT * p2.x;
      const y = u * u * p0.y + 2 * u * normalizedT * p1.y + normalizedT * normalizedT * p2.y;
      return { x, y, t: normalizedT };
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      targetScroll = (scrollY / docHeight) * 3;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const animate = () => {
      autoTimer += 0.012;
      currentScroll += (targetScroll + autoTimer * 0.15 - currentScroll) * 0.1;

      // 1. Teacher arm gentle pointing motion
      if (teacherArmRef.current) {
        const armAngle = Math.sin(currentScroll * Math.PI * 2) * 12;
        teacherArmRef.current.style.transform = `rotate(${-15 + armAngle}deg)`;
      }

      // 2. Student writing / note-taking motion
      if (studentHandRef.current) {
        const handY = Math.sin(currentScroll * Math.PI * 4) * 3;
        studentHandRef.current.style.transform = `translateY(${handY}px)`;
      }

      // 3. Inspiration Lightbulb pulse
      if (lightbulbRef.current) {
        const bulbPulse = 1 + Math.sin(currentScroll * Math.PI * 3) * 0.12;
        lightbulbRef.current.style.transform = `scale(${bulbPulse})`;
      }

      // 4. Floating knowledge equations flowing across the arc
      const f1 = getArcPoint(currentScroll);
      if (formula1Ref.current) {
        formula1Ref.current.style.transform = `translate(${f1.x}px, ${f1.y}px)`;
        formula1Ref.current.style.opacity = `${f1.t < 0.15 ? f1.t * 6.6 : f1.t > 0.85 ? (1 - f1.t) * 6.6 : 1}`;
      }

      const f2 = getArcPoint(currentScroll + 0.33);
      if (formula2Ref.current) {
        formula2Ref.current.style.transform = `translate(${f2.x}px, ${f2.y}px)`;
        formula2Ref.current.style.opacity = `${f2.t < 0.15 ? f2.t * 6.6 : f2.t > 0.85 ? (1 - f2.t) * 6.6 : 1}`;
      }

      const f3 = getArcPoint(currentScroll + 0.66);
      if (formula3Ref.current) {
        formula3Ref.current.style.transform = `translate(${f3.x}px, ${f3.y}px)`;
        formula3Ref.current.style.opacity = `${f3.t < 0.15 ? f3.t * 6.6 : f3.t > 0.85 ? (1 - f3.t) * 6.6 : 1}`;
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
          viewBox="0 0 920 520"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.28" />
              <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Central Academic Soft Glow */}
          <ellipse cx="480" cy="260" rx="360" ry="170" fill={`url(#${glowId})`} />

          {/* Classroom Floor Line */}
          <line x1="60" y1="440" x2="860" y2="440" stroke="#3B82F6" strokeWidth="2.5" opacity="0.35" />

          {/* Knowledge Flow Flight Arc (Teacher's Board -> Student's Desk) */}
          <path
            d="M 300,210 Q 500,130 680,290"
            stroke={`url(#${gradId})`}
            strokeWidth="2"
            strokeDasharray="5 7"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* ── LEFT SIDE: TEACHER & CLASSROOM BOARD ── */}
          {/* Blackboard / Whiteboard */}
          <g transform="translate(140, 110)">
            {/* Board Frame */}
            <rect
              x="0"
              y="20"
              width="210"
              height="150"
              rx="8"
              stroke="#3B82F6"
              strokeWidth="2.5"
              fill="#181a20"
              fillOpacity="0.85"
            />
            {/* Board Stand / Legs */}
            <line x1="20" y1="170" x2="10" y2="330" stroke="#3B82F6" strokeWidth="2.5" opacity="0.5" />
            <line x1="190" y1="170" x2="200" y2="330" stroke="#3B82F6" strokeWidth="2.5" opacity="0.5" />
            {/* Chalk / Marker Tray */}
            <rect x="10" y="170" width="190" height="6" rx="2" fill="#3B82F6" opacity="0.6" />

            {/* Board Formulas & Illustrations */}
            <text x="18" y="52" fill="#F59E0B" fontFamily="monospace" fontSize="13" fontWeight="bold">
              E = mc²
            </text>
            <text x="110" y="52" fill="#3B82F6" fontFamily="monospace" fontSize="13" fontWeight="bold">
              ∑(x + y)
            </text>

            {/* Geometric Triangle on Board */}
            <polygon points="35,120 75,120 75,80" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.8" />
            <rect x="67" y="112" width="8" height="8" stroke="#10B981" strokeWidth="1" fill="none" opacity="0.7" />
            <text x="82" y="105" fill="#10B981" fontFamily="sans-serif" fontSize="10">
              a² + b² = c²
            </text>

            {/* Coordinate Axis Curve */}
            <line x1="25" y1="150" x2="85" y2="150" stroke="#F59E0B" strokeWidth="1" opacity="0.5" />
            <line x1="35" y1="130" x2="35" y2="160" stroke="#F59E0B" strokeWidth="1" opacity="0.5" />
            <path d="M 35,150 Q 55,130 85,135" stroke="#F59E0B" strokeWidth="1.5" fill="none" />

            {/* Inspiration Lightbulb atop the board */}
            <g
              ref={lightbulbRef}
              transform="translate(105, 5)"
              style={{ transformOrigin: "0px 0px", willChange: "transform" }}
            >
              <circle cx="0" cy="0" r="14" fill="#F59E0B" fillOpacity="0.3" />
              <path
                d="M -7,-2 C -7,-7 7,-7 7,-2 C 7,2 4,5 4,8 L -4,8 C -4,5 -7,2 -7,-2 Z"
                stroke="#F59E0B"
                strokeWidth="1.8"
                fill="#221f1a"
              />
              <line x1="-3" y1="10" x2="3" y2="10" stroke="#F59E0B" strokeWidth="1.8" />
              {/* Light rays */}
              <line x1="0" y1="-12" x2="0" y2="-17" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="-12" y1="-8" x2="-16" y2="-11" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="-8" x2="16" y2="-11" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
            </g>
          </g>

          {/* Teacher Silhouette Standing by the Board */}
          <g transform="translate(80, 160)">
            {/* Teacher Head & Glasses */}
            <circle cx="45" cy="50" r="18" stroke="#3B82F6" strokeWidth="2.5" fill="#1a1814" />
            <circle cx="41" cy="48" r="4" stroke="#3B82F6" strokeWidth="1" fill="none" />
            <circle cx="51" cy="48" r="4" stroke="#3B82F6" strokeWidth="1" fill="none" />
            <line x1="45" y1="48" x2="47" y2="48" stroke="#3B82F6" strokeWidth="1" />

            {/* Teacher Torso / Formal Blazer */}
            <path
              d="M 25,80 C 35,70 55,70 65,80 L 60,180 L 30,180 Z"
              stroke="#3B82F6"
              strokeWidth="2.5"
              fill="#181a20"
              strokeLinejoin="round"
            />
            {/* Tie */}
            <polygon points="45,72 48,95 45,120 42,95" fill="#F59E0B" />

            {/* Teacher Left Arm holding book / clipboard */}
            <path d="M 28,82 L 15,125 L 30,130" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
            <rect x="18" y="120" width="18" height="24" rx="2" fill="#F59E0B" stroke="#0e0d0b" strokeWidth="1" />

            {/* Teacher Right Arm pointing with teaching stylus to the board */}
            <g
              ref={teacherArmRef}
              transform="translate(62, 85)"
              style={{ transformOrigin: "0px 0px", willChange: "transform" }}
            >
              <path d="M 0,0 L 45,-25 L 80,-35" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
              {/* Teaching stylus / pointer */}
              <line x1="75" y1="-33" x2="110" y2="-48" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="110" cy="-48" r="3" fill="#F59E0B" />
            </g>

            {/* Teacher Legs */}
            <line x1="38" y1="180" x2="35" y2="280" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
            <line x1="52" y1="180" x2="55" y2="280" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* ── RIGHT SIDE: STUDENT AT STUDY DESK ── */}
          <g transform="translate(630, 210)">
            {/* Study Desk */}
            <rect x="20" y="90" width="140" height="12" rx="3" stroke="#3B82F6" strokeWidth="2" fill="#221f1a" />
            {/* Desk Legs */}
            <line x1="35" y1="102" x2="30" y2="230" stroke="#3B82F6" strokeWidth="2.5" opacity="0.6" />
            <line x1="145" y1="102" x2="150" y2="230" stroke="#3B82F6" strokeWidth="2.5" opacity="0.6" />

            {/* Open Textbook / Laptop on Desk */}
            <path
              d="M 45,90 L 70,82 L 95,90 L 70,95 Z"
              stroke="#F59E0B"
              strokeWidth="1.5"
              fill="#181a20"
            />
            <line x1="70" y1="82" x2="70" y2="95" stroke="#F59E0B" strokeWidth="1.5" />

            {/* Desk Study Lamp */}
            <path d="M 130,90 L 135,55 L 120,45" stroke="#3B82F6" strokeWidth="2" fill="none" />
            <polygon points="112,42 126,38 122,50" fill="#F59E0B" opacity="0.8" />
            <circle cx="118" cy="45" r="8" fill="#F59E0B" fillOpacity="0.2" />

            {/* Student Chair */}
            <line x1="70" y1="140" x2="70" y2="230" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
            <rect x="50" y="130" width="40" height="8" rx="2" fill="#3B82F6" opacity="0.4" />
            <line x1="88" y1="90" x2="88" y2="140" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />

            {/* Student Silhouette */}
            {/* Head looking attentively at the teacher */}
            <circle cx="70" cy="30" r="16" stroke="#3B82F6" strokeWidth="2.5" fill="#1a1814" />
            {/* Hair */}
            <path d="M 58,25 C 65,16 80,18 84,26" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />

            {/* Student Torso */}
            <path
              d="M 52,50 C 60,45 80,45 88,50 L 85,120 L 55,120 Z"
              stroke="#3B82F6"
              strokeWidth="2.2"
              fill="#181a20"
              strokeLinejoin="round"
            />

            {/* Student Note-taking Arm & Pencil */}
            <g ref={studentHandRef} style={{ willChange: "transform" }}>
              <path d="M 55,60 L 50,85 L 68,88" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round" />
              {/* Pen in hand */}
              <line x1="68" y1="88" x2="74" y2="82" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* "Aha!" / Idea spark rising from student */}
            <circle cx="95" cy="18" r="3" fill="#10B981" />
            <path d="M 95,8 L 95,12" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 102,15 L 98,17" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* ── STREAMING KNOWLEDGE SYMBOLS (GLIDING ALONG ARC ON SCROLL) ── */}
          {/* Symbol 1: Math Formula Badge */}
          <g ref={formula1Ref} style={{ willChange: "transform" }}>
            <g transform="translate(-16, -16)">
              <rect x="0" y="0" width="34" height="24" rx="6" fill="#221f1a" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="17" y="16" fill="#3B82F6" fontFamily="serif" fontSize="12" fontWeight="bold" textAnchor="middle">
                π · r²
              </text>
            </g>
          </g>

          {/* Symbol 2: Idea Discovery Star / Atom */}
          <g ref={formula2Ref} style={{ willChange: "transform" }}>
            <g transform="translate(-14, -14)">
              <circle cx="14" cy="14" r="14" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="14" y="19" fill="#F59E0B" fontFamily="sans-serif" fontSize="13" fontWeight="bold" textAnchor="middle">
                💡
              </text>
            </g>
          </g>

          {/* Symbol 3: Calculus / Geometry Badge */}
          <g ref={formula3Ref} style={{ willChange: "transform" }}>
            <g transform="translate(-16, -16)">
              <rect x="0" y="0" width="32" height="24" rx="6" fill="#221f1a" stroke="#10B981" strokeWidth="1.5" />
              <text x="16" y="16" fill="#10B981" fontFamily="serif" fontSize="12" fontWeight="bold" textAnchor="middle">
                ∫ dx
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Floating Educational Indicators */}
      <span className={`${styles.floatingIcon} ${styles.icon1}`} aria-hidden="true">
        📚
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon2}`} aria-hidden="true">
        🎓
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon3}`} aria-hidden="true">
        ✏️
      </span>
      <span className={`${styles.floatingIcon} ${styles.icon4}`} aria-hidden="true">
        📐
      </span>
    </div>
  );
}
