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
      { label: "Identité de marque", href: "/solutions#branding", isNew: true },
      { label: "Positionnement", href: "/solutions#branding" },
      { label: "Logo", href: "/solutions#branding" },
      { label: "Identité visuelle", href: "/solutions#branding" },
      { label: "Direction artistique", href: "/solutions#branding" },
      { label: "Charte graphique", href: "/solutions#branding" },
      { label: "Univers de marque", href: "/solutions#branding" },
    ],
  },
  {
    title: "Vidéo",
    icon: "video",
    links: [
      { label: "Vidéos publicitaires", href: "/solutions#video", isNew: true },
      { label: "Teasers", href: "/solutions#video" },
      { label: "Spots", href: "/solutions#video", isNew: true },
      { label: "Contenus de lancement", href: "/solutions#video" },
      { label: "Campagnes audiovisuelles", href: "/solutions#video" },
    ],
  },
  {
    title: "IA & données",
    icon: "audio",
    links: [
      { label: "Assistants intelligents", href: "/solutions#ia-data" },
      { label: "Automatisation", href: "/solutions#ia-data", isNew: true },
      { label: "Collecte de données", href: "/solutions#ia-data" },
      { label: "Structuration de données", href: "/solutions#ia-data" },
    ],
  },
  {
    title: "Campagnes",
    icon: "box",
    links: [
      { label: "Concepts créatifs", href: "/solutions#video", isNew: true },
      { label: "Messages de campagne", href: "/solutions#video" },
      { label: "Déclinaisons visuelles", href: "/solutions#video" },
    ],
  },
  {
    title: "Design",
    icon: "palette",
    links: [
      { label: "Flyers", href: "/solutions#design" },
      { label: "Catalogues", href: "/solutions#design" },
      { label: "Menus", href: "/solutions#design" },
      { label: "Brochures", href: "/solutions#design" },
      { label: "Présentations", href: "/solutions#design" },
    ],
  },
  {
    title: "Approche",
    icon: "wrench",
    links: [
      { label: "Cadrer le besoin", href: "/notre-approche#framework", isNew: true },
      { label: "Diagnostiquer", href: "/notre-approche#framework" },
      { label: "Concevoir la solution", href: "/notre-approche#framework" },
      { label: "Déployer et faire évoluer", href: "/notre-approche#framework" },
    ],
  },
];

export const stockColumns: MenuColumn[] = [
  {
    title: "Lancement",
    icon: "image",
    links: [
      { label: "Vous lancez", href: "/votre-situation#lancement" },
      { label: "Créer une marque", href: "/votre-situation#lancement" },
      { label: "Préparer un lancement", href: "/votre-situation#lancement" },
    ],
  },
  {
    title: "Évolution",
    icon: "palette",
    links: [
      {
        label: "Vous professionnalisez",
        href: "/votre-situation#professionnalisation",
      },
      {
        label: "Vous repositionnez",
        href: "/votre-situation#repositionnement",
      },
      {
        label: "Monter en gamme",
        href: "/votre-situation#professionnalisation",
      },
    ],
  },
  {
    title: "Communication",
    icon: "video",
    links: [
      { label: "Vous communiquez", href: "/votre-situation#communication" },
      {
        label: "Campagne ou lancement",
        href: "/votre-situation#communication",
        isNew: true,
      },
    ],
  },
  {
    title: "Transformation",
    icon: "box",
    links: [
      { label: "Vous transformez", href: "/votre-situation#transformation" },
      { label: "IA et données", href: "/votre-situation#transformation" },
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
  { title: "À propos", subtitle: "Qui est NYAKA", icon: "newspaper", href: "/a-propos" },
  { title: "Notre approche", subtitle: "De l'idée à la solution", icon: "graduation", href: "/notre-approche" },
  { title: "Réalisations", subtitle: "Projets et études de cas", icon: "book", href: "/realisations" },
  { title: "Votre situation", subtitle: "Lancement, évolution, campagne", icon: "users", href: "/votre-situation" },
  { title: "FAQ", subtitle: "Réponses à vos questions", icon: "help", href: "#" },
  { title: "Démarrer un projet", subtitle: "Parler de votre besoin", icon: "sparkles", href: "#" },
];
