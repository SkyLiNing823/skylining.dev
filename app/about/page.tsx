import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
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

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 transition hover:border-ocean/50 hover:text-ocean">
          <Mail size={16} /> Email
        </Link>
        <Link href={profile.linkedin} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 transition hover:border-ocean/50 hover:text-ocean">
          <Linkedin size={16} /> LinkedIn
        </Link>
        <Link href={profile.github} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 transition hover:border-ocean/50 hover:text-ocean">
          <Github size={16} /> GitHub
        </Link>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] glass-card p-8">
          <h2 className="text-2xl font-semibold text-slate-50">Current direction</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              I am interested in applied machine learning, including LLM applications, recommender systems, physical AI, and robotic integration, as well as MLOps and full-stack AI products. I like systems where model quality, latency, data pipelines, and product design all matter together.
            </p>
            <p>
              Physical AI and robotics are also part of my current exploration through my upcoming internship in Tokyo. I see this more as an extension of applied AI systems rather than a full pivot away from recommender systems.
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
