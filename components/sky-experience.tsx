"use client";

import { useEffect, useMemo, useState } from "react";
import { getDeviceHour, getSkyTimeState, SKY_TIME_EVENT } from "@/lib/sky-time";

export function SkyBackdrop() {
  const [hour, setHour] = useState(12);
  const time = useMemo(() => getSkyTimeState(hour), [hour]);

  useEffect(() => {
    setHour(getDeviceHour());

    const syncTime = (event: Event) => {
      const nextHour = (event as CustomEvent<{ hour?: number }>).detail?.hour;
      if (typeof nextHour === "number" && Number.isFinite(nextHour)) setHour(nextHour);
    };

    window.addEventListener(SKY_TIME_EVENT, syncTime);
    return () => window.removeEventListener(SKY_TIME_EVENT, syncTime);
  }, []);

  return (
    <div
      className="sky-atmosphere content-sky-backdrop"
      data-phase={time.phase}
      style={{
        "--scene-day-opacity": time.dayOpacity,
        "--scene-dusk-opacity": time.duskOpacity,
        "--scene-night-opacity": time.nightOpacity,
      } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="content-sky-scene content-sky-scene-day" />
      <div className="content-sky-scene content-sky-scene-dusk" />
      <div className="content-sky-scene content-sky-scene-night" />

      <div className="content-cloud-loop content-cloud-loop-hero">
        <div className="content-cloud-track">
          <img src="/summer-cloud-loop-hero-v12.webp" alt="" />
          <img src="/summer-cloud-loop-hero-v12.webp" alt="" />
          <img src="/summer-cloud-loop-hero-v12.webp" alt="" />
        </div>
      </div>
      <div className="content-cloud-loop content-cloud-loop-distant">
        <div className="content-cloud-track">
          <img src="/summer-cloud-loop-distant-v12.webp" alt="" />
          <img src="/summer-cloud-loop-distant-v12.webp" alt="" />
          <img src="/summer-cloud-loop-distant-v12.webp" alt="" />
        </div>
      </div>

      <div className="content-sky-veil" />
      <div className="sky-grain" />
    </div>
  );
}
