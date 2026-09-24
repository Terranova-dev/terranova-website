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
    image: "/assets/microconcrete.jpg",
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
    image: "/assets/rock.jpg",
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
    image: "/assets/hydroblock.jpg",
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
    image: "/assets/terrazo.jpg",
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
    </section>
  );
}

function HydroblockDetails() {
  return (
    <section className="product-detail" aria-labelledby="hydroblock-details-title">
      <div className="product-detail__intro">
        <span className="eyebrow eyebrow--mark">Product information</span>
        <h3 id="hydroblock-details-title" className="product-detail__title">
          Hydroblock waterproof and breathable plaster
        </h3>
        <p>
          Hydroblock is a natural, non-toxic and non-synthetic powder additive
          for mixing with conventional plaster at the construction site.
          European technology using physical principles changes conventional
          plaster into a rain-resistant, breathable plaster.
        </p>
      </div>

      <div className="product-detail__columns">
        <div className="product-detail__panel">
          <h4>Advantages</h4>
          <ul className="product-detail__list">
            <li>Excellent workability with minimum waste during application.</li>
            <li>Excellent adhesion to the substrate.</li>
            <li>Applicable on damp surfaces.</li>
            <li>PP fibers help prevent hairline cracks.</li>
            <li>Highly breathable and allows moisture to evaporate outside the wall.</li>
            <li>Helps prevent mould and fungi.</li>
            <li>No additional waterproof membrane or paint is needed.</li>
          </ul>
        </div>
        <div className="product-detail__panel">
          <h4>Usage</h4>
          <p className="product-detail__usage-intro">
            Mix Hydroblock into conventional cement-and-sand plaster at the
            construction site. Choose the amount according to the surface and
            exposure it needs to withstand.
          </p>
          <ul className="product-detail__list">
            <li>
              <strong>Exterior walls:</strong> use 2 kg of Hydroblock with 250
              kg of plaster and water to create a rain-resistant, breathable
              plaster for exposed walls.
            </li>
            <li>
              <strong>Interior walls, bathrooms, roof decks and floors:</strong>{" "}
              use 5 kg of Hydroblock with 250 kg of plaster and water for areas
              that need increased protection from dampness and water.
            </li>
          </ul>
        </div>
      </div>

      
    </section>
  );
}

function TerrazzoDetails() {
  return (
    <section className="product-detail" aria-labelledby="terrazzo-details-title">
      <div className="product-detail__intro">
        <span className="eyebrow eyebrow--mark">Surface information</span>
        <h3 id="terrazzo-details-title" className="product-detail__title">
          Terrazzo composed for your space
        </h3>
        <p>
          Terrazzo brings Italian aggregates together in a surface designed
          around the character of your project. Each composition balances
          aggregate, colour and scale to create a finish that feels considered
          rather than repeated.
        </p>
        <p>
          The result is a seamless surface with a distinctive mineral texture,
          finished on site to suit the light, architecture and level of
          refinement you want.
        </p>
      </div>

      <div className="product-detail__columns">
        <div className="product-detail__panel">
          <h4>Surface character</h4>
          <ul className="product-detail__list">
            <li>Italian aggregates selected to shape the tone and movement.</li>
            <li>Custom colour and aggregate combinations for a considered result.</li>
            <li>Seamless transitions across connected spaces.</li>
            <li>A site-finished surface with its own subtle variation.</li>
          </ul>
        </div>
        <div className="product-detail__panel">
          <h4>Suitable for</h4>
          <ul className="product-detail__list">
            <li>Floors, walls and staircases.</li>
            <li>Residential interiors and hospitality spaces.</li>
            <li>Retail and commercial projects that need a durable visual anchor.</li>
            <li>Spaces where one continuous material can bring rooms together.</li>
          </ul>
        </div>
      </div>
{/* 
      <div className="product-detail__intro product-detail__secondary">
        <h4>Finishing the surface</h4>
        <p>
          We compose the colour, aggregate and texture with your space in mind,
          then finish the surface on site for a seamless result. The final
          character can be tuned from quiet and refined to more expressive and
          aggregate-led.
        </p>
        <h4>Care and specification</h4>
        <p>
          Terrazzo is specified as part of the wider project, including the
          substrate, desired finish and how the space will be used. We can guide
          you through samples and recommend the right finish for your room,
          light and level of traffic.
        </p>
      </div> */}
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
                  <div
                    className={`swatch ${p.swatch} sheen product-row__img`}
                    style={
                      p.image
                        ? {
                            backgroundImage: `url("${p.image}")`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : undefined
                    }
                  >
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
              {p.id === "rrs-hydrobloc" ? <HydroblockDetails /> : null}
              {p.id === "terrazzo" ? <TerrazzoDetails /> : null}
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
