import Link from "next/link";
import { ArrowRight } from "lucide-react";

const USE_CASES = [
  {
    title: "Publicité",
    description:
      "Placeholder : du brief à l'asset final. Sans intermédiaires, sans attente. Juste le travail.",
    image: "https://picsum.photos/id/1060/900/1200",
  },
  {
    title: "Packshots produit",
    description:
      "Placeholder : des shootings photo par IA. Sans studio, sans équipe, sans planning.",
    image: "https://picsum.photos/id/1062/900/1200",
  },
  {
    title: "Campagnes de marque",
    description:
      "Placeholder : visuels, vidéo et audio à votre image, à toute échelle, dans tous les formats.",
    image: "https://picsum.photos/id/1067/900/1200",
  },
];

function UseCaseCard({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2lg ${className}`}>

      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}

export function UseCases() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-xl font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
              Du packshot produit au phénomène viral
            </h2>
            <p className="mt-4 max-w-xl text-base text-marketing-foreground-2">
              Description placeholder : quel que soit votre secteur, CreativeHub
              s&apos;adapte à vos workflows de production.
            </p>
          </div>

          <Link
            href="#"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Commencer à créer
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <UseCaseCard
              key={useCase.title}
              {...useCase}
              className="aspect-[3/4]"
            />
          ))}
        </div>

        <div className="mt-4">
          <UseCaseCard
            title="Cinéma"
            description="Placeholder : personnages, storyboards et concepts à explorer. Des outils cinématographiques pensés pour l'image finale."
            image="https://picsum.photos/id/1015/1800/600"

            className="aspect-[3/2] md:aspect-[3/1]"
          />
        </div>
      </div>
    </section>
  );
}
