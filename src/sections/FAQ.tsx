import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './FAQ.css';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section section-tight faq">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                Hair clinic Chennai — <em>answers</em>
              </>
            }
            subtitle="Clear answers for patients researching hair and cosmetic care in Chennai and beyond."
          />
        </Reveal>

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.03}>
                <BentoCard className={`faq__item ${isOpen ? 'is-open' : ''}`} as="article">
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="faq__a-wrap"
                      >
                        <p className="faq__a">{item.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </BentoCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
