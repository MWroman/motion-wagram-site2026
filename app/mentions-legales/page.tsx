import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
export const metadata: Metadata = { title: 'Mentions légales — Motion Wagram', robots: { index: false, follow: true } };
export default function Legal() {
  return <><SiteHeader /><main className="legal-page section-pad" lang="fr">
    <p className="section-label">MOTION WAGRAM</p><h1>Mentions légales</h1>
    <p className="legal-draft">Aucun numéro de téléphone professionnel n’est publié. Pour toute demande, contactez-nous par email.</p>
    <section><h2>Éditeur et contact</h2><p>MOTION WAGRAM, société par actions simplifiée unipersonnelle (SASU).</p><address>Siège social : 37 rue Traversière<br />75012 PARIS<br />FRANCE</address><p><a href="mailto:contact@motionwagram.com">contact@motionwagram.com</a></p><p>SIREN : 833 109 952 — RCS Paris.<br />SIRET du siège : 833 109 952 00014.<br />TVA intracommunautaire : FR29 833109952.<br />Capital social : 10 000 €.</p></section>
    <section><h2>Direction de la publication</h2><p>Roman Chandler Fry.</p></section>
    <section><h2>Hébergement</h2><p>Cloudflare, Inc. — service Cloudflare Pages.<br />101 Townsend Street, San Francisco, CA 94107, États-Unis.<br />Téléphone : <a href="tel:+18889935273">+1 888 993 5273</a>.<br /><a href="https://www.cloudflare.com/">www.cloudflare.com</a>.</p></section>
    <section><h2>Contenus et crédits</h2><p>Ce portfolio présente des projets et des contributions de Motion Wagram. Les photographies, films, marques et autres éléments présentés restent soumis aux droits de leurs titulaires respectifs. Les crédits disponibles figurent sur les fiches projets. Leur présentation n’implique pas que Motion Wagram détienne l’ensemble des droits sur ces contenus.</p><p>Toute réutilisation doit respecter les droits applicables et, lorsque nécessaire, faire l’objet d’une autorisation du titulaire concerné. Pour signaler une erreur de crédit ou demander une correction, contactez-nous par email.</p></section>
    <section><h2>Données personnelles</h2><p>Consultez notre <Link href="/confidentialite/">information de confidentialité</Link> pour connaître les usages des données et les modalités d’exercice de vos droits.</p></section>
    <Link className="text-link" href="/">← Retour au portfolio</Link>
  </main></>;
}
