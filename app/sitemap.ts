import type { MetadataRoute } from 'next';
import { projects } from './projects';
import { alternates, origin } from './i18n';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/work/', ...projects.map(p => `/projects/${p.slug}/`)];
  return (['fr','en'] as const).flatMap(locale => paths.map(path => ({
    url: `${origin}/${locale}${path}`,
    alternates: { languages: alternates(locale, path).languages }
  })));
}
