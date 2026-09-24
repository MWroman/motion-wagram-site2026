'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import styles from './Workflow.module.css';

const steps = [
  { title: 'Understand', explanation: 'Intent, constraints, success.' },
  { title: 'Develop', explanation: 'Technical plan, systems, people.' },
  { title: 'Deliver', explanation: 'On-site execution, rehearsal, show.' },
];

function WorkflowIcon({ index }: { index: number }) {
  return <svg className={styles.icon} viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true" focusable="false">
    {index === 0 && <>
      <path pathLength="1" d="M18 29V18h11M51 18h11v11M62 51v11H51M29 62H18V51" />
      <circle pathLength="1" cx="40" cy="40" r="13" />
      <path pathLength="1" d="M40 21v9M40 50v9M21 40h9M50 40h9" />
      <circle pathLength="1" cx="40" cy="40" r="2" />
    </>}
    {index === 1 && <>
      <path pathLength="1" d="M18 19h28v19H18zM34 43h28v19H34z" />
      <path pathLength="1" d="M46 28h9v15M34 53H25V38M24 26h15M24 31h9M40 50h15M40 55h9" />
    </>}
    {index === 2 && <>
      <path pathLength="1" d="M17 21h46v32H17zM13 59h54M25 53v6M55 53v6" />
      <path pathLength="1" d="m29 37 8 8 16-17" />
    </>}
  </svg>;
}

export default function Workflow() {
  const list = useRef<HTMLOListElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!list.current || motion.matches || !('IntersectionObserver' in window)) return;
    setArmed(true);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = Number((entry.target as HTMLElement).dataset.index);
        setVisible((previous) => previous.map((value, i) => value || i === index));
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.25, rootMargin: '0px 0px -6% 0px' });
    for (const item of list.current.children) observer.observe(item);
    const onPreferenceChange = () => {
      if (motion.matches) { setArmed(false); observer.disconnect(); }
    };
    motion.addEventListener('change', onPreferenceChange);
    return () => { observer.disconnect(); motion.removeEventListener('change', onPreferenceChange); };
  }, []);

  return <section id="approach" className={`workflow section-pad ${styles.section}`} aria-labelledby="workflow-heading">
    <div className="section-heading"><span className="eyebrow">01 / WORKFLOW</span><h2 id="workflow-heading">One vision.<br />Every detail.</h2></div>
    <ol ref={list} className={styles.sequence} data-armed={armed} aria-label="Production workflow">
      {steps.map((step, index) => <li key={step.title} className={styles.step} data-index={index} data-visible={visible[index]} style={{ '--step-delay': `${index * 340}ms` } as CSSProperties}>
        <div className={styles.symbol}><WorkflowIcon index={index} /></div>
        {index < steps.length - 1 && <>
          <svg className={`${styles.connector} ${styles.horizontal}`} viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 1H100" pathLength="1" /></svg>
          <svg className={`${styles.connector} ${styles.vertical}`} viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M1 0V100" pathLength="1" /></svg>
        </>}
        <div className={styles.copy}><span className={styles.number}>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.explanation}</p></div>
      </li>)}
    </ol>
  </section>;
}
