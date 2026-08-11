import { clinic, hairServices, skinServices, navLinks } from '../data/content';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand glass">
          <img src="/logo.png" alt={clinic.name} className="footer__logo" width={140} height={84} />
          <p>
            Chennai&apos;s doctor-led hair &amp; cosmetic clinic. Advanced restoration, skin clarity,
            and white-glove care — trusted across India and internationally.
          </p>
          <div className="footer__contact">
            <a href={clinic.phoneHref}>{clinic.phone}</a>
            <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
            <span>{clinic.address}</span>
            <span>{clinic.hours}</span>
          </div>
        </div>

        <div className="footer__col glass">
          <h3>Hair Care</h3>
          <ul>
            {hairServices.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#hair-care">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col glass">
          <h3>Skin Care</h3>
          <ul>
            {skinServices.map((s) => (
              <li key={s.id}>
                <a href="#skin-care">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col glass">
          <h3>Explore</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#valet">Valet Parking</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</span>
        <span>{clinic.brand} · Doctor-Led · Chennai</span>
      </div>
    </footer>
  );
}
