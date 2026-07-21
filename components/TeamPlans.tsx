import Link from "next/link";

import {
  Headset,
  Infinity as InfinityIcon,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";

const FEATURES = [
  { icon: Scale, title: "Indemnisation juridique", text: "Placeholder : protection légale complète pour les contenus IA utilisés commercialement." },
  { icon: ShieldCheck, title: "Sécurité & conformité", text: "Placeholder : RGPD, ISO/IEC 27001 et SOC 2. Prêt pour vos achats dès le premier jour." },
  { icon: SlidersHorizontal, title: "Contrôle admin", text: "Placeholder : utilisateurs, permissions, crédits et accès aux modèles — un seul tableau de bord." },
  { icon: UserCheck, title: "Tout vous appartient", text: "Placeholder : chaque asset est à vous. Nous n'entraînons jamais nos modèles sur vos données." },
  { icon: Headset, title: "Support dédié", text: "Placeholder : une vraie équipe, de l'intégration au quotidien." },
  { icon: InfinityIcon, title: "Évoluez sans limites", text: "Placeholder : crédits flexibles, générations en parallèle, aucune restriction de sièges." },
];

const TESTIMONIALS = [
  {
    brand: "Logoipsum",
    quote:
      "« Placeholder : les meilleurs modèles et outils de workflow dans une interface unifiée. CreativeHub a intégré l'IA à nos process, de bout en bout. »",
    name: "Prénom Nom",
    role: "CTO, Logoipsum",
  },
  {
    brand: "Acme Corp",
    quote:
      "« Placeholder : nous sommes très satisfaits. Des résultats fiables et de grande qualité, avec des workflows simplifiés et plus efficaces. »",
    name: "Prénom Nom",
    role: "Head of Content, Acme Corp",
  },
  {
    brand: "Globex",
    quote:
      "« Placeholder : un élément clé de notre stack marketing. Nous créons du contenu de qualité à grande échelle. »",
    name: "Prénom Nom",
    role: "Co-fondateur, Globex",
  },
];

const MODELS_TABLE = [
  { name: "Nova Image Pro", type: "Génération d'images", color: "bg-violet-500/20 text-violet-300", on: true },
  { name: "Framewave 2", type: "Génération vidéo", color: "bg-sky-500/20 text-sky-300", on: true },
  { name: "Voxtral Audio", type: "Audio / Voix", color: "bg-orange-500/20 text-orange-300", on: true },
  { name: "Flux Render", type: "Génération d'images", color: "bg-violet-500/20 text-violet-300", on: false },
];

const USERS_TABLE = [
  { name: "Zoé Kendal", spent: "1,2 M", available: "1,7 M", width: "w-3/4" },
  { name: "Arlo Finch", spent: "310 K", available: "877 K", width: "w-1/3" },
  { name: "Demi Ochoa", spent: "10,7 M", available: "18,2 M", width: "w-2/3" },
  { name: "Nala Jones", spent: "69 K", available: "30 K", width: "w-11/12" },
];

export function TeamPlans() {
  return (
    <section className="bg-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">

        <h2 className="max-w-2xl font-display text-3xl font-bold text-white lg:text-5xl">
          Des offres d&apos;équipe conçues pour créer à grande échelle
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">

          <div>
            <h3 className="font-display text-2xl font-bold text-white">Business</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-2">
              Placeholder : pour les équipes créatives et agences qui veulent
              produire plus vite. Crédits partagés, workflows collaboratifs et
              accès à tous les modèles IA — sans la complexité des achats
              entreprise.
            </p>

            <Link
              href="#"
              className="mt-6 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              En savoir plus
            </Link>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-white">Entreprise</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-2">
              Placeholder : pour les organisations où la production créative est
              critique. Indemnisation juridique complète, sécurité de niveau
              entreprise, utilisateurs illimités, SSO personnalisé et une équipe
              dédiée dès le premier jour.
            </p>

            <Link
              href="#"
              className="mt-6 inline-block rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Parler à l&apos;équipe
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2">

          <div className="rounded-2lg bg-surface-1 p-8">
            <h3 className="font-display text-xl font-bold text-white">
              Tous les outils IA au même endroit
            </h3>
            <p className="mt-2 text-sm text-foreground-2">
              Placeholder : accédez aux meilleurs modèles génératifs depuis une
              seule plateforme. Choisissez les modèles via le panneau admin.
            </p>

            <div className="mt-6 overflow-hidden rounded-lg bg-surface-2">

              <div className="grid grid-cols-[1fr_1fr_64px] gap-2 border-b border-white/10 px-4 py-2.5 text-[11px] uppercase tracking-wider text-foreground-3">
                <span>Nom</span>
                <span>Type</span>
                <span>Actif</span>
              </div>

              {MODELS_TABLE.map((model) => (
                <div
                  key={model.name}
                  className="grid grid-cols-[1fr_1fr_64px] items-center gap-2 border-b border-white/5 px-4 py-3 last:border-0"
                >
                  <span className="text-sm font-medium text-white">{model.name}</span>

                  <span className={`w-fit rounded px-2 py-0.5 text-[11px] font-medium ${model.color}`}>
                    {model.type}
                  </span>

                  <span
                    className={`relative h-5 w-9 rounded-full transition-colors ${
                      model.on ? "bg-sky-500" : "bg-white/15"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                        model.on ? "left-[18px]" : "left-0.5"
                      }`}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2lg bg-surface-1 p-8">
            <h3 className="font-display text-xl font-bold text-white">
              Utilisateurs illimités, crédits flexibles
            </h3>
            <p className="mt-2 text-sm text-foreground-2">
              Placeholder : évoluez librement, sans limite de sièges. Payez selon
              les crédits utilisés — pas selon le nombre de personnes.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {USERS_TABLE.map((user, index) => (
                <div key={user.name} className="flex items-center gap-3">

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                      ["bg-violet-500", "bg-emerald-500", "bg-orange-500", "bg-pink-500"][index]
                    }`}
                  >
                    {user.name.charAt(0)}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-white">{user.name}</span>
                      <span className="text-foreground-3">
                        Utilisés {user.spent} · Dispo {user.available}
                      </span>
                    </div>

                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full rounded-full bg-sky-500 ${user.width}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mt-20 font-display text-2xl font-bold text-white lg:text-3xl">
          Des fonctionnalités entreprise pensées pour l&apos;échelle
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-4">

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-2">
                <feature.icon className="h-[18px] w-[18px] text-white" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-white">{feature.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-3">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-white/10 pt-14 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.brand}>

              <span className="font-display text-lg font-bold text-white">
                {testimonial.brand}
              </span>

              <p className="mt-4 text-sm leading-relaxed text-foreground-2">
                {testimonial.quote}
              </p>

              <p className="mt-4 text-xs font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs text-foreground-3">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
