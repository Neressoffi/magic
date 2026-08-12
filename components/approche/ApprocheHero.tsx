import Link from "next/link";

export function ApprocheHero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://picsum.photos/id/1031/1974/1175"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />

      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-screen-2xl flex-col justify-end px-4 pb-16 pt-40 lg:px-8 lg:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Notre approche
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-[36px] font-bold leading-[1.12] text-white lg:text-[52px]">
          Nous ne commençons pas par produire. Nous commençons par comprendre
          ce qu&apos;il faut réellement construire.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/85">
          Un logo, une vidéo, un support ou une solution d&apos;intelligence
          artificielle n&apos;a de valeur que s&apos;il répond au bon problème.
          NYAKA part de votre situation, clarifie l&apos;enjeu, puis construit
          la réponse adaptée.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/demarrer-un-projet"
            className="rounded-lg bg-white px-6 py-3 text-base font-medium text-black transition-opacity hover:opacity-90"
          >
            Parler de votre projet
          </Link>

          <Link
            href="/solutions"
            className="rounded-lg border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Découvrir nos solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
