export type MenuLink = {
  label: string;
  href: string;
  isNew?: boolean;
};

export type MenuColumn = {
  title: string;
  icon: string;
  links: MenuLink[];
};

export const creativeSuiteColumns: MenuColumn[] = [
  {
    title: "Branding",
    icon: "image",
    links: [
      { label: "Identité de marque", href: "#", isNew: true },
      { label: "Positionnement", href: "#" },
      { label: "Logo", href: "#" },
      { label: "Identité visuelle", href: "#" },
      { label: "Direction artistique", href: "#" },
      { label: "Charte graphique", href: "#" },
      { label: "Univers de marque", href: "#" },
    ],
  },
  {
    title: "Vidéo",
    icon: "video",
    links: [
      { label: "Vidéos publicitaires", href: "#", isNew: true },
      { label: "Teasers", href: "#" },
      { label: "Spots", href: "#", isNew: true },
      { label: "Contenus de lancement", href: "#" },
      { label: "Campagnes audiovisuelles", href: "#" },
    ],
  },
  {
    title: "IA & données",
    icon: "audio",
    links: [
      { label: "Assistants intelligents", href: "#" },
      { label: "Automatisation", href: "#", isNew: true },
      { label: "Collecte de données", href: "#" },
      { label: "Structuration de données", href: "#" },
    ],
  },
  {
    title: "Campagnes",
    icon: "box",
    links: [
      { label: "Concepts créatifs", href: "#", isNew: true },
      { label: "Messages de campagne", href: "#" },
      { label: "Déclinaisons visuelles", href: "#" },
    ],
  },
  {
    title: "Design",
    icon: "palette",
    links: [
      { label: "Flyers", href: "#" },
      { label: "Catalogues", href: "#" },
      { label: "Menus", href: "#" },
      { label: "Brochures", href: "#" },
      { label: "Présentations", href: "#" },
    ],
  },
  {
    title: "Approche",
    icon: "wrench",
    links: [
      { label: "Cadrer le besoin", href: "#", isNew: true },
      { label: "Diagnostiquer", href: "#" },
      { label: "Concevoir la solution", href: "#" },
      { label: "Déployer et faire évoluer", href: "#" },
    ],
  },
];

export const stockColumns: MenuColumn[] = [
  {
    title: "Branding",
    icon: "image",
    links: [
      { label: "Identité de marque", href: "#" },
      { label: "Rebranding", href: "#" },
      { label: "Direction artistique", href: "#" },
    ],
  },
  {
    title: "Design",
    icon: "palette",
    links: [
      { label: "Supports print", href: "#" },
      { label: "Supports digitaux", href: "#" },
      { label: "Documents commerciaux", href: "#" },
    ],
  },
  {
    title: "Vidéo",
    icon: "video",
    links: [
      { label: "Teasers et spots", href: "#" },
      { label: "Campagnes vidéo", href: "#", isNew: true },
    ],
  },
  {
    title: "IA",
    icon: "box",
    links: [
      { label: "Assistants", href: "#" },
      { label: "Données et automatisation", href: "#" },
    ],
  },
];

export type ResourceLink = {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
};

export const resourceLinks: ResourceLink[] = [
  { title: "À propos", subtitle: "Qui est NYAKA", icon: "newspaper", href: "#" },
  { title: "Notre approche", subtitle: "De l'idée à la solution", icon: "graduation", href: "#" },
  { title: "Réalisations", subtitle: "Projets et études de cas", icon: "book", href: "#" },
  { title: "Votre situation", subtitle: "Lancement, évolution, campagne", icon: "users", href: "#" },
  { title: "FAQ", subtitle: "Réponses à vos questions", icon: "help", href: "#" },
  { title: "Démarrer un projet", subtitle: "Parler de votre besoin", icon: "sparkles", href: "#" },
];
