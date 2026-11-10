import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const palette = [
  { name: "Cream background", hex: "#f7f3ec", value: "--bg" },
  { name: "Paper", hex: "#fbf9f4", value: "--paper" },
  { name: "Charcoal", hex: "#141109", value: "--dark" },
  { name: "Ink", hex: "#211e17", value: "--text" },
  { name: "Muted taupe", hex: "#635a4c", value: "--muted" },
  { name: "Gold accent", hex: "#a07d3e", value: "--gold" },
  { name: "Deep gold", hex: "#7c5f2c", value: "--gold-deep" },
  { name: "Warm border", hex: "#ded4c3", value: "--line" },
];

const typeScale = [
  { label: "H1", text: "Floors that hold a room together.", size: "clamp(2.4rem, 7.4vw, 5.6rem)" },
  { label: "H2", text: "Four surfaces, infinitely composed", size: "clamp(2rem, 5vw, 3.6rem)" },
  { label: "H3", text: "Specified, supplied & installed", size: "clamp(1.4rem, 2.5vw, 2.1rem)" },
  { label: "Body", text: "Terranova is a flooring house working with Microconcrete and Terrazzo, using raw materials sourced from Europe and aggregates from Italy.", size: "1.125rem" },
  { label: "Label", text: "High-End Flooring", size: "0.7rem" },
];

const productCards = [
  { name: "Microconcrete", tag: "Seamless floors & walls", text: "Raw materials sourced from Europe…" },
  { name: "Rock", tag: "Waterproof & breathable plaster", text: "Durable mineral surfaces with a refined finish…" },
  { name: "Hydroblock", tag: "Waterproof & breathable plaster", text: "A protective plaster that keeps surfaces waterproof…" },
  { name: "Terrazzo", tag: "Italian aggregate surfaces", text: "Composed around the room, finished on site…" },
];

const processSteps = [
  { no: "01", title: "Consult & specify", text: "We visit the space and translate the brief into material, tone and detail." },
  { no: "02", title: "Sample & approve", text: "Hand-made samples are prepared in your own light before the work begins." },
  { no: "03", title: "Survey & prepare", text: "Subfloors are checked, levelled and detailed for acoustics and moisture." },
  { no: "04", title: "Precision application", text: "Our installers lay the floor by hand to precise tolerances." },
];

export default function DesignPage() {
  return (
    <>
      <Header />
      <main className="design-page">
        <section className="page-hero page-hero--plain">
          <div className="container page-hero__layout">
            <div className="page-hero__inner page-hero__inner--right">
              <span className="eyebrow eyebrow--mark">Design system</span>
              <h1 className="page-hero__title display">Terranova</h1>
              <p className="page-hero__intro lead">
                A premium materials-led system built around calm luxury,
                tactile neutrals, and a precise architectural voice.
              </p>
            </div>
          </div>
        </section>

        <section className="section design-page__section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--mark">Palette</span>
              <h2 className="section-head__title">Core colours</h2>
            </div>

            <div className="design-swatches">
              {palette.map((color) => (
                <div key={color.name} className="design-swatch">
                  <div
                    className="design-swatch__chip"
                    style={{ background: color.hex }}
                    aria-label={color.name}
                  />
                  <div className="design-swatch__meta">
                    <strong>{color.name}</strong>
                    <span>{color.hex}</span>
                    <small>{color.value}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section design-page__section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--mark">Typography</span>
              <h2 className="section-head__title">Editorial + precise</h2>
            </div>

            <div className="design-demo design-demo--type">
              {typeScale.map((item) => (
                <div key={item.label} className="type-sample">
                  <span className="type-sample__label">{item.label}</span>
                  <div style={{ fontSize: item.size }} className="type-sample__text">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section design-page__section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--mark">Interaction</span>
              <h2 className="section-head__title">Buttons, links and actions</h2>
            </div>

            <div className="design-demo design-demo--actions">
              <div className="action-row">
                <button type="button" className="btn btn--solid">
                  <span>View collections</span>
                </button>
                <button type="button" className="btn">
                  <span>Request a consultation</span>
                </button>
              </div>

              <div className="action-row action-row--links">
                <Link className="link-underline" href="/products">
                  All collections
                </Link>
                <Link className="link-underline" href="/contact">
                  Request a consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section design-page__section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--mark">Navigation</span>
              <h2 className="section-head__title">Fixed premium header</h2>
            </div>

            <div className="design-demo design-demo--nav">
              <div className="nav-preview">
                <div className="nav-preview__brand">Terranova</div>
                <div className="nav-preview__links">
                  <span>Home</span>
                  <span>Collections</span>
                  <span>Projects</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section design-page__section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--mark">Content blocks</span>
              <h2 className="section-head__title">Material cards</h2>
            </div>

            <div className="design-cards">
              {productCards.map((card) => (
                <article key={card.name} className="product-card lift design-card">
                  <div className="product-card__media">
                    <span className="product-card__index">0{productCards.indexOf(card) + 1}</span>
                    <div className="design-card__art swatch swatch--stone" aria-hidden="true" />
                  </div>
                  <div className="product-card__info">
                    <div className="product-card__meta">
                      <div className="product-card__head">
                        <h3 className="product-card__name">{card.name}</h3>
                        <span className="product-card__arrow">→</span>
                      </div>
                      <p className="product-card__tag">{card.tag}</p>
                    </div>
                    <p className="product-card__text">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section design-page__section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--mark">Structure</span>
              <h2 className="section-head__title">Process and feature rhythm</h2>
            </div>

            <div className="design-demo design-demo--process">
              <div className="process-preview">
                {processSteps.map((step) => (
                  <div key={step.no} className="process-preview__row">
                    <span className="process__no">{step.no}</span>
                    <div>
                      <h3 className="process__title">{step.title}</h3>
                      <p className="process__text">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section design-page__section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow eyebrow--mark">Form system</span>
              <h2 className="section-head__title">Lead capture</h2>
            </div>

            <div className="design-demo design-demo--form">
              <form className="contact__form">
                <div className="field">
                  <label htmlFor="design-name">Name</label>
                  <input id="design-name" name="name" placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="design-email">Email</label>
                  <input id="design-email" name="email" type="email" placeholder="you@email.com" />
                </div>
                <div className="field">
                  <label htmlFor="design-surface">Collection of interest</label>
                  <select id="design-surface" name="surface" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Microconcrete">Microconcrete</option>
                    <option value="Rock">Rock</option>
                    <option value="Hydroblock">Hydroblock</option>
                    <option value="Terrazzo">Terrazzo</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="design-message">About your project</label>
                  <textarea id="design-message" name="message" rows={4} placeholder="Spaces, timeline, feeling you’re after…" />
                </div>
                <button type="submit" className="btn btn--solid">
                  <span>Send enquiry</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
