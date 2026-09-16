"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/products" },
  { label: "Projects", href: "" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/products") return pathname.startsWith("/products");
  if (href === "/projects") return pathname.startsWith("/projects");
  if (href === "/about") return pathname.startsWith("/about");
  if (href === "/contact") return pathname.startsWith("/contact");
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const onDarkHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`nav ${onDarkHero ? "nav--over-dark" : "nav--scrolled"}${open ? " is-open" : ""}`}
    >
      <div className="nav__inner container">
        <Link
          href="/"
          className="nav__brand"
          aria-label="Terranova — home"
          onClick={close}
        >
          <svg
            className="logo nav__logo"
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
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav__link${isActive(pathname, link.href) ? " is-active" : ""}`}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          {/* <Link
            href="/contact"
            className="nav__link nav__cta"
            onClick={close}
          >
            Enquire
          </Link> */}
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
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
