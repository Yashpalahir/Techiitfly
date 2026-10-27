import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  updated: string;
  slug: string;
  content: string;
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
      description: data.description || "",
      date: data.date || "",
      updated: data.updated || data.date || "",
      slug,
      content,
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
    description: data.description || "",
    date: data.date || "",
    updated: data.updated || data.date || "",
    slug: data.slug || slug,
    content,
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
