import Link from 'next/link';
export default function LegalFooter() {
  return <nav className="legal-footer" aria-label="Informations légales" lang="fr"><Link href="/mentions-legales/">Mentions légales</Link><Link href="/confidentialite/">Confidentialité</Link></nav>;
}
