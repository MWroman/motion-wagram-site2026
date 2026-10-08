import { alternates } from '../../i18n';
import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../projects.fr';
import SiteHeader from '../../components/SiteHeader';
export const metadata: Metadata = { alternates: alternates('fr', '/work/'), title: 'Projets — Motion Wagram', description: 'Découvrez les réalisations de Motion Wagram en production technique, diffusion, interactivité et installations.' };
export default function Work() {
  return <><SiteHeader locale="fr" /><main className="project-index section-pad">
    <div className="section-top"><span className="eyebrow">MOTION WAGRAM / RÉALISATIONS</span><span className="eyebrow">{projects.length} PROJETS</span></div>
    <h1>Nos réalisations<span className="period">.</span></h1>
    <div className="archive-list">{projects.map((project,index) => <Link className="archive-row" href={`/fr/projects/${project.slug}/`} key={project.slug}>
      <span className="archive-number">{String(index+1).padStart(2,'0')}</span>
      {project.cover ? <img src={project.cover} alt="" width="180" height="120" loading="lazy" /> : <span className="archive-image-spacer" aria-hidden="true" />}
      <div><h2>{project.title}</h2>{project.discipline && <p>{project.discipline}</p>}</div><span className="archive-arrow" aria-hidden="true">↗</span>
    </Link>)}</div>
    <Link className="text-link" href="/fr/#work">← Retour au portfolio</Link>
  </main></>;
}
