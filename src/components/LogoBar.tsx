import Reveal from "@/components/Reveal";

const clients = [
  "Studio Rao",
  "Vaz & Partners",
  "Sona Hospitality",
  "Meridian Developers",
  "Atelier Nord",
  "Form Architects",
  "Lumen Group",
  "Casa & Co",
];

export default function LogoBar() {
  return (
    <section className="clients">
      <div className="container">
        <Reveal>
          <p className="clients__label eyebrow eyebrow--mark">
            Specified by leading studios & developers
          </p>
        </Reveal>
        <div className="clients__row">
          {clients.map((name, i) => (
            <Reveal key={name} delay={80 + i * 60}>
              <span className="clients__name">{name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
