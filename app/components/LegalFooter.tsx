import Link from 'next/link';
export default function LegalFooter({locale = 'en'}: {locale?: 'fr' | 'en'}) {
  return <nav className="legal-footer" aria-label={locale === 'fr' ? 'Informations légales' : 'Legal information'}><Link href={`/${locale}/mentions-legales/`}>{locale === 'fr' ? 'Mentions légales' : 'Legal notice'}</Link><Link href={`/${locale}/confidentialite/`}>{locale === 'fr' ? 'Confidentialité' : 'Privacy'}</Link></nav>;
}
