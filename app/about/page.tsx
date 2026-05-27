import { SectionHeading } from "@/components/section-heading";
import { education, profile, skills } from "@/lib/site-data";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="About"
        title="I build applied ML systems and write about engineering, travel, and life."
        description={profile.summary}
      />

      <div className="mt-10 max-w-xl rounded-[1.5rem] border border-ocean/20 bg-gradient-to-br from-ocean/[0.14] via-white/[0.055] to-white/[0.025] p-5 shadow-glow">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean">Personal motto</p>
        <p className="mt-3 text-2xl font-semibold italic tracking-tight text-slate-50">The sky is the limit.</p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] glass-card p-8">
          <h2 className="text-2xl font-semibold text-slate-50">Current direction</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              I enjoy building practical AI systems that connect models, data pipelines, backend services, and user-facing applications. My experience spans recommender systems, AI research, quantitative modeling, and full-stack AI applications.
            </p>
            <p>
              Currently, I am especially interested in applied ML engineering, AI products, MLOps, and data-driven user experiences. I am also exploring physical AI and robotic integration as part of practical, real-world AI systems.
            </p>
            <p>
              Outside technical work, I use this site as a place to collect notes about graduate school, travel, J-pop, kendo, language learning, and personal reflections.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] glass-card p-8">
            <h2 className="text-2xl font-semibold text-slate-50">Education</h2>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.school} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  <p className="text-sm text-ocean">{item.period}</p>
                  <h3 className="mt-2 font-semibold text-slate-100">{item.school}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.degree}</p>
                  <p className="text-sm leading-6 text-slate-500">{item.detail} · {item.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] glass-card p-8">
            <h2 className="text-2xl font-semibold text-slate-50">Languages</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.Languages.map((item) => <span key={item} className="pill">{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
