import Link from "next/link";
import Reveal from "@/components/Reveal";

const products = [
  {
    id: "microconcrete",
    index: "01",
    eyebrow: "Floors, walls & waterproof finishes",
    title: "Microconcrete",
    text: "Made from raw materials sourced across Europe, Microconcrete is finished on site in the tone, sheen and texture you choose. It creates a seamless surface across floors and walls, with Hard Hydrobloc RSS and Waterproof Plasters for spaces that demand lasting protection.",
    finishes: ["Custom colour", "Custom texture", "Site finished"],
    bestFor: ["Floors", "Walls", "Bathrooms", "Commercial"],
    swatch: "swatch--cement",
    reverse: false,
  },
  {
    id: "terranovahard",
    index: "02",
    eyebrow: "Waterproof & breathable plaster",
    title: "TerranovaHard",
    text: "A waterproof and breathable plaster for durable, seamless surfaces with a refined mineral finish. TerranovaHard can be finished on site in the colour and texture chosen for your space.",
    finishes: ["Waterproof", "Breathable", "Custom colour & texture"],
    bestFor: ["Floors", "Walls", "Bathrooms", "Commercial"],
    swatch: "swatch--stone",
    reverse: true,
  },
  {
    id: "hydrobloc-rss",
    index: "03",
    eyebrow: "Waterproof & breathable plaster",
    title: "Hydrobloc RSS",
    text: "A waterproof and breathable plaster designed to protect surfaces while allowing the substrate to breathe. It provides a durable finish for interior and exterior applications.",
    finishes: ["Waterproof", "Breathable", "Site finished"],
    bestFor: ["Floors", "Walls", "Wet areas", "Commercial"],
    swatch: "swatch--marble",
    reverse: false,
  },
  {
    id: "terrazova",
    index: "04",
    eyebrow: "Italian aggregate surfaces",
    title: "Terrazova",
    text: "Terrazova uses aggregates sourced from Italy to create a surface composed around your space. It is finished on site with a seamless result, with the colour, texture and level of perfection chosen to suit your project.",
    category: "Surfaces",
    finishes: ["Italian aggregates", "Custom colour", "Custom texture"],
    bestFor: ["Floors", "Walls", "Stairs", "Retail"],
    swatch: "swatch--terrazzo",
    reverse: true,
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="container page-hero__layout">
          <div className="page-hero__inner page-hero__inner--right">
            <Reveal immediate delay={80}>
              <span className="eyebrow eyebrow--mark">The Collections</span>
            </Reveal>
            <Reveal immediate delay={180}>
              <h1 className="page-hero__title display">
                Floors,&nbsp;made
                <br />
                to&nbsp;measure
              </h1>
            </Reveal>
            <Reveal immediate delay={300}>
              <p className="page-hero__intro lead">
                Four surface systems, sourced and finished by hand.
                Colour, tone, plank width and aggregate are composed for your
                space. These are starting points, not limits.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section products-page">
        <div className="container">
          {products.map((p, i) => (
            <div
              key={p.id}
              id={p.id}
              className={`product-row${p.reverse ? " product-row--rev" : ""}`}
            >
              <Reveal className="product-row__media" delay={60}>
                <div className={`swatch ${p.swatch} sheen product-row__img`}>
                  <span className="product-row__index">{p.index}</span>
                </div>
              </Reveal>
              <div className="product-row__body">
                <Reveal delay={100 + i * 20}>
                  <span className="eyebrow">{p.eyebrow}</span>
                </Reveal>
                <Reveal delay={160 + i * 20}>
                  <h2 className="product-row__title">{p.title}</h2>
                </Reveal>
                <Reveal delay={220 + i * 20}>
                  <p className="product-row__text">{p.text}</p>
                </Reveal>
                <Reveal delay={280 + i * 20} className="product-row__specs">
                  <div className="spec">
                    <span className="spec__label">Finishes</span>
                    <ul className="spec__list">
                      {p.finishes.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="spec">
                    <span className="spec__label">Best for</span>
                    <ul className="spec__list">
                      {p.bestFor.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={340 + i * 20}>
                  <Link
                    className="link-underline product-row__link"
                    href="/contact"
                  >
                    Enquire about {p.title}
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta dark-section">
        <div className="cta__bg swatch swatch--charcoal" aria-hidden="true" />
        <div className="container cta__inner">
          <Reveal delay={60}>
            <span className="eyebrow eyebrow--mark">Not sure which?</span>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="cta__title">
              We’ll help you choose the right floor.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="cta__text">
              Share your space and how you’ll use it. We’ll recommend a
              collection and prepare samples in your own light.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <Link className="btn btn--light" href="/contact">
              <span>Request samples</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
