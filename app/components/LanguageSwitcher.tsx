"use client";
import { usePathname } from 'next/navigation';
export default function LanguageSwitcher() {
  const pathname = usePathname();
  const current = pathname.startsWith('/fr') ? 'fr' : 'en';
  const suffix = pathname.replace(/^\/(fr|en)(?=\/|$)/, '') || '/';
  function select(locale: string) {
    document.cookie = `mw_locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
    try { localStorage.setItem('mw_locale', locale); } catch {}
  }
  return <span className="language-switcher" role="group" aria-label={current === 'fr' ? 'Langue' : 'Language'}>
    {(['fr','en'] as const).map(locale => <a key={locale} href={`/${locale}${suffix}`} hrefLang={locale} lang={locale} aria-current={current === locale ? 'page' : undefined} onClick={e => { select(locale); e.currentTarget.href = `/${locale}${suffix}${location.search}${location.hash}`; }}>{locale.toUpperCase()}</a>)}
  </span>;
}
