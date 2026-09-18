"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const filters = [
  "All",
  "Residential",
  "Hospitality",
  "Workplace",
  "Retail",
] as const;

type Filter = (typeof filters)[number];

const projects = [
  {
    name: "Casa Marfil",
    type: "Private Residence · Custom Terrazova",
    place: "Goa",
    swatch: "swatch--marble",
    category: "Residential" as const,
  },
  {
    name: "The Wellard",
    type: "Boutique Hotel · Microconcrete walls",
    place: "Mumbai",
    swatch: "swatch--oak",
    category: "Hospitality" as const,
  },
  {
    name: "The Quiet House",
    type: "Private Villa · Seamless Microconcrete",
    place: "Bengaluru",
    swatch: "swatch--cement",
    category: "Residential" as const,
  },
  {
    name: "Sona Café",
    type: "Café & Restaurant · Italian Terrazova",
    place: "Hyderabad",
    swatch: "swatch--terrazzo",
    category: "Hospitality" as const,
  },
  {
    name: "Meridian HQ",
    type: "Headquarters · Waterproof Plasters",
    place: "Hyderabad",
    swatch: "swatch--stone",
    category: "Workplace" as const,
  },
  {
    name: "Form Gallery",
    type: "Flagship Retail · Custom Terrazova",
    place: "Delhi",
    swatch: "swatch--walnut",
    category: "Retail" as const,
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="container page-hero__layout">
          <div className="page-hero__inner page-hero__inner--right">
            <Reveal immediate delay={80}>
              <span className="eyebrow eyebrow--mark">Selected Work</span>
            </Reveal>
            <Reveal immediate delay={180}>
              <h1 className="page-hero__title display">
                Where&nbsp;our
                <br />
                floors&nbsp;live
              </h1>
            </Reveal>
            <Reveal immediate delay={300}>
              <p className="page-hero__intro lead">
                A selection of homes, hotels and workspaces, floored by hand.
                Each one composed for its own light, life and footfall.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section projects-page">
        <div className="container">
          <div className="projects-filter" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                className={`projects-filter__btn${active === f ? " is-active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visible.map((p, i) => (
              <Reveal key={p.name} className="gallery-card" delay={i * 80}>
                <Link className="gallery-card__link" href="/contact">
                  <div
                    className={`gallery-card__media swatch ${p.swatch} sheen`}
                  >
                    <span className="gallery-card__view">View</span>
                  </div>
                  <div className="gallery-card__meta">
                    <div>
                      <h3 className="gallery-card__name">{p.name}</h3>
                      <span className="gallery-card__type">{p.type}</span>
                    </div>
                    <span className="gallery-card__place">{p.place}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight projects-quote dark-section">
        <div className="container text-center">
          <Reveal>
            <p className="projects-quote__text">
              “Every floor is a collaboration with the architect, the light, and
              the hands that lay the final plank.”
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link className="btn btn--light" href="/contact">
              <span>Start your project</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
