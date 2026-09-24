# Motion Wagram

Portfolio Next.js App Router + Tailwind CSS, entièrement exporté en pages statiques. Aucun CMS, base de données, cookie ou suivi analytique.

## Lancer et construire

Node.js 20.9+ et pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

Le dossier `out/` contient le site prêt à héberger. Les 30 fiches projets sont générées au build, avec des URLs directes `/projects/<slug>/`. Le développement utilise `.next-dev`, la production `.next`.

## Contenu

- `app/content.ts` : identité, showreel et adresse de contact (encore à renseigner).
- `app/projects.json` : les 30 projets. `featured: true` place un projet dans la sélection de l’accueil.
- `app/work/page.tsx` : index complet des projets.
- `app/projects/[slug]/page.tsx` : modèle des fiches, images, films et crédits.
- `public/motion-wagram.svg` : logo blanc officiel fourni ; variante noire via CSS sur fond blanc.
- `public/media/showreel-2024.mp4` : Showreel 2024 optimisé, sans piste audio, 1600 pixels de large, environ 3,6 Mo.
- `public/media/projects/` : photographies WebP et films H.264 optimisés.

Les vidéos des fiches ne se chargent qu’à la demande et disposent de commandes natives. Les images secondaires se chargent progressivement. Le showreel respecte la préférence de réduction des animations et peut être mis en pause.

## Sources et état de l’import

Le classeur `Base de donné SITE MW.xlsx` du dossier fourni a servi à importer 21 fiches, leurs missions et crédits. Neuf autres projets sont issus de dossiers de médias identifiés : Tikehau, Astorg, PKFW, Sewan, GGVIE, SNCF Gerland, SNCF Numérique, COP22 AAA et JCDecaux ESG Neuilly. Leurs missions n’ont pas été inventées lorsque le classeur n’en fournissait pas.

Les textes anglais ont été nettoyés pour la lecture, sans ajouter de prestations. Les valeurs des crédits restent issues du classeur. Les crédits photographiques disponibles sont affichés.

`media-sources.json` conserve la correspondance entre les médias sélectionnés et les fichiers d’origine. `import-report.json` liste les fiches sans média associé et celles dont le descriptif reste à compléter. Ces fichiers ne sont pas dans `public/` et ne sont pas livrés aux visiteurs.

Le fichier explicitement nommé `JCDECAUX_confidentiel_VivaTech2024.mp4` n’est pas intégré. Le dossier `Photos Freya era` n’est pas présenté comme un projet distinct faute d’identification correspondante dans le classeur. Aucune modification n’a été faite dans les dossiers sources.

Conserver au maximum **cinq photos par projet**. La sélection actuelle en contient une à quatre pour les projets illustrés. Le contrôle `node scripts/verify-export.mjs`, après le build, vérifie cette limite, les pages et les liens locaux.

Pour ajouter un projet, compléter `app/projects.json`, placer les médias optimisés dans `public/media/projects/<slug>/`, puis reconstruire le site. Aucun accès au classeur ni au disque de l’ordinateur n’est nécessaire pour les visiteurs.
