import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionsOverview } from "@/lib/solutions-data";

export function SolutionsOverview() {
  return (
    <section
      id="poles"
      className="scroll-mt-28 bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
            Vue d&apos;ensemble
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
            Quatre pôles. Une réponse construite autour de votre besoin.
          </h2>
          <p className="mt-4 text-base text-marketing-foreground-2">
            Identifiez rapidement l&apos;expertise qui correspond à votre
            situation. Un même projet peut ensuite mobiliser plusieurs pôles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {solutionsOverview.map((pole, index) => (
            <Link
              key={pole.id}
              href={`#${pole.id}`}
              className="group flex flex-col justify-between rounded-2lg border border-black/5 bg-marketing-surface-1 p-7 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-marketing-foreground-0 lg:text-2xl">
                  {pole.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-marketing-foreground-2">
                  {pole.description}
                </p>
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-marketing-foreground-0">
                Voir ce pôle
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
