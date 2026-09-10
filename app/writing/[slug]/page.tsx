import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: post.coverImage ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14">
      <Link href="/writing" className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/25 px-4 py-2 text-xs font-medium text-sky-950/55 backdrop-blur-xl transition hover:bg-white/50 hover:text-sky-950 sm:mb-14">
        <ArrowLeft size={14} /> All writing
      </Link>
      <header className="mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-sky-900/15" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-900/50 sm:text-xs">{post.series ?? post.category}</p>
          <span className="h-px w-7 bg-sky-900/15" />
        </div>
        <h1 className="font-display mx-auto mt-5 max-w-4xl text-[clamp(2.65rem,7vw,5rem)] font-normal leading-[1.03] tracking-[-0.047em] text-sky-950 text-balance">{post.title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-sky-950/60 sm:text-lg sm:leading-8">{post.description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-sky-950/45 sm:text-sm">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.date, "long")}
          </time>
          {post.sourceUrl ? (
            <Link href={post.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sky-950/50 transition hover:text-ocean">
              Original on DevelopersIO <ArrowUpRight size={14} />
            </Link>
          ) : null}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[...post.language, ...post.tags].map((tag) => <span key={tag} className="pill">{tag}</span>)}
        </div>
      </header>
      {post.coverImage ? (
        <div className="mt-10 aspect-[1200/630] overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/20 shadow-soft sm:mt-12 sm:rounded-[2.5rem]">
          <img src={post.coverImage} alt="" className="h-full w-full object-cover" />
        </div>
      ) : null}
      <div className="prose-custom glass-panel mt-6 rounded-[1.75rem] px-5 py-7 sm:mt-8 sm:rounded-[2.5rem] sm:px-8 sm:py-10 md:px-12 md:py-12">
        <MDXRemote source={post.content} components={{ VideoEmbed }} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
