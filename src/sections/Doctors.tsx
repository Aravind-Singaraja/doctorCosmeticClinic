import { doctors } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './Doctors.css';

export function Doctors() {
  return (
    <section id="doctors" className="section doctors">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Our Doctors"
            title={
              <>
                Specialists behind every <em>transformation</em>
              </>
            }
            subtitle="International training, local fluency — a team that listens first, then designs care around you."
          />
        </Reveal>

        <div className="bento">
          {doctors.map((doc, i) => (
            <Reveal key={doc.name} delay={i * 0.08} className={i === 0 ? 'span-6' : 'span-3'}>
              <BentoCard className={`doctor-card ${i === 0 ? 'doctor-card--lead' : ''}`} strong={i === 0} as="article">
                <div className="doctor-card__portrait" aria-hidden="true">
                  <div className="doctor-card__avatar" />
                </div>
                <div className="doctor-card__body">
                  <span className="eyebrow">{doc.experience}</span>
                  <h3 className="display">{doc.name}</h3>
                  <p className="doctor-card__role">{doc.role}</p>
                  <p className="doctor-card__degrees">{doc.degrees}</p>
                  <p className="doctor-card__bio">{doc.bio}</p>
                  <ul className="doctor-card__creds">
                    {doc.creds.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  {i === 0 ? (
                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '0.75rem', alignSelf: 'start' }}>
                      Schedule with {doc.name.split(' ')[1]}
                    </a>
                  ) : null}
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
