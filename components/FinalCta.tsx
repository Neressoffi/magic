import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-4">

      <div className="absolute inset-0 bg-gradient-to-r from-[#2b1055] via-[#7b2d5e] to-[#d96a3b]" />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-px w-[160%] -translate-x-1/2 -rotate-[8deg] bg-accent/70" />

      <div className="relative flex flex-col items-center text-center">

        <h2 className="font-display text-4xl font-bold text-white lg:text-5xl">
          Soyez CreativeHub
        </h2>

        <Link
          href="#"
          className="group mt-8 flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-85"
        >
          Commencer à créer
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
