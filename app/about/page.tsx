import { Languages, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, profile, skills } from "@/lib/site-data";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
      <SectionHeading
        eyebrow="About"
        title="I build applied ML systems and write about engineering, travel, and life."
        description={profile.summary}
      />

      <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        <article className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-9 lg:p-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/25 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-900/50">Current direction</p>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/35 text-sky-700/70">
                <Sparkles size={17} />
              </span>
            </div>
            <h2 className="font-display mt-7 max-w-xl text-3xl font-normal leading-tight tracking-[-0.035em] text-sky-950 sm:text-4xl">
              Practical intelligence, thoughtfully brought into the real world.
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-sky-950/65 sm:text-base sm:leading-8">
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
            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/45 pt-6">
              {skills.Interests.map((item) => <span key={item} className="pill">{item}</span>)}
            </div>
          </div>
        </article>

        <div className="space-y-5">
          <aside className="overflow-hidden rounded-[2rem] border border-white/55 bg-gradient-to-br from-white/55 via-white/38 to-sky-100/30 p-6 shadow-soft backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-900/50">Personal motto</p>
            <blockquote className="font-display mt-8 max-w-full whitespace-nowrap text-[clamp(1.45rem,7.5vw,3rem)] font-normal italic leading-[1.08] tracking-[-0.045em] text-sky-950">
              “The sky is the limit.”
            </blockquote>
            <div className="mt-8 h-px bg-gradient-to-r from-sky-700/25 to-transparent" />
            <p className="mt-5 text-xs leading-6 text-sky-950/45">A reminder to stay curious, keep moving, and leave room for possibility.</p>
          </aside>

          <aside className="glass-card rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/60 bg-white/35 text-sky-700/70">
                <Languages size={16} />
              </span>
              <h2 className="text-lg font-semibold tracking-tight text-sky-950">Languages</h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.Languages.map((item) => <span key={item} className="pill">{item}</span>)}
            </div>
          </aside>
        </div>
      </div>

      <section className="glass-panel mt-5 rounded-[2rem] p-6 sm:mt-6 sm:rounded-[2.5rem] sm:p-9 lg:p-10">
        <div className="flex flex-col gap-2 border-b border-white/50 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-900/50">Background</p>
            <h2 className="font-display mt-3 text-3xl font-normal tracking-[-0.03em] text-sky-950 sm:text-4xl">Education</h2>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-sky-950/35">Taiwan → California</p>
        </div>
        <div className="mt-7 grid gap-8 md:grid-cols-2 md:gap-0">
          {education.map((item, index) => (
            <article key={item.school} className="relative md:px-8 md:first:pl-0 md:last:border-l md:last:border-white/45">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-semibold tabular-nums tracking-[0.2em] text-sky-800/45">0{index + 1}</span>
                <span className="h-px w-8 bg-sky-800/15" />
                <p className="text-xs font-medium text-sky-800/55">{item.period}</p>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-sky-950">{item.school}</h3>
              <p className="mt-2 text-sm leading-6 text-sky-950/60">{item.degree}</p>
              <p className="mt-1 text-sm leading-6 text-sky-950/40">{item.detail} · {item.location}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
