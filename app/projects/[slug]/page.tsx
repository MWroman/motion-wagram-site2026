import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../projects';
import SiteHeader from '../../components/SiteHeader';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({slug}) => ({slug})); }
type Props = { params: Promise<{slug: string}> };
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return {title: project ? `${project.title} — Motion Wagram` : 'Project not found', description: project?.mission || project?.description || `${project?.title} — a Motion Wagram project.`};
}
export default async function ProjectPage({params}: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project)+1)%projects.length];
  return <><SiteHeader /><main className="project-detail">
    <section className="detail-heading section-pad">
      <Link href="/work/" className="text-link">← All projects</Link>
      <p className="eyebrow">MOTION WAGRAM {project.discipline && ` / ${project.discipline}`}</p>
      <h1>{project.title}</h1>
    </section>
    {project.cover && <figure className="detail-hero"><img src={project.cover} alt={project.alt} width="1920" height="1080" fetchPriority="high" />{project.images[0]?.credit && <figcaption>{project.images[0].credit}</figcaption>}</figure>}
    {(project.description || project.mission || project.credits.length>0) && <section className="detail-information section-pad">
      <div className="detail-copy">{project.mission && <><span className="eyebrow">OUR CONTRIBUTION</span><p className="detail-mission">{project.mission}</p></>}{project.description && <p className="detail-description">{project.description}</p>}</div>
      {project.credits.length>0 && <aside className="detail-credits"><h2 className="eyebrow">PROJECT CREDITS</h2><dl>{project.credits.map((credit,index)=><div key={index}><dt>{credit.label}</dt><dd>{credit.value}</dd></div>)}</dl></aside>}
    </section>}
    {(project.videos.length>0 || project.images.length>1) && <section className="detail-media section-pad" aria-label="Project films and photography">
      {project.videos.map((film,index)=><figure className="project-film" key={film.src}><video controls playsInline preload="none" poster={film.poster} aria-label={`${project.title} — film ${index+1}`}><source src={film.src} type="video/mp4" /></video></figure>)}
      <div className="detail-gallery">{project.images.slice(1).map((image,index)=><figure key={image.src}><a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open photograph ${index+2} — ${project.title}`}><img src={image.src} alt={`${project.title} — view ${index+2}`} width={image.width} height={image.height} loading="lazy" /></a>{image.credit && <figcaption>{image.credit}</figcaption>}</figure>)}</div>
    </section>}
    <nav className="project-navigation section-pad" aria-label="Project navigation"><Link href="/work/" className="text-link">← All projects</Link><Link href={`/projects/${next.slug}/`} className="next-project"><span className="eyebrow">NEXT PROJECT ↗</span><span>{next.title}</span></Link></nav>
  </main></>;
}
