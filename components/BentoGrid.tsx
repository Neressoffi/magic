import {
  Clapperboard,
  Image as ImageIcon,
  Music,
  Video,
} from "lucide-react";

const TOOL_TILES = [
  { label: "Générateur d'images", icon: ImageIcon, image: "https://picsum.photos/id/1039/500/620" },
  { label: "Générateur vidéo", icon: Video, image: "https://picsum.photos/id/1043/500/620" },
  { label: "Éditeur vidéo", icon: Clapperboard, image: "https://picsum.photos/id/1044/500/620" },
  { label: "Audio", icon: Music, image: "https://picsum.photos/id/1047/500/620" },
];

const TILE_FILTERS = ["Tous", "Image", "Vidéo", "Audio"];

export function BentoGrid() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 xl:grid-cols-[1fr_1.2fr]">

        <div className="flex flex-col">

          <h2 className="max-w-md font-display text-3xl font-bold text-marketing-foreground-0 lg:text-4xl">
            Chaque outil, prêt à l&apos;emploi
          </h2>
          <p className="mt-4 max-w-md text-base text-marketing-foreground-2">
            Placeholder : image, vidéo, audio, 3D — trente outils, aucune
            installation. Ouvrez ce qu&apos;il vous faut, créez ce que vous
            voulez.
          </p>

          <div className="mt-8 flex items-center gap-2">
            {TILE_FILTERS.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  index === 0
                    ? "bg-black text-white"
                    : "text-marketing-foreground-2 hover:text-marketing-foreground-0"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
            {TOOL_TILES.map((tile) => (
              <a
                key={tile.label}
                href="#"
                className="group relative min-h-[220px] overflow-hidden rounded-2lg"
              >

                <img
                  src={tile.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
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
                Tout votre processus créatif sur un canvas nodal
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Placeholder : tous vos outils, tous vos workflows. Un canvas
                infini à base de nœuds. Explorez des idées, comparez des
                versions, travaillez en équipe, le tout dans les Espaces.
              </p>
            </div>

            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/id/1076/700/450"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <span className="absolute left-4 top-1/2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-white">
                Marina
              </span>
              <span className="absolute right-4 top-6 rounded-full bg-sky-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                Paco
              </span>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col overflow-hidden rounded-2lg bg-maroon-900 p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Un seul endroit, toute l&apos;équipe
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Placeholder : organisez assets de marque, contenus générés et
                workflows avec les Projets. Votre équipe travaille ensemble,
                votre travail reste réuni.
              </p>

              <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
                {[
                  { label: "Projet de marque", image: "https://picsum.photos/id/1050/400/300" },
                  { label: "Assets campagne", image: "https://picsum.photos/id/1052/400/300" },
                ].map((folder) => (
                  <div key={folder.label} className="relative min-h-[120px] overflow-hidden rounded-lg">
                    <img
                      src={folder.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider text-white">
                      {folder.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-2lg bg-sky-800 p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Un workflow en un clic
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Placeholder : enregistrez n&apos;importe quel workflow complexe
                comme une App. La personne suivante le lance en un clic.
              </p>

              <div className="relative mt-6 min-h-[140px] flex-1 overflow-hidden rounded-lg">
                <img
                  src="https://picsum.photos/id/1058/500/350"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                  Lancer l&apos;app
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
