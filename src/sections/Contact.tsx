import { useState, type FormEvent } from 'react';
import { clinic } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { BentoCard } from '../components/BentoCard';
import { Reveal } from '../hooks/useScrollStory';
import './Contact.css';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Begin your <em>transformation</em>
              </>
            }
            subtitle="Book a personal consultation. We’ll craft a bespoke plan for your hair and skin goals."
          />
        </Reveal>

        <div className="bento">
          <Reveal className="span-5">
            <BentoCard className="contact__info" strong>
              <h3 className="display">Visit DrCC</h3>
              <ul>
                <li>
                  <strong>Address</strong>
                  <span>{clinic.address}</span>
                </li>
                <li>
                  <strong>Hours</strong>
                  <span>{clinic.hours}</span>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href={clinic.phoneHref}>{clinic.phone}</a>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                </li>
              </ul>
              <div className="contact__perks">
                <p>Complimentary clinical analysis on first visit</p>
                <p>Doctor-led care — no technician-only procedures</p>
                <p>Free valet parking for every patient</p>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="span-7" delay={0.08}>
            <BentoCard className="contact__form-wrap">
              {submitted ? (
                <div className="contact__success">
                  <h3 className="display">Request received</h3>
                  <p>
                    Thank you. Our team will confirm your consultation shortly. For faster booking,
                    call {clinic.phone} or WhatsApp us.
                  </p>
                  <a href={clinic.whatsapp} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    WhatsApp Now
                  </a>
                </div>
              ) : (
                <form className="contact__form" onSubmit={onSubmit}>
                  <div className="contact__row">
                    <div className="field">
                      <label htmlFor="first">First name</label>
                      <input id="first" name="first" required placeholder="Aravind" />
                    </div>
                    <div className="field">
                      <label htmlFor="last">Last name</label>
                      <input id="last" name="last" required placeholder="Kumar" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="you@email.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="concern">Primary concern</label>
                    <select id="concern" name="concern" required defaultValue="">
                      <option value="" disabled>
                        Select your concern
                      </option>
                      <option>Hair Fall / Thinning</option>
                      <option>PRP / GFC</option>
                      <option>Hair Transplant</option>
                      <option>Alopecia</option>
                      <option>Acne</option>
                      <option>Pigmentation</option>
                      <option>Hydra Facial</option>
                      <option>Anti Aging</option>
                      <option>General Consultation</option>
                    </select>
                  </div>
                  <div className="contact__row">
                    <div className="field">
                      <label htmlFor="date">Preferred date</label>
                      <input id="date" name="date" type="date" required />
                    </div>
                    <div className="field">
                      <label htmlFor="time">Preferred time</label>
                      <select id="time" name="time" defaultValue="10:00 AM">
                        {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map(
                          (t) => (
                            <option key={t}>{t}</option>
                          ),
                        )}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary contact__submit">
                    Confirm Appointment
                  </button>
                </form>
              )}
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
