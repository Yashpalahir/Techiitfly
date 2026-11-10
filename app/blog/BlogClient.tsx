"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

const CATEGORIES = [
  { label: "All", value: "All", href: "/blog" },
  {
    label: "Dentists & Clinics",
    value: "Dentists & Clinics",
    href: "/blog?category=Dentists+%26+Clinics",
  },
  {
    label: "Yoga & Wellness",
    value: "Yoga & Wellness",
    href: "/blog?category=Yoga+%26+Wellness",
  },
] as const;

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

interface BlogListProps {
  posts: BlogPost[];
  selectedCategory: string;
}

function BlogListDisplay({ posts, selectedCategory }: BlogListProps) {
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Category Filter Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "36px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.76rem",
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginRight: "4px",
          }}
        >
          Category:
        </span>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <Link
              key={cat.value}
              href={cat.href}
              scroll={false}
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.86rem",
                fontWeight: isActive ? 600 : 500,
                padding: "7px 16px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.18s ease",
                background: isActive ? "var(--accent)" : "var(--surface)",
                color: isActive ? "var(--primary-btn-text)" : "var(--muted)",
                border: isActive ? "1px solid var(--accent)" : "1px solid var(--border)",
                boxShadow: isActive ? "0 2px 10px rgba(245, 158, 11, 0.25)" : "none",
              }}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>

      {/* Posts List or Empty State */}
      {filteredPosts.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 24px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "1.8rem",
              color: "var(--text)",
              margin: "0 0 10px",
            }}
          >
            No articles in &ldquo;{selectedCategory}&rdquo; yet
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "0.95rem",
              color: "var(--muted)",
              maxWidth: "460px",
              margin: "0 auto 24px",
              lineHeight: 1.5,
            }}
          >
            We are actively drafting new playbooks and guides for this industry. Check back soon or view all articles.
          </p>
          <Link
            href="/blog"
            scroll={false}
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "8px",
              background: "var(--accent)",
              color: "var(--primary-btn-text)",
              fontFamily: "var(--font-geist-sans)",
              fontSize: "0.88rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View all articles
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {filteredPosts.map((post) => {
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
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    {post.category && (
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "var(--text)",
                          background: "var(--surface-2)",
                          border: "1px solid var(--border)",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {post.category}
                      </span>
                    )}
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
                  </div>

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
      )}
    </>
  );
}

function BlogListInner({ posts }: { posts: BlogPost[] }) {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category");

  const selectedCategory =
    rawCategory && CATEGORIES.some((c) => c.value.toLowerCase() === rawCategory.toLowerCase())
      ? CATEGORIES.find((c) => c.value.toLowerCase() === rawCategory.toLowerCase())!.value
      : "All";

  return <BlogListDisplay posts={posts} selectedCategory={selectedCategory} />;
}

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  return (
    <Suspense fallback={<BlogListDisplay posts={posts} selectedCategory="All" />}>
      <BlogListInner posts={posts} />
    </Suspense>
  );
}
