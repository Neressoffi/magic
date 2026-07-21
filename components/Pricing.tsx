"use client";
import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  badge?: string;
  description: string;
  monthly: number;
  annual: number;
  credits: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

const INDIVIDUAL_PLANS: Plan[] = [
  {
    name: "Premium",
    description: "Placeholder : pour explorer les outils IA et le contenu stock.",
    monthly: 16,
    annual: 12,
    credits: "Inclut 240 K crédits/an",
    cta: "Choisir Premium",
    features: [
      "Accès à tous les modèles image, vidéo et audio",
      "Espaces : canvas partagé, pensé workflows",
      "Outils d'édition pro : image, vidéo et design",
      "Musique, voix et effets sonores",
      "Licence IA commerciale",
      "Upscalers image et vidéo",
    ],
  },
  {
    name: "Premium+",
    badge: "Meilleur rapport",
    description: "Placeholder : pour les créatifs qui veulent des générations illimitées et tout l'accès IA.",
    monthly: 36,
    annual: 27,
    credits: "Inclut 600 K crédits/an",
    cta: "Choisir Premium+",
    highlighted: true,
    features: [
      "Accès à tous les modèles image, vidéo et audio",
      "Espaces : canvas partagé, pensé workflows",
      "Outils d'édition pro : image, vidéo et design",
      "Musique, voix et effets sonores",
      "Licence IA commerciale + droits musicaux",
      "Upscalers exclusifs",
    ],
  },
  {
    name: "Pro",
    badge: "Choix des experts",
    description: "Placeholder : pour les professionnels qui produisent du contenu à grande échelle.",
    monthly: 230,
    annual: 172.5,
    credits: "Inclut 4 M crédits/an + 25% offerts",
    cta: "Choisir Pro",
    features: [
      "Accès à tous les modèles image, vidéo et audio",
      "Espaces : canvas partagé, pensé workflows",
      "Outils d'édition pro : image, vidéo et design",
      "Musique, voix et effets sonores",
      "Licence IA commerciale + droits musicaux",
      "Générations en parallèle",
    ],
  },
];

export function Pricing() {

  const [audience, setAudience] = useState<"individual" | "teams">("individual");

  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">

        <h2 className="text-center font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
          Des offres qui couvrent vos besoins
        </h2>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">

          <div className="flex items-center rounded-full bg-marketing-surface-1 p-1.5">
            {(
              [
                { id: "individual", label: "Particulier" },
                { id: "teams", label: "Équipes" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setAudience(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  audience === tab.id
                    ? "bg-black text-white"
                    : "text-marketing-foreground-0 hover:bg-black/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span
              className={annual ? "text-marketing-foreground-2" : "font-medium text-marketing-foreground-0"}
            >
              Mensuel
            </span>

            <button
              onClick={() => setAnnual(!annual)}
              aria-label="Basculer entre mensuel et annuel"
              className={`relative h-6 w-11 rounded-full transition-colors ${
                annual ? "bg-black" : "bg-black/20"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
                  annual ? "left-[22px]" : "left-0.5"
                }`}
              />
            </button>
            <span
              className={annual ? "font-medium text-marketing-foreground-0" : "text-marketing-foreground-2"}
            >
              Annuel{" "}
              <span className="text-marketing-foreground-2">
                — Économisez 25 %
              </span>
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {INDIVIDUAL_PLANS.map((plan) => {

            const price = annual ? plan.annual : plan.monthly;
            return (
              <div
                key={plan.name}
                className="flex flex-col rounded-2lg bg-marketing-surface-1 p-8"
              >

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-marketing-foreground-0">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="rounded-full border border-black/15 px-3 py-1 text-[11px] font-medium text-marketing-foreground-1">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-2 min-h-[40px] text-sm text-marketing-foreground-2">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  {annual && (
                    <span className="text-lg text-marketing-foreground-2 line-through">
                      {plan.monthly} €
                    </span>
                  )}
                  <span className="font-display text-4xl font-bold text-marketing-foreground-0">

                    {price.toLocaleString("fr-FR")} €
                  </span>
                  <span className="text-sm text-marketing-foreground-2">/mois</span>
                </div>

                <p className="mt-1 text-xs text-marketing-foreground-2">
                  {annual ? "facturé annuellement" : "facturé mensuellement"} ·{" "}
                  {plan.credits}
                </p>

                <Link
                  href="#"
                  className={`mt-6 rounded-lg px-5 py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                    plan.highlighted
                      ? "bg-black text-white"
                      : "border border-black/20 text-marketing-foreground-0"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-marketing-foreground-1">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-marketing-foreground-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {audience === "teams" && (
          <p className="mt-6 text-center text-sm text-marketing-foreground-2">
            Placeholder : les offres Équipes (Business et Entreprise) sont
            présentées dans la section précédente — contactez-nous pour un
            devis personnalisé.
          </p>
        )}
      </div>
    </section>
  );
}
