import { alternates } from '../../i18n';
import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../projects';
import SiteHeader from '../../components/SiteHeader';
export const metadata: Metadata = { alternates: alternates('en', '/work/'), title: 'Projects — Motion Wagram', description: 'Explore Motion Wagram’s technical production, broadcast, interactive and installation projects.' };
export default function Work() {
  return <><SiteHeader locale="en" /><main className="project-index section-pad">
    <div className="section-top"><span className="eyebrow">MOTION WAGRAM / PROJECT INDEX</span><span className="eyebrow">{projects.length} PROJECTS</span></div>
    <h1>Selected works<span className="period">.</span></h1>
    <div className="archive-list">{projects.map((project,index) => <Link className="archive-row" href={`/en/projects/${project.slug}/`} key={project.slug}>
      <span className="archive-number">{String(index+1).padStart(2,'0')}</span>
      {project.cover ? <img src={project.cover} alt="" width="180" height="120" loading="lazy" /> : <span className="archive-image-spacer" aria-hidden="true" />}
      <div><h2>{project.title}</h2>{project.discipline && <p>{project.discipline}</p>}</div><span className="archive-arrow" aria-hidden="true">↗</span>
    </Link>)}</div>
    <Link className="text-link" href="/en/#work">← Back to the portfolio</Link>
  </main></>;
}
