import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/site-data";

export const metadata = { title: "Contact" };

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "tien-ning-lee-96a04b252", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "SkyLiNing823", href: profile.github, icon: Github },
  { label: "Instagram", value: "@skyning823", href: profile.instagram, icon: Instagram },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect."
        description="For recruiting, collaboration, or casual conversation around applied ML, full-stack AI, J-pop, or travel, feel free to reach out."
      />
      <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2 md:gap-5">
        {contacts.map((item, index) => {
          const Icon = item.icon;
          const external = item.href.startsWith("http");
          return (
            <Link
              key={item.label}
              href={item.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group glass-card relative overflow-hidden rounded-[1.75rem] p-5 outline-none transition duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-sky-700/35 sm:rounded-[2rem] sm:p-7"
            >
              <span className="absolute right-5 top-5 text-[10px] font-semibold tabular-nums tracking-[0.18em] text-sky-950/25">0{index + 1}</span>
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/60 bg-white/35 text-sky-700/75 shadow-sm transition duration-300 group-hover:bg-white/60 group-hover:text-sky-700">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1 pr-5">
                  <h2 className="text-lg font-semibold tracking-tight text-sky-950 sm:text-xl">{item.label}</h2>
                  <p className="mt-2 break-all text-sm leading-6 text-sky-950/50 transition group-hover:text-sky-950/70">{item.value}</p>
                </div>
              </div>
              <div className="mt-7 flex items-center justify-between border-t border-white/45 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-950/35">
                <span>Open channel</span>
                <ArrowUpRight className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-700" size={15} />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col gap-3 rounded-[1.75rem] border border-white/50 bg-white/25 px-5 py-4 text-sm text-sky-950/50 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-6">
        <p>Email is usually the best way to reach me.</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-900/45">San Diego · Taipei · Tokyo</p>
      </div>
    </section>
  );
}
