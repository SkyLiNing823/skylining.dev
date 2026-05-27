import { Card } from "@/components/card";
import { SectionHeading } from "@/components/section-heading";
import { writingPlaceholders } from "@/lib/site-data";

export const metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Writing"
        title="Notes, journals, travel logs, and reflections."
        description="This area will later collect both technical writing and personal writing. For now, it is kept clean until the first real posts are ready."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {writingPlaceholders.map((post) => <Card key={post.title} {...post} />)}
      </div>
    </section>
  );
}
