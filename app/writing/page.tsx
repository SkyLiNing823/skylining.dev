import { Card } from "@/components/card";
import { SectionHeading } from "@/components/section-heading";
import { formatPostDate, getAllPosts } from "@/lib/writing";

export const metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getAllPosts();
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
      <SectionHeading
        eyebrow="Writing"
        title="Notes, journals, travel logs, and reflections."
        description="A lightweight space for technical notes, personal reflections, travel logs, and the small transitions between places."
      />
      <div className="mt-10 flex items-center justify-between border-y border-white/40 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-950/40 sm:mt-14">
        <span>Selected notes</span>
        <span>{String(posts.length).padStart(2, "0")} entries</span>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.slug}
            title={post.title}
            description={post.description}
            tags={[post.category, ...post.language, ...post.tags]}
            href={`/writing/${post.slug}`}
            image={post.coverImage}
            imageAlt=""
            meta={formatPostDate(post.date)}
          />
        ))}
      </div>
    </section>
  );
}
