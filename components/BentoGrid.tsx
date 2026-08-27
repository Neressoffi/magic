import {
  Clapperboard,
  Image as ImageIcon,
  Music,
  Video,
} from "lucide-react";

const TOOL_TILES = [
  {
    label: "Identité de marque",
    icon: ImageIcon,
    image: "https://picsum.photos/id/1039/500/620",
    href: "/solutions#branding",
  },
  {
    label: "Contenus vidéo",
    icon: Video,
    image: "https://picsum.photos/id/1043/500/620",
    href: "/solutions#video",
  },
  {
    label: "Campagnes créatives",
    icon: Clapperboard,
    image: "https://picsum.photos/id/1044/500/620",
    href: "/solutions#video",
  },
  {
    label: "IA & données",
    icon: Music,
    image: "https://picsum.photos/id/1047/500/620",
    href: "/solutions#ia-data",
  },
];

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
    <section className="bg-marketing-surface-0 px-4 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2 sm:text-xs">
            Différence NYAKA
          </p>
          <h2 className="mt-3 font-display text-[26px] font-bold leading-[1.2] text-marketing-foreground-0 sm:text-[32px] sm:leading-tight lg:text-[40px]">
            Votre demande est le point de départ. Pas toujours la réponse
            complète.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-marketing-foreground-2 sm:text-base lg:text-[17px]">
            Avant de produire, nous cherchons à comprendre le résultat attendu,
            le contexte et ce qui doit rester cohérent. Voici comment cela
            change concrètement un projet.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {CASES.map((item) => (
            <article
              key={item.ask}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-5 sm:p-6 lg:p-8"
            >
              <h3 className="font-display text-lg font-bold text-marketing-foreground-0 sm:text-xl">
                {item.ask}
              </h3>

              <div className="mt-5 flex flex-1 flex-col gap-4 sm:mt-6 sm:gap-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-marketing-foreground-2 sm:text-xs">
                    Ce que nous cherchons à comprendre
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-1 sm:text-[15px]">
                    {item.understand}
                  </p>
                </div>

                <div className="border-t border-black/5 pt-4 sm:pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-marketing-foreground-2 sm:text-xs">
                    Résultat
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-marketing-foreground-0 sm:text-[15px]">
                    {item.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:gap-4 xl:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-2 gap-3">
            {TOOL_TILES.map((tile) => (
              <a
                key={tile.label}
                href={tile.href}
                className="group relative aspect-[4/5] overflow-hidden rounded-2lg sm:aspect-auto sm:min-h-[220px]"
              >
                <img
                  src={tile.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                  <tile.icon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                  {tile.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:aspect-auto sm:min-h-[200px] sm:flex-1">
              <img
                src="https://picsum.photos/id/1076/700/450"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:flex-1 sm:gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Projet de marque",
                    image: "https://picsum.photos/id/1050/400/300",
                  },
                  {
                    label: "Campagne",
                    image: "https://picsum.photos/id/1052/400/300",
                  },
                ].map((folder) => (
                  <div
                    key={folder.label}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg sm:aspect-auto sm:min-h-[120px]"
                  >
                    <img
                      src={folder.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                      {folder.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:aspect-auto sm:min-h-[140px] sm:flex-1">
                <img
                  src="https://picsum.photos/id/1058/500/350"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
