import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photo } from "@/lib/media";

const USE_CASES = [
  {
    title: "Vous lancez",
    description:
      "Transformer une idée en marque, structurer les premiers messages et préparer les supports nécessaires au démarrage.",
    tags: "Création · Lancement",
    image: photo(1060, 900, 1200),
    href: "/votre-situation#lancement",
  },
  {
    title: "Vous professionnalisez",
    description:
      "Faire correspondre votre image, vos supports et vos contenus au niveau de qualité que vous souhaitez atteindre.",
    tags: "Crédibilité · Montée en gamme",
    image: photo(1062, 900, 1200),
    href: "/votre-situation#professionnalisation",
  },
  {
    title: "Vous communiquez",
    description:
      "Rendre une offre, un événement ou une opportunité plus visible, plus compréhensible et plus persuasive.",
    tags: "Campagne · Vidéo",
    image: photo(1015, 900, 1200),
    href: "/votre-situation#communication",
  },
  {
    title: "Vous repositionnez",
    description:
      "Redéfinir ce que votre marque représente lorsque votre identité actuelle ne correspond plus à votre ambition.",
    tags: "Évolution · Rebranding",
    image: photo(1067, 900, 1200),
    href: "/votre-situation#repositionnement",
  },
  {
    title: "Vous transformez",
    description:
      "Intégrer une nouvelle expérience, une technologie, une automatisation ou un usage des données de manière cohérente.",
    tags: "IA · Données · Processus",
    image: photo(1047, 900, 1200),
    href: "/votre-situation#transformation",
  },
];

function UseCaseCard({
  title,
  description,
  tags,
  image,
  href,
  className,
}: {
  title: string;
  description: string;
  tags: string;
  image: string;
  href: string;
  className: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2lg ${className}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80 sm:text-xs">
          {tags}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-white/85 line-clamp-4 sm:text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}

export function UseCases() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2 sm:text-xs">
              À quel moment avez-vous besoin de NYAKA ?
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[26px] font-bold leading-[1.2] text-marketing-foreground-0 sm:text-[32px] sm:leading-tight lg:text-[36px]">
              Votre organisation est peut-être à un tournant.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-marketing-foreground-2 sm:text-base lg:text-[17px]">
              Chaque lancement, repositionnement, campagne ou nouvelle
              technologie peut renforcer votre organisation ou créer de nouvelles
              incohérences. Nous intervenons pour donner une direction claire à
              ces moments importants.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/votre-situation"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-[15px]"
            >
              Identifier votre situation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/demarrer-un-projet"
              className="inline-flex w-fit shrink-0 items-center rounded-lg border border-black/15 px-6 py-3 text-sm font-medium text-marketing-foreground-0 transition-colors hover:bg-black/5 sm:text-[15px]"
            >
              Parler de votre situation
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <UseCaseCard
              key={useCase.title}
              {...useCase}
              className="aspect-[4/5] min-h-[320px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
