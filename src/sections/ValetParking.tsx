import { valetFeatures } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './ValetParking.css';

export function ValetParking() {
  return (
    <section id="valet" className="section valet">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Valet Parking"
            title={
              <>
                Complimentary <em>valet</em>
              </>
            }
            subtitle="Arrive effortlessly. Drive in, hand over your keys, and walk straight into consultation."
          />
        </Reveal>

        <div className="bento">
          <Reveal className="span-5">
            <BentoCard className="valet__visual" strong>
              <div className="valet__car" aria-hidden="true">
                <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="65" width="180" height="50" rx="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M50 65 C60 35, 140 35, 150 65" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M58 63 C64 42, 96 40, 98 63" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                  <path d="M102 63 C104 40, 136 42, 142 63" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                  <circle cx="50" cy="115" r="18" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="115" r="9" stroke="currentColor" strokeWidth="0.7" />
                  <circle cx="150" cy="115" r="18" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="150" cy="115" r="9" stroke="currentColor" strokeWidth="0.7" />
                </svg>
              </div>
              <div className="valet__badge">
                <strong>Free</strong>
                <span>Valet Service</span>
              </div>
              <p>White-glove arrival for every patient and companion at our Chennai clinic.</p>
            </BentoCard>
          </Reveal>

          {valetFeatures.map((f, i) => (
            <Reveal key={f.title} delay={0.05 + i * 0.04} className="span-3">
              <BentoCard className="valet__feat" as="article">
                <h3 className="display">{f.title}</h3>
                <p>{f.desc}</p>
              </BentoCard>
            </Reveal>
          ))}

          <Reveal className="span-4" delay={0.2}>
            <BentoCard className="valet__cta">
              <h3 className="display">Book &amp; use valet</h3>
              <p>Mention valet when you arrive — we handle the rest.</p>
              <div className="valet__actions">
                <a href="#contact" className="btn btn-primary">
                  Book Visit
                </a>
                <a href="tel:+919000000000" className="btn btn-ghost">
                  Call for Directions
                </a>
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
