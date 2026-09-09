import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowUpRight } from "lucide-react";
import remarkGfm from "remark-gfm";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/writing";

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return `https://www.youtube-nocookie.com/embed/${parsed.pathname.slice(1)}`;
    if (parsed.pathname.startsWith("/shorts/")) return `https://www.youtube-nocookie.com/embed/${parsed.pathname.split("/")[2]}`;
    if (parsed.pathname.startsWith("/embed/")) return url.replace("youtube.com", "youtube-nocookie.com");
    const videoId = parsed.searchParams.get("v");
    if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch {
    return null;
  }

  return null;
}

function VideoEmbed({ url }: { url: string }) {
  const embedUrl = getYouTubeEmbedUrl(url);
  if (!embedUrl) return <Link href={url}>{url}</Link>;

  return (
    <div className="my-8">
      <div className="video-embed">
        <iframe
          src={embedUrl}
          title="Article video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <Link href={url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm">
        Watch on YouTube <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: post.coverImage ? { images: [post.coverImage] } : undefined,
  };
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-ocean">{post.series ?? post.category}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">{post.title}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-400">{post.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
        <time dateTime={post.publishedAt}>
          {formatPostDate(post.date, "long")}
        </time>
        {post.sourceUrl ? (
          <Link href={post.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-ocean">
            Original on DevelopersIO <ArrowUpRight size={14} />
          </Link>
        ) : null}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {[...post.language, ...post.tags].map((tag) => <span key={tag} className="pill">{tag}</span>)}
      </div>
      {post.coverImage ? (
        <div className="mt-10 aspect-[1200/630] overflow-hidden rounded-3xl border border-white/10 bg-black/20">
          <img src={post.coverImage} alt="" className="h-full w-full object-cover" />
        </div>
      ) : null}
      <div className="prose-custom mt-12 border-t border-white/10 pt-10">
        <MDXRemote source={post.content} components={{ VideoEmbed }} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
