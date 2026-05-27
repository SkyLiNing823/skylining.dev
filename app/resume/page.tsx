import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, experiences, profile, skills } from "@/lib/site-data";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Resume"
          title="Experience across recommender systems, applied ML, and AI research."
          description="A web version of my resume. A downloadable PDF can be added after the final resume file is ready."
        />
        <button className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-500" title="PDF resume will be added later">
          <Download size={16} /> PDF coming soon
        </button>
      </div>

      <div className="mt-12 rounded-[2rem] glass-card p-8">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-50">{profile.name}</h2>
            <p className="mt-2 text-slate-400">{profile.title}</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2 md:text-right">
            <Link href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-ocean md:justify-end"><Mail size={15} /> {profile.email}</Link>
            <Link href={profile.linkedin} className="inline-flex items-center gap-2 transition hover:text-ocean md:justify-end"><Linkedin size={15} /> LinkedIn</Link>
            <Link href={profile.github} className="inline-flex items-center gap-2 transition hover:text-ocean md:justify-end"><Github size={15} /> GitHub</Link>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-8">
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-ocean">Education</h3>
              <div className="mt-5 space-y-6">
                {education.map((item) => (
                  <div key={item.school}>
                    <p className="text-sm text-slate-500">{item.period}</p>
                    <h4 className="mt-2 font-semibold text-slate-100">{item.school}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.degree}</p>
                    <p className="text-sm leading-6 text-slate-500">{item.detail}</p>
                    <p className="text-sm leading-6 text-slate-500">{item.location}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-ocean">Skills</h3>
              <div className="mt-5 space-y-5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-medium text-slate-100">{category}</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((item) => <span key={item} className="pill">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-ocean">Experience</h3>
            <div className="mt-6 space-y-8">
              {experiences.map((item) => (
                <article key={`${item.org}-${item.role}`} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-50">{item.role}</h4>
                      <p className="mt-1 text-slate-300">{item.org}</p>
                    </div>
                    <div className="shrink-0 text-sm text-slate-500 md:text-right">
                      <p className="whitespace-nowrap">{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
                    {item.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" /> <span>{bullet}</span></li>)}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
