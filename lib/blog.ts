import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogPost {
  title: string;
  metaTitle?: string;
  description: string;
  date: string;
  updated: string;
  displayUpdated?: string;
  slug: string;
  content: string;
  category?: string;
  faqs?: FAQItem[];
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);
  const posts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;
    const fullPath = path.join(BLOG_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const slug = data.slug || fileName.replace(/\.md$/, "");

    posts.push({
      title: data.title || "",
      metaTitle: data.metaTitle || undefined,
      description: data.description || "",
      date: data.date || "",
      updated: data.updated || data.date || "",
      displayUpdated: data.displayUpdated || undefined,
      slug,
      content,
      category: data.category || undefined,
      faqs: Array.isArray(data.faqs) ? data.faqs : undefined,
    });
  }

  // Sort newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title || "",
    metaTitle: data.metaTitle || undefined,
    description: data.description || "",
    date: data.date || "",
    updated: data.updated || data.date || "",
    displayUpdated: data.displayUpdated || undefined,
    slug: data.slug || slug,
    content,
    category: data.category || undefined,
    faqs: Array.isArray(data.faqs) ? data.faqs : undefined,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  const fileNames = fs.readdirSync(BLOG_DIR);
  return fileNames
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
