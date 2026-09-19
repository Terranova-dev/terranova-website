import Link from "next/link";
import Reveal from "@/components/Reveal";

const products = [
  {
    index: "01",
    name: "Microconcrete",
    tag: "Seamless floors & walls",
    text: "Raw materials sourced from Europe, site-finished in the tone and sheen you choose, levelled to perfection with a seamless finish in any colour or texture.",
    swatch: "swatch--cement",
  },
  {
    index: "02",
    name: "Hard",
    tag: "Waterproof & breathable plaster",
    text: "A durable, breathable plaster with a refined mineral finish, made for seamless surfaces in your chosen colour and texture.",
    swatch: "swatch--stone",
  },
  {
    index: "03",
    name: "Hydroblock",
    tag: "Waterproof & breathable plaster",
    text: "A protective plaster that keeps surfaces waterproof while allowing the substrate to breathe.",
    swatch: "swatch--marble",
  },
  {
    index: "04",
    name: "Terrazzo",
    tag: "Surfaces",
    text: "Surfaces made with aggregates from Italy, composed for your space and finished on site for a precise, seamless result.",
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
              Four surfaces, infinitely composed
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
