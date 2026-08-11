import { testimonials } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  const side = testimonials.filter((_, i) => i !== active).slice(0, 2);

  return (
    <section id="testimonials" className="section section-tight testimonials">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>
                Voices of <em>renewed confidence</em>
              </>
            }
            subtitle="Patient stories that continue the scroll narrative — results you can feel."
          />
        </Reveal>

        <div className="bento">
          <Reveal className="span-7">
            <BentoCard className="testi__feature" strong>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="testi__quote-mark" aria-hidden="true">
                    “
                  </span>
                  <p>{t.quote}</p>
                  <footer>
                    <strong>{t.name}</strong>
                    <span>{t.detail}</span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
              <div className="testi__dots" role="tablist" aria-label="Testimonials">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    className={i === active ? 'is-active' : ''}
                    onClick={() => setActive(i)}
                  >
                    <span className="sr-only">{item.name}</span>
                  </button>
                ))}
              </div>
            </BentoCard>
          </Reveal>

          <div className="span-5 testi__side">
            {side.map((item) => {
              const idx = testimonials.findIndex((x) => x.name === item.name);
              return (
                <Reveal key={item.name} delay={0.06}>
                  <button type="button" className="testi__mini-wrap" onClick={() => setActive(idx)}>
                    <BentoCard className="testi__mini" as="article">
                      <p>“{item.quote.slice(0, 90)}…”</p>
                      <strong>{item.name}</strong>
                      <span>{item.detail}</span>
                    </BentoCard>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
