const STEPS = [
  {
    title: "Cadrer",
    text: "Clarifier le besoin, le contexte et l’objectif réel du projet.",
  },
  {
    title: "Diagnostiquer",
    text: "Comprendre la marque, les audiences et les contraintes.",
  },
  {
    title: "Aligner",
    text: "Définir une direction claire partagée avec toutes les parties.",
  },
  {
    title: "Concevoir",
    text: "Créer les réponses branding, design, vidéo ou IA adaptées.",
  },
  {
    title: "Déployer",
    text: "Mettre en œuvre les livrables dans les bons canaux.",
  },
  {
    title: "Faire évoluer",
    text: "Mesurer, ajuster et prolonger ce qui fonctionne.",
  },
];

export function HomeFramework() {
  return (
    <section className="bg-marketing-surface-0 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2 sm:text-xs">
            Notre manière de travailler
          </p>
          <h2 className="mt-3 font-display text-[26px] font-bold leading-[1.2] tracking-tight text-marketing-foreground-0 sm:text-[32px] sm:leading-tight lg:text-[40px]">
            Un cadre clair, de l’idée au déploiement
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-marketing-foreground-2 sm:text-base lg:text-[17px]">
            Six étapes pour construire une réponse cohérente, sans transformer
            votre projet en théorie.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-black/5 bg-white p-6"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marketing-foreground-2 sm:text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-marketing-foreground-0 sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-2 sm:text-[15px]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
