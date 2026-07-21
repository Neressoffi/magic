export type AccordionItem = {
  icon: string;
  title: string;
  description: string;
  image: string;
};

export type TabContent = {
  id: string;
  label: string;
  isNew?: boolean;
  panelTitle: string;
  panelDescription: string;
  ctaLabel: string;
  items: AccordionItem[];
};

const defaultItems: AccordionItem[] = [
  {
    icon: "image",
    title: "Image",
    description:
      "Générez, retouchez, redimensionnez, agrandissez. Gardez vos personnages et votre marque cohérents sur chaque visuel.",
    image: "https://picsum.photos/id/1025/1200/900",
  },
  {
    icon: "video",
    title: "Vidéo",
    description:
      "Placeholder : créez des vidéos à partir de texte ou d'images, en quelques secondes.",
    image: "https://picsum.photos/id/1035/1200/900",
  },
  {
    icon: "audio",
    title: "Audio",
    description:
      "Placeholder : voix off, musiques et effets sonores générés par IA.",
    image: "https://picsum.photos/id/1045/1200/900",
  },
  {
    icon: "box",
    title: "3D",
    description:
      "Placeholder : transformez vos idées en objets et scènes 3D texturés.",
    image: "https://picsum.photos/id/1055/1200/900",
  },
  {
    icon: "layout",
    title: "Espaces",
    description:
      "Placeholder : organisez vos projets et collaborez en temps réel avec votre équipe.",
    image: "https://picsum.photos/id/1065/1200/900",
  },
];

export const tabs: TabContent[] = [
  {
    id: "creative-suite",
    label: "Suite créative",
    panelTitle: "Une production de niveau pro, de bout en bout",
    panelDescription:
      "Partez d'une idée. Dirigez les plans. Ajoutez le son. Explorez des variantes. Explorez des workflows. Connectez-vous dans les Espaces. Votre équipe, en création ensemble.",
    ctaLabel: "Faire le tour",
    items: defaultItems,
  },
  {
    id: "mcp-api",
    label: "MCP & API",
    isNew: true,
    panelTitle: "Intégrez l'IA dans vos produits",
    panelDescription:
      "Placeholder : connectez nos modèles à vos applications grâce à une API simple et au protocole MCP.",
    ctaLabel: "Lire la documentation",
    items: defaultItems,
  },
  {
    id: "agents",
    label: "Agents",
    isNew: true,
    panelTitle: "Des agents qui créent pour vous",
    panelDescription:
      "Placeholder : décrivez votre besoin, l'agent orchestre les bons outils et vous livre le résultat.",
    ctaLabel: "Essayer les agents",
    items: defaultItems,
  },
  {
    id: "plugins",
    label: "Plugins",
    isNew: true,
    panelTitle: "Dans vos outils préférés",
    panelDescription:
      "Placeholder : utilisez CreativeHub directement dans Photoshop, Figma ou Blender grâce aux plugins officiels.",
    ctaLabel: "Voir les plugins",
    items: defaultItems,
  },
  {
    id: "stock",
    label: "Stock",
    panelTitle: "Des millions d'assets prêts à l'emploi",
    panelDescription:
      "Placeholder : photos, vecteurs, vidéos et PSD de qualité, à combiner avec vos générations IA.",
    ctaLabel: "Explorer la banque",
    items: defaultItems,
  },
];
