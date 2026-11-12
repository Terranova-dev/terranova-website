import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Studio() {
  return (
    <section className="section intro" id="about">
      <Reveal delay={120} className="container intro__grid">
        <div className="intro__label">
          <span className="eyebrow eyebrow--mark">The Studio</span>
        </div>
        <div className="intro__body">
          <h2 className="intro__statement">
            A single team to <em>specify, supply and install</em> the floors
            that define a space.
          </h2>
          <p className="intro__text">
            Terranova is a flooring house working with Microconcrete and
            Terrazzo, using raw materials sourced from Europe and aggregates
            from Italy. From the first drawing to the final seal, one
            accountable team delivers a surface made to measure and built to
            last.
          </p>
          <Link className="link-underline intro__more" href="/about">
            Our story
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
