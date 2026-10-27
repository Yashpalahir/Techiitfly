"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

export default function DentalInteractiveSmile() {
  const [aperture, setAperture] = useState(25); // 0% to 100%
  const [isHovered, setIsHovered] = useState(false);

  // Sync with scroll as well
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // When scrolling, dynamically adjust aperture unless user is actively dragging the slider
  useEffect(() => {
    return smoothScroll.on("change", (latest) => {
      if (!isHovered) {
        // Map top of page to 0% - 90%
        const mapped = Math.min(Math.max((latest / 0.35) * 80 + 10, 0), 100);
        setAperture(Math.round(mapped));
      }
    });
  }, [smoothScroll, isHovered]);

  // Pixel offsets for realistic mouth opening
  const upperY = -(aperture * 0.42); // -0px to -42px
  const lowerY = aperture * 0.72;    // +0px to +72px
  const glowOpacity = Math.min(aperture / 45, 1);
  const gapMm = Math.round((aperture / 100) * 45); // 0 to 45mm clinical jaw opening

  return (
    <section
      style={{
        padding: "40px 24px 60px",
        maxWidth: "1060px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "28px",
          padding: "36px 28px",
          textAlign: "center",
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "550px",
            height: "320px",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 14px",
              borderRadius: "999px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              marginBottom: "12px",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981" }} />
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.74rem", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              INTERACTIVE 3D SMILE ARCHITECTURE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--text)",
              margin: "6px 0 10px",
            }}
          >
            Real Photorealistic Mouth &amp; Teeth Simulation
          </h2>

          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "0.98rem",
              color: "var(--muted)",
              maxWidth: "640px",
              margin: "0 auto 30px",
              lineHeight: 1.6,
            }}
          >
            Drag the slider or scroll the page to see the teeth part naturally, revealing the oral cavity and diagnostic clinic insights.
          </p>

          {/* Interactive Photorealistic Stage */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto 28px",
              height: "380px",
              borderRadius: "22px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "#16191e",
              boxShadow: "inset 0 0 50px rgba(0,0,0,0.8), 0 16px 36px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Tech HUD Grid Background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.12,
                backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Inner Oral Cavity Glow & Diagnostics (Behind the teeth layers) */}
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "70%",
                height: "50%",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.45) 0%, rgba(136, 19, 55, 0.6) 50%, transparent 80%)",
                opacity: glowOpacity,
                filter: "blur(16px)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {/* Tech HUD Labels in Center when mouth opens */}
            <motion.div
              animate={{ opacity: glowOpacity }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                zIndex: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.82rem",
                  color: "#fff",
                  background: "rgba(0,0,0,0.75)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--accent)",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  boxShadow: "0 0 16px rgba(245, 158, 11, 0.35)",
                }}
              >
                {gapMm > 35
                  ? "FULL CLINICAL APERTURE · 45mm"
                  : gapMm > 15
                  ? `NATURAL OCCLUSION · ${gapMm}mm CLEARANCE`
                  : "CLOSED BITE · RESTING SMILE"}
              </span>
              <span style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.84rem", color: "var(--accent)", fontWeight: 600 }}>
                Digital RVG Scan Ready · Clear Aligner 0.1mm Precision
              </span>
            </motion.div>

            {/* Upper Jaw Real Image Layer (glides upwards on scroll/slider) */}
            <motion.div
              animate={{ y: upperY }}
              transition={{ type: "spring", stiffness: 140, damping: 20 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "58%",
                zIndex: 2,
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src="/images/dental/upper-jaw.jpg"
                  alt="Real upper teeth and natural smile"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
            </motion.div>

            {/* Lower Jaw Real Image Layer (glides downwards on scroll/slider) */}
            <motion.div
              animate={{ y: lowerY }}
              transition={{ type: "spring", stiffness: 140, damping: 20 }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "54%",
                zIndex: 2,
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src="/images/dental/lower-jaw.jpg"
                  alt="Real lower teeth and natural smile"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center bottom" }}
                  priority
                />
              </div>
            </motion.div>

            {/* Top-Right Badge */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "6px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                color: "var(--text)",
                zIndex: 10,
              }}
            >
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: aperture > 20 ? "#10b981" : "var(--accent)" }} />
              <span>JAW OPEN: {aperture}% ({gapMm}mm)</span>
            </div>
          </div>

          {/* Interactive Slider Control */}
          <div style={{ maxWidth: "560px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-geist-mono)", fontSize: "0.82rem", color: "var(--muted)" }}>
              <span>Closed Smile (0%)</span>
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>Aperture: {aperture}% ({gapMm}mm)</span>
              <span>Open Mouth (100%)</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={aperture}
              onChange={(e) => {
                setIsHovered(true);
                setAperture(Number(e.target.value));
              }}
              style={{
                width: "100%",
                accentColor: "var(--accent)",
                cursor: "pointer",
                height: "6px",
                borderRadius: "3px",
              }}
            />
            <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.85rem", color: "var(--muted)", marginTop: "4px" }}>
              💡 Move slider or scroll the page up &amp; down to watch the natural mouth open!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
