"use client";
import { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Box,
  Brush,
  Camera,
  Eraser,
  Expand,
  Film,
  Image as ImageIcon,
  Mic,
  Music,
  Scissors,
  Video,
  Wand2,
} from "lucide-react";

type Category = "image" | "video" | "audio" | "3d";

type Tool = {
  name: string;
  description: string;
  icon: React.ElementType;
  category: Category;
  featured?: boolean;
};

const TOOLS: Tool[] = [
  { name: "Générateur d'images", description: "Placeholder : créez des visuels à partir d'un simple texte.", icon: ImageIcon, category: "image", featured: true },
  { name: "Upscaler", description: "Placeholder : agrandissez vos images sans perte de qualité.", icon: Expand, category: "image", featured: true },
  { name: "Suppression de fond", description: "Placeholder : détourez n'importe quelle photo en un clic.", icon: Eraser, category: "image" },
  { name: "Retouche magique", description: "Placeholder : corrigez et transformez vos images par IA.", icon: Wand2, category: "image", featured: true },
  { name: "Transfert de style", description: "Placeholder : appliquez le style d'une image à une autre.", icon: Brush, category: "image" },
  { name: "Générateur vidéo", description: "Placeholder : passez du texte à la vidéo en quelques secondes.", icon: Video, category: "video", featured: true },
  { name: "Éditeur vidéo", description: "Placeholder : montez vos clips directement dans le navigateur.", icon: Scissors, category: "video" },
  { name: "Capture de mouvement", description: "Placeholder : animez un personnage depuis une simple webcam.", icon: Camera, category: "video" },
  { name: "Upscaler vidéo", description: "Placeholder : améliorez la résolution de vos séquences.", icon: Film, category: "video", featured: true },
  { name: "Synthèse vocale", description: "Placeholder : des voix naturelles dans 30 langues.", icon: Mic, category: "audio", featured: true },
  { name: "Musique IA", description: "Placeholder : composez des pistes libres de droits.", icon: Music, category: "audio" },
  { name: "Générateur 3D", description: "Placeholder : générez des objets 3D texturés prêts à l'emploi.", icon: Box, category: "3d", featured: true },
];

const FILTERS = [
  { id: "featured", label: "À la une" },
  { id: "image", label: "Image" },
  { id: "video", label: "Vidéo" },
  { id: "audio", label: "Audio" },
  { id: "3d", label: "3D" },
] as const;

const CATEGORY_COLORS: Record<Category, string> = {
  image: "bg-violet-500",
  video: "bg-blue-500",
  audio: "bg-orange-500",
  "3d": "bg-emerald-500",
};

export function ToolsCarousel() {

  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("featured");

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const rowRef = useRef<HTMLDivElement>(null);

  const dragRef = useRef<{ startX: number; startScroll: number } | null>(null);

  const visibleTools =
    filter === "featured"
      ? TOOLS.filter((tool) => tool.featured)
      : TOOLS.filter((tool) => tool.category === filter);

  const updateArrows = () => {
    const row = rowRef.current;
    if (!row) return;
    setCanPrev(row.scrollLeft > 0);

    setCanNext(row.scrollLeft < row.scrollWidth - row.clientWidth - 1);
  };

  useEffect(() => {
    updateArrows();
  }, [filter]);

  const scrollBy = (distance: number) => {
    rowRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className="bg-marketing-surface-0 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">

        <h2 className="max-w-xl font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
          Choisissez un outil, commencez à créer
        </h2>
        <p className="mt-4 max-w-xl text-base text-marketing-foreground-2">
          Sous-titre placeholder : plus de 50 outils spécialisés, du détourage
          à la génération vidéo.
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">

          <div className="max-w-full overflow-x-auto scrollbar-hidden rounded-full">
            <div className="flex w-max items-center rounded-full bg-marketing-surface-1 p-1.5">
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.id)}

                  className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                    filter === item.id
                      ? "bg-black text-white"
                      : "text-marketing-foreground-0 hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollBy(-400)}
              disabled={!canPrev}
              aria-label="Précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-marketing-foreground-0 transition-colors hover:bg-black/10 disabled:opacity-50 disabled:hover:bg-black/5"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(400)}
              disabled={!canNext}
              aria-label="Suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-marketing-foreground-0 transition-colors hover:bg-black/10 disabled:opacity-50 disabled:hover:bg-black/5"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={rowRef}
        onScroll={updateArrows}
        className="mt-8 flex cursor-grab gap-3 overflow-x-auto scrollbar-hidden px-4 active:cursor-grabbing lg:px-8"

        onPointerDown={(e) => {
          dragRef.current = {
            startX: e.clientX,
            startScroll: rowRef.current?.scrollLeft ?? 0,
          };
        }}
        onPointerMove={(e) => {
          if (dragRef.current && rowRef.current) {
            rowRef.current.scrollLeft =
              dragRef.current.startScroll - (e.clientX - dragRef.current.startX);
          }
        }}
        onPointerUp={() => (dragRef.current = null)}
        onPointerLeave={() => (dragRef.current = null)}
      >
        {visibleTools.map((tool) => (

          <a
            key={tool.name}
            href="#"
            className="flex h-[177px] w-[200px] shrink-0 select-none flex-col rounded-2xl bg-white p-4 transition-transform duration-200 hover:-translate-y-1"
          >

            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${CATEGORY_COLORS[tool.category]}`}
            >
              <tool.icon className="h-6 w-6 text-white" />
            </span>

            <span className="mt-3 text-sm font-semibold text-marketing-foreground-0">
              {tool.name}
            </span>

            <span className="mt-1 text-xs text-marketing-foreground-2 line-clamp-2">
              {tool.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
