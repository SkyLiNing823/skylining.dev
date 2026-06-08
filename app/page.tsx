import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Card } from "@/components/card";
import { education, experiences, homeSkillGroups, profile, writingPlaceholders } from "@/lib/site-data";

const focus = ["Applied ML", "Full-stack AI", "MLOps"];

function getHomeRole(role: string) {
  return role.split(" | ")[0];
}

function getHomeOrg(org: string) {
  if (org === "Artificial Intelligence Lab, National Taiwan University") {
    return "AI Lab, National Taiwan University";
  }

  if (org === "National Institute of Information and Communications Technology (NICT)") {
    return "National Institute of Information and Communications Technology";
  }

  return org;
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="absolute right-6 top-16 hidden h-64 w-64 rounded-full border border-ocean/20 bg-ocean/5 blur-3xl md:block" />
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300">
              <Sparkles size={15} className="text-ocean" />
              {profile.location}
            </div>
            <p className="fade-up-delay-1 mt-8 text-sm font-medium uppercase tracking-[0.28em] text-ocean">{profile.brand}</p>
            <h1 className="fade-up-delay-1 mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
              <span className="gradient-text">Hi, I&apos;m {profile.shortName}.</span>
            </h1>
            <p className="fade-up-delay-2 mt-7 max-w-3xl text-xl leading-9 text-slate-300">
              I focus on applied machine learning, including LLM applications, recommender systems, physical AI, and robotic integration, as well as MLOps and full-stack AI products.
            </p>
            <p className="fade-up-delay-2 mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              This site collects my resume, future project case studies, technical notes, travel logs, J-pop thoughts, and personal reflections from life between San Diego, Taipei, and Tokyo.
            </p>

            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-2">
              {focus.map((item) => <span key={item} className="pill">{item}</span>)}
            </div>

            <div className="fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/resume" className="rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                View resume
              </Link>
              <Link href="/writing" className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-ocean/50 hover:bg-white/[0.06]">
                Read writing
              </Link>
            </div>

            <div className="fade-up-delay-2 mt-8 flex items-center gap-4 text-slate-400">
              <Link href={`mailto:${profile.email}`} className="transition hover:text-ocean" aria-label="Email"><Mail size={20} /></Link>
              <Link href={profile.linkedin} className="transition hover:text-ocean" aria-label="LinkedIn"><Linkedin size={20} /></Link>
              <Link href={profile.github} className="transition hover:text-ocean" aria-label="GitHub"><Github size={20} /></Link>
              <Link href={profile.instagram} className="transition hover:text-ocean" aria-label="Instagram"><Instagram size={20} /></Link>
            </div>
          </div>

          <div className="float-slow rounded-[2rem] glass-card p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Current focus</p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-50">Applied ML Systems</h2>
                </div>
                <MapPin className="text-ocean" />
              </div>
              <div className="mt-6 rounded-2xl border border-ocean/15 bg-ocean/[0.06] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-ocean">Current study</p>
                <h3 className="mt-2 font-semibold text-slate-100">{education[0].school}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">{education[0].degree}</p>
              </div>
              <div className="mt-4 space-y-4">
                {experiences.slice(0, 4).map((item) => (
                  <div key={`${item.org}-${item.role}`} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.period}</p>
                    <h3 className="mt-2 font-semibold text-slate-100">{getHomeOrg(item.org)}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{getHomeRole(item.role)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-3">
          {homeSkillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="pill">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-ocean">Journal</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">Writing</h2>
          </div>
          <Link href="/writing" className="hidden items-center gap-2 text-sm font-medium text-ocean md:flex">
            Open writing <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {writingPlaceholders.map((post) => <Card key={post.title} {...post} />)}
        </div>
      </section>
    </div>
  );
}
