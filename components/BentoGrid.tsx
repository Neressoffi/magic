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

export function BentoGrid() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 xl:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
            Différence NYAKA
          </p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
            Votre demande est le point de départ
          </h2>
          <p className="mt-4 max-w-md text-base text-marketing-foreground-2">
            Branding, design, vidéo et IA : nos quatre pôles peuvent intervenir
            séparément ou se combiner autour d&apos;une même direction.
          </p>

          <div className="mt-8 grid flex-1 grid-cols-2 gap-3">
            {TOOL_TILES.map((tile) => (
              <a
                key={tile.label}
                href={tile.href}
                className="group relative min-h-[220px] overflow-hidden rounded-2lg"
              >
                <img
                  src={tile.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  <tile.icon className="h-3.5 w-3.5" />
                  {tile.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-1 flex-col gap-6 overflow-hidden rounded-2lg bg-black p-8 md:flex-row md:items-center">
            <div className="md:w-[45%]">
              <h3 className="font-display text-xl font-bold text-white lg:text-2xl">
                Votre demande est le point de départ. Pas toujours la réponse
                complète.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Avant de produire, nous cherchons à comprendre le résultat
                attendu, le contexte et les éléments qui doivent rester
                cohérents. Notre rôle n&apos;est pas de compliquer votre idée,
                mais d&apos;éviter qu&apos;une bonne solution soit construite
                pour le mauvais problème.
              </p>
            </div>

            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/id/1076/700/450"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col overflow-hidden rounded-2lg bg-maroon-900 p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Nous relions les expertises
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Branding, design, vidéo, intelligence artificielle et données
                avancent autour d&apos;un même objectif pour votre organisation.
              </p>

              <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
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
                    className="relative min-h-[120px] overflow-hidden rounded-lg"
                  >
                    <img
                      src={folder.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-xs font-semibold uppercase tracking-wider text-white">
                      {folder.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-2lg bg-sky-800 p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Nous construisons pour l&apos;évolution
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Les solutions doivent pouvoir accompagner la prochaine étape de
                l&apos;organisation, et pas seulement répondre au besoin du jour.
              </p>

              <div className="relative mt-6 min-h-[140px] flex-1 overflow-hidden rounded-lg">
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
