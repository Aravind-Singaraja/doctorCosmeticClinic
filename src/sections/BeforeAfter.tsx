import { useState } from 'react';
import { beforeAfter } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './BeforeAfter.css';

export function BeforeAfter() {
  return (
    <section id="before-after" className="section section-tight ba">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Before & After"
            title={
              <>
                Real results, <em>real confidence</em>
              </>
            }
            subtitle="Drag each slider to reveal transformation — clinical outcomes told visually."
          />
        </Reveal>

        <div className="bento">
          {beforeAfter.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="span-6">
              <CompareCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompareCard({
  item,
  index,
}: {
  item: (typeof beforeAfter)[number];
  index: number;
}) {
  const [pos, setPos] = useState(55);

  return (
    <BentoCard className="ba-card" as="article" strong>
      <div className="ba-card__stage">
        <div className="ba-card__before" aria-hidden="true">
          <span>Before</span>
        </div>
        <div className="ba-card__after" style={{ width: `${pos}%` }} aria-hidden="true">
          <span>After</span>
        </div>
        <input
          className="ba-card__range"
          type="range"
          min={8}
          max={92}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Before and after slider for ${item.title}`}
        />
        <div className="ba-card__handle" style={{ left: `${pos}%` }} aria-hidden="true" />
      </div>
      <div className="ba-card__meta">
        <span className="ba-card__cat">{item.category}</span>
        <h3 className="display">{item.title}</h3>
        <p>{item.note}</p>
        <span className="ba-card__case">Case {String(index + 1).padStart(2, '0')}</span>
      </div>
    </BentoCard>
  );
}
