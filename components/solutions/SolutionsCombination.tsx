import { combinationExamples } from "@/lib/solutions-data";

export function SolutionsCombination() {
  return (
    <section
      id="combinaison"
      className="scroll-mt-28 bg-beige-950 px-4 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Combinaison des pôles
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white lg:text-5xl">
            Un projet ne se limite pas toujours à une seule expertise
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Vous pouvez venir pour un logo, une vidéo, un catalogue ou une idée
            liée à l&apos;IA. Le besoin initial reste le point de départ.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Après compréhension de votre situation, NYAKA peut recommander une
            intervention limitée à un seul pôle ou une combinaison de plusieurs
            expertises. L&apos;objectif n&apos;est pas d&apos;ajouter des
            prestations, mais de construire la réponse réellement nécessaire.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Exemples simples
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {combinationExamples.map((example) => (
              <div
                key={example.situation}
                className="rounded-2lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <p className="text-sm font-semibold text-white">
                  {example.situation}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {example.combination}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
