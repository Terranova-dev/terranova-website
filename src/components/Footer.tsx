import Link from "next/link";
import Reveal from "@/components/Reveal";

const logo = (
  <svg
    className="logo footer__logo"
    viewBox="0 0 654 108"
    role="img"
    aria-label="Terranova"
    fill="none"
    stroke="currentColor"
    strokeWidth="4.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M33 18 L33 80 Q33 90 45 90" />
    <line x1="18" y1="34" x2="54" y2="34" />
    <line x1="82" y1="30" x2="132" y2="30" />
    <line x1="82" y1="60" x2="132" y2="60" />
    <line x1="82" y1="90" x2="132" y2="90" />
    <line x1="162" y1="30" x2="162" y2="90" />
    <path d="M162 43 Q163 31 182 31" />
    <line x1="214" y1="30" x2="214" y2="90" />
    <path d="M214 43 Q215 31 234 31" />
    <path d="M268 90 L290 30 L312 90" />
    <path d="M344 90 L344 54 A24 24 0 0 1 392 54 L392 90" />
    <circle cx="454" cy="60" r="30" />
    <path d="M516 30 L538 90 L560 30" />
    <path d="M592 90 L614 30 L636 90" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer dark-section">
      <div className="container footer__inner">
        <Reveal className="footer__brand">
          {logo}
          <p className="footer__tag">
            High-end flooring, specified, supplied and installed for landmark
            residential, hospitality and commercial spaces.
          </p>
          <a
            href="mailto:contact@theterranova.co.in"
            className="footer__mail link-underline"
          >
            contact@theterranova.co.in
          </a>
        </Reveal>

        <Reveal className="footer__col" delay={100}>
          <h4 className="footer__heading">Explore</h4>
          <ul>
            <li>
              <Link className="footer__link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/products">
                Collections
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal className="footer__col" delay={160}>
          <h4 className="footer__heading">Collections</h4>
          <ul>
            <li>
              <Link className="footer__link" href="/products#hardwood">
                Engineered Hardwood
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/products#stone-marble">
                Natural Stone & Marble
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/products#microcement">
                Microcement
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/products#terrazzo">
                Terrazzo
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal className="footer__col" delay={220}>
          <h4 className="footer__heading">Studio</h4>
          <ul>
            <li className="footer__line">491 7th Street Extension</li>
            <li className="footer__line">Gandhipuram</li>
            <li className="footer__line">Coimbatore 641012, India</li>
            <li className="footer__line">+91 91596 40239</li>
          </ul>
          <div className="footer__social">
            <a href="#" className="footer__link" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="footer__link" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" className="footer__link" aria-label="Pinterest">
              Pinterest
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="container footer__bottom" delay={280}>
        <span>© 2026 Terranova. All rights reserved.</span>
        <span>Surfaces, reimagined.</span>
      </Reveal>
    </footer>
  );
}
