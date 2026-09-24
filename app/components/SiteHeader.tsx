import Link from 'next/link';
export default function SiteHeader() {
  return <header className="inner-header">
    <Link href="/" aria-label="Motion Wagram home"><img className="official-logo logo-black" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></Link>
    <nav aria-label="Main navigation"><Link href="/work/">Selected works</Link><Link href="/#about">About</Link><Link href="/#contact">Contact ↗</Link></nav>
  </header>;
}
