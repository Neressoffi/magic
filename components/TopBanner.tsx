import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Empty = banner hidden. Set a validated announcement to show it. */
export const ANNOUNCEMENT = "";

export function TopBanner() {
  if (!ANNOUNCEMENT) return null;

  return (
    <Link
      href="#"
      className="group flex w-full items-center justify-center gap-1.5 bg-black py-2.5"
    >
      <span className="px-4 text-center text-xs font-medium text-accent">
        {ANNOUNCEMENT}
      </span>
      <ArrowRight
        className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}
