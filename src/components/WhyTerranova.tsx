import Reveal from "@/components/Reveal";

const features = [
  {
    no: "01",
    title: "Specified, supplied & installed",
    text: "One accountable team from first drawing to final seal — no hand-offs, no surprises.",
  },
  {
    no: "02",
    title: "Master installers in-house",
    text: "Our own trained fitters lay every floor. We never subcontract the craft.",
  },
  {
    no: "03",
    title: "Made to measure",
    text: "Tone, sheen, plank width and aggregate are composed for each project, never off-the-shelf.",
  },
  {
    no: "04",
    title: "Sourced at origin",
    text: "Direct relationships with the finest mills and quarries in Europe and Asia.",
  },
  {
    no: "05",
    title: "Subfloor & acoustics",
    text: "Surveyed, levelled and acoustically detailed — the quiet engineering beneath a flawless floor.",
  },
  {
    no: "06",
    title: "Lifetime aftercare",
    text: "Maintenance, refinishing and repair programmes that keep floors beautiful for years.",
  },
];

export default function WhyTerranova() {
  return (
    <section className="section dark-section features">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--mark">Why Terranova</span>
          <h2 className="section-head__title">Six reasons our floors endure</h2>
        </Reveal>
        <div className="features__grid">
          {features.map((f, i) => (
            <Reveal key={f.no} className="feature" delay={i * 80}>
              <span className="feature__no">{f.no}</span>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__text">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
