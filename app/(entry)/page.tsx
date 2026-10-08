import type { Metadata } from 'next';
import RootRedirect from '../components/RootRedirect';
export const metadata: Metadata = {title:'Motion Wagram', alternates:{canonical:'https://www.motionwagram.com/',languages:{fr:'https://www.motionwagram.com/fr/',en:'https://www.motionwagram.com/en/','x-default':'https://www.motionwagram.com/'}}};
export default function Entry() { return <main className="locale-entry"><RootRedirect /><h1>Motion Wagram</h1><a href="/fr/" lang="fr">Français</a><a href="/en/" lang="en">English</a></main>; }
