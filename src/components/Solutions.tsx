import Link from "next/link";
import Reveal from "@/components/Reveal";

const solutions = [
  {
    name: "Private Residences",
    text: "Floors that anchor a home — quiet, tactile and made to live with for decades.",
    swatch: "swatch--oak",
  },
  {
    name: "Hospitality",
    text: "Hardwearing, photogenic surfaces for hotels, spas and restaurants that never stop moving.",
    swatch: "swatch--marble",
  },
  {
    name: "Workplace & Commercial",
    text: "Seamless, durable floors engineered for footfall, acoustics and a considered first impression.",
    swatch: "swatch--cement",
  },
  {
    name: "Retail & Galleries",
    text: "Distinctive floors that frame the product and define a flagship’s sense of place.",
    swatch: "swatch--terrazzo",
  },
];

export default function Solutions() {
  return (
    <section className="section solutions">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--mark">Solutions by space</span>
          <h2 className="section-head__title">Floors for every brief</h2>
        </Reveal>

        <div className="solutions__grid">
          {solutions.map((s, i) => (
            <Reveal key={s.name} className="solution-card lift" delay={i * 90}>
              <div className={`solution-card__media swatch ${s.swatch} sheen`} />
              <div className="solution-card__body">
                <h3 className="solution-card__name">{s.name}</h3>
                <p className="solution-card__text">{s.text}</p>
                <Link
                  className="link-underline solution-card__link"
                  href=""
                >
                  See work
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
