"use client";
import { useState } from "react";
import Link from "next/link";

import * as Popover from "@radix-ui/react-popover";

import {
  ArrowRight,
  Book,
  Box,
  ChevronDown,
  GraduationCap,
  HelpCircle,
  Image as ImageIcon,
  Menu,
  Music,
  Newspaper,
  Palette,
  Search,
  Sparkles,
  Users,
  Video,
  Wrench,
  X,
} from "lucide-react";

import {
  creativeSuiteColumns,
  stockColumns,
  resourceLinks,
  type MenuColumn,
} from "@/lib/menu-data";

const ICONS: Record<string, React.ElementType> = {
  image: ImageIcon,
  video: Video,
  audio: Music,
  box: Box,
  palette: Palette,
  wrench: Wrench,
  newspaper: Newspaper,
  graduation: GraduationCap,
  book: Book,
  users: Users,
  help: HelpCircle,
  sparkles: Sparkles,
};

function NewBadge() {
  return (
    <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-medium leading-none text-accent">
      Nouveau
    </span>
  );
}

function NavTrigger({ label }: { label: string }) {
  return (

    <Popover.Trigger asChild>
      <button className="group flex items-center gap-1 text-base text-foreground-1 transition-colors duration-100 hover:text-accent data-[state=open]:text-accent">
        {label}

        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </button>
    </Popover.Trigger>
  );
}

function ColumnsMenu({ columns }: { columns: MenuColumn[] }) {
  return (
    <div>

      <div
        className="grid gap-8"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((column) => {

          const Icon = ICONS[column.icon];
          return (
            <div key={column.title}>

              <div className="mb-3 flex items-center gap-2">
                <Icon className="h-4 w-4 text-foreground-0" />
                <span className="text-sm font-bold text-foreground-0">
                  {column.title}
                </span>
              </div>

              <ul className="flex flex-col">
                {column.links.map((link) => (
                  <li key={link.label}>

                    <Link
                      href={link.href}
                      className="flex items-center gap-2 rounded px-2 py-1.5 -mx-2 text-xs text-foreground-2 transition-colors duration-100 hover:bg-white/5 hover:text-accent"
                    >
                      {link.label}

                      {link.isNew && <NewBadge />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <Link
        href="#"
        className="group mt-8 flex items-center justify-between rounded-lg bg-neutral-875 px-5 py-3.5 text-sm text-foreground-2 transition-colors hover:text-foreground-0"
      >
        Voir toutes nos solutions
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="flex gap-8">

      <div className="grid flex-1 grid-cols-2 gap-2">
        {resourceLinks.map((resource) => {
          const Icon = ICONS[resource.icon];
          return (

            <Link
              key={resource.title}
              href={resource.href}
              className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5"
            >

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2">
                <Icon className="h-5 w-5 text-foreground-2 transition-colors group-hover:text-foreground-0" />
              </span>

              <span className="flex flex-col">
                <span className="text-sm font-medium text-foreground-0">
                  {resource.title}
                </span>
                <span className="text-xs text-foreground-3">
                  {resource.subtitle}
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      <Link
        href="#"
        className="group flex w-64 shrink-0 flex-col justify-end rounded-lg bg-gradient-to-br from-accent/60 via-purple-600/50 to-indigo-800/60 p-5"
      >
        <span className="text-lg font-bold text-white">
          NYAKA - L&apos;empreinte de votre marque.
        </span>
        <span className="mt-1 flex items-center gap-1 text-sm text-white/80">
          Découvrir NYAKA
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </div>
  );
}

function MegaMenu({
  label,
  width,
  children,
}: {
  label: string;
  width: number;
  children: React.ReactNode;
}) {
  return (
    <Popover.Root>

      <NavTrigger label={label} />
      <Popover.Portal>

        <Popover.Content
          sideOffset={16}
          align="start"
          style={{ width }}

          className="z-50 max-w-[95vw] rounded-[10px] bg-surface-1 px-10 py-8 shadow-2xl outline-none data-[state=open]:animate-in"
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function Header() {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (

    <header className="absolute inset-x-0 top-9 z-40">

      <div className="mx-auto flex h-[72px] max-w-screen-2xl items-center justify-between px-4 lg:px-8">

        <div className="flex items-center gap-8">

          <button
            className="text-foreground-0 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Ouvrir le menu"
          >

            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" aria-label="NYAKA — accueil">
            <svg
              width="140"
              height="24"
              viewBox="0 0 140 24"
              className="h-5 w-auto lg:h-6"
            >

              <rect x="0" y="4" width="16" height="16" rx="4" fill="var(--accent)" />

              <text
                x="24"
                y="17"
                fill="white"
                fontSize="17"
                fontWeight="700"
                fontFamily="var(--font-alternate)"
              >
                NYAKA
              </text>
            </svg>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">

            <MegaMenu label="Solutions" width={980}>
              <ColumnsMenu columns={creativeSuiteColumns} />
            </MegaMenu>
            <MegaMenu label="Votre situation" width={720}>
              <ColumnsMenu columns={stockColumns} />
            </MegaMenu>
            <MegaMenu label="Ressources" width={680}>
              <ResourcesMenu />
            </MegaMenu>

            <Link
              href="#"
              className="hidden text-base text-foreground-1 transition-colors duration-100 hover:text-accent xl:block"
            >
              Réalisations
            </Link>

            <Link
              href="#"
              className="text-base text-foreground-1 transition-colors duration-100 hover:text-accent"
            >
              À propos
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">

          <button className="hidden items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-sm text-foreground-2 transition-colors hover:border-white/30 hover:text-foreground-0 md:flex">
            <Search className="h-4 w-4" />
            Rechercher
          </button>

          <button className="p-2 text-foreground-1 md:hidden" aria-label="Rechercher">
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="#"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-foreground-1 transition-colors hover:bg-white/10 sm:block"
          >
            Notre approche
          </Link>

          <Link
            href="#"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Démarrer un projet
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mx-4 mt-2 flex flex-col gap-1 rounded-2lg bg-surface-1 p-4 lg:hidden">

          {["Solutions", "Votre situation", "Ressources", "Réalisations", "À propos"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="rounded-lg px-3 py-2.5 text-base text-foreground-1 transition-colors hover:bg-white/5 hover:text-accent"
              >
                {item}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
