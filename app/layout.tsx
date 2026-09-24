import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Motion Wagram — Roman Chandler Fry',
  description: 'Technical production, from creative intent to live delivery. Motion Wagram / Roman Chandler Fry.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
