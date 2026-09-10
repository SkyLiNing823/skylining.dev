import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer relative z-10 px-4 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-16">
      <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-6 rounded-[1.75rem] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-7">
        <div className="flex items-center gap-3">
          <span className="brand-sun scale-75" aria-hidden="true" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-950/70">{profile.shortName}</p>
            <p className="mt-1 text-xs text-sky-950/45">© {new Date().getFullYear()} · Somewhere under the same sky.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`mailto:${profile.email}`} className="footer-icon" aria-label="Email"><Mail size={16} /></Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn"><Linkedin size={16} /></Link>
          <Link href={profile.github} target="_blank" rel="noreferrer" className="footer-icon" aria-label="GitHub"><Github size={16} /></Link>
          <Link href={profile.instagram} target="_blank" rel="noreferrer" className="footer-icon" aria-label="Instagram"><Instagram size={16} /></Link>
        </div>
      </div>
    </footer>
  );
}
