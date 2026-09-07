import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="cta dark-section" id="contact">
      <div className="cta__bg swatch swatch--charcoal" aria-hidden="true" />
      <div className="container cta__inner">
        <Reveal delay={60}>
          <span className="eyebrow eyebrow--mark">Begin</span>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="cta__title">
            Let’s lay the floor your space deserves.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="cta__text">
            Tell us about your project. We’ll prepare hand-made samples in your
            own light and walk you through specification, supply and install.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <Link className="btn btn--light" href="/contact">
            <span>Request a consultation</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
