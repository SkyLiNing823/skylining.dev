import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.shortName}. Built as skylining.</p>
        <div className="flex items-center gap-3">
          <Link href={`mailto:${profile.email}`} className="transition hover:text-ocean" aria-label="Email"><Mail size={18} /></Link>
          <Link href={profile.linkedin} className="transition hover:text-ocean" aria-label="LinkedIn"><Linkedin size={18} /></Link>
          <Link href={profile.github} className="transition hover:text-ocean" aria-label="GitHub"><Github size={18} /></Link>
          <Link href={profile.instagram} className="transition hover:text-ocean" aria-label="Instagram"><Instagram size={18} /></Link>
        </div>
      </div>
    </footer>
  );
}
