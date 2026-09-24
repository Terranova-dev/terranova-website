import Link from "next/link";
import Reveal from "@/components/Reveal";

const products = [
  {
    id: "microconcrete",
    index: "01",
    eyebrow: "Italian aggregates. European materials. Seamless finishes.",
    title: "Microconcrete Floors & Walls",
    text: "We source premium aggregates directly from Italy and high-quality microconcrete materials from across Europe, carefully selecting every component to achieve exceptional finishes, consistency, and character. Our microconcrete is applied and finished on-site, giving you complete freedom over the final look with custom colour, texture, layering, grooves, and level of perfection. Microcement is applied coat by coat over almost any substrate without demolition, creating an unbroken, monolithic floor that flows from room to room and up the stairs. Sealed to be water-resistant and hard-wearing, it suits wet rooms and high-traffic spaces alike.",
    finishes: [
      "Natural finish",
      "Glassy finish",
      "Satin finish",
      "Textured finish",
      "Custom colours & textures",
      "Layered & grooved applications",
    ],
    bestFor: ["Floors", "Walls", "Bathrooms", "Commercial"],
    swatch: "swatch--cement",
    reverse: false,
  },
  {
    id: "rrs-hard",
    index: "02",
    eyebrow: "Waterproof & breathable plaster",
    title: "Rock",
    text: "A waterproof and breathable plaster for durable, seamless surfaces with a refined mineral finish. Rock can be site-finished in the colour and texture chosen for your space.",
    finishes: ["Waterproof", "Breathable", "Custom colour & texture"],
    bestFor: ["Floors", "Walls", "Bathrooms", "Commercial"],
    swatch: "swatch--stone",
    reverse: true,
  },
  {
    id: "rrs-hydrobloc",
    index: "03",
    eyebrow: "Waterproof & breathable plaster",
    title: "Hydroblock",
    text: "A waterproof and breathable plaster designed to protect surfaces while allowing the substrate to breathe. Hydroblock provides a durable finish for interior and exterior applications.",
    finishes: ["Waterproof", "Breathable", "Site finished"],
    bestFor: ["Floors", "Walls", "Wet areas", "Commercial"],
    swatch: "swatch--marble",
    reverse: false,
  },
  {
    id: "terrazzo",
    index: "04",
    eyebrow: "Italian aggregate surfaces",
    title: "Terrazzo",
    text: "Terrazzo uses aggregates sourced from Italy to create a surface composed around your space. It is site-finished with a seamless result, with the colour, texture and level of perfection chosen to suit your project.",
    category: "Surfaces",
    finishes: ["Italian aggregates", "Custom colour", "Custom texture"],
    bestFor: ["Floors", "Walls", "Stairs", "Retail"],
    swatch: "swatch--terrazzo",
    reverse: true,
  },
];

