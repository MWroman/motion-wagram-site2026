import type { Metadata } from 'next';
import '../globals.css';
import LegalFooter from '../components/LegalFooter';
export const metadata: Metadata = {
 metadataBase: new URL('https://www.motionwagram.com'),
 title: "Motion Wagram — Technical direction & event production",
 description: "Technical direction and event production for agencies and brands in Paris and Europe. Specialist teams in video, lighting, sound and on-site delivery.",
 icons: { icon: '/motion-wagram-fingerprint.png', apple: '/motion-wagram-fingerprint.png' },
};
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body>{children}<LegalFooter locale="en" /></body></html>;
}
