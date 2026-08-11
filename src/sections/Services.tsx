import { hairServices, skinServices } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './Services.css';

const spanClass: Record<string, string> = {
  lg: 'span-6',
  md: 'span-4',
  sm: 'span-3',
};

export function HairServices() {
  return (
    <section id="hair-care" className="section services">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Hair Care Services"
            title={
              <>
                Restore density with <em>clinical precision</em>
              </>
            }
            subtitle="From hair fall and alopecia to PRP, GFC, and transplant — every protocol is doctor-designed for lasting, natural results."
          />
        </Reveal>

        <div className="bento">
          {hairServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.04} className={spanClass[service.span] ?? 'span-4'}>
              <BentoCard className="service-card" as="article">
                <div className="service-card__top">
                  <span className="service-card__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="service-card__chip">Hair</span>
                </div>
                <h3 className="display">{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#contact" className="service-card__link">
                  Enquire →
                </a>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkinServices() {
  return (
    <section id="skin-care" className="section section-tight services">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Skin Care Services"
            title={
              <>
                Clarity, texture, and <em>quiet radiance</em>
              </>
            }
            subtitle="Acne, pigmentation, peels, Hydra Facial, laser scar work, and anti-aging — tailored for Indian skin."
          />
        </Reveal>

        <div className="bento">
          {skinServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05} className={spanClass[service.span] ?? 'span-4'}>
              <BentoCard className="service-card service-card--skin" as="article" strong={i === 0 || i === 3}>
                <div className="service-card__top">
                  <span className="service-card__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="service-card__chip">Skin</span>
                </div>
                <h3 className="display">{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#contact" className="service-card__link">
                  Enquire →
                </a>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
