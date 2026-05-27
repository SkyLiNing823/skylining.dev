import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingDirectory = path.join(process.cwd(), "content", "writing");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(writingDirectory)) return [];

  const files = fs.readdirSync(writingDirectory).filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(writingDirectory, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "Notes",
        tags: data.tags ?? [],
        content,
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
