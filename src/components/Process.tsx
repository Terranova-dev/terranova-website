import Reveal from "@/components/Reveal";

const steps = [
  {
    no: "01",
    title: "Consult & specify",
    text: "We visit the space, understand the brief and translate it into material, tone and detail.",
  },
  {
    no: "02",
    title: "Sample & approve",
    text: "Hand-made samples are prepared in your light, so you approve the exact floor before we begin.",
  },
  {
    no: "03",
    title: "Survey & prepare",
    text: "Subfloors are surveyed, levelled and detailed for moisture, heating and acoustics.",
  },
  {
    no: "04",
    title: "Precision Application",
    text: "Our master installers lay the floor to millimetre tolerances, entirely by hand.",
  },
  {
    no: "05",
    title: "Seal, finish & care",
    text: "A protective finish is applied and we hand over a simple, lasting care programme.",
  },
];

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--mark">How We Work</span>
          <h2 className="section-head__title">
            From first visit to finished floor
          </h2>
        </Reveal>
        <div className="process__list">
          {steps.map((s, i) => (
            <Reveal key={s.no} className="process__row" delay={i * 70}>
              <span className="process__no">{s.no}</span>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
