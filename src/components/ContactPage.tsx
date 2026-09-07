"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";

const collections = [
  "Engineered Hardwood",
  "Natural Stone & Marble",
  "Microcement",
  "Terrazzo",
  "Not sure",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="container page-hero__layout">
          <div className="page-hero__inner page-hero__inner--right">
            <Reveal immediate delay={80}>
              <span className="eyebrow eyebrow--mark">Request a consultation</span>
            </Reveal>
            <Reveal immediate delay={180}>
              <h1 className="page-hero__title display">
                Start&nbsp;a
                <br />
                project
              </h1>
            </Reveal>
            <Reveal immediate delay={300}>
              <p className="page-hero__intro lead">
                Tell us about your space and what you imagine. We reply within
                two working days and can arrange hand-made samples in your own
                light.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact__grid">
          <div className="contact__form-wrap">
            <Reveal immediate delay={200}>
              <form className="contact__form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="surface">Collection of interest</label>
                  <select id="surface" name="surface" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    {collections.map((c) => (
                      <option key={c} value={c === "Not sure" ? "Not sure" : c}>
                        {c === "Not sure" ? "Not sure yet" : c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">About your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Spaces, approximate areas, timeline, the feeling you’re after…"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--solid contact__submit"
                >
                  <span>{sent ? "Enquiry sent" : "Send enquiry"}</span>
                </button>
              </form>
            </Reveal>
          </div>

          <aside className="contact__aside">
            <Reveal className="contact__block" delay={100}>
              <span className="eyebrow eyebrow--mark">Showroom</span>
              <p className="contact__line">
                491 7th Street Extension
                <br />
                Gandhipuram
                <br />
                Coimbatore 641012, India
              </p>
            </Reveal>
            <Reveal className="contact__block" delay={180}>
              <span className="eyebrow eyebrow--mark">Reach us</span>
              <a
                href="mailto:contact@theterranova.co.in"
                className="contact__big-link"
              >
                contact@theterranova.co.in
              </a>
              <a href="tel:+919159640239" className="contact__big-link">
                +91 91596 40239
              </a>
            </Reveal>
            <Reveal className="contact__block" delay={260}>
              <span className="eyebrow eyebrow--mark">Hours</span>
              <p className="contact__line">
                Mon – Sat · 10:00 – 18:00
                <br />
                Visits by appointment
              </p>
            </Reveal>
            <Reveal className="contact__block" delay={340}>
              <span className="eyebrow eyebrow--mark">Follow</span>
              <div className="contact__social">
                <a href="#" className="link-underline">
                  Instagram
                </a>
                <a href="#" className="link-underline">
                  LinkedIn
                </a>
                <a href="#" className="link-underline">
                  Pinterest
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
