import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
export default function SiteHeader({locale = 'en'}: {locale?: 'fr' | 'en'}) {
  return <header className="inner-header">
    <Link href={`/${locale}/`} aria-label={locale === 'fr' ? 'Accueil Motion Wagram' : 'Motion Wagram home'}><img className="official-logo logo-black" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></Link>
    <nav aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}><Link href={`/${locale}/work/`}>{locale === 'fr' ? 'Projets' : 'Selected works'}</Link><Link href={`/${locale}/#about`}>{locale === 'fr' ? 'À propos' : 'About'}</Link><Link href={`/${locale}/#contact`}>Contact ↗</Link><LanguageSwitcher /></nav>
  </header>;
}
