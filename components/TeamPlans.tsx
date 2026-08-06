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
  { icon: Scale, title: "Une direction claire", text: "Nous clarifions le résultat attendu avant de produire, pour éviter une bonne solution au mauvais problème." },
  { icon: ShieldCheck, title: "Cohérence de marque", text: "Branding, design, vidéo et données avancent autour d'un même objectif pour votre organisation." },
  { icon: SlidersHorizontal, title: "Périmètre adapté", text: "Chaque projet mobilise uniquement les compétences, les formats et les partenaires nécessaires." },
  { icon: UserCheck, title: "Votre organisation au centre", text: "Nous adaptons la réponse à votre contexte, vos contraintes et votre prochaine étape." },
  { icon: Headset, title: "Accompagnement dédié", text: "Une vraie équipe, du cadrage au déploiement, et au-delà lorsque le projet doit évoluer." },
  { icon: InfinityIcon, title: "Construire pour évoluer", text: "Les solutions doivent pouvoir accompagner la croissance de votre organisation, pas seulement le besoin du jour." },
];

const TESTIMONIALS = [
  {
    brand: "KAWA",
    quote:
      "« Une expérience plus cohérente entre l'identité du lieu, la présentation de l'offre et l'interaction avec les clients. »",
    name: "Projet KAWA Coffee Shop",
    role: "Direction artistique · Menu · Expérience digitale",
  },
  {
    brand: "THE VISION",
    quote:
      "« Des campagnes et des contenus capables de rendre les opportunités plus compréhensibles et plus engageantes. »",
    name: "Projet THE VISION",
    role: "Stratégie de communication · Design · Vidéo",
  },
  {
    brand: "NEMESIS",
    quote:
      "« Un univers de marque capable de traduire une ambition plus grande et de soutenir la future évolution du projet. »",
    name: "Projet NEMESIS",
    role: "Branding · Direction artistique",
  },
];

const MODELS_TABLE = [
  { name: "Branding", type: "Identité de marque", color: "bg-violet-500/20 text-violet-300", on: true },
  { name: "Design", type: "Supports de communication", color: "bg-sky-500/20 text-sky-300", on: true },
  { name: "Vidéo", type: "Contenus et campagnes", color: "bg-orange-500/20 text-orange-300", on: true },
  { name: "IA & données", type: "Automatisation / Assistants", color: "bg-violet-500/20 text-violet-300", on: false },
];

const USERS_TABLE = [
  { name: "Équipe marque", spent: "Identité", available: "Actif", width: "w-3/4" },
  { name: "Équipe design", spent: "Supports", available: "Actif", width: "w-1/3" },
  { name: "Équipe vidéo", spent: "Campagnes", available: "Actif", width: "w-2/3" },
  { name: "Équipe data", spent: "IA", available: "Sur devis", width: "w-11/12" },
];

export function TeamPlans() {
  return (
    <section className="bg-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">

        <h2 className="max-w-2xl font-display text-3xl font-bold text-white lg:text-5xl">
          Des collaborations pensées pour les équipes et les organisations
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">

          <div>
            <h3 className="font-display text-2xl font-bold text-white">Équipes</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-2">
              Pour les équipes qui veulent une image, des supports ou des
              contenus plus cohérents. NYAKA clarifie le besoin, propose un
              périmètre adapté et produit les livrables nécessaires.
            </p>

            <Link
              href="#"
              className="mt-6 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              En savoir plus
            </Link>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-white">Organisations</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-2">
              Pour les organisations où la marque, la communication ou les
              outils digitaux sont stratégiques. Approche structurée, expertises
              combinées et accompagnement sur la durée.
            </p>

            <Link
              href="#"
              className="mt-6 inline-block rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Parler de votre projet
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2">

          <div className="rounded-2lg bg-surface-1 p-8">
            <h3 className="font-display text-xl font-bold text-white">
              Toutes les expertises au même endroit
            </h3>
            <p className="mt-2 text-sm text-foreground-2">
              Branding, design, vidéo, intelligence artificielle et données :
              mobilisez les pôles nécessaires autour d&apos;une même direction.
            </p>

            <div className="mt-6 overflow-hidden rounded-lg bg-surface-2">

              <div className="grid grid-cols-[1fr_1fr_64px] gap-2 border-b border-white/10 px-4 py-2.5 text-[11px] uppercase tracking-wider text-foreground-3">
                <span>Pôle</span>
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
              Une équipe adaptée à chaque projet
            </h3>
            <p className="mt-2 text-sm text-foreground-2">
              Nous réunissons uniquement les expertises nécessaires. Le
              périmètre, les responsabilités et le calendrier sont définis avant
              le démarrage.
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
                        {user.spent} · {user.available}
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
          Pourquoi travailler avec NYAKA ?
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
