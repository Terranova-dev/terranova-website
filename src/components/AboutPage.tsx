import Link from "next/link";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";

const storyParagraphs = [
  "We are a team of installers, sourcing specialists and designers working with Microconcrete and Terrazova — raw materials sourced from Europe and aggregates from Italy. Every surface is finished on site and laid by our own hands.",
  "Nothing leaves us as a catalogue product. Tone, sheen, plank width and aggregate are composed for the room they will live in — its light, its proportions, the way it will be walked on and used.",
  "The reward is a surface with depth and longevity, finished in the colour and texture that belongs to your space. These are floors and walls meant to be lived on, not replaced.",
];

const values = [
  {
    no: "01",
    title: "Specified, supplied & installed",
    text: "One accountable team from first drawing to final seal — no hand-offs, no surprises.",
  },
  {
    no: "02",
    title: "Master installers in-house",
    text: "Our own trained fitters lay every floor. We never subcontract the craft.",
  },
  {
    no: "03",
    title: "Made to measure",
    text: "Tone, sheen, plank width and aggregate are composed for each project, never off-the-shelf.",
  },
  {
    no: "04",
    title: "Sourced at origin",
    text: "Direct relationships with the finest mills and quarries in Europe and Asia.",
  },
  {
    no: "05",
    title: "Subfloor & acoustics",
    text: "Surveyed, levelled and acoustically detailed — the quiet engineering beneath a flawless floor.",
  },
  {
    no: "06",
    title: "Lifetime aftercare",
    text: "Maintenance, refinishing and repair programmes that keep floors beautiful for years.",
  },
];

const marqueeItems = [
  "Microconcrete",
  "Terrazova",
  "Hard Hydrobloc RSS",
  "Waterproof Plasters",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="container page-hero__layout">
          <div className="page-hero__inner page-hero__inner--right">
            <Reveal immediate delay={80}>
              <span className="eyebrow eyebrow--mark">About Terranova</span>
            </Reveal>
            <Reveal immediate delay={180}>
              <h1 className="page-hero__title display">
                A&nbsp;house
                <br />
                devoted&nbsp;to
                <br />
                floors
              </h1>
            </Reveal>
            <Reveal immediate delay={300}>
              <p className="page-hero__intro lead">
                Terranova began with a simple conviction — that the floor is the
                most important surface in any room, and deserves to be
                specified, supplied and laid by a single team that owns the
                result.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__sticky">
            <Reveal>
              <span className="eyebrow eyebrow--mark">Our Story</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="about-story__title">
                Fine materials, laid the slow way
              </h2>
            </Reveal>
          </div>
          <div className="about-story__body">
            {storyParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="section about-values">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--mark">What Guides Us</span>
            <h2 className="section-head__title">Principles, not products</h2>
          </Reveal>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <Reveal key={v.no} className="about-value" delay={i * 70}>
                <span className="about-value__no">{v.no}</span>
                <h3 className="about-value__title">{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="marquee__item">
              {item}
              <span className="marquee__dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section about-cta">
        <div className="container text-center about-cta__inner">
          <Reveal>
            <h2 className="about-cta__title">
              Come and feel a hand-laid floor for yourself.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link className="btn btn--solid" href="/contact">
              <span>Visit the showroom</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
