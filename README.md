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

- `app/content.ts` : identité, showreel et adresse de contact.
- `app/projects.json` : les 30 projets. `featured: true` place un projet dans la sélection de l’accueil.
- `app/work/page.tsx` : index complet des projets.
- `app/projects/[slug]/page.tsx` : modèle des fiches, images, films et crédits.
- `public/motion-wagram.svg` : logo blanc officiel fourni ; variante noire via CSS sur fond blanc.
- `public/media/showreel-2024.mp4` : Showreel 2024 optimisé, sans piste audio, 1600 pixels de large, environ 3,6 Mo.
- `public/media/projects/` : photographies WebP et films H.264 optimisés.

Les vidéos des fiches ne se chargent qu’à la demande et disposent de commandes natives. Les images secondaires se chargent progressivement. Le showreel respecte la préférence de réduction des animations et se met en pause hors écran. L’ouverture reste sans titre ni commandes superposés ; le positionnement figure juste en dessous.

## Sources et état de l’import

Le classeur `Base de donné SITE MW.xlsx` du dossier fourni a servi à importer 21 fiches, leurs missions et crédits. Neuf autres projets sont issus de dossiers de médias identifiés : Tikehau, Astorg, PKFW, Sewan, GGVIE, SNCF Gerland, SNCF Numérique, COP22 AAA et JCDecaux ESG Neuilly. Leurs missions n’ont pas été inventées lorsque le classeur n’en fournissait pas.

Les textes anglais ont été nettoyés pour la lecture, sans ajouter de prestations. Les valeurs des crédits restent issues du classeur. Les crédits photographiques disponibles sont affichés.

`media-sources.json` conserve la correspondance entre les médias sélectionnés et les fichiers d’origine. `import-report.json` liste les fiches sans média associé et celles dont le descriptif reste à compléter. Ces fichiers ne sont pas dans `public/` et ne sont pas livrés aux visiteurs.

Le fichier explicitement nommé `JCDECAUX_confidentiel_VivaTech2024.mp4` n’est pas intégré. Le dossier `Photos Freya era` n’est pas présenté comme un projet distinct faute d’identification correspondante dans le classeur. Aucune modification n’a été faite dans les dossiers sources.

Conserver au maximum **cinq photos par projet**. La sélection actuelle en contient une à quatre pour les projets illustrés. Le contrôle `node scripts/verify-export.mjs`, après le build, vérifie cette limite, les pages et les liens locaux.

Pour ajouter un projet, compléter `app/projects.json`, placer les médias optimisés dans `public/media/projects/<slug>/`, puis reconstruire le site. Aucun accès au classeur ni au disque de l’ordinateur n’est nécessaire pour les visiteurs.


## FR / EN routing (Cloudflare Pages)

- `/fr/` and `/en/` are static, separately rendered routes with matching HTML language, canonical and hreflang tags. Project slugs remain identical across locales.
- The root `/` is handled by `public/_worker.js`, copied to `out/_worker.js` by `next build`. Cloudflare Pages advanced mode reads `request.cf.country`: FR selects French; every other or unknown country selects English.
- A manual selection stores the host-only `mw_locale` cookie (one year, SameSite=Lax, Secure over HTTPS) and a localStorage backup. The edge reads only this cookie, never localStorage. The cookie takes priority over country. Clearing browser data removes the preference.
- Only `/` receives country/preference routing; direct locale paths are served unchanged. Personalized redirects return 302 with private, no-store headers. `_routes.json` restricts Worker execution to the root and legacy redirects.
- The switcher keeps the equivalent page, query string and anchor. A normal full navigation ensures the correct document language.
- Local Next development has no geographic edge information: `/` uses the saved preference, otherwise English. Test France/other-country decisions with `node scripts/verify-locales.mjs` after building; verify live geography after deploying to Cloudflare.
- Build: `pnpm build`; verify: `node scripts/verify-export.mjs` and `node scripts/verify-locales.mjs`. Keep Cloudflare Pages output directory set to `out`. The build deploy must include `_worker.js` and `_routes.json`.
- Canonicals and sitemap use `https://www.motionwagram.com`. The separate ChatGPT Site is not changed by this checkout.
- Former unprefixed project and legal URLs redirect to their English counterparts at the edge; the removed standalone French services page redirects to `/fr/#about`.
