import Link from "next/link";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/nyaka-hero-bg.png"
        alt="NYAKA — branding, design, vidéo, intelligence artificielle et données"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />

      <div className="relative flex min-h-screen flex-col justify-end">
        <div className="relative mx-auto w-full max-w-screen-2xl px-4 pb-20 pt-40 lg:px-8 lg:pb-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 backdrop-blur">
              <span className="text-xs text-white/90">
                BRANDING · DESIGN · VIDÉO · INTELLIGENCE ARTIFICIELLE &amp; DONNÉES
              </span>
            </div>

            <h1 className="mt-6 font-display text-[36px] font-bold leading-[1.15] text-white lg:text-[55px]">
              Nous construisons les marques, les contenus et les solutions qui
              font évoluer votre organisation.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-white/85">
              Vous venez avec une idée, un besoin ou un projet. NYAKA vous aide à
              lui donner une direction claire, puis mobilise le branding, le
              design, la vidéo, l&apos;intelligence artificielle et les données
              pour construire une réponse cohérente.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/demarrer-un-projet"
                className="rounded-lg bg-white px-6 py-3 text-base font-medium text-black transition-opacity hover:opacity-90"
              >
                Parler de votre projet
              </Link>

              <Link
                href="/solutions"
                className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                <Play className="h-4 w-4 fill-white" />
                Découvrir nos solutions
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/80">
              Votre projet peut encore être au stade de l&apos;idée. Nous
              commencerons par le clarifier avec vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
