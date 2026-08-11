import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutNarrative } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import './About.css';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="About the Clinic"
          title={
            <>
              Glass-suite care in the heart of <em>Chennai</em>
            </>
          }
          subtitle="A premium hair and cosmetic clinic where clinical precision meets quiet luxury — designed for deep engagement as you scroll through our story."
        />

        <div className="about__story">
          <div className="about__sticky">
            <motion.div className="about__visual glass-strong" style={{ x }}>
              <div className="about__hall">
                <div className="about__room" />
                <div className="about__room about__room--mid" />
                <div className="about__room" />
              </div>
              <p className="about__caption">Inspired by our bright, glass-walled treatment suites</p>
            </motion.div>
          </div>

          <div className="about__chapters">
            {aboutNarrative.map((chapter, i) => (
              <motion.article
                key={chapter.title}
                className="about__chapter glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15%' }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
              >
                <span className="about__num">0{i + 1}</span>
                <h3 className="display">{chapter.title}</h3>
                <p>{chapter.body}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="bento about__bento">
          <BentoCard className="span-6 about__fact">
            <h3 className="display">Doctor-led</h3>
            <p>Board-certified specialists design and deliver every protocol — hair, skin, and laser.</p>
          </BentoCard>
          <BentoCard className="span-3 about__fact">
            <h3 className="display">15+</h3>
            <p>Years refining aesthetic medicine in Chennai.</p>
          </BentoCard>
          <BentoCard className="span-3 about__fact">
            <h3 className="display">All-in-one</h3>
            <p>Consultation to OT — under one calm roof.</p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
