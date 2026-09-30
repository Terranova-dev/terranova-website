"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const solutions = [
  {
    name: "Private Residences",
    text: "Floors that anchor a home — quiet, tactile and made to live with for decades.",
    image: "/assets/private.jpg",
    badge: "Private Residences",
    qualities: ["Timeless", "Natural", "Personal"],
  },
  {
    name: "Hospitality",
    text: "Hardwearing, photogenic surfaces for hotels, spas and restaurants that never stop moving.",
    image: "/assets/hospitality.jpg",
    badge: "Hotels & Retreats",
    qualities: ["Welcoming", "Resilient", "Distinctive"],
  },
  {
    name: "Workplace & Commercial",
    text: "Seamless, durable floors engineered for footfall, acoustics and a considered first impression.",
    image: "/assets/workplace.jpg",
    badge: "Workplace",
    qualities: ["Considered", "Durable", "Quiet"],
  },
  {
    name: "Retail & Galleries",
    text: "Distinctive floors that frame the product and define a flagship’s sense of place.",
    image: "/assets/retail.jpg",
    badge: "Retail & Culture",
    qualities: ["Expressive", "Tactile", "Purposeful"],
  },
];

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % solutions.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (step: number) => {
    setActiveIndex((current) => (current + step + solutions.length) % solutions.length);
  };

  return (
    <section className="section solutions solutions--carousel">
      <svg className="solutions__svg-defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="solutionOrganicCard" clipPathUnits="objectBoundingBox">
            <path d="M 0.105 0.075 C 0.20 0.025 0.30 0.055 0.40 0.105 C 0.52 0.165 0.61 0.165 0.70 0.115 C 0.79 0.065 0.88 0.075 0.91 0.145 C 0.95 0.25 0.94 0.38 0.95 0.52 C 0.96 0.68 0.94 0.82 0.88 0.91 C 0.81 0.99 0.70 0.965 0.61 0.93 C 0.50 0.89 0.39 0.89 0.28 0.93 C 0.18 0.97 0.08 0.94 0.06 0.85 C 0.03 0.72 0.06 0.58 0.055 0.43 C 0.05 0.28 0.055 0.15 0.105 0.075 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="container">
        <div className="solutions__intro">
          <Reveal className="solutions__heading">
            <span className="eyebrow eyebrow--mark">Solutions by space</span>
            <h2 className="section-head__title">Floors for every brief</h2>
          </Reveal>
          <Reveal className="solutions__aside" delay={100}>
            <p>Distinct spaces. Demanding needs. Our floors bring lasting performance to places that matter.</p>
            <Link className="solutions__explore" href="/projects">
              Explore all spaces <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <div
          className="solutions__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") move(-1);
            if (event.key === "ArrowRight") move(1);
          }}
          aria-roledescription="carousel"
          aria-label="Solutions by space"
        >
          <div className="solutions__curve" aria-hidden="true" />

          <div
            className="solutions__stage"
            style={{ "--solution-scene": `url("${solutions[activeIndex].image}")` } as React.CSSProperties}
          >
            {solutions.map((solution, index) => {
              const offset = (index - activeIndex + solutions.length) % solutions.length;
              const position = offset === 0 ? "center" : offset === 1 ? "right" : offset === solutions.length - 1 ? "left" : "hidden";

              return (
                <article
                  className={`solution-card solution-card--${position}`}
                  key={solution.name}
                  aria-label={`${index + 1} of ${solutions.length}: ${solution.name}`}
                  aria-hidden={position !== "center"}
                  inert={position !== "center"}
                >
                  <span className="solution-card__glow" aria-hidden="true" />
                  <div className="solution-card__shape">
                    <div
                      className="solution-card__ambient"
                      style={{ backgroundImage: `url("${solution.image}")` }}
                      aria-hidden="true"
                    />
                    <div
                      className="solution-card__image"
                      style={{ backgroundImage: `url("${solution.image}")` }}
                      aria-hidden="true"
                    />
                    <span className="solution-card__border" aria-hidden="true" />
                    <span className="solution-card__index">{String(index + 1).padStart(2, "0")} <i /> {String(solutions.length).padStart(2, "0")}</span>
                    <span className="solution-card__badge">{solution.badge}<i /></span>
                    <div className="solution-card__body">
                      <div className="solution-card__copy">
                        <h3 className="solution-card__name">{solution.name}</h3>
                        <p className="solution-card__text">{solution.text}</p>
                        <Link className="solution-card__link" href="/projects">
                          See work <span aria-hidden="true">↗</span>
                        </Link>
                      </div>
                      <ul className="solution-card__qualities" aria-label="Floor qualities">
                        {solution.qualities.map((quality) => <li key={quality}>{quality}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="solutions__controls" aria-label="Carousel controls">
            <button className="solutions__arrow" type="button" onClick={() => move(-1)} aria-label="Previous solution">
              <span aria-hidden="true">←</span>
            </button>
            <div className="solutions__dots" role="group" aria-label="Choose a solution">
              {solutions.map((solution, index) => (
                <button
                  aria-label={`Show ${solution.name}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`solutions__dot${activeIndex === index ? " is-active" : ""}`}
                  key={solution.name}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
            <button className="solutions__arrow" type="button" onClick={() => move(1)} aria-label="Next solution">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
