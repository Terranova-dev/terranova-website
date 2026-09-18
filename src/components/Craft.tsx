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
              We source raw materials from across Europe and aggregates from
              Italy. Every surface is surveyed, levelled and finished by the
              same hands — with precision that keeps joints hairline-tight and
              surfaces dead flat.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="about-teaser__text">
              Microconcrete and Terrazova are made for your space, finished on
              site in the tone and sheen you choose, with a seamless finish in
              any colour or texture you imagine.
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
