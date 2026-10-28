import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { SITE, getWhatsAppUrl } from "@/content/site";
import { buildOpenGraph, buildTwitter } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: buildOpenGraph({
      title: `${post.title} | techiitfly`,
      description: post.description,
      path: `/blog/${post.slug}`,
      image: "/og/home.png",
      alt: `${post.title} | techiitfly`,
      type: "article",
    }),
    twitter: buildTwitter({
      title: `${post.title} | techiitfly`,
      description: post.description,
      image: "/og/home.png",
    }),
  };
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "long",
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
      label: "PRICING & BUDGET GUIDE",
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.12)",
      border: "rgba(16, 185, 129, 0.28)",
      icon: "💰",
    };
  }
  if (slug.includes("checklist")) {
    return {
      label: "CLINIC PLAYBOOK",
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPost = allPosts.find((p) => p.slug !== post.slug) || null;
  const readTime = getReadTime(post.content);
  const tag = getPostTag(post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: "techiitfly",
      url: SITE.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "techiitfly",
      url: SITE.siteUrl,
      logo: `${SITE.siteUrl}/favicon.svg`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.siteUrl}/blog/${post.slug}`,
    },
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE.siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px", position: "relative" }}>
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(100vw, 900px)",
            height: "400px",
            background: `radial-gradient(circle at 50% 15%, ${tag.bg} 0%, rgba(6, 182, 212, 0.05) 50%, transparent 75%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <article
          style={{
            position: "relative",
            maxWidth: "760px",
            margin: "0 auto",
            padding: "50px 24px 100px",
            zIndex: 1,
          }}
        >
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              marginBottom: "28px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
            >
              Home
            </Link>
            <span style={{ opacity: 0.6 }}>/</span>
            <Link
              href="/blog"
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
            >
              Blog
            </Link>
            <span style={{ opacity: 0.6 }}>/</span>
            <span style={{ color: "var(--text)" }}>Article</span>
          </nav>

          {/* Category Tag Badge */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.74rem",
                fontWeight: 700,
                color: tag.color,
                background: tag.bg,
                border: `1px solid ${tag.border}`,
                padding: "4px 12px",
                borderRadius: "999px",
                letterSpacing: "0.06em",
              }}
            >
              <span>{tag.icon}</span>
              <span>{tag.label}</span>
            </span>
          </div>

          {/* Exactly one H1 */}
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.4rem, 5.2vw, 4.1rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--text)",
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>

          {/* Author & Reading Metadata Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              padding: "16px 0 24px",
              borderBottom: "1px solid var(--border)",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1D4ED8, #06B6D4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.76rem",
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(6,182,212,0.3)",
                flexShrink: 0,
              }}
            >
              tf
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                By the techiitfly team
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                }}
              >
                <time dateTime={post.date}>Published: {formatDate(post.date)}</time>
                {post.updated && post.updated !== post.date && (
                  <>
                    <span>·</span>
                    <time dateTime={post.updated}>Updated: {formatDate(post.updated)}</time>
                  </>
                )}
                <span>·</span>
                <span>⏱️ {readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Lead Summary Highlight Box */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderLeft: `4px solid ${tag.color}`,
              borderRadius: "0 14px 14px 0",
              padding: "20px 24px",
              marginBottom: "36px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.72rem",
                color: tag.color,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              IN THIS ARTICLE
            </span>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "1.06rem",
                lineHeight: 1.65,
                color: "var(--text)",
                margin: 0,
              }}
            >
              {post.description}
            </p>
          </div>

          {/* Render Markdown Content */}
          <div className="blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node: _node, children, ...props }) => (
                  <div style={{ marginTop: "50px", marginBottom: "18px" }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-instrument-serif)",
                        fontSize: "clamp(1.85rem, 3.4vw, 2.45rem)",
                        fontWeight: 400,
                        color: "var(--text)",
                        lineHeight: 1.25,
                        margin: 0,
                      }}
                      {...props}
                    >
                      {children}
                    </h2>
                    <div
                      style={{
                        width: "36px",
                        height: "3px",
                        background: "var(--accent)",
                        marginTop: "10px",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                ),
                h3: ({ node: _node, ...props }) => (
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "clamp(1.4rem, 2.6vw, 1.8rem)",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginTop: "32px",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                    {...props}
                  />
                ),
                p: ({ node: _node, ...props }) => (
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.06rem",
                      lineHeight: 1.82,
                      color: "var(--text)",
                      marginBottom: "22px",
                    }}
                    {...props}
                  />
                ),
                ul: ({ node: _node, ...props }) => (
                  <ul
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.04rem",
                      lineHeight: 1.8,
                      color: "var(--text)",
                      marginBottom: "26px",
                      paddingLeft: "26px",
                    }}
                    {...props}
                  />
                ),
                ol: ({ node: _node, ...props }) => (
                  <ol
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.04rem",
                      lineHeight: 1.8,
                      color: "var(--text)",
                      marginBottom: "26px",
                      paddingLeft: "26px",
                    }}
                    {...props}
                  />
                ),
                li: ({ node: _node, ...props }) => (
                  <li
                    style={{
                      marginBottom: "10px",
                      paddingLeft: "4px",
                    }}
                    {...props}
                  />
                ),
                a: ({ node: _node, href, children, ...props }) => {
                  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
                  if (isInternal) {
                    return (
                      <Link
                        href={href}
                        style={{
                          color: "var(--accent)",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                          fontWeight: 600,
                        }}
                      >
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                        fontWeight: 600,
                      }}
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
                table: ({ node: _node, ...props }) => (
                  <div
                    style={{
                      overflowX: "auto",
                      margin: "36px 0",
                      borderRadius: "14px",
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.14)",
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.96rem",
                        textAlign: "left",
                      }}
                      {...props}
                    />
                  </div>
                ),
                th: ({ node: _node, ...props }) => (
                  <th
                    style={{
                      padding: "16px 20px",
                      borderBottom: "2px solid var(--accent)",
                      background: "var(--surface-2)",
                      color: "var(--text)",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                    {...props}
                  />
                ),
                td: ({ node: _node, ...props }) => (
                  <td
                    style={{
                      padding: "16px 20px",
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text)",
                      lineHeight: 1.6,
                      verticalAlign: "top",
                    }}
                    {...props}
                  />
                ),
                blockquote: ({ node: _node, ...props }) => (
                  <blockquote
                    style={{
                      margin: "28px 0",
                      padding: "18px 24px",
                      borderLeft: "4px solid var(--accent)",
                      background: "var(--surface)",
                      borderRadius: "0 12px 12px 0",
                      fontStyle: "italic",
                      color: "var(--text)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}
                    {...props}
                  />
                ),
                strong: ({ node: _node, ...props }) => (
                  <strong
                    style={{
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                    {...props}
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Related / Continue Reading Card */}
          {relatedPost && (
            <div
              style={{
                marginTop: "60px",
                padding: "28px 30px",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.74rem",
                  color: "var(--accent)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                CONTINUE READING · NEXT GUIDE
              </span>
              <h4
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "1.75rem",
                  color: "var(--text)",
                  margin: 0,
                  fontWeight: 400,
                  lineHeight: 1.25,
                }}
              >
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  style={{
                    color: "var(--text)",
                    textDecoration: "none",
                  }}
                >
                  {relatedPost.title}
                </Link>
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.96rem",
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {relatedPost.description}
              </p>
              <div style={{ marginTop: "4px" }}>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  <span>Read next guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}

          {/* About Author Box */}
          <div
            style={{
              marginTop: "40px",
              padding: "24px 28px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1D4ED8, #06B6D4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.95rem",
                fontWeight: 700,
                boxShadow: "0 4px 14px rgba(6,182,212,0.35)",
                flexShrink: 0,
              }}
            >
              tf
            </div>
            <div style={{ flex: 1, minWidth: "220px" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.98rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                About techiitfly
              </div>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.88rem",
                  color: "var(--muted)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                We build high-performance, mobile-first websites with guaranteed 7-day delivery for dental clinics, schools, and local businesses in Pune.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div
            style={{
              marginTop: "40px",
              padding: "36px 32px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "18px",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <span className="section-label">WEBSITE DEVELOPMENT IN PUNE</span>
            <h3
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.85rem, 3.6vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--text)",
                margin: "10px 0 12px",
              }}
            >
              Ready to build or upgrade your clinic website?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.98rem",
                color: "var(--muted)",
                maxWidth: "540px",
                margin: "0 auto 26px",
                lineHeight: 1.6,
              }}
            >
              We build fast, mobile-friendly websites with guaranteed 7-day delivery. Get in touch for a fixed-price quote and honest advice.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
              <a
                href={getWhatsAppUrl(`Hi techiitfly, I read your article "${post.title}" and would like to discuss a website.`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 26px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "var(--primary-btn-text)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(245,158,11,0.25)",
                }}
              >
                <span>WhatsApp us</span>
                <span>↗</span>
              </a>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 24px",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>Contact Us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
