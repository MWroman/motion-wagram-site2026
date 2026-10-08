import type { Metadata } from 'next';
import '../globals.css';
import LegalFooter from '../components/LegalFooter';
export const metadata: Metadata = {
 metadataBase: new URL('https://www.motionwagram.com'),
 title: "Motion Wagram — Direction technique et production événementielle",
 description: "Direction technique et production événementielle pour les agences et annonceurs à Paris et en Europe. Des équipes expertes en vidéo, son, lumière et exploitation.",
 icons: { icon: '/motion-wagram-fingerprint.png', apple: '/motion-wagram-fingerprint.png' },
};
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="fr"><body>{children}<LegalFooter locale="fr" /></body></html>;
}
