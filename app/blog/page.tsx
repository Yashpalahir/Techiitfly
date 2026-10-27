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
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: "80px" }}>
        {/* Hero */}
        <section
          style={{
            padding: "80px 24px 40px",
            maxWidth: "920px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="section-label">GUIDES &amp; ARTICLES</span>
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text)",
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Guides on websites and apps for clinics, schools and small businesses in Pune.
          </p>
        </section>

        {/* Posts List */}
        <section
          style={{
            padding: "20px 24px 100px",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "28px 28px",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "10px",
                  }}
                >
                  <time
                    dateTime={post.date}
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.8rem",
                      color: "var(--muted)",
                    }}
                  >
                    {formatDate(post.date)}
                  </time>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    GUIDE
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: "var(--text)",
                    margin: "0 0 10px",
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      color: "var(--text)",
                      textDecoration: "none",
                    }}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: "0.96rem",
                    lineHeight: 1.6,
                    color: "var(--muted)",
                    margin: "0 0 18px",
                  }}
                >
                  {post.description}
                </p>

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
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  <span>Read article</span>
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
