# NYAKA — Landing page (contenu sur layout CreativeHub)

Site vitrine de **NYAKA** — L'empreinte de votre marque.
Le contenu éditorial NYAKA (branding, design, vidéo, IA et données) est intégré
sur la structure visuelle existante du prototype CreativeHub.

## Démarrer le projet

```bash
npm install     # installe les dépendances
npm run dev     # lance le site sur http://localhost:3000
npm run build   # build de production
```

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — design tokens en variables CSS (voir `app/globals.css`)
- **Radix UI** — Popover (mega-menus), Tabs (section onglets), Accordion (FAQ)
- **keen-slider** — utilisé pour certains carrousels (selon les sections)
- **next-themes** — dark mode forcé sur la home
- **lucide-react** — icônes
- Polices : **Geist** (corps) et **Space Grotesk** (titres, `--font-alternate` / `font-display`)

## Où modifier quoi ?

| Vous voulez changer… | Fichier |
| --- | --- |
| Les couleurs du site | `app/globals.css` (variables CSS) |
| Les liens des mega-menus | `lib/menu-data.ts` |
| Le contenu des onglets | `lib/tabs-data.ts` |
| Une section de la page | `components/<NomDeLaSection>.tsx` |
| L'ordre des sections | `app/page.tsx` |
| Classes Tailwind / animations | `tailwind.config.ts` |

## Structure de la page (`app/page.tsx`)

Ordre des sections :

0. `TopBanner` — bandeau d'annonce
1. `Header` — navigation + mega-menus (absolu, flotte au-dessus du hero)
2. `Hero` — plein écran + roulette de texte + logos partenaires
3. `TabsSection` — onglets pill + panneau accordéon auto-rotatif
4. `ModelsCarousel` — carrousel infini des modèles (vidéo au survol)
5. `BentoGrid` — grille bento (outils + cartes nodal / équipe / workflow)
6. `ToolsCarousel` — outils filtrables, rangée draggable
7. `UseCases` — cas d'usage (3 cartes + panoramique)
8. `VideosCarousel` — Originals (une slide à la fois)
9. `TeamPlans` — offres Business / Entreprise + témoignages
10. `Pricing` — tarifs (Particulier / Équipes, Mensuel / Annuel)
11. `Faq` — accordéon Radix
12. `FinalCta` — appel à l'action final en dégradé
13. `Footer` — pied de page noir

Zones de fond :

- **Partie sombre** : Hero
- **Partie claire (fond crème)** : Tabs → Videos
- **Retour au sombre** : TeamPlans
- **Clair** : Pricing + FAQ
- **CTA dégradé + footer noir** : FinalCta + Footer

---

## Documentation du code (anciens commentaires)

Toute la documentation qui était dans le code a été déplacée ici pour garder les
fichiers sources propres.

### `app/globals.css`

- Directives Tailwind : injectent les styles de base, composants et utilitaires.
- **Design tokens** : toutes les couleurs sont définies une seule fois ici, puis
  mappées dans `tailwind.config.ts`.
- **Fonds sombres** (`--surface-*`) : fond principal du site (header + hero).
- **Texte sur fond sombre** (`--foreground-*`) : blanc pur / 90 % / 70 % / 50 %.
- **Couleur d'accent** (`--accent`) : magenta.
- **Fonds spéciaux** : beige, maroon, neutres.
- **Tokens marketing** : partie claire (crème, blanc, textes).
- Le fond global du site est sombre.
- `overflow-x: hidden` évite les micro-décalages horizontaux causés par les
  carrousels débordants.
- Utilitaire `.scrollbar-hidden` : masque la scrollbar (Firefox / Edge / Chrome-Safari).

### `app/layout.tsx`

- **Geist** : police du corps de texte.
- **Space Grotesk** : titres display (`--font-alternate` → classe `font-display`).
- `ThemeProvider` force le thème sombre sur la home (`forcedTheme="dark"`).
- `suppressHydrationWarning` sur `<html>` : requis par next-themes.
- Métadonnées SEO dans `export const metadata`.

### `tailwind.config.ts`

- Mappe les variables CSS vers des classes Tailwind.
- `content` : fichiers scannés pour le purge CSS.
- `darkMode: "class"` : classe sur `<html>` (next-themes).
- Couleurs : surface, foreground, accent, beige, maroon, marketing, neutral.
- Polices : Geist sans + Space Grotesk display.
- Arrondis : `rounded-2lg` pour les cartes (en plus de `rounded-lg`).
- Animations :
  - `scroll-horizontal` : marquee (liste dupliquée, translation −50 %).
  - `progress` : barre de progression de l'accordéon des onglets.
  - `fadeIn` : fondu des slides Originals.

### `lib/menu-data.ts`

Données des mega-menus du header. Modifier les tableaux pour mettre à jour la nav.

- Types : lien simple / colonne de liens.
- Menu **Suite créative** : 6 colonnes.
- Menu **Stock** : 4 colonnes.
- Menu **Ressources** : liens avec icône + sous-titre.

### `lib/tabs-data.ts`

Données de la section onglets : titre / description / CTA du panneau + items
d'accordéon (image, vidéo, audio, 3D, espaces).

