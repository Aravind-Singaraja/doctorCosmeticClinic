import { whyChoose } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './WhyChooseUs.css';

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-tight why">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Why Choose Us"
            title={
              <>
                Why patients choose <em>DrCC</em>
              </>
            }
            subtitle="Efficient bento blocks of what sets our Chennai clinic apart — clinical depth without the noise."
          />
        </Reveal>

        <div className="bento">
          {whyChoose.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04} className="span-4">
              <BentoCard className="why-card" as="article">
                <span className="why-card__n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display">{item.title}</h3>
                <p>{item.desc}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
