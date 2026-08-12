"use client";

import { useEffect, useRef } from "react";

const NEEDS = [
  "Une identité qui marque",
  "Une communication claire",
  "Des contenus qui engagent",
  "Une présence digitale cohérente",
  "Une campagne créative",
  "Une solution data & IA",
  "Un repositionnement de marque",
  "Une expérience digitale",
];

export function NeedsBand() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let frame = 0;
    const speed = 0.4;

    const tick = () => {
      offset -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(offset) >= half) offset = 0;
      track.style.transform = `translateX(${offset}px)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const items = [...NEEDS, ...NEEDS];

  return (
    <section className="overflow-hidden border-y border-black/5 bg-marketing-surface-1 py-5">
      <div className="mx-auto mb-3 max-w-screen-2xl px-4 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-marketing-foreground-2">
          Vous venez avec un besoin
        </p>
      </div>
      <div className="relative">
        <div
          ref={trackRef}
          className="flex w-max items-center gap-3 will-change-transform"
        >
          {items.map((need, i) => (
            <span
              key={`${need}-${i}`}
              className="shrink-0 rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-marketing-foreground-0"
            >
              {need}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