### `components/theme-provider.tsx`

- `"use client"` : next-themes a besoin du JS navigateur.
- Wrapper client autour de next-themes (le layout est un Server Component).

---

### Section 0 — `TopBanner.tsx`

Bandeau noir, lien magenta centré. Au survol, la flèche se décale de 4 px
(`group` / `group-hover`).

### Section 1 — `Header.tsx`

- `"use client"` : popovers + menu mobile.
- Header absolu / transparent au-dessus du hero.
- Map `ICONS` : nom d'icône → composant lucide.
- Badge « Nouveau » (fond magenta ~15 %).
- Mega-menus Radix Popover (Suite créative, Stock, Ressources).
- Ressources : 2 colonnes + carte Events.
- Layout : gauche = burger / logo / nav ; droite = recherche / connexion / inscription.
- Sur mobile : menu déroulant.

### Section 2 — `Hero.tsx`

- Image plein écran qui couvre aussi la zone logos partenaires.
- Voile sombre commun.
- Contenu en bas à gauche : badge, titre, CTAs.
- Roulette de texte à droite (`TextRoulette`).
- Logos partenaires : rangée desktop ; marquee mobile (liste dupliquée, −50 %).

### `TextRoulette.tsx`

- ~10 phrases qui défilent.
- Liste dupliquée ; pas toutes les 2 s ; reset silencieux après un cycle.
- Ligne active au centre ; opacité selon la distance à la ligne active.
- Chaque ligne ~60 px de haut.

### Section 3 — `TabsSection.tsx`

- Section crème ; barre d'onglets avec pastille noire qui glisse.
- Panneau ~650 px : colonne gauche (titre, description, CTA, accordéon) ;
  colonne droite (image encadrée + barre de prompt flottante).
- Accordion auto-rotatif toutes les 5 s (`AUTO_MS`) ; reset au clic.
- Astuce hauteur : `grid-rows-[0fr]` / `grid-rows-[1fr]` + `overflow-hidden`.
- Barre `animate-progress` ; `key` pour relancer l'animation.
- Image stack : fondu / léger zoom au changement d'item.

### Section 4 — `ModelsCarousel.tsx`

- `"use client"` : auto-scroll + drag.
- Scroll via `requestAnimationFrame` ; pause au survol ; drag souris/tactile.
- Piste dupliquée pour boucle infinie.
- Carte modèle ~220×280 : au survol, vidéo en fondu + lecture (`preload="none"`).

### Section 5 — `BentoGrid.tsx`

- Colonne gauche : titre, filtres (Tous / Image / Vidéo / Audio), grille 2×2 d'outils.
- Colonne droite : grande carte noire « canvas nodal », carte bordeaux équipe,
  carte bleue workflow.
- Filtre actif en noir.

### Section 6 — `ToolsCarousel.tsx`

- Filtres pill + flèches précédent/suivant.
- Rangée horizontale : scrollbar masquée, drag → `scrollLeft`, scroll ±400 px.
- Cartes ~200×177 avec léger lift au survol.

### Section 7 — `UseCases.tsx`

- En-tête + CTA noir « Démarrer un projet ».
- 3 cartes verticales (aspect 3/4) + 1 carte panoramique
  (aspect 3/2 mobile → 3/1 desktop) — situations NYAKA.
- Image pleine + dégradé bas + texte.

### Section 8 — `VideosCarousel.tsx`

- Section claire ; **une seule grande slide** visible à la fois.
- Texte en bas à gauche + bouton « Découvrir le projet ».
- Zones latérales discrètes (ombres) cliquables pour précédent / suivant
  (pas de flèches visibles).
- Navigation compacte sous le slider : petit rond gauche (précédent) + barre
  centrale (indicateur) + petit rond droit (suivant).
- Transition `fadeIn` via changement de `key`.

### Section 9 — `TeamPlans.tsx`

- Titre + colonnes Équipes / Organisations.
- 2 cartes démo (pôles, équipes projet).
- Grille de 6 fonctionnalités.
- 3 encarts projets (KAWA, THE VISION, NEMESIS).

### Section 10 — `Pricing.tsx`

- Toggle Projet / Organisation.
- Switch Ciblé / Complet.
- 3 cartes : Essentiel branding, Communication, Solution complète — Sur devis.
- CTA « Demander un devis » / « Démarrer un projet ».

### Section 11 — `Faq.tsx`

- `"use client"` : Accordion Radix interactif.
- Layout 2 colonnes : titre + « Parler de votre projet » à gauche ;
  9 questions NYAKA à droite.
- Icône `+` qui tourne à 45° (croix) à l'ouverture.
- Réponse animée via `grid-rows`.

### Section 12 — `FinalCta.tsx`

- Bandeau dégradé violet → orange.
- Titre display centré « Construisons la suite avec méthode. »
- Bouton noir « Démarrer un projet » + flèche animée.
- Ligne rose diagonale décorative ; bas assombri vers le footer.

### `Footer.tsx`

- Fond noir.
- Logo NYAKA + description + signature à gauche ; 4 colonnes de liens (titres rose/accent).
- Badges « Nouveau » optionnels sur certains liens.
- Copyright en bas.
