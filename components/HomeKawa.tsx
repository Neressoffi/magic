import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeKawa() {
  return (
    <section className="bg-marketing-surface-1 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/id/1060/1600/1200"
              alt="KAWA Coffee Shop"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2 sm:text-xs">
              Projet phare
            </p>
            <h2 className="mt-3 font-display text-[26px] font-bold leading-[1.2] tracking-tight text-marketing-foreground-0 sm:text-[32px] sm:leading-tight lg:text-[40px]">
              KAWA Coffee Shop
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-marketing-foreground-2 sm:text-base lg:text-[17px]">
              Transformer une carte de menu en une expérience de marque.
              Direction artistique, menu premium, version digitale et points de
              contact pour accompagner l&apos;expérience client.
            </p>
            <Link
              href="/realisations/kawa-coffee-shop"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:text-[15px]"
            >
              Découvrir le projet KAWA
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
