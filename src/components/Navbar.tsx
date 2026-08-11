import { useEffect, useState } from 'react';
import { clinic, navLinks } from '../data/content';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__brand" aria-label={`${clinic.name} home`}>
          <img src="/logo.png" alt="" className="nav__logo" width={120} height={72} />
          <span className="nav__brand-text">
            <strong>{clinic.brand}</strong>
            <small>{clinic.name}</small>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            Book Now
          </a>
        </nav>

        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
