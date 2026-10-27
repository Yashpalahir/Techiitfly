import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { PROJECTS } from "@/content/projects";
import { getPageDate } from "@/content/dates";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.techiitfly.com";

  const routes = [
    "",
    "/pricing",
    "/blog",
    "/mathsy-meet",
    "/xray",
    "/website-development-pune",
    "/websites-for-yoga-schools",
    "/websites-for-coaching-classes",
    "/websites-for-dentists",
    "/contact",
    "/terms",
    "/privacy",
    "/refund-policy",
    "/delivery-policy",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(getPageDate(route || "/").iso),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/websites") || route === "/pricing" || route === "/blog" ? 0.8 : 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(getPageDate(`/work/${p.slug}`).iso),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
