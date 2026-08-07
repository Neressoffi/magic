"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const ORIGINALS = [
  {
    title: "KAWA Coffee Shop",
    description:
      "Transformer une carte de menu en une expérience de marque. Direction artistique, menu premium, version digitale et points de contact pour accompagner l'expérience client.",
    poster: "https://picsum.photos/id/1060/1600/800",
    href: "/realisations/kawa-coffee-shop",
    cta: "Découvrir le projet KAWA",
  },
  {
    title: "THE VISION",
    description:
      "Structurer des campagnes et des contenus capables de rendre les opportunités d'études, d'immigration et de recrutement plus compréhensibles et plus engageantes.",
    poster: "https://picsum.photos/id/1015/1600/800",
    href: "/realisations",
    cta: "Voir le projet",
  },
  {
    title: "7G Services",
    description:
      "Construire une communication claire et rassurante pour des services financiers et d'assistance reliant la Russie et l'Afrique.",
    poster: "https://picsum.photos/id/1043/1600/800",
    href: "/realisations",
    cta: "Voir le projet",
  },
  {
    title: "NEMESIS",
    description:
      "Définir un univers de marque capable de traduire une ambition plus grande et de soutenir la future évolution du projet.",
    poster: "https://picsum.photos/id/1016/1600/800",
    href: "/realisations",
    cta: "Voir le projet",
  },
  {
    title: "BRIRENA HAIR",
    description:
      "Créer les bases visuelles d'une marque afro-luxury destinée aux femmes africaines en Russie.",
    poster: "https://picsum.photos/id/1067/1600/800",
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
              Autres projets
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
              Des réponses différentes, construites autour de chaque situation.
            </h2>
            <p className="mt-4 max-w-xl text-base text-marketing-foreground-2">
              Identité, communication, vidéo, supports ou technologie : chaque
              projet part d&apos;un besoin réel et mobilise les expertises
              nécessaires.
            </p>
          </div>

          <Link
            href="/realisations"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
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
              alt={currentOriginal.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <span className="absolute left-6 top-6 text-xs font-semibold text-white/80">
              {currentSlide === 0 ? "Projet à la une" : "Réalisation"}
            </span>

            <div className="absolute bottom-6 left-6 right-20 max-w-md">
              <h3 className="font-display text-xl font-bold text-white">
                {currentOriginal.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {currentOriginal.description}
              </p>
              <Link
                href={currentOriginal.href}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/25"
              >
                <Play className="h-3.5 w-3.5 fill-white" />
                {currentOriginal.cta}
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Production précédente"
            className="group absolute inset-y-0 left-0 z-10 w-[14%] cursor-pointer rounded-l-2lg bg-gradient-to-r from-black/20 via-black/5 to-transparent transition-colors hover:from-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white md:w-[10%]"
          />
          <button
            type="button"
            onClick={showNext}
            aria-label="Production suivante"
            className="group absolute inset-y-0 right-0 z-10 w-[14%] cursor-pointer rounded-r-2lg bg-gradient-to-l from-black/20 via-black/5 to-transparent transition-colors hover:from-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white md:w-[10%]"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Afficher la production précédente"
            className="h-3.5 w-3.5 rounded-full bg-[#8b8b8b] transition-colors hover:bg-[#5f5f5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#626262]"
          />
          <span
            aria-hidden="true"
            className="h-3.5 w-12 rounded-full bg-[#626262]"
          />
          <button
            type="button"
            onClick={showNext}
            aria-label="Afficher la production suivante"
            className="h-3.5 w-3.5 rounded-full bg-[#8b8b8b] transition-colors hover:bg-[#5f5f5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#626262]"
          />
        </div>
      </div>
    </section>
  );
}
