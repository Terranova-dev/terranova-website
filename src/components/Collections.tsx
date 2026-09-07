import Link from "next/link";
import Reveal from "@/components/Reveal";

const products = [
  {
    index: "01",
    name: "Engineered Hardwood",
    tag: "Warmth underfoot",
    text: "Wide-plank European oak and American walnut, engineered for stability and finished by hand in our atelier.",
    swatch: "swatch--oak",
  },
  {
    index: "02",
    name: "Natural Stone & Marble",
    tag: "Quarried character",
    text: "Book-matched marble, honed limestone and travertine, selected slab by slab and laid as continuous floors.",
    swatch: "swatch--marble",
  },
  {
    index: "03",
    name: "Microcement",
    tag: "Seamless continuity",
    text: "A jointless, hand-trowelled cementitious floor, just millimetres thick, with subtle tonal movement.",
    swatch: "swatch--cement",
  },
  {
    index: "04",
    name: "Terrazzo",
    tag: "Crafted aggregate",
    text: "Poured-in-place terrazzo with hand-selected marble and stone aggregates, ground to a flawless finish on site.",
    swatch: "swatch--terrazzo",
  },
];

export default function Collections() {
  return (
    <section className="section products" id="collections">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div>
            <span className="eyebrow eyebrow--mark">The Collections</span>
            <h2 className="section-head__title">
              Four floors, infinitely composed
            </h2>
          </div>
          <Link className="link-underline" href="/products">
            All collections
          </Link>
        </Reveal>

        <div className="products__grid">
          {products.map((p, i) => (
            <Reveal key={p.index} className="product-card lift" delay={i * 100}>
              <Link className="product-card__link" href="/products">
                <div className={`product-card__media swatch ${p.swatch} sheen`}>
                  <span className="product-card__index">{p.index}</span>
                </div>
                <div className="product-card__info">
                  <div className="product-card__head">
                    <h3 className="product-card__name">{p.name}</h3>
                    <span className="product-card__arrow">→</span>
                  </div>
                  <p className="product-card__tag">{p.tag}</p>
                  <p className="product-card__text">{p.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
