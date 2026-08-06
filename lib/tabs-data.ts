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
    title: "Branding",
    description:
      "Construire, clarifier ou faire évoluer une marque afin qu'elle soit reconnaissable, distinctive et cohérente.",
    image: "https://picsum.photos/id/1025/1200/900",
  },
  {
    icon: "video",
    title: "Vidéo",
    description:
      "Transformer un message, une offre ou un événement en contenus capables d'attirer l'attention et de provoquer une action.",
    image: "https://picsum.photos/id/1035/1200/900",
  },
  {
    icon: "audio",
    title: "Campagnes",
    description:
      "Construire un concept, un message et des déclinaisons visuelles ou audiovisuelles cohérentes.",
    image: "https://picsum.photos/id/1045/1200/900",
  },
  {
    icon: "box",
    title: "IA & données",
    description:
      "Intégrer l'IA, l'automatisation et les données là où elles peuvent améliorer une expérience, une décision ou un fonctionnement.",
    image: "https://picsum.photos/id/1055/1200/900",
  },
  {
    icon: "layout",
    title: "Design",
    description:
      "Donner une forme professionnelle à vos offres, vos messages et vos points de contact physiques ou digitaux.",
    image: "https://picsum.photos/id/1065/1200/900",
  },
];

export const tabs: TabContent[] = [
  {
    id: "creative-suite",
    label: "Branding",
    panelTitle: "Une identité reconnaissable et cohérente",
    panelDescription:
      "Positionnement, logo, identité visuelle et direction artistique : nous construisons une marque capable d'évoluer avec votre organisation.",
    ctaLabel: "Explorer le branding",
    items: defaultItems,
  },
  {
    id: "mcp-api",
    label: "Design",
    isNew: true,
    panelTitle: "Des supports professionnels, prêts à servir votre offre",
    panelDescription:
      "Flyers, catalogues, menus, brochures et présentations : nous donnons une forme claire et premium à vos messages et points de contact.",
    ctaLabel: "Explorer le design",
    items: defaultItems,
  },
  {
    id: "agents",
    label: "Vidéo",
    isNew: true,
    panelTitle: "Des contenus vidéo pensés pour l'action",
    panelDescription:
      "Teasers, vidéos publicitaires, spots et campagnes : nous transformons votre message en contenus capables d'attirer l'attention.",
    ctaLabel: "Explorer la vidéo",
    items: defaultItems,
  },
  {
    id: "plugins",
    label: "IA & données",
    isNew: true,
    panelTitle: "L'intelligence artificielle au service du réel",
    panelDescription:
      "Assistants, automatisation, collecte et structuration de données : nous intégrons l'IA là où elle améliore réellement votre fonctionnement.",
    ctaLabel: "Explorer l'IA",
    items: defaultItems,
  },
  {
    id: "stock",
    label: "Approche",
    panelTitle: "Une méthode pour construire la bonne réponse",
    panelDescription:
      "Nous clarifions la transformation recherchée, analysons la situation, alignons les décisions, concevons la solution, la déployons et l'aidons à évoluer.",
    ctaLabel: "Comprendre notre approche",
    items: defaultItems,
  },
];
