import { exampleRows } from "@/lib/approche-data";

export function ApprocheExemple() {
  return (
    <section
      id="exemple"
      className="scroll-mt-28 bg-beige-950 px-4 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Exemple concret
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white lg:text-5xl">
            Ce que l&apos;approche change dans un projet
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Demande initiale : « Nous voulons une vidéo publicitaire. »
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2lg border border-white/10">
          {exampleRows.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[280px_1fr] md:gap-8 ${
                index % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
              } ${index !== exampleRows.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <p className="text-sm font-semibold text-white/55">{row.label}</p>
              <p className="text-base leading-relaxed text-white">{row.value}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">
          Autre exemple : un client demande une solution IA ; NYAKA commence
          par identifier le cas d&apos;usage, les utilisateurs, les données
          disponibles et la valeur recherchée avant de définir la technologie.
        </p>
      </div>
    </section>
  );
}
