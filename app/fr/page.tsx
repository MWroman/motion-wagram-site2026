import LanguageSwitcher from '../components/LanguageSwitcher';
import { alternates } from '../i18n';
import type { Metadata } from 'next';
import { portfolio } from '.././content';
import { projects, selectedProjects } from '.././projects.fr';
import Link from 'next/link';
import Workflow from '.././components/Workflow';

export const metadata: Metadata = { alternates: alternates('fr', '/') };

export default function Home() {
  return <main className="home-page">
    <a href="#intro" className="skip-link">Passer l’introduction</a>
    <section className="reel" aria-label="Motion Wagram">
      <img className="hero-photo" src="/media/astorg-2026-hero.jpg" alt="Scène et installation technique de la conférence Astorg 2026 — photographie de Laurine Paumard" width="2560" height="1706" fetchPriority="high" />
      <div className="reel-shade" aria-hidden="true" />
      <h1 className="hero-statement">Production technique,<br />de l’intention créative<br />à l’événement.</h1>
      <header className="hero-header flex items-start justify-between gap-8">
        <a className="brand" href="#" aria-label="Accueil Motion Wagram"><img className="official-logo" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></a>
        <nav className="flex gap-6 md:gap-10" aria-label="Navigation principale"><a href="#work">Projets</a><a href="#about">À propos</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a><LanguageSwitcher /></nav>
      </header>
      <div className="reel-footer flex items-end justify-between gap-6">
        <a className="scroll-link" href="#intro"><span className="down-arrow" aria-hidden="true">↓</span> Découvrir nos réalisations</a>
      </div>
    </section>

    <section id="intro" className="intro section-pad">
      <div className="section-top"><span className="eyebrow">DIRECTION TECHNIQUE ET PRODUCTION ÉVÉNEMENTIELLE</span><span className="eyebrow">PARIS / EUROPE</span></div>
      <div className="intro-bottom"><p>Une approche rigoureuse des productions complexes. Nous réunissons les équipes, les systèmes et la précision nécessaires pour donner vie à votre ambition créative.</p><a className="text-link" href="#approach">Notre méthode <span aria-hidden="true">↓</span></a></div>
    </section>

    <Workflow locale="fr" />

    <section id="work" className="work section-pad">
      <div className="work-heading"><div><span className="section-label">02 / RÉALISATIONS</span><h2>Au service<br />de l’expérience.</h2></div><Link className="text-link" href="/fr/work/">Tous les projets ({projects.length}) <span aria-hidden="true">↗</span></Link></div>
      <div className="project-grid">{selectedProjects.map((project,index) => <article className="project" key={project.slug}>
        <Link className="project-card-link" href={`/fr/projects/${project.slug}/`} aria-label={`Voir le projet: ${project.title}`}>
          <div className="project-image">{project.cover && <img src={project.cover} alt={project.alt} width="1400" height="1000" loading="lazy" />}<span className="image-index">/{String(index+1).padStart(2,'0')}</span><span className="project-open" aria-hidden="true">Voir le projet ↗</span></div>
          <div className="project-caption"><h3>{project.title}</h3><span aria-hidden="true">↗</span></div>
          {project.discipline && <p className="discipline">{project.discipline}</p>}
        </Link>
      </article>)}</div>
      <div className="all-projects-link"><Link className="text-link" href="/fr/work/">Découvrir les {projects.length} projets <span aria-hidden="true">↗</span></Link></div>
    </section>

    <section id="capabilities" className="capabilities section-pad"><div className="section-heading"><span className="section-label">03 / EXPERTISES</span><h2>Vision créative.<br />Précision technique.</h2></div><div className="capability-list">{[
      ['Direction technique', 'Faisabilité, conception des systèmes, préparation technique'],
      ['Direction de production', 'Plannings, équipes, prestataires et coordination sur site'],
      ['Dispositifs live et immersifs', 'Vidéo, lumière, son et expériences intégrées'],
      ['Exploitation sur site', 'Installation, répétitions et conduite de l’événement'],
    ].map(([title,copy],i) => <div className="capability" key={title}><span className="capability-number">0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

    <section id="about" className="about section-pad" aria-labelledby="about-heading"><span className="section-label">04 / À PROPOS DE MOTION WAGRAM</span><div className="about-content"><h2 id="about-heading">Les bons experts.<br />Pour votre projet.</h2><div className="about-copy"><p className="large-copy">Une équipe constituée autour des besoins de votre projet.</p><p>Motion Wagram réunit des spécialistes de la direction technique, de la vidéo, de la lumière, du son et de l’exploitation sur site. Chaque équipe est constituée selon l’ambition créative, les exigences techniques et l’envergure du projet.</p><p>Chaque expert apporte une connaissance approfondie de son métier. Motion Wagram coordonne leurs interventions, de la préparation à l’exploitation, pour faire converger les disciplines vers un même résultat.</p><p>Nos expériences comprennent une prestation globale au Pavillon d’Armenonville et la direction de production à la Fondation Louis Vuitton.</p></div></div></section>

    <footer id="contact" className="contact section-pad"><div className="section-top"><span className="section-label">05 / CONTACT</span><span className="eyebrow">PARLONS DE VOTRE PROJET</span></div><h2>Donnons vie<br /><span className="contact-last">à vos idées.<span aria-hidden="true">↗</span></span></h2><div className="contact-details"><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email} ↗</a><address>72 rue Gay-Lussac<br />75005 PARIS<br />FRANCE</address></div><div className="footer-bottom"><a href="#" className="footer-brand" aria-label="Accueil Motion Wagram"><img className="official-logo logo-black" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></a><span>© {new Date().getFullYear()} MOTION WAGRAM</span><a className="text-link" href="#">Retour en haut ↑</a></div>{portfolio.demo && <p className="demo-note">Portfolio preview — stock media used for art direction. Actual project credits and contact details to be added.</p>}</footer>
  </main>;
}
