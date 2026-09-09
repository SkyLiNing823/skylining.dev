import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingDirectory = path.join(process.cwd(), "content", "writing");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  series?: string;
  tags: string[];
  language: string[];
  status: "published" | "draft";
  coverImage?: string;
  sourceUrl?: string;
  content: string;
};

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string");
  if (typeof value === "string") return [value];
  return [];
}

function getTimestamp(post: Post) {
  return Number(new Date(post.publishedAt || post.date));
}

export function formatPostDate(date: string, dateStyle: "medium" | "long" = "medium") {
  return new Intl.DateTimeFormat("en", { dateStyle, timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(writingDirectory)) return [];

  const files = fs.readdirSync(writingDirectory).filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(writingDirectory, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      const status: Post["status"] = data.status === "draft" ? "draft" : "published";

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        publishedAt: data.publishedAt ?? data.date ?? "",
        updatedAt: data.updatedAt,
        category: data.category ?? "Notes",
        series: data.series,
        tags: toStringArray(data.tags),
        language: toStringArray(data.language),
        status,
        coverImage: data.coverImage,
        sourceUrl: data.sourceUrl,
        content,
      };
    })
    .filter((post) => post.status === "published")
    .sort((a, b) => getTimestamp(b) - getTimestamp(a));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
