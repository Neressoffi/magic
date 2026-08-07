import { teamRoles } from "@/lib/apropos-data";

export function AproposEquipe() {
  return (
    <section
      id="equipe"
      className="scroll-mt-28 bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
            L&apos;équipe et le réseau
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
            Une structure collective, adaptée aux projets
          </h2>
          <p className="mt-5 text-base leading-relaxed text-marketing-foreground-2">
            NYAKA fonctionne avec une équipe créative et un réseau de
            partenaires mobilisés selon la nature et l&apos;ampleur des
            projets. Cette organisation permet de réunir les compétences
            nécessaires sans prétendre tout produire en interne.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {teamRoles.map((role) => (
            <div
              key={role.title}
              className="rounded-2lg border border-black/5 bg-marketing-surface-1 p-6"
            >
              <h3 className="font-display text-lg font-bold text-marketing-foreground-0">
                {role.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-marketing-foreground-2">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-marketing-foreground-2">
          Les noms, rôles officiels, portraits et biographies seront ajoutés
          lorsque les autorisations de publication seront disponibles.
        </p>
      </div>
    </section>
  );
}
