"use client";

import { useEffect, useRef, useState } from "react";

export type Shade = {
  id: string;
  name: string;
  code: string;
  finish: string;
  description: string;
  background: string;
};

const shades: Shade[] = [
  {
    id: "siena-sand",
    name: "Siena Sand",
    code: "SN-01",
    finish: "Microcement",
    description: "Warm mineral beige with a soft, tactile matte finish for residential interiors.",
    background:
      "radial-gradient(circle at 14% 22%, rgba(255,255,255,0.38) 0%, transparent 18%), radial-gradient(circle at 70% 68%, rgba(95,72,49,0.18) 0%, transparent 25%), linear-gradient(135deg, #ddc9a5 0%, #c6a47a 32%, #a38160 68%, #876b4c 100%)",
  },
  {
    id: "limestone-veil",
    name: "Limestone Veil",
    code: "LV-02",
    finish: "Microcement",
    description: "A stone-like neutral with a refined, quiet presence for calm architectural spaces.",
    background:
      "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.28) 0%, transparent 14%), radial-gradient(circle at 75% 72%, rgba(80,69,57,0.14) 0%, transparent 23%), linear-gradient(135deg, #e7dfd0 0%, #d0c3ad 28%, #b6a287 60%, #8e7b67 100%)",
  },
  {
    id: "travertine-gold",
    name: "Travertine Gold",
    code: "TG-03",
    finish: "Terrazzo",
    description: "A warm golden aggregate blend with subtle movement, ideal for hospitality spaces.",
    background:
      "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.34) 0%, transparent 16%), radial-gradient(circle at 68% 40%, rgba(132,106,54,0.25) 0%, transparent 16%), radial-gradient(circle at 35% 75%, rgba(110,90,62,0.24) 0%, transparent 18%), linear-gradient(135deg, #e8d8b0 0%, #d6b785 28%, #b88d55 62%, #8d7046 100%)",
  },
  {
    id: "ash-stone",
    name: "Ash Stone",
    code: "AS-04",
    finish: "Polished Resin",
    description: "A cool graphite neutral balanced with soft mineral undertones for modern interiors.",
    background:
      "radial-gradient(circle at 16% 22%, rgba(255,255,255,0.2) 0%, transparent 18%), radial-gradient(circle at 70% 66%, rgba(35,34,33,0.14) 0%, transparent 25%), linear-gradient(135deg, #d8d5d0 0%, #a7a29c 28%, #706c66 64%, #3e3a35 100%)",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function ShadeSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartScrollLeft = useRef(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [copied, setCopied] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const selectedShade = shades[selectedIndex];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!isPreviewOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPreviewOpen]);

  const scrollToIndex = (index: number) => {
    const nextIndex = clamp(index, 0, shades.length - 1);
    const card = carouselRef.current?.children[nextIndex] as HTMLElement | undefined;
    if (!card) return;

    card.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });

    setSelectedIndex(nextIndex);
  };

  const move = (direction: number) => {
    scrollToIndex(selectedIndex + direction);
  };

  const beginDrag = (clientX: number) => {
    if (!carouselRef.current) return;
    dragStartX.current = clientX;
    dragStartScrollLeft.current = carouselRef.current.scrollLeft;
    setIsDragging(true);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    beginDrag(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!carouselRef.current || dragStartX.current === null) return;
    const delta = event.clientX - dragStartX.current;
    carouselRef.current.scrollLeft = dragStartScrollLeft.current - delta;
  };

  const endDrag = () => {
    if (!carouselRef.current) return;
    const cards = Array.from(carouselRef.current.children) as HTMLElement[];
    const containerCenter = carouselRef.current.scrollLeft + carouselRef.current.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    dragStartX.current = null;
    setIsDragging(false);
    scrollToIndex(closestIndex);
  };

  const copyShadeCode = async () => {
    try {
      await navigator.clipboard.writeText(selectedShade.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="shade-section section" aria-labelledby="shade-section-title">
      <div className="container">
        <header className="shade-section__header">
          <span className="eyebrow eyebrow--mark">Explore Our Shades</span>
          <h2 id="shade-section-title" className="shade-section__title">
            Find Your Perfect Finish
          </h2>
          <p className="shade-section__intro">
            Discover a curated palette of timeless shades crafted for contemporary architectural spaces.
          </p>
        </header>

        <div className="shade-carousel-wrap">
          <div
            ref={carouselRef}
            className={`shade-carousel${isDragging ? " is-dragging" : ""}`}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Terranova shade selection"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") move(1);
              if (event.key === "ArrowLeft") move(-1);
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsPreviewOpen(true);
              }
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            {shades.map((shade, index) => (
              <button
                key={shade.id}
                type="button"
                className={`shade-card${selectedIndex === index ? " is-selected" : ""}`}
                aria-label={`View ${shade.name} in ${shade.finish}`}
                aria-pressed={selectedIndex === index}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsPreviewOpen(true);
                }}
                style={{ background: shade.background }}
              >
                <span className="shade-card__swatch" aria-hidden="true" />
                <span className="shade-card__meta">
                  <span className="shade-card__topline">
                    <span className="shade-card__name">{shade.name}</span>
                    <span className="shade-card__code">{shade.code}</span>
                  </span>
                  <span className="shade-card__finish">{shade.finish}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="shade-carousel__footer">
            <div className="shade-carousel__controls" aria-label="Shade navigation">
              <button type="button" className="shade-carousel__arrow" onClick={() => move(-1)} aria-label="Previous shade">
                <span aria-hidden="true">←</span>
              </button>
              <div className="shade-carousel__counter" aria-live="polite">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(shades.length).padStart(2, "0")}
              </div>
              <button type="button" className="shade-carousel__arrow" onClick={() => move(1)} aria-label="Next shade">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="shade-preview__backdrop" onClick={() => setIsPreviewOpen(false)}>
          <div
            className="shade-preview"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shade-preview-name"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="shade-preview__close" onClick={() => setIsPreviewOpen(false)} aria-label="Close shade preview">
              Close
            </button>

            <div
              className="shade-preview__swatch"
              style={{ background: selectedShade.background }}
              aria-hidden="true"
            />

            <div className="shade-preview__content">
              <div className="shade-preview__meta">
                <span className="eyebrow eyebrow--mark">Selected shade</span>
                <h3 id="shade-preview-name" className="shade-preview__name">
                  {selectedShade.name}
                </h3>
                <p className="shade-preview__code">{selectedShade.code}</p>
              </div>

              <p className="shade-preview__description">{selectedShade.description}</p>

              <div className="shade-preview__actions">
                <button type="button" className="btn btn--solid" onClick={copyShadeCode}>
                  <span>{copied ? "Copied" : "Copy shade code"}</span>
                </button>
                <button type="button" className="btn" onClick={() => setIsPreviewOpen(false)}>
                  <span>Back to shades</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
