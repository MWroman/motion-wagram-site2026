import type { Metadata } from 'next';
import './globals.css';
import LegalFooter from './components/LegalFooter';
export const metadata: Metadata = {
  title: 'Motion Wagram — Roman Chandler Fry',
  description: 'Technical production, from creative intent to live delivery. Motion Wagram / Roman Chandler Fry.',
  icons: { icon: { url: '/motion-wagram-fingerprint.png', type: 'image/png', sizes: '1000x1000' }, apple: '/motion-wagram-fingerprint.png' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<LegalFooter /></body></html>;
}
