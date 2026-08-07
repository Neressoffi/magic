import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProject } from "@/lib/realisations-data";

export function RealisationsFeatured() {
  return (
    <section
      id="kawa"
      className="scroll-mt-28 bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
          Projet à la une
        </p>

        <div className="mt-6 grid grid-cols-1 gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:gap-14">
          <div className="relative min-h-[420px] overflow-hidden rounded-2lg lg:min-h-[640px]">
            <img
              src={featuredProject.image}
              alt={`Projet ${featuredProject.name}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                {featuredProject.sector}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-white">
                {featuredProject.name}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
              {featuredProject.name}
            </h2>
            <p className="mt-4 text-xl font-medium text-marketing-foreground-1">
              {featuredProject.tagline}
            </p>
            <p className="mt-3 text-sm text-marketing-foreground-2">
              Secteur : {featuredProject.sector}
              <span className="mx-2 text-marketing-foreground-2/50">|</span>
              Localisation : {featuredProject.location}
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-marketing-foreground-2">
                  Situation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-1">
                  {featuredProject.situation}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-marketing-foreground-2">
                  Enjeu
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-1">
                  {featuredProject.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-marketing-foreground-2">
                  Intervention NYAKA
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {featuredProject.interventions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-marketing-foreground-1"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-marketing-foreground-2">
                  Résultat
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-1">
                  {featuredProject.result}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {featuredProject.gallery.map((image) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={featuredProject.caseStudyHref}
                className="group inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Voir l&apos;étude de cas complète
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#projets"
                className="rounded-lg border border-black/15 px-5 py-3 text-sm font-medium text-marketing-foreground-0 transition-colors hover:bg-black/5"
              >
                Voir tous les projets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
