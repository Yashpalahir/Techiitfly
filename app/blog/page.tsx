import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/content/site";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on websites and apps for clinics, schools and small businesses in Pune.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: buildOpenGraph({
    title: "Blog | techiitfly",
    description:
      "Guides on websites and apps for clinics, schools and small businesses in Pune.",
    path: "/blog",
    image: "/og/home.png",
    alt: "techiitfly Blog",
  }),
  twitter: buildTwitter({
    title: "Blog | techiitfly",
    description:
      "Guides on websites and apps for clinics, schools and small businesses in Pune.",
    image: "/og/home.png",
  }),
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE.siteUrl}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px", position: "relative" }}>
        {/* Subtle Ambient Top Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(100vw, 980px)",
            height: "360px",
            background: "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.12) 0%, rgba(6, 182, 212, 0.06) 40%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Hero */}
        <section
          style={{
            position: "relative",
            padding: "80px 24px 36px",
            maxWidth: "920px",
            margin: "0 auto",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              marginBottom: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(16,185,129,0.6)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.76rem",
                color: "var(--accent)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              PRACTICAL GUIDES &amp; PLAYBOOKS
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.8rem, 6vw, 4.6rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text)",
              marginTop: "8px",
              marginBottom: "16px",
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.22rem)",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "640px",
              margin: "0 auto 20px",
            }}
          >
            Guides on websites and apps for clinics, schools and small businesses in Pune.
          </p>

          {/* Quick value props pill strip */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.78rem",
              color: "var(--muted)",
            }}
          >
            <span>✓ 100% Practical &amp; Jargon-Free</span>
            <span>·</span>
            <span>✓ Pune Clinic Benchmarks</span>
            <span>·</span>
            <span>✓ Transparent Pricing</span>
          </div>
        </section>

        {/* Blog Posts with Category Filter */}
        <section
          style={{
            position: "relative",
            padding: "20px 24px 100px",
            maxWidth: "920px",
            margin: "0 auto",
            zIndex: 1,
          }}
        >
          <BlogClient posts={posts} />
        </section>
      </main>
      <Footer />
    </>
  );
}
