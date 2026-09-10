"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock3, Menu, Moon, Sun, Sunset, X } from "lucide-react";
import { getDeviceHour, getSkyTimeState, SKY_TIME_EVENT } from "@/lib/sky-time";

const navItems = [
  { href: "/about", label: "About", jp: "私について" },
  { href: "/resume", label: "Resume", jp: "経歴" },
  { href: "/writing", label: "Writing", jp: "文章" },
  { href: "/contact", label: "Contact", jp: "連絡" },
];

const timePresets = [
  { hour: 12, label: "Day", phase: "day", Icon: Sun },
  { hour: 18, label: "Dusk", phase: "dusk", Icon: Sunset },
  { hour: 22, label: "Night", phase: "night", Icon: Moon },
];

export function CinematicHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hour, setHour] = useState(12);
  const time = useMemo(() => getSkyTimeState(hour), [hour]);

  const updateHour = (nextHour: number) => {
    setHour(nextHour);
    window.dispatchEvent(new CustomEvent(SKY_TIME_EVENT, { detail: { hour: nextHour } }));
  };

  useEffect(() => {
    const deviceHour = getDeviceHour();
    setHour(deviceHour);
    window.dispatchEvent(new CustomEvent(SKY_TIME_EVENT, { detail: { hour: deviceHour } }));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const totalMinutes = Math.min(1439, Math.round(hour * 60));
  const formattedTime = `${Math.floor(totalMinutes / 60).toString().padStart(2, "0")}:${(totalMinutes % 60)
    .toString().padStart(2, "0")}`;

  return (
    <section
      className="cinematic-home"
      data-phase={time.phase}
      style={{
        "--cinematic-sun-x": `${time.sunX}%`,
        "--cinematic-sun-y": `${time.sunY}%`,
        "--scene-day-opacity": time.dayOpacity,
        "--scene-dusk-opacity": time.duskOpacity,
        "--scene-night-opacity": time.nightOpacity,
      } as React.CSSProperties}
    >
      <div className="cinematic-scene cinematic-scene-day" aria-hidden="true" />
      <div className="cinematic-scene cinematic-scene-dusk" aria-hidden="true" />
      <div className="cinematic-scene cinematic-scene-night" aria-hidden="true" />
      <div className="cinematic-color-grade" aria-hidden="true" />
      <div className="cinematic-sunlight" aria-hidden="true">
        <span className="lens-flare flare-one" />
        <span className="lens-flare flare-two" />
      </div>
      <div className="cinematic-moonlight" aria-hidden="true" />

      <div className="cloud-loop cloud-loop-hero" aria-hidden="true">
        <div className="cloud-loop-track">
          <img src="/summer-cloud-loop-hero-v12.webp" alt="" />
          <img src="/summer-cloud-loop-hero-v12.webp" alt="" />
          <img src="/summer-cloud-loop-hero-v12.webp" alt="" />
        </div>
      </div>
      <div className="cloud-loop cloud-loop-distant" aria-hidden="true">
        <div className="cloud-loop-track">
          <img src="/summer-cloud-loop-distant-v12.webp" alt="" />
          <img src="/summer-cloud-loop-distant-v12.webp" alt="" />
          <img src="/summer-cloud-loop-distant-v12.webp" alt="" />
        </div>
      </div>

      <div className="terrain-grass-overlay" aria-hidden="true">
        <img src="/summer-hills-grass-overlay-v10.webp" alt="" />
      </div>

      <div className="cinematic-pollen" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => <span key={index} />)}
      </div>

      <div className="cinematic-vignette" aria-hidden="true" />

      <div className="motto-wrap">
        <p className="motto-kicker">Sky Lee</p>
        <h1>The sky is the limit.</h1>
        <p className="motto-jp">空のように、どこまでも。</p>
      </div>

      <div className="home-time-dock" role="group" aria-label="Time of day">
        <div className="home-time-row">
          <div className="home-time-readout">
            <Clock3 size={14} aria-hidden="true" />
            <strong>{formattedTime}</strong>
            <span>{time.label}</span>
          </div>
          <div className="home-time-presets">
            {timePresets.map(({ hour: presetHour, label, phase, Icon }) => (
              <button
                key={label}
                type="button"
                className="home-time-preset"
                data-active={time.phase === phase}
                aria-pressed={time.phase === phase}
                onClick={() => updateHour(presetHour)}
              >
                <Icon size={14} aria-hidden="true" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
        <input
          className="home-time-range"
          type="range"
          min="0"
          max="23.983333"
          step="0.016667"
          value={hour}
          onInput={(event) => updateHour(Number((event.target as HTMLInputElement).value))}
          onChange={(event) => updateHour(Number(event.target.value))}
          aria-label="Change the time of day"
          aria-valuetext={`${formattedTime}, ${time.label}`}
        />
      </div>

      <button
        type="button"
        className="scene-menu-trigger"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation"
        aria-expanded={menuOpen}
      >
        <Menu size={17} />
        <span>Menu</span>
      </button>

      <button
        type="button"
        className={`drawer-scrim ${menuOpen ? "is-open" : ""}`}
        aria-label="Close navigation"
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`scene-drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="scene-drawer-inner">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Skylining</p>
              <p className="mt-2 font-display text-2xl text-white">Under the same sky.</p>
            </div>
            <button type="button" className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
              <X size={18} />
            </button>
          </div>

          <nav className="mt-16" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} className="drawer-link">
                <span className="drawer-index">0{index + 1}</span>
                <span>
                  <span className="drawer-label">{item.label}</span>
                  <span className="drawer-jp">{item.jp}</span>
                </span>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </nav>

          <p className="mt-auto pt-10 text-xs leading-6 text-white/38">
            Applied ML · Physical AI · Writing<br />San Diego · Taipei · Tokyo
          </p>
        </div>
      </aside>
    </section>
  );
}
