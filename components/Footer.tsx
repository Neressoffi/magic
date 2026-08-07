import Link from "next/link";

const FOOTER_COLUMNS: {
  title: string;
  links: { label: string; href?: string; isNew?: boolean }[];
}[] = [
  {
    title: "Solutions",
    links: [
      { label: "Branding et identité de marque", href: "/solutions#branding" },
      {
        label: "Design et supports de communication",
        href: "/solutions#design",
      },
      {
        label: "Contenus vidéo et campagnes créatives",
        href: "/solutions#video",
      },
      {
        label: "Intelligence artificielle et données",
        href: "/solutions#ia-data",
      },
      { label: "Notre approche", href: "/notre-approche" },
      { label: "Démarrer un projet", href: "/demarrer-un-projet" },
    ],
  },
  {
    title: "À propos",
    links: [
      { label: "Qui est NYAKA", href: "/a-propos" },
      { label: "Notre approche", href: "/notre-approche" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Votre situation", href: "/votre-situation" },
      { label: "FAQ" },
      {
        label: "Projet à la une",
        href: "/realisations/kawa-coffee-shop",
        isNew: true,
      },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "FAQ" },
      { label: "Politique de confidentialité" },
      { label: "Mentions légales" },
      { label: "Conditions de collaboration" },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact" },
    ],
  },
  {
    title: "Nous contacter",
    links: [
      { label: "Démarrer un projet", href: "/demarrer-un-projet" },
      { label: "LinkedIn" },
      { label: "Instagram" },
      { label: "TikTok" },
      { label: "YouTube" },
      { label: "WhatsApp" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-screen-2xl">

        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          <div className="max-w-xs">
            <svg width="140" height="24" viewBox="0 0 140 24" className="h-6 w-auto">
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
            <p className="mt-4 text-sm leading-relaxed text-foreground-3">
              NYAKA accompagne les organisations dans la construction et
              l&apos;évolution de leur marque à travers le branding, le design,
              la vidéo, l&apos;intelligence artificielle et les données.
            </p>
            <p className="mt-3 text-sm font-medium text-foreground-2">
              NYAKA - L&apos;empreinte de votre marque.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>

                <h3 className="text-sm font-semibold text-accent">{column.title}</h3>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href ?? "#"}
                        className="inline-flex items-center gap-1.5 text-sm text-foreground-3 transition-colors duration-100 hover:text-white"
                      >
                        {link.label}

                        {link.isNew && (
                          <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-medium leading-none text-accent">
                            Nouveau
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs text-foreground-3">
            © 2026 NYAKA — L&apos;empreinte de votre marque.
          </p>
        </div>
      </div>
    </footer>
  );
}
