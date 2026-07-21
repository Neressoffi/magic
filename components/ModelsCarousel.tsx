"use client";
import { useEffect, useRef } from "react";

import {
  Aperture,
  Bot,
  Brush,
  Camera,
  Clapperboard,
  Cpu,
  Film,
  Layers,
  Mic,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";

const SAMPLE_VIDEOS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
];

const MODELS = [
  { name: "Nova XL", icon: Sparkles },
  { name: "Pixelmind", icon: Brush },
  { name: "Framewave", icon: Film },
  { name: "Voxtral", icon: Mic },
  { name: "Lumina Pro", icon: Aperture },
  { name: "Motionary", icon: Clapperboard },
  { name: "Neuronix", icon: Cpu },
  { name: "Shotcraft", icon: Camera },
  { name: "Layerbot", icon: Layers },
  { name: "Wandify", icon: Wand2 },
  { name: "Voltedge", icon: Zap },
  { name: "Agentia", icon: Bot },

].map((model, index) => ({
  ...model,
  video: SAMPLE_VIDEOS[index % SAMPLE_VIDEOS.length],
}));

const AUTO_SPEED = 0.5;

function ModelCard({ model }: { model: (typeof MODELS)[number] }) {

  const videoRef = useRef<HTMLVideoElement>(null);

  return (

    <div
      className="group relative h-[280px] w-[220px] shrink-0 select-none overflow-hidden rounded-2lg bg-white"

      onMouseEnter={() => videoRef.current?.play().catch(() => {})}

      onMouseLeave={() => {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
    >

      <video
        ref={videoRef}
        src={model.video}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-3">

        <model.icon className="h-8 w-8 text-marketing-foreground-0 transition-opacity duration-500 group-hover:opacity-0" />

        <span className="text-sm font-semibold text-marketing-foreground-0 transition-colors duration-500 group-hover:text-white">
          {model.name}
        </span>
      </div>
    </div>
  );
}

export function ModelsCarousel() {

  const trackRef = useRef<HTMLDivElement>(null);

  const offsetRef = useRef(0);

  const hoverRef = useRef(false);

  const dragRef = useRef<{ startX: number; startOffset: number } | null>(null);

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const track = trackRef.current;
      if (track) {

        if (!hoverRef.current && !dragRef.current) {
          offsetRef.current -= AUTO_SPEED;
        }

        const half = track.scrollWidth / 2;

        if (offsetRef.current <= -half) offsetRef.current += half;
        if (offsetRef.current > 0) offsetRef.current -= half;

        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="bg-marketing-surface-0 py-20 lg:py-28">

      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <h2 className="max-w-xl font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
          Avec tous les derniers modèles
        </h2>
        <p className="mt-4 max-w-xl text-base text-marketing-foreground-2">
          Sous-titre placeholder : accédez aux meilleurs modèles d&apos;image,
          de vidéo et d&apos;audio, mis à jour en continu.
        </p>
      </div>

      <div
        className="mt-10 cursor-grab overflow-hidden active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}

        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => {
          hoverRef.current = false;
          dragRef.current = null;
        }}

        onPointerDown={(e) => {

          dragRef.current = { startX: e.clientX, startOffset: offsetRef.current };
        }}
        onPointerMove={(e) => {

          if (dragRef.current) {
            offsetRef.current =
              dragRef.current.startOffset + (e.clientX - dragRef.current.startX);
          }
        }}
        onPointerUp={() => (dragRef.current = null)}
      >

        <div ref={trackRef} className="flex w-max gap-2 px-1">

          {MODELS.map((model) => (
            <ModelCard key={`a-${model.name}`} model={model} />
          ))}

          {MODELS.map((model) => (
            <ModelCard key={`b-${model.name}`} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}
