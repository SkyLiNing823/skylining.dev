"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/lib/site-data";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-0 bg-sky-950/[0.06] backdrop-blur-[1px] md:hidden"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="nav-glass flex min-h-14 items-center justify-between rounded-[1.25rem] px-4 py-2.5 sm:rounded-full sm:px-5">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sky-700/30"
            aria-label="Return to the skylining home scene"
          >
            <span className="brand-sun shrink-0 transition duration-500 group-hover:rotate-45 group-hover:scale-110" />
            <span className="truncate text-[11px] font-semibold uppercase tracking-[0.27em] text-sky-950 sm:text-xs">
              {profile.brand}
            </span>
            <span className="hidden h-4 w-px bg-sky-950/15 sm:block" aria-hidden="true" />
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-sky-950/40 sm:block">
              {profile.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition outline-none focus-visible:ring-2 focus-visible:ring-sky-700/30 ${
                    active
                      ? "bg-white/60 text-sky-950 shadow-[0_5px_18px_rgba(42,109,150,0.10)]"
                      : "text-sky-950/55 hover:bg-white/40 hover:text-sky-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/60 bg-white/35 text-sky-950/70 shadow-sm backdrop-blur-xl transition hover:bg-white/60 hover:text-sky-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700/30 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`nav-glass absolute inset-x-0 top-[calc(100%+0.5rem)] origin-top rounded-[1.5rem] p-2 transition duration-300 md:hidden ${
            menuOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-1">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium transition ${
                    active ? "bg-white/60 text-sky-950" : "text-sky-950/60 hover:bg-white/40 hover:text-sky-950"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[9px] tabular-nums text-sky-950/30">0{index + 1}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
