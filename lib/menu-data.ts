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
    title: "Image",
    icon: "image",
    links: [
      { label: "Générateur d'images", href: "#", isNew: true },
      { label: "Éditeur d'images", href: "#" },
      { label: "Upscaler", href: "#" },
      { label: "Suppression de fond", href: "#" },
      { label: "Retouche visage", href: "#" },
      { label: "Transfert de style", href: "#" },
      { label: "Réimaginer", href: "#" },
    ],
  },
  {
    title: "Vidéo",
    icon: "video",
    links: [
      { label: "Générateur de vidéos", href: "#", isNew: true },
      { label: "Éditeur vidéo", href: "#" },
      { label: "Synchronisation labiale", href: "#", isNew: true },
      { label: "Transfert de mouvement", href: "#" },
      { label: "Upscaler vidéo", href: "#" },
    ],
  },
  {
    title: "Audio",
    icon: "audio",
    links: [
      { label: "Synthèse vocale", href: "#" },
      { label: "Voix clonée", href: "#", isNew: true },
      { label: "Musique IA", href: "#" },
      { label: "Effets sonores", href: "#" },
    ],
  },
  {
    title: "3D",
    icon: "box",
    links: [
      { label: "Générateur 3D", href: "#", isNew: true },
      { label: "Textures", href: "#" },
      { label: "Scènes", href: "#" },
    ],
  },
  {
    title: "Design",
    icon: "palette",
    links: [
      { label: "Modèles de design", href: "#" },
      { label: "Mockups", href: "#" },
      { label: "Logos", href: "#" },
      { label: "Icônes", href: "#" },
      { label: "Typographies", href: "#" },
    ],
  },
  {
    title: "Outils",
    icon: "wrench",
    links: [
      { label: "Workflows", href: "#", isNew: true },
      { label: "Agents créatifs", href: "#" },
      { label: "API & MCP", href: "#" },
      { label: "Plugins", href: "#" },
    ],
  },
];

export const stockColumns: MenuColumn[] = [
  {
    title: "Photos",
    icon: "image",
    links: [
      { label: "Photos libres", href: "#" },
      { label: "Photos premium", href: "#" },
      { label: "Collections", href: "#" },
    ],
  },
  {
    title: "Vecteurs",
    icon: "palette",
    links: [
      { label: "Illustrations", href: "#" },
      { label: "Icônes vectorielles", href: "#" },
      { label: "Motifs", href: "#" },
    ],
  },
  {
    title: "Vidéos",
    icon: "video",
    links: [
      { label: "Séquences stock", href: "#" },
      { label: "Modèles vidéo", href: "#", isNew: true },
    ],
  },
  {
    title: "PSD",
    icon: "box",
    links: [
      { label: "Mockups PSD", href: "#" },
      { label: "Modèles PSD", href: "#" },
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
  { title: "Blog", subtitle: "Actualités et études de cas", icon: "newspaper", href: "#" },
  { title: "Tutoriels", subtitle: "Apprenez pas à pas", icon: "graduation", href: "#" },
  { title: "Documentation", subtitle: "Guides API et intégrations", icon: "book", href: "#" },
  { title: "Communauté", subtitle: "Rejoignez les créateurs", icon: "users", href: "#" },
  { title: "Centre d'aide", subtitle: "FAQ et support", icon: "help", href: "#" },
  { title: "Changelog", subtitle: "Les dernières nouveautés", icon: "sparkles", href: "#" },
];
