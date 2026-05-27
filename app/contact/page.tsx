import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/site-data";

export const metadata = { title: "Contact" };

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "tien-ning-lee-96a04b252", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "SkyLiNing823", href: profile.github, icon: Github },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect."
        description="For recruiting, collaboration, or casual conversation around applied ML, recommender systems, J-pop, or travel, feel free to reach out."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {contacts.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.label} href={item.href} className="group rounded-[2rem] glass-card p-6 transition hover:-translate-y-1 hover:border-ocean/35 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-ocean">
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-50">{item.label}</h2>
                  <p className="mt-2 break-all text-sm text-slate-400 transition group-hover:text-slate-200">{item.value}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
