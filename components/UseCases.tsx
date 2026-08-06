import Link from "next/link";
import { ArrowRight } from "lucide-react";

const USE_CASES = [
  {
    title: "Vous lancez",
    description:
      "Transformer une idée en marque, structurer les premiers messages et préparer les supports nécessaires au démarrage.",
    image: "https://picsum.photos/id/1060/900/1200",
  },
  {
    title: "Vous professionnalisez",
    description:
      "Faire correspondre votre image, vos supports et vos contenus au niveau de qualité que vous souhaitez atteindre.",
    image: "https://picsum.photos/id/1062/900/1200",
  },
  {
    title: "Vous repositionnez",
    description:
      "Redéfinir ce que votre marque représente lorsque votre identité actuelle ne correspond plus à votre ambition.",
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
              Votre organisation est peut-être à un tournant.
            </h2>
            <p className="mt-4 max-w-xl text-base text-marketing-foreground-2">
              Chaque lancement, repositionnement, campagne ou nouvelle
              technologie peut renforcer votre organisation. NYAKA intervient
              pour donner une direction claire à ces moments importants.
            </p>
          </div>

          <Link
            href="#"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Démarrer un projet
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
            title="Vous communiquez"
            description="Rendre une offre, un événement ou une opportunité plus visible, plus compréhensible et plus persuasive."
            image="https://picsum.photos/id/1015/1800/600"

            className="aspect-[3/2] md:aspect-[3/1]"
          />
        </div>
      </div>
    </section>
  );
}
