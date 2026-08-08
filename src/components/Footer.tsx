import { Link } from 'react-router-dom'
import { Instagram, Mail, MapPin, Phone } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__main">
        <div className="footer-brand">
          <Link to="/" aria-label="Becoming Her home">
            <img src="/images/brand-logo.webp" alt="Becoming Her — Heal, Grow, Thrive" width="460" height="306" loading="lazy" />
          </Link>
          <p>Building confident young women through meaningful mentorship, life skills, leadership development, and lasting connections.</p>
          <a className="social-button" href="https://www.instagram.com/becominghermentoring/" target="_blank" rel="noopener noreferrer">
            <Instagram /> <span>Follow Becoming Her</span>
          </a>
        </div>

        <div className="footer-nav-group">
          <p className="footer-label">Explore</p>
          <nav aria-label="Footer navigation">
            <Link to="/about">Our story</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/team">Meet the team</Link>
            <Link to="/safety">Safety & trust</Link>
            <Link to="/apply">Apply for mentorship</Link>
            <Link to="/donate">Support our mission</Link>
          </nav>
        </div>

        <div className="footer-contact">
          <p className="footer-label">Connect</p>
          <a href="mailto:info.becomingherhq@gmail.com"><Mail />info.becomingherhq@gmail.com</a>
          <a href="tel:+14434104567"><Phone />(443) 410-4567</a>
          <p><MapPin />Maryland, United States</p>
          <Link className="button button--light button--small" to="/contact">Contact our team</Link>
        </div>
      </div>

      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Becoming Her. All rights reserved.</p>
        <nav aria-label="Policies">
          <Link to="/privacy">Privacy</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/accessibility">Accessibility</Link>
        </nav>
      </div>
    </footer>
  )
}
