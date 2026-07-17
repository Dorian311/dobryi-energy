# Dobryi Energy — PRD

## Problem Statement
Site vitrine corporate pour **Dobryi Energy**, expert de la transition énergétique
basé à Montauban : photovoltaïque, contrôle indépendant, maintenance, IRVE et
sécurité de chantier. Cibles : agriculteurs, industriels/tertiaire, collectivités.
Objectif design : niveau Awwwards Site of the Day.

## Scope v1 (user choices)
- Pages : Accueil, Solutions, Réalisations, À propos, Contact
- Formulaire devis → MongoDB + email transactionnel via **Resend** (Emergent-managed)
  vers `dobryienergy@gmail.com`
- Contact : email (dobryienergy@gmail.com) + WhatsApp **07 73 67 42 57** (bouton flottant)
- Français uniquement · Pas d'espace client · Pas de blog

## Architecture
- **Backend** : FastAPI (`/app/backend/server.py`) — endpoints `/api/devis`,
  `/api/realisations`, `/api/health`. Email via httpx → Emergent proxy.
- **Frontend** : React + Tailwind, Framer Motion, Lenis smooth scroll,
  react-fast-marquee. Router : react-router-dom v7.
- **DB** : MongoDB collection `devis`.
- **Email** : Emergent Resend proxy, sender name `Dobryi Energy`, destinataire
  `dobryienergy@gmail.com`, reply-to = email du prospect.

## Design system
- Palette : Nuit `#040914`, Blanc cassé `#F4F4F0`, Emerald `#00E599`, Solar `#FFD600`
- Fonts : Playfair Display (serif kinetic), Manrope (body), JetBrains Mono (technique)
- Motion : Lenis momentum · masked line-by-line reveals · scroll-triggered reveals ·
  parallax hero · slow editorial marquee · clipped-corner cards

## Implemented (Dec 2025)
- Homepage : hero kinetique parallaxé, manifeste 4 chapitres, marquee éditoriale,
  bento solutions, marchés 3 blocs, trust bar avec compteurs animés, processus,
  CTA final
- Solutions : détail des 5 offres avec ancres (#photovoltaique, #controle, etc.)
- Réalisations : filtres par secteur, gallery bento avec spotlight photography
- À propos : valeurs, chiffres animés, habilitations
- Contact : formulaire éditorial (border-bottom only), sélecteurs de secteur/projet
  chips, écran de succès animé, WhatsApp/email direct
- Header sticky glassmorphism · footer complet · bouton flottant WhatsApp/tel

## Backlog / Next
- P1 : simulateur d'économies solaires (input surface toiture → estimation kWc/€)
- P1 : SEO on-page (meta dynamiques + Schema.org LocalBusiness + sitemap.xml)
- P2 : Blog / Actualités
- P2 : Espace client suivi maintenance
- P2 : Version anglaise / ukrainienne
- P2 : Vraies photos chantiers, logo custom
