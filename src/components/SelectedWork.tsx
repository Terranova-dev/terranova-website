import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  {
    name: "Casa Marfil",
    type: "Private Residence · Book-matched marble",
    place: "Goa",
    image: "/assets/download.jpg",
    swatch: "swatch--marble",
    tall: false,
  },
  {
    name: "The Wellard",
    type: "Boutique Hotel · Microconcrete walls",
    place: "Mumbai",
    image: "/assets/wellard.jpg",
    swatch: "swatch--oak",
    tall: true,
  },
  {
    name: "The Quiet House",
    type: "Private Villa · Seamless Microconcrete",
    place: "Bengaluru",
    image: "/assets/bangalore.png",
    swatch: "swatch--cement",
    tall: false,
  },
  {
    name: "Kannur Airport",
    type: "Café & Restaurant · Italian Terrazzo",
    place: "Kannur",
    image: "/assets/kannur.png",
    swatch: "swatch--terrazzo",
    tall: true,
  },
];

export default function SelectedWork() {
  return (
    <section className="section projects-strip" id="projects">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div>
            <span className="eyebrow eyebrow--mark">Selected Work</span>
            <h2 className="section-head__title">Where our floors live</h2>
          </div>
          <Link className="link-underline" href="">
            All projects
          </Link>
        </Reveal>

        <div className="projects-strip__grid">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              className={`proj-card${p.tall ? " proj-card--tall" : ""}`}
              delay={i * 100}
            >
              <Link className="proj-card__link" href="">
                <div className={`proj-card__media swatch ${p.swatch} sheen`}>
                  <Image
                    className="project-card__image"
                    src={p.image}
                    alt={`${p.name} project exterior`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <div className="proj-card__meta">
                  <div>
                    <h3 className="proj-card__name">{p.name}</h3>
                    <span className="proj-card__type">{p.type}</span>
                  </div>
                  <span className="proj-card__place">{p.place}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
