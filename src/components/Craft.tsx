import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Craft() {
  return (
    <section className="section about-teaser">
      <div className="container about-teaser__grid">
        <div className="about-teaser__media">
          <Reveal delay={60} className="about-teaser__frame">
            <div className="swatch swatch--cement sheen about-teaser__img" />
          </Reveal>
          <Reveal delay={160} className="about-teaser__frame">
            <div className="swatch swatch--walnut sheen about-teaser__img" />
          </Reveal>
        </div>

        <div className="about-teaser__body">
          <Reveal delay={100}>
            <span className="eyebrow eyebrow--mark">The Craft</span>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="about-teaser__title">
              Master installers, not subcontractors
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <p className="about-teaser__text">
              Our fitters train for years in the slow disciplines of stone,
              timber and resin. Every floor is surveyed, levelled and laid by the
              same hands — a level of care that keeps joints hairline-tight and
              surfaces dead flat.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="about-teaser__text">
              The result is a floor with depth and longevity, unique to your
              space and engineered to live with you for decades.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <Link className="btn" href="/about">
              <span>About Terranova</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
