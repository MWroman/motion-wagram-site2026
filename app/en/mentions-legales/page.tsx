import type { Metadata } from 'next';
import Link from 'next/link';
import { alternates } from '../../i18n';
import SiteHeader from '../../components/SiteHeader';
export const metadata: Metadata = { alternates: alternates('en','/mentions-legales/'), title:'Legal notice — Motion Wagram', robots:{index:false,follow:true} };
export default function Legal() {
 return <><SiteHeader locale="en" /><main className="legal-page">
 <p className="section-label">MOTION WAGRAM</p><h1>Legal notice</h1>
 <p className="legal-draft">No business telephone number is published. Please contact us by email.</p>
 <section><h2>Publisher and contact</h2><p>MOTION WAGRAM, a French single-member simplified joint-stock company (SASU).</p><address>Registered office: 37 rue Traversière<br />75012 PARIS<br />FRANCE</address><p><a href="mailto:contact@motionwagram.com">contact@motionwagram.com</a></p><p>SIREN: 833 109 952 — Paris Trade and Companies Register.<br />Registered office SIRET: 833 109 952 00014.<br />VAT number: FR29 833109952.<br />Share capital: €10,000.</p></section>
 <section><h2>Publication director</h2><p>Roman Chandler Fry.</p></section>
 <section><h2>Hosting</h2><p>Cloudflare, Inc. — Cloudflare Pages.<br />101 Townsend Street, San Francisco, CA 94107, United States.<br />Telephone: <a href="tel:+18889935273">+1 888 993 5273</a>.<br /><a href="https://www.cloudflare.com/">www.cloudflare.com</a>.</p></section>
 <section><h2>Content and credits</h2><p>This portfolio presents projects and contributions by Motion Wagram. Photographs, films, trademarks and other materials remain subject to their respective owners’ rights. Available credits appear on project pages. Displaying this content does not imply that Motion Wagram holds all rights to it.</p><p>Any reuse must respect applicable rights and obtain the rights holder’s permission where required. To report a credit error or request a correction, contact us by email.</p></section>
 <section><h2>Personal data</h2><p>Read our <Link href="/en/confidentialite/">privacy information</Link> to learn how data is used and how to exercise your rights.</p></section>
 </main></>;
}
