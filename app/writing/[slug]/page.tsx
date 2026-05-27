import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/writing";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-ocean">{post.category}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">{post.title}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-400">{post.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
      </div>
      <div className="prose-custom mt-12 border-t border-white/10 pt-10">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
