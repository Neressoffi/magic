"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { photo } from "@/lib/media";

const ORIGINALS = [
  {
    title: "THE VISION",
    description:
      "Structurer des campagnes et des contenus capables de rendre les opportunités d'études, d'immigration et de recrutement plus compréhensibles et plus engageantes.",
    poster: photo(1015, 1600, 800),
    href: "/realisations",
    cta: "Voir le projet",
  },
  {
    title: "7G Services",
    description:
      "Construire une communication claire et rassurante pour des services financiers et d'assistance reliant la Russie et l'Afrique.",
    poster: photo(1043, 1600, 800),
    href: "/realisations",
    cta: "Voir le projet",
  },
  {
    title: "NEMESIS",
    description:
      "Définir un univers de marque capable de traduire une ambition plus grande et de soutenir la future évolution du projet.",
    poster: photo(1016, 1600, 800),
    href: "/realisations",
    cta: "Voir le projet",
  },
  {
    title: "BRIRENA HAIR",
    description:
      "Créer les bases visuelles d'une marque afro-luxury destinée aux femmes africaines en Russie.",
    poster: photo(1067, 1600, 800),
    href: "/realisations",
    cta: "Voir le projet",
  },
];

export function VideosCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentOriginal = ORIGINALS[currentSlide];

  const showPrevious = () => {
    setCurrentSlide((current) =>
      current === 0 ? ORIGINALS.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setCurrentSlide((current) => (current + 1) % ORIGINALS.length);
  };

  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2 sm:text-xs">
              Autres réalisations
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[26px] font-bold leading-[1.2] text-marketing-foreground-0 sm:text-[32px] sm:leading-tight lg:text-[40px]">
              Des réponses différentes, construites autour de chaque situation.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-marketing-foreground-2 sm:text-base lg:text-[17px]">
              Identité, communication, vidéo, supports ou technologie : chaque
              projet part d&apos;un besoin réel et mobilise les expertises
              nécessaires.
            </p>
          </div>

          <Link
            href="/realisations"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-[15px]"
          >
            Voir toutes nos réalisations
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative mt-10">
          <div
            key={currentOriginal.title}
            className="relative aspect-[16/10] animate-[fadeIn_500ms_ease-out] overflow-hidden rounded-2lg bg-black md:aspect-[2/1]"
          >
            <img
              src={currentOriginal.poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {currentOriginal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-[15px]">
                  {currentOriginal.description}
                </p>
              </div>

              <Link
                href={currentOriginal.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 sm:text-[15px]"
              >
                <Play className="h-3.5 w-3.5 fill-black" />
                {currentOriginal.cta}
              </Link>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {ORIGINALS.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Voir ${item.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-black"
                      : "w-1.5 bg-black/20 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Projet précédent"
                className="rounded-lg border border-black/10 px-3 py-1.5 text-[13px] text-marketing-foreground-0 hover:bg-black/5 sm:text-sm"
              >
                Précédent
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Projet suivant"
                className="rounded-lg border border-black/10 px-3 py-1.5 text-[13px] text-marketing-foreground-0 hover:bg-black/5 sm:text-sm"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
