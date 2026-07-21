import Link from "next/link";

import { ArrowRight } from "lucide-react";

export function TopBanner() {
  return (

    <Link
      href="#"
      className="group flex w-full items-center justify-center gap-1.5 bg-black py-2.5"
    >

      <span className="text-xs font-medium text-accent">
        Annonce placeholder — découvrez la nouveauté
      </span>

      <ArrowRight
        className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}
