import Link from "next/link";
import Reveal from "@/components/Reveal";

const products = [
  {
    id: "hardwood",
    index: "01",
    eyebrow: "Warmth underfoot",
    title: "Engineered Hardwood",
    text: "Sourced from sustainably managed forests and milled to order, our hardwood floors arrive pre-finished or site-finished in the tone and sheen you choose. A multi-ply engineered core keeps every plank flat and stable over underfloor heating, while the thick wear layer can be sanded and refreshed for generations.",
    finishes: ["Natural oil", "Smoked", "Brushed matte"],
    bestFor: ["Residences", "Hospitality", "Boutiques", "Studies"],
    swatch: "swatch--oak",
    reverse: false,
  },
  {
    id: "stone-marble",
    index: "02",
    eyebrow: "Quarried character",
    title: "Natural Stone & Marble",
    text: "We work directly with quarries in Italy, Turkey and India to hand-select blocks for colour and vein. Slabs are cut, book-matched and finished — honed, polished or leathered — then laid with hairline joints for a floor that reads as one quarried surface.",
    finishes: ["Honed", "Polished", "Leathered"],
    bestFor: ["Lobbies", "Bathrooms", "Kitchens", "Retail"],
    swatch: "swatch--marble",
    reverse: true,
  },
  {
    id: "microcement",
    index: "03",
    eyebrow: "Seamless continuity",
    title: "Microcement",
    text: "Applied coat by coat over almost any substrate without demolition, microcement delivers an unbroken, monolithic floor that flows from room to room and up the stairs. Sealed to be water-resistant and hard-wearing, it suits wet rooms and high-traffic spaces alike.",
    finishes: ["Silk matte", "Natural stone", "Polished sheen"],
    bestFor: ["Open plan", "Bathrooms", "Stairs", "Commercial"],
    swatch: "swatch--cement",
    reverse: false,
  },
  {
    id: "terrazzo",
    index: "04",
    eyebrow: "Crafted aggregate",
    title: "Terrazzo",
    text: "Each Terranova terrazzo is mixed to order — the scale, colour and density of the chips composed for the space it will live in. Cast seamlessly and diamond-polished, it is among the most durable decorative floors we make, equally at home in a private villa or a flagship store.",
    finishes: ["Fine chip", "Venetian", "Bold aggregate"],
    bestFor: ["Floors", "Stairs", "Lobbies", "Retail"],
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
                Four families of flooring, each sourced and finished by hand.
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
