"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const height = rect.height || 1;
        // 1 at top, 0 once hero is mostly scrolled past
        const progress = Math.min(Math.max(-rect.top / (height * 0.65), 0), 1);
        setFade(1 - progress);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const contentFade = {
    opacity: fade,
    transform: `translate3d(0, ${(1 - fade) * -2.5}rem, 0)`,
    willChange: "opacity, transform" as const,
  };

  const scrollFade = {
    opacity: fade,
    transform: `translate3d(-50%, ${(1 - fade) * -2.5}rem, 0)`,
    willChange: "opacity, transform" as const,
  };

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero__bg hero__bg--charcoal" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__content" style={contentFade}>
        <Reveal immediate delay={80}>
          <span className="eyebrow eyebrow--mark hero__eyebrow">
            High-End Flooring
          </span>
        </Reveal>

        <Reveal immediate delay={180}>
          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__line-inner">Floors that hold</span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">a room together.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal immediate delay={320}>
          <p className="hero__sub">
            Microconcrete and Terrazova surfaces — sourced and finished by hand
            for landmark residential, hospitality and commercial spaces.
          </p>
        </Reveal>

        <Reveal immediate delay={440}>
          <div className="hero__actions">
            <Link className="btn btn--solid" href="/products">
              <span>View collections</span>
            </Link>
            <Link className="link-underline hero__link" href="/contact">
              Request a consultation
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="hero__scroll" style={scrollFade}>
        <Reveal immediate delay={700}>
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </Reveal>
      </div>
    </section>
  );
}
