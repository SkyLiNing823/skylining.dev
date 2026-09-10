import Link from "next/link";
import { Download, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, experiences, profile, skills } from "@/lib/site-data";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Resume"
          title="Experience across applied ML, full-stack AI, and AI research."
          description="A web version of my resume, with a downloadable PDF available for sharing."
        />
        <Link
          href="/Tien-Ning-Sky-Lee-Resume.pdf"
          className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/65 bg-white/40 px-5 py-3 text-sm font-semibold text-sky-950/70 shadow-soft backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/65 hover:text-sky-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700/35"
          target="_blank"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-900/[0.06] text-sky-700 transition group-hover:bg-sky-700/10">
            <Download size={15} />
          </span>
          Download PDF
        </Link>
      </div>

      <div className="glass-panel mt-12 overflow-hidden rounded-[2rem] sm:mt-16 sm:rounded-[2.75rem]">
        <header className="relative overflow-hidden border-b border-white/45 px-6 py-7 sm:px-9 sm:py-9 lg:px-10">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-white/30 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-900/45">Profile / Curriculum vitae</p>
              <h2 className="font-display mt-4 text-4xl font-normal tracking-[-0.04em] text-sky-950 sm:text-5xl">{profile.shortName}</h2>
              <p className="mt-3 text-sm font-medium tracking-wide text-sky-950/55 sm:text-base">{profile.title}</p>
            </div>
            <div className="flex flex-col gap-2 text-xs text-sky-950/50 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-sky-700">
                <Mail size={14} /> {profile.email}
              </Link>
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[0.74fr_1.26fr]">
          <aside className="border-b border-white/45 px-6 py-8 sm:px-9 sm:py-10 lg:border-b-0 lg:border-r lg:px-10">
            <section>
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-900/50">Education</h3>
                <span className="text-[9px] tracking-[0.16em] text-sky-950/25">01</span>
              </div>
              <div className="mt-6 space-y-7">
                {education.map((item) => (
                  <article key={item.school} className="border-l border-sky-800/15 pl-5">
                    <p className="text-[11px] font-medium text-sky-800/50">{item.period}</p>
                    <h4 className="mt-3 font-semibold leading-snug text-sky-950">{item.school}</h4>
                    <p className="mt-2 text-sm leading-6 text-sky-950/55">{item.degree}</p>
                    <p className="mt-1 text-xs leading-5 text-sky-950/40">{item.detail}</p>
                    <p className="text-xs leading-5 text-sky-950/40">{item.location}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10 border-t border-white/45 pt-9">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-900/50">Skills</h3>
                <span className="text-[9px] tracking-[0.16em] text-sky-950/25">02</span>
              </div>
              <div className="mt-6 space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-sky-950/75">{category}</h4>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {items.map((item) => <span key={item} className="pill">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <section className="px-6 py-8 sm:px-9 sm:py-10 lg:px-10">
            <div className="flex items-center justify-between border-b border-white/45 pb-5">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-900/50">Experience</h3>
              <span className="text-[9px] tracking-[0.16em] text-sky-950/25">03</span>
            </div>
            <div className="mt-6 space-y-5">
              {experiences.map((item, index) => (
                <article key={`${item.org}-${item.role}`} className="relative rounded-[1.5rem] border border-white/50 bg-white/20 p-5 transition hover:bg-white/30 sm:rounded-[1.75rem] sm:p-6">
                  <div className="absolute right-5 top-5 text-[9px] font-semibold tabular-nums tracking-[0.15em] text-sky-950/20">{String(index + 1).padStart(2, "0")}</div>
                  <div className="flex flex-col gap-3 pr-7 sm:flex-row sm:items-start sm:justify-between sm:pr-0">
                    <div>
                      <h4 className="text-lg font-semibold leading-snug tracking-[-0.015em] text-sky-950 sm:text-xl">{item.role}</h4>
                      <p className="mt-1.5 text-sm font-medium text-sky-950/60">{item.org}</p>
                    </div>
                    <div className="shrink-0 text-xs leading-5 text-sky-950/40 sm:text-right">
                      <p className="whitespace-nowrap">{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-sky-950/58 sm:leading-7">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-[0.68rem] h-1 w-1 shrink-0 rounded-full bg-sky-700/60" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/40 pt-5">
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
