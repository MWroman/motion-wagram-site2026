import { portfolio } from './content';
import { projects, selectedProjects } from './projects';
import Link from 'next/link';
import Workflow from './components/Workflow';

export default function Home() {
  return <main>
    <a href="#intro" className="skip-link">Skip introduction</a>
    <section className="reel" aria-label="Motion Wagram">
      <img className="hero-photo" src="/media/astorg-2026-hero.jpg" alt="Scène et installation technique de la conférence Astorg 2026 — photographie de Laurine Paumard" width="2560" height="1706" fetchPriority="high" />
      <div className="reel-shade" aria-hidden="true" />
      <h1 className="hero-statement">Technical production,<br />from creative intent<br />to live delivery.</h1>
      <header className="hero-header flex items-start justify-between gap-8">
        <a className="brand" href="#" aria-label="Motion Wagram home"><img className="official-logo" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></a>
        <nav className="flex gap-6 md:gap-10" aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav>
      </header>
      <div className="reel-footer flex items-end justify-between gap-6">
        <a className="scroll-link" href="#intro"><span className="down-arrow" aria-hidden="true">↓</span> Explore the work</a>
      </div>
    </section>

    <section id="intro" className="intro section-pad">
      <div className="section-top"><span className="eyebrow">TECHNICAL PRODUCTION MANAGEMENT</span><span className="eyebrow">PARIS / EUROPE</span></div>
      <div className="intro-bottom"><p>A considered approach to complex productions. Connecting creative ambition with the people, systems and precision that bring it to life.</p><a className="text-link" href="#approach">The approach <span aria-hidden="true">↓</span></a></div>
    </section>

    <Workflow />

    <section id="work" className="work section-pad">
      <div className="work-heading"><div><span className="section-label">02 / SELECTED PROJECTS</span><h2>Built for<br />the experience.</h2></div><Link className="text-link" href="/work/">All projects ({projects.length}) <span aria-hidden="true">↗</span></Link></div>
      <div className="project-grid">{selectedProjects.map((project,index) => <article className="project" key={project.slug}>
        <Link className="project-card-link" href={`/projects/${project.slug}/`} aria-label={`View project: ${project.title}`}>
          <div className="project-image">{project.cover && <img src={project.cover} alt={project.alt} width="1400" height="1000" loading="lazy" />}<span className="image-index">/{String(index+1).padStart(2,'0')}</span><span className="project-open" aria-hidden="true">View project ↗</span></div>
          <div className="project-caption"><h3>{project.title}</h3><span aria-hidden="true">↗</span></div>
          {project.discipline && <p className="discipline">{project.discipline}</p>}
        </Link>
      </article>)}</div>
      <div className="all-projects-link"><Link className="text-link" href="/work/">Explore all {projects.length} projects <span aria-hidden="true">↗</span></Link></div>
    </section>

    <section id="capabilities" className="capabilities section-pad"><div className="section-heading"><span className="section-label">03 / CAPABILITIES</span><h2>Creative thinking.<br />Technical clarity.</h2></div><div className="capability-list">{[
      ['Technical direction', 'Feasibility, system design, technical planning'],
      ['Production management', 'Schedules, teams, suppliers and site coordination'],
      ['Live & immersive systems', 'Video, lighting, sound and integrated experiences'],
      ['On-site delivery', 'Installation, rehearsals and show operation'],
    ].map(([title,copy],i) => <div className="capability" key={title}><span className="capability-number">0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

    <section id="about" className="about section-pad"><span className="section-label">04 / ABOUT</span><div className="about-content"><h2>Roman<br />Chandler Fry<span className="period">.</span></h2><div className="about-copy"><p className="large-copy">The connection between a creative idea and the reality of making it happen.</p><p>Motion Wagram is the independent technical production practice of Roman Chandler Fry. A hands-on approach to bringing people, technology and creative intent together.</p><p>From early conversations to the last cue, the focus is simple: thoughtful preparation, clear communication and work that holds up in the live environment.</p></div></div></section>

    <footer id="contact" className="contact section-pad"><div className="section-top"><span className="section-label">05 / CONTACT</span><span className="eyebrow">START A CONVERSATION</span></div><h2>Make it<br /><span className="contact-last">happen.<span aria-hidden="true">↗</span></span></h2><div className="contact-details"><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email} ↗</a><address>72 rue Gay-Lussac<br />75005 PARIS<br />FRANCE</address></div><div className="footer-bottom"><a href="#" className="footer-brand" aria-label="Motion Wagram home"><img className="official-logo logo-black" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></a><span>© {new Date().getFullYear()} Roman Chandler Fry</span><a className="text-link" href="#">Back to top ↑</a></div>{portfolio.demo && <p className="demo-note">Portfolio preview — stock media used for art direction. Actual project credits and contact details to be added.</p>}</footer>
  </main>;
}
