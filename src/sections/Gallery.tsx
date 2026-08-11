import { galleryRooms } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './Gallery.css';

export function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Gallery"
            title={
              <>
                Inside the <em>clinic</em>
              </>
            }
            subtitle="A bento view of our glass-walled suites — laser, consulting, OT, and calm waiting spaces."
          />
        </Reveal>

        <div className="bento gallery__grid">
          {galleryRooms.map((room, i) => (
            <Reveal
              key={room.label}
              delay={i * 0.05}
              className={i === 0 || i === 3 ? 'span-6' : 'span-3'}
            >
              <BentoCard className={`gallery-card gallery-card--${room.tone}`} as="article">
                <div className="gallery-card__scene" aria-hidden="true">
                  <div className="gallery-card__glass" />
                  <div className="gallery-card__furniture" />
                </div>
                <h3 className="display">{room.label}</h3>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
