export type Locale = 'fr' | 'en';
export const origin = 'https://www.motionwagram.com';
export function alternates(locale: Locale, path = '/') {
  const fr = `${origin}/fr${path}`;
  const en = `${origin}/en${path}`;
  return { canonical: locale === 'fr' ? fr : en, languages: { fr, en, 'x-default': path === '/' ? `${origin}/` : en } };
}
