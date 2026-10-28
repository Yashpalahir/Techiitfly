import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/content/site";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

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

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function getReadTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function getPostTag(slug: string) {
  if (slug.includes("cost") || slug.includes("pricing")) {
    return {
      label: "COST & BUDGET GUIDE",
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.12)",
      border: "rgba(16, 185, 129, 0.28)",
      icon: "💰",
    };
  }
  if (slug.includes("checklist")) {
    return {
      label: "CLINIC CHECKLIST",
      color: "var(--accent)",
      bg: "var(--accent-dim)",
      border: "rgba(245, 158, 11, 0.3)",
      icon: "📋",
    };
  }
  return {
    label: "PRACTICAL GUIDE",
    color: "var(--accent)",
    bg: "var(--accent-dim)",
    border: "rgba(245, 158, 11, 0.3)",
    icon: "📖",
  };
}

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

        {/* Posts List */}
        <section
          style={{
            position: "relative",
            padding: "20px 24px 100px",
            maxWidth: "920px",
            margin: "0 auto",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {posts.map((post) => {
              const readTime = getReadTime(post.content);
              const tag = getPostTag(post.slug);

              return (
                <article
                  key={post.slug}
                  className="blog-card"
                  style={{
                    position: "relative",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "18px",
                    padding: "32px 32px",
                    transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle top accent gradient stripe */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, ${tag.color}, rgba(6,182,212,0.6) 50%, transparent 100%)`,
                    }}
                  />

                  {/* Header metadata strip */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      flexWrap: "wrap",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: tag.color,
                        background: tag.bg,
                        border: `1px solid ${tag.border}`,
                        padding: "3px 10px",
                        borderRadius: "999px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      <span>{tag.icon}</span>
                      <span>{tag.label}</span>
                    </span>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.78rem",
                        color: "var(--muted)",
                      }}
                    >
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>·</span>
                      <span>⏱️ {readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "clamp(1.7rem, 3.2vw, 2.2rem)",
                      fontWeight: 400,
                      lineHeight: 1.25,
                      margin: "0 0 12px",
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        color: "var(--text)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.98rem",
                      lineHeight: 1.65,
                      color: "var(--muted)",
                      margin: "0 0 22px",
                    }}
                  >
                    {post.description}
                  </p>

                  {/* Footer of card */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "14px",
                      flexWrap: "wrap",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "26px",
                          height: "26px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #1D4ED8, #06B6D4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                        }}
                      >
                        tf
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-sans)",
                          fontSize: "0.86rem",
                          color: "var(--muted)",
                        }}
                      >
                        By the techiitfly team
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        padding: "7px 14px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>Read article</span>
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
