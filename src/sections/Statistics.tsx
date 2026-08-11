import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { statistics } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal, useCountUp } from '../hooks/useScrollStory';
import './Statistics.css';

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="statistics" className="section stats">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Statistics"
            title={
              <>
                Numbers that reflect <em>trust</em>
              </>
            }
            subtitle="A compact snapshot of clinical experience and patient outcomes."
          />
        </Reveal>

        <div className="bento" ref={ref}>
          {statistics.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="span-3">
              <StatCard stat={stat} enabled={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  enabled,
}: {
  stat: (typeof statistics)[number];
  enabled: boolean;
}) {
  const value = useCountUp(stat.value, enabled);

  return (
    <BentoCard className="stat-card" strong>
      <div className="stat-card__value display">
        {value}
        <span>{stat.suffix}</span>
      </div>
      <p>{stat.label}</p>
    </BentoCard>
  );
}
