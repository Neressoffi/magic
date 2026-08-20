const CASES = [
  {
    ask: "Vous demandez un logo",
    understand:
      "Le positionnement, la perception recherchée, ce qui doit rester reconnaissable et les contextes d’usage.",
    result:
      "Une identité capable de soutenir la marque — pas seulement un symbole isolé.",
  },
  {
    ask: "Vous demandez une vidéo",
    understand:
      "L’offre à promouvoir, la cible, le message, l’action attendue et le contexte de diffusion.",
    result:
      "Un contenu construit autour d’un objectif — pas une vidéo isolée.",
  },
  {
    ask: "Vous demandez une solution IA",
    understand:
      "Le cas d’usage, les utilisateurs, les données disponibles et la valeur réellement recherchée.",
    result:
      "Une solution adaptée au réel — pas une technologie posée pour elle-même.",
  },
];

export function BentoGrid() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
            Différence NYAKA
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
            Votre demande est le point de départ. Pas toujours la réponse
            complète.
          </h2>
          <p className="mt-4 text-base text-marketing-foreground-2">
            Avant de produire, nous cherchons à comprendre le résultat attendu,
            le contexte et ce qui doit rester cohérent. Voici comment cela
            change concrètement un projet.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {CASES.map((item) => (
            <article
              key={item.ask}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 lg:p-8"
            >
              <h3 className="font-display text-xl font-bold text-marketing-foreground-0">
                {item.ask}
              </h3>

              <div className="mt-6 flex flex-1 flex-col gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marketing-foreground-2">
                    Ce que nous cherchons à comprendre
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-1">
                    {item.understand}
                  </p>
                </div>

                <div className="border-t border-black/5 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marketing-foreground-2">
                    Résultat
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-0">
                    {item.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
