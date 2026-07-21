import Link from "next/link";

import { ArrowRight, Play } from "lucide-react";

import { TextRoulette } from "./TextRoulette";

const LOGOS = [
  "Logoipsum",
  "Acme Corp",
  "Globex",
  "Umbrella",
  "Initech",
  "Stark Co",
  "Wayne Ent",
];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-9 w-32 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-semibold tracking-widest text-white opacity-50 transition-opacity hover:opacity-100">
      {name.toUpperCase()}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <img
        src="https://picsum.photos/id/1015/1974/1175"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative flex min-h-screen flex-col justify-end">

        <div className="relative mx-auto flex w-full max-w-screen-2xl items-end justify-between px-4 pb-16 pt-40 lg:px-8">

          <div className="max-w-2xl">

            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 backdrop-blur"
            >
              <span className="text-xs text-white/90">
                Classé #1 plateforme créative
              </span>

              <span className="h-3 w-px bg-white/30" />
              <span className="flex items-center gap-1 text-xs font-medium text-white">
                Lire le rapport

                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <h1 className="mt-6 font-display text-[36px] font-bold leading-[1.15] text-white lg:text-[55px]">
              La plateforme créative pour diriger votre meilleur travail
            </h1>

            <p className="mt-5 max-w-xl text-lg text-white/70">
              Texte placeholder : générez des images, vidéos, sons et modèles 3D
              avec les meilleurs modèles IA, réunis dans un seul espace de
              travail pensé pour les équipes créatives.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">

              <Link
                href="#"
                className="rounded-lg bg-white px-6 py-3 text-base font-medium text-black transition-opacity hover:opacity-90"
              >
                Commencer à créer
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                <Play className="h-4 w-4 fill-white" />
                Pourquoi nous ?
              </Link>
            </div>
          </div>

          <TextRoulette />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/10 py-12 backdrop-blur-[1px]">

        <p className="text-center text-sm text-white/70">
          Plus d&apos;1 million d&apos;abonnés et les plus grandes marques nous
          font confiance
        </p>

        <div className="mt-8 hidden items-center justify-center gap-8 md:flex">
          {LOGOS.map((name) => (
            <LogoPlaceholder key={name} name={name} />
          ))}
        </div>

        <div className="mt-8 overflow-hidden md:hidden">
          <div className="flex w-max gap-8 animate-scroll-horizontal motion-reduce:animate-none">

            {LOGOS.map((name) => (
              <LogoPlaceholder key={`a-${name}`} name={name} />
            ))}

            {LOGOS.map((name) => (
              <LogoPlaceholder key={`b-${name}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