function RockDetails() {
  return (
    <section className="product-detail" aria-labelledby="rock-details-title">
      <div className="product-detail__intro">
        <span className="eyebrow eyebrow--mark">Product information</span>
        <h3 id="rock-details-title" className="product-detail__title">
          Rock waterproof and breathable plaster
        </h3>
        <p>
          Plastering and waterproofing in one step. Rock is extremely
          waterproof against water pressure under permanent load, while its
          hydrophobic IzoComponent HARD ingredient is certified for contact
          with drinking water.
        </p>
        <p>
          This dry plaster mixture creates a waterproof membrane after
          application while remaining breathable. Made from natural
          materials, it contains no harmful or flammable ingredients and can
          be used for insulation around tanks with drinking water.
        </p>
      </div>

      <div className="product-detail__columns">
        <div className="product-detail__panel">
          <h4>Uses</h4>
          <ul className="product-detail__list">
            <li>Water-insulation of cellars, shafts and underground constructions.</li>
            <li>Plaster reconstruction and additional water-insulation in older buildings.</li>
            <li>Protection of moist buildings against water and nitric salts (efflorescence).</li>
            <li>Insulation of pedestal parts in new buildings against groundwater.</li>
            <li>Water-insulation of bathrooms and shower baths to prevent leakage between floors.</li>
            <li>Water-insulation of oversized concrete tanks.</li>
          </ul>
        </div>
        <div className="product-detail__panel">
          <h4>Advantages</h4>
          <ul className="product-detail__list">
            <li>Outstanding waterproof capability.</li>
            <li>Resistant to direct contact with water-resistant surfaces.</li>
            <li>Breathable and suitable for above-ground or underground insulation.</li>
            <li>Excellent adhesion and ability to connect.</li>
            <li>Frost-proof and sulfur-resistant.</li>
            <li>Can be applied to wet surfaces.</li>
            <li>Prevents salt crystallization.</li>
            <li>Resistant against rain and flowing water.</li>
            <li>Can be laid manually or with a spray applicator.</li>
          </ul>
        </div>
      </div>

      <div className="product-detail__content">
        <div>
          <span className="eyebrow">Application details</span>
          <h4>Surface preparation</h4>
          <p>
            The ground must be solid and released from loose parts and
            paintings. It must not be greasy, acidic, water-repellent or
            alcohol-based. The surface must be totally wetted with water
            before application.
          </p>
          <h4>Preparing the mixture</h4>
          <p>
            Add 3.75-4.75 litres of water to one 25 kg bag. Mix or stir for
            5-10 minutes, let the material stand for 5 minutes, then mix for
            a final minute before applying. Work up mixed material within 3
            hours. An electrically powered mixing tool is recommended.
          </p>
          <h4>Laying and finishing</h4>
          <p>
            Apply manually with a smoother or with a spray applicator, in a
            maximum of three layers. Each layer is typically 10-15 mm, with
            up to 30 mm total thickness. Slightly roughen each layer before
            applying the next one after 24 hours.
          </p>
          <h4>Care after application</h4>
          <p>
            Prevent the plaster from drying too quickly. After the final
            layer, slightly moisten the surface for 3 days, especially in dry,
            windy weather or direct sunshine. The finished layer can be
            painted or faced with tiles after final roughening.
          </p>
          <div className="product-detail__note">
            <strong>Important</strong>
            <p>
              On extremely moist brickwork, water drops can appear on the
              plaster surface. This is water being forced out of the wall and
              the drops disappear as the plaster hardens.
            </p>
          </div>
          <h4>Cleaning</h4>
          <p>
            Use clear water to clean plaster from tools and equipment.
            Hardened material can only be removed mechanically.
          </p>
        </div>

        <div>
          <span className="eyebrow">Technical specification</span>
          <dl className="product-detail__spec-table">
            <div><dt>Appearance / colour</dt><dd>Powder / grey</dd></div>
            <div><dt>Chemical base</dt><dd>Sand, cement, IzoComponent HARD</dd></div>
            <div><dt>Density of hardened mortar</dt><dd>1680 kg/m3 +/- 50 kg</dd></div>
            <div><dt>Layer thickness</dt><dd>One layer: 10-15 mm. Maximum three layers, 30 mm total.</dd></div>
            <div><dt>Consumption</dt><dd>12 kg/m2 at 10 mm; 18 kg/m2 at 15 mm. A 25 kg bag covers 2.08 m2 at 10 mm or 1.38 m2 at 15 mm.</dd></div>
            <div><dt>Packaging</dt><dd>25 kg bag</dd></div>
            <div><dt>Shelf-life</dt><dd>18 months when stored in dry conditions</dd></div>
            <div><dt>Water penetration</dt><dd>&lt;= 1 mm</dd></div>
            <div><dt>Water vapour resistance coefficient (mu)</dt><dd>12.40</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

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
            <div key={p.id}>
              <div
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
                        {p.finishes.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    </div>
                    <div className="spec">
                      <span className="spec__label">Best for</span>
                      <ul className="spec__list">
                        {p.bestFor.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                  </Reveal>
                  <Reveal delay={340 + i * 20}>
                    <Link className="link-underline product-row__link" href="/contact">
                      Enquire about {p.title}
                    </Link>
                  </Reveal>
                </div>
              </div>
              {p.id === "rrs-hard" ? <RockDetails /> : null}
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
