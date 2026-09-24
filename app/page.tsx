'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolio } from './content';
import { projects, selectedProjects } from './projects';
import Link from 'next/link';

export default function Home() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyPreference = () => { if (reduced.matches) el.pause(); else el.play().catch(() => setPlaying(false)); };
    applyPreference();
    reduced.addEventListener('change', applyPreference);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) el.pause();
    }, { threshold: 0.05 });
    observer.observe(el);
    return () => { observer.disconnect(); reduced.removeEventListener('change', applyPreference); };
  }, []);

  const toggleReel = () => {
    if (!video.current) return;
    if (video.current.paused) video.current.play().catch(() => setVideoFailed(true));
    else video.current.pause();
  };

  return <main>
    <a href="#intro" className="skip-link">Skip showreel</a>
    <section className="reel" aria-label="Motion Wagram showreel">
      <video ref={video} className="reel-video" autoPlay muted loop playsInline preload="metadata" poster={portfolio.poster} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setVideoFailed(true)} aria-label="Silent technical production showreel">
        <source src={portfolio.reel} type="video/mp4" />
      </video>
      <div className="reel-shade" />
      <header className="hero-header flex items-start justify-between gap-8">
        <a className="brand" href="#" aria-label="Motion Wagram home"><img className="official-logo" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></a>
        <nav className="flex gap-6 md:gap-10" aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav>
      </header>
      <div className="hero-caption"><span>ROMAN CHANDLER FRY</span><span>TECHNICAL PRODUCTION<br />& LIVE EXPERIENCES</span></div>
      <div className="hero-title" aria-hidden="true">Behind<br /><span>the moment.</span></div>
      <div className="reel-footer flex items-end justify-between gap-6">
        <a className="scroll-link" href="#intro"><span className="down-arrow" aria-hidden="true">↓</span> Explore the work</a>
        <div className="reel-controls"><span>SHOWREEL 2024 <span className="muted-label">/ SOUND OFF</span></span><button onClick={toggleReel} disabled={videoFailed} aria-label={playing ? 'Pause showreel' : 'Play showreel'}>{videoFailed ? 'Unavailable' : playing ? 'Pause Ⅱ' : 'Play ▷'}</button></div>
      </div>
    </section>

    <section id="intro" className="intro section-pad">
      <div className="section-top"><span className="eyebrow">MOTION WAGRAM</span><span className="eyebrow">INDEPENDENT TECHNICAL PRODUCTION</span></div>
      <h1>Technical production,<br />from creative intent<br />to live delivery<span className="period">.</span></h1>
      <div className="intro-bottom"><span className="small-cross" aria-hidden="true">+</span><p>A considered approach to complex productions. Connecting creative ambition with the people, systems and precision that bring it to life.</p><a className="text-link" href="#approach">The approach <span aria-hidden="true">↓</span></a></div>
    </section>

    <section id="approach" className="workflow section-pad">
      <div className="section-heading"><span className="eyebrow">01 / WORKFLOW</span><h2>One vision.<br />Every detail.</h2></div>
      <div className="steps">{[
        ['01', 'Understand', 'Start with the intent. Define the experience, the constraints and what success looks like.'],
        ['02', 'Develop', 'Translate the idea into a technical plan. Align systems, schedules and the right people.'],
        ['03', 'Deliver', 'Bring it together on site. Test, rehearse and run the show with care and precision.'],
      ].map(([n,title,copy]) => <article className="step" key={n}><span className="step-number">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section id="work" className="work section-pad">
      <div className="work-heading"><div><span className="eyebrow">02 / SELECTED PROJECTS</span><h2>Built for<br />the experience.</h2></div><Link className="text-link" href="/work/">All projects ({projects.length}) <span aria-hidden="true">↗</span></Link></div>
      <div className="project-grid">{selectedProjects.map((project,index) => <article className="project" key={project.slug}>
        <Link className="project-card-link" href={`/projects/${project.slug}/`} aria-label={`View project: ${project.title}`}>
          <div className="project-image">{project.cover && <img src={project.cover} alt={project.alt} width="1400" height="1000" loading="lazy" />}<span className="image-index">/{String(index+1).padStart(2,'0')}</span><span className="project-open" aria-hidden="true">View project ↗</span></div>
          <div className="project-caption"><h3>{project.title}</h3><span aria-hidden="true">↗</span></div>
          {project.discipline && <p className="discipline">{project.discipline}</p>}
        </Link>
      </article>)}</div>
      <div className="all-projects-link"><Link className="text-link" href="/work/">Explore all {projects.length} projects <span aria-hidden="true">↗</span></Link></div>
    </section>

    <section id="capabilities" className="capabilities section-pad"><div className="section-heading"><span className="eyebrow">03 / CAPABILITIES</span><h2>Creative thinking.<br />Technical clarity.</h2></div><div className="capability-list">{[
      ['Technical direction', 'Feasibility, system design, technical planning'],
      ['Production management', 'Schedules, teams, suppliers and site coordination'],
      ['Live & immersive systems', 'Video, lighting, sound and integrated experiences'],
      ['On-site delivery', 'Installation, rehearsals and show operation'],
    ].map(([title,copy],i) => <div className="capability" key={title}><span className="capability-number">0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

    <section id="about" className="about section-pad"><span className="eyebrow">04 / ABOUT</span><div className="about-content"><h2>Roman<br />Chandler Fry<span className="period">.</span></h2><div className="about-copy"><p className="large-copy">The connection between a creative idea and the reality of making it happen.</p><p>Motion Wagram is the independent technical production practice of Roman Chandler Fry. A hands-on approach to bringing people, technology and creative intent together.</p><p>From early conversations to the last cue, the focus is simple: thoughtful preparation, clear communication and work that holds up in the live environment.</p></div></div></section>

    <footer id="contact" className="contact section-pad"><div className="section-top"><span className="eyebrow">05 / CONTACT</span><span className="eyebrow">START A CONVERSATION</span></div><h2>Make it<br /><span className="contact-last">happen.<span aria-hidden="true">↗</span></span></h2>{portfolio.email ? <a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email} ↗</a> : <p className="contact-pending">Contact details coming soon.</p>}<div className="footer-bottom"><a href="#" className="footer-brand" aria-label="Motion Wagram home"><img className="official-logo logo-black" src="/motion-wagram.svg" alt="Motion Wagram" width="651" height="290" /></a><span>© {new Date().getFullYear()} Roman Chandler Fry</span><a className="text-link" href="#">Back to top ↑</a></div>{portfolio.demo && <p className="demo-note">Portfolio preview — stock media used for art direction. Actual project credits and contact details to be added.</p>}</footer>
  </main>;
}
