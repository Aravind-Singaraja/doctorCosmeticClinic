import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { processSteps } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import './TreatmentProcess.css';

export function TreatmentProcess() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="process" className="process" ref={ref}>
      <div className="process__track">
        <div className="process__sticky container">
          <SectionHeader
            eyebrow="Treatment Process"
            title={
              <>
                Your journey, <em>step by step</em>
              </>
            }
            subtitle="Scroll to move through the clinical narrative — from first consult to lasting follow-up."
          />

          <div className="process__layout">
            <div className="process__rail" aria-hidden="true">
              <motion.div
                className="process__progress"
                style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
              />
            </div>

            <div className="process__panels">
              {processSteps.map((step, i) => (
                <ProcessCard
                  key={step.step}
                  step={step}
                  index={i}
                  total={processSteps.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0.35, 1, 1, 0.35]);
  const y = useTransform(progress, [start, end], [18, -18]);

  return (
    <motion.article className="process__card glass-strong" style={{ opacity, y }}>
      <span className="process__step">{step.step}</span>
      <h3 className="display">{step.title}</h3>
      <p>{step.desc}</p>
    </motion.article>
  );
}
