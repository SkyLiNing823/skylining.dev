import Link from "next/link";
import { profile } from "@/lib/site-data";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-paper/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ocean shadow-[0_0_24px_rgba(125,211,252,0.85)] transition group-hover:scale-125" />
          <span className="text-sm font-semibold tracking-[0.24em] text-slate-100">{profile.brand}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.06] hover:text-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
