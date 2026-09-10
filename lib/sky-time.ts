export const SKY_TIME_EVENT = "skylining:time-change";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function getDeviceHour(date = new Date()) {
  return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
}

export function getSkyTimeState(hour: number) {
  const normalizedHour = ((hour % 24) + 24) % 24;
  let dayOpacity = 0;
  let duskOpacity = 0;
  let nightOpacity = 0;

  if (normalizedHour < 5.5) {
    nightOpacity = 1;
  } else if (normalizedHour < 7.5) {
    const dawnProgress = (normalizedHour - 5.5) / 2;
    nightOpacity = 1 - dawnProgress;
    dayOpacity = dawnProgress;
  } else if (normalizedHour < 15.5) {
    dayOpacity = 1;
  } else if (normalizedHour < 17.5) {
    const duskProgress = (normalizedHour - 15.5) / 2;
    dayOpacity = 1 - duskProgress;
    duskOpacity = duskProgress;
  } else if (normalizedHour < 19) {
    duskOpacity = 1;
  } else if (normalizedHour < 21) {
    const nightProgress = (normalizedHour - 19) / 2;
    duskOpacity = 1 - nightProgress;
    nightOpacity = nightProgress;
  } else {
    nightOpacity = 1;
  }

  const sunProgress = clamp((normalizedHour - 6) / 12);
  const sunX = 12 + sunProgress * 76;
  const sunY = 45 - Math.sin(sunProgress * Math.PI) * 39;
  const phase = dayOpacity >= duskOpacity && dayOpacity >= nightOpacity
    ? "day"
    : duskOpacity >= nightOpacity
      ? "dusk"
      : "night";
  const label = phase === "day" ? "Daylight" : phase === "dusk" ? "Golden hour" : "Starlight";

  return { dayOpacity, duskOpacity, nightOpacity, sunX, sunY, label, phase };
}
