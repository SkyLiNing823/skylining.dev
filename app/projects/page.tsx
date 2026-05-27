import { Card } from "@/components/card";
import { SectionHeading } from "@/components/section-heading";
import { projectPlaceholders } from "@/lib/site-data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work will become detailed case studies."
        description="This section is intentionally kept as a placeholder for now. Later, each project can be written as a case study with problem, role, system design, results, and lessons learned."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projectPlaceholders.map((project) => <Card key={project.title} {...project} />)}
      </div>
    </section>
  );
}
