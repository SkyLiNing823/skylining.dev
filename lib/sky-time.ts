export const SKY_TIME_EVENT = "skylining:time-change";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function getDeviceHour(date = new Date()) {
  return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
}

export function getSkyTimeState(hour: number) {
  const normalizedHour = ((hour % 24) + 24) % 24;
  let dayOpacity = 0;
  let dawnOpacity = 0;
  let duskOpacity = 0;
  let nightOpacity = 0;

  // Dawn and dusk peak exactly at 06:00 and 18:00. The 90-minute
  // shoulders on either side keep the illustrated backgrounds blending
  // gently while preserving those times as the visual sunrise/sunset.
  if (normalizedHour < 4.5) {
    nightOpacity = 1;
  } else if (normalizedHour < 6) {
    const dawnProgress = (normalizedHour - 4.5) / 1.5;
    nightOpacity = 1 - dawnProgress;
    dawnOpacity = dawnProgress;
  } else if (normalizedHour < 7.5) {
    const dayProgress = (normalizedHour - 6) / 1.5;
    dawnOpacity = 1 - dayProgress;
    dayOpacity = dayProgress;
  } else if (normalizedHour < 16.5) {
    dayOpacity = 1;
  } else if (normalizedHour < 18) {
    const duskProgress = (normalizedHour - 16.5) / 1.5;
    dayOpacity = 1 - duskProgress;
    duskOpacity = duskProgress;
  } else if (normalizedHour < 19.5) {
    const nightProgress = (normalizedHour - 18) / 1.5;
    duskOpacity = 1 - nightProgress;
    nightOpacity = nightProgress;
  } else {
    nightOpacity = 1;
  }

  const sunProgress = clamp((normalizedHour - 6) / 12);
  const sunX = 12 + sunProgress * 76;
  const sunY = 45 - Math.sin(sunProgress * Math.PI) * 39;
  const phase = dayOpacity >= dawnOpacity && dayOpacity >= duskOpacity && dayOpacity >= nightOpacity
    ? "day"
    : dawnOpacity >= duskOpacity && dawnOpacity >= nightOpacity
      ? "dawn"
      : duskOpacity >= nightOpacity
        ? "dusk"
        : "night";
  const label = phase === "dawn"
    ? "Dawn"
    : phase === "day"
      ? "Daylight"
      : phase === "dusk"
        ? "Golden hour"
        : "Starlight";

  return { dayOpacity, dawnOpacity, duskOpacity, nightOpacity, sunX, sunY, label, phase };
}
