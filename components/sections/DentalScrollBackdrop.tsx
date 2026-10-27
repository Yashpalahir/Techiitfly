"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function DentalScrollBackdrop() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 65, damping: 22, restDelta: 0.001 });

  // Real mouth opening offsets (upper moves up by 40px, lower drops by 75px)
  const upperY = useTransform(smoothScroll, [0, 0.4], [0, -42]);
  const lowerY = useTransform(smoothScroll, [0, 0.4], [0, 78]);
  const coreGlow = useTransform(smoothScroll, [0, 0.15, 0.45], [0, 0.9, 0.5]);
  const backdropOpacity = useTransform(smoothScroll, [0, 0.2, 0.8, 1], [0.28, 0.36, 0.36, 0.22]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* ── Fixed Ambient Realistic Mouth Backdrop (Scroll Reactive) ────────── */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: backdropOpacity,
          transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "min(92vw, 980px)",
            aspectRatio: "16 / 9",
            maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%)",
          }}
        >
          {/* Inner Glowing Oral Cavity Light Beam */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              height: "40%",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.45) 0%, rgba(217, 119, 6, 0.2) 40%, transparent 75%)",
              opacity: coreGlow,
              filter: "blur(20px)",
              zIndex: 1,
            }}
          />

          {/* Upper Jaw Layer (Upper lip, gums, pearly white upper teeth) */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "60%",
              y: upperY,
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/images/dental/upper-jaw.jpg"
                alt="Realistic upper dental arch with pearly white teeth"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </motion.div>

          {/* Lower Jaw Layer (Lower lip, gums, pearly white lower teeth) */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "55%",
              y: lowerY,
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/images/dental/lower-jaw.jpg"
                alt="Realistic lower dental arch with pearly white teeth"
                fill
                style={{ objectFit: "cover", objectPosition: "center bottom" }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Floating Interactive Status Pill ───────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 40,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "999px",
          padding: "8px 16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.74rem",
          color: "var(--text)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 10px #10b981" }} />
        <span>SCROLL TO OPEN JAW</span>
        <span style={{ color: "var(--muted)" }}>·</span>
        <span style={{ color: "var(--accent)", fontWeight: 700 }}>
          REAL DENTAL SIMULATION
        </span>
      </div>
    </>
  );
}
