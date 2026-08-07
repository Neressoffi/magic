import Link from "next/link";
import { clientReferences } from "@/lib/apropos-data";

export function AproposReferences() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
            Preuves et références
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
            La meilleure manière de comprendre NYAKA reste de voir ce que nous
            construisons
          </h2>
          <p className="mt-5 text-base text-marketing-foreground-2">
            Plutôt que d&apos;allonger cette page avec des promesses, NYAKA
            renvoie vers ses réalisations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {clientReferences.map((reference) => (
            <Link
              key={reference.name}
              href={reference.href ?? "/realisations"}
              className="flex min-h-[96px] items-center justify-center rounded-2lg border border-black/5 bg-marketing-surface-1 px-4 text-center text-xs font-semibold uppercase tracking-wider text-marketing-foreground-1 transition-colors hover:border-black/15 hover:text-marketing-foreground-0"
            >
              {reference.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
