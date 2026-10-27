import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
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
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px" }}>
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "60px 24px 100px",
          }}
        >
          {/* Back link */}
          <div style={{ marginBottom: "28px" }}>
            <Link
              href="/blog"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "0.9rem",
                color: "var(--muted)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>←</span>
              <span>All guides</span>
            </Link>
          </div>

          {/* Metadata banner */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.82rem",
              color: "var(--muted)",
              marginBottom: "16px",
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
            <span style={{ color: "var(--text)" }}>By the techiitfly team</span>
          </div>

          {/* Exactly one H1 */}
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--text)",
              marginBottom: "24px",
            }}
          >
            {post.title}
          </h1>

          {/* Lead description */}
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "1.15rem",
              lineHeight: 1.65,
              color: "var(--muted)",
              marginBottom: "40px",
              paddingBottom: "24px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {post.description}
          </p>

          {/* Render Markdown Content */}
          <div className="blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node: _node, ...props }) => (
                  <h2
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginTop: "44px",
                      marginBottom: "16px",
                      lineHeight: 1.25,
                    }}
                    {...props}
                  />
                ),
                h3: ({ node: _node, ...props }) => (
                  <h3
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginTop: "32px",
                      marginBottom: "12px",
                    }}
                    {...props}
                  />
                ),
                p: ({ node: _node, ...props }) => (
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.02rem",
                      lineHeight: 1.75,
                      color: "var(--text)",
                      marginBottom: "20px",
                    }}
                    {...props}
                  />
                ),
                ul: ({ node: _node, ...props }) => (
                  <ul
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.02rem",
                      lineHeight: 1.75,
                      color: "var(--text)",
                      marginBottom: "24px",
                      paddingLeft: "24px",
                    }}
                    {...props}
                  />
                ),
                ol: ({ node: _node, ...props }) => (
                  <ol
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "1.02rem",
                      lineHeight: 1.75,
                      color: "var(--text)",
                      marginBottom: "24px",
                      paddingLeft: "24px",
                    }}
                    {...props}
                  />
                ),
                li: ({ node: _node, ...props }) => (
                  <li
                    style={{
                      marginBottom: "8px",
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
                          fontWeight: 500,
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
                        fontWeight: 500,
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
                      margin: "32px 0",
                      borderRadius: "12px",
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "0.95rem",
                        textAlign: "left",
                      }}
                      {...props}
                    />
                  </div>
                ),
                th: ({ node: _node, ...props }) => (
                  <th
                    style={{
                      padding: "14px 18px",
                      borderBottom: "1px solid var(--border)",
                      background: "var(--surface-2)",
                      color: "var(--text)",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                    {...props}
                  />
                ),
                td: ({ node: _node, ...props }) => (
                  <td
                    style={{
                      padding: "14px 18px",
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text)",
                      lineHeight: 1.5,
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

          {/* CTA Box */}
          <div
            style={{
              marginTop: "56px",
              padding: "36px 32px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <span className="section-label">WEBSITE DEVELOPMENT IN PUNE</span>
            <h3
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                fontWeight: 400,
                color: "var(--text)",
                margin: "8px 0 12px",
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
                margin: "0 auto 24px",
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
                  padding: "12px 24px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "var(--primary-btn-text)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
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
                  padding: "12px 24px",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.95rem",
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
