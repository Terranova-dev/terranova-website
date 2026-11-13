import Link from "next/link";
import Reveal from "@/components/Reveal";

const products = [
  {
    index: "01",
    name: "Microconcrete",
    tag: "Seamless floors & walls",
    text: "Premium aggregates are sourced directly from Italy, alongside high-quality microconcrete materials selected from across Europe. Applied coat by coat over a prepared surface, it is finished on site in your chosen colour, texture and sheen. Once sealed, the seamless finish is water-resistant and hard-wearing across floors, walls, stairs and wet rooms.",
    swatch: "swatch--cement",
    image: "/assets/microconcrete.jpg",
  },
  {
    index: "02",
    name: "Rock",
    tag: "Waterproof & breathable plaster",
    text: "Rock is a dry plaster mixture made from natural materials, designed to form a waterproof membrane while remaining breathable. Its refined mineral finish can be site-finished in your chosen colour and texture, for applications ranging from cellars and bathrooms to above-ground surfaces.",
    swatch: "swatch--stone",
    image: "/assets/rock.jpg",
  },
  {
    index: "03",
    name: "Hydroblock",
    tag: "Waterproof & breathable plaster",
    text: "Using European technology, Hydroblock is mixed into conventional cement-and-sand plaster at the construction site. The additive helps create rain-resistant, breathable plaster, with the amount adjusted to the surface—from exposed exterior walls to bathrooms and roof decks.",
    swatch: "swatch--marble",
    image: "/assets/hydroblock.jpg",
  },
  {
    index: "04",
    name: "Terrazzo",
    tag: "Surfaces",
    text: "Italian aggregates are selected and composed with your chosen colour and texture to create a distinctive mineral surface. Aggregate, scale and finish are considered for your project, then finished on site for a seamless result with subtle, individual character.",
    swatch: "swatch--terrazzo",
    image: "/assets/terrazo.jpg",
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
                <div className="product-card__media">
                  <span className="product-card__index">{p.index}</span>
                  <img
                    className="product-card__image"
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                  />
                </div>
                <div className="product-card__info">
                  <div className="product-card__meta">
                    <div className="product-card__head">
                      <h3 className="product-card__name">{p.name}</h3>
                      <span className="product-card__arrow">→</span>
                    </div>
                    <p className="product-card__tag">{p.tag}</p>
                  </div>
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
