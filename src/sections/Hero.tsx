import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { clinic } from '../data/content';
import './Hero.css';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div className="hero__media" style={{ y }} aria-hidden="true">
        <div className="hero__gradient" />
        <div className="hero__grid" />
        <div className="hero__suite hero__suite--1" />
        <div className="hero__suite hero__suite--2" />
        <div className="hero__suite hero__suite--3" />
      </motion.div>

      <motion.div className="hero__content container" style={{ opacity }}>
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero__brand display">{clinic.brand}</p>
          <p className="hero__clinic">{clinic.name}</p>
          <h1 className="hero__title display">
            Hair &amp; skin restoration,<br />
            <em>quietly exceptional</em>
          </h1>
          <p className="hero__sub">
            Doctor-led care in Chennai — from PRP and transplant to Hydra Facial and laser —
            delivered in a calm, glass-suite clinic.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Book Consultation
            </a>
            <a href="#hair-care" className="btn btn-ghost">
              Explore Care
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__mark"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/logo.png" alt={`${clinic.name} logo`} className="hero__logo" width={280} height={166} />
        </motion.div>
      </motion.div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span />
        Scroll
      </a>
    </section>
  );
}
