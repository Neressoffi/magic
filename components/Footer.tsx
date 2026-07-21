import Link from "next/link";

const FOOTER_COLUMNS: {
  title: string;
  links: { label: string; isNew?: boolean }[];
}[] = [
  {
    title: "Produits",
    links: [
      { label: "Espaces" },
      { label: "Assistant IA" },
      { label: "Générateur d'images IA" },
      { label: "Générateur vidéo IA" },
      { label: "Générateur de voix IA" },
      { label: "Contenu stock" },
    ],
  },
  {
    title: "Commencer",
    links: [
      { label: "Académie" },
      { label: "Documentation" },
      { label: "Support" },
      { label: "Conditions d'utilisation" },
      { label: "Politique de confidentialité" },
      { label: "Originals", isNew: true },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Tarifs" },
      { label: "À propos" },
      { label: "Carrières" },
      { label: "Tendances de recherche" },
      { label: "Blog" },
      { label: "Événements" },
    ],
  },
  {
    title: "Nous contacter",
    links: [
      { label: "Support client" },
      { label: "Instagram" },
      { label: "YouTube" },
      { label: "LinkedIn" },
      { label: "TikTok" },
      { label: "Discord" },
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
                CreativeHub
              </text>
            </svg>
            <p className="mt-4 text-sm leading-relaxed text-foreground-3">
              La plateforme créative pour diriger votre meilleur travail. Plus
              d&apos;un million d&apos;abonnés parmi les créatifs, entreprises,
              agences et studios.
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
                        href="#"
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
            © 2026 CreativeHub — Site fictif de démonstration. Tous les textes
            et images sont des placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}
