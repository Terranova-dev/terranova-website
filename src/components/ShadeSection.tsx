"use client";

import { useCallback, useRef, useState } from "react";
import { shades, type Shade } from "@/data/shades";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShadeCarousel } from "./ShadeCarousel";
import { ShadePreview } from "./ShadePreview";

export function ShadeSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const cardRefs = useRef(new Map<string, HTMLButtonElement>());

  const registerCard = useCallback(
    (id: string, element: HTMLButtonElement | null) => {
      if (element) cardRefs.current.set(id, element);
      else cardRefs.current.delete(id);
    },
    [],
  );

  const openPreview = useCallback((shade: Shade) => {
    setSelectedId(shade.id);
    setPreviewIndex(shades.findIndex((item) => item.id === shade.id));
  }, []);

  const closePreview = useCallback(() => {
    const current =
      previewIndex === null ? undefined : shades[previewIndex];
    setPreviewIndex(null);
    if (current) cardRefs.current.get(current.id)?.focus();
  }, [previewIndex]);

  const step = useCallback((direction: number) => {
    setPreviewIndex((current) =>
      current === null
        ? current
        : (current + direction + shades.length) % shades.length,
    );
  }, []);

  const previewShade =
    previewIndex === null ? undefined : shades[previewIndex];

  return (
    <>
      <Header />
      <main>
        <section className="shade-section" aria-labelledby="shades-heading">
          <div className="shade-library__container">
            <header className="shade-section__header">
              <p className="shade-section__eyebrow">Explore Our Shades</p>
              <h1 id="shades-heading" className="shade-section__title">
                Find Your Perfect Finish
              </h1>
              <p className="shade-section__intro">
                Discover a curated palette of timeless shades crafted for
                contemporary architectural spaces.
              </p>
            </header>

            <div className="shade-gallery">
              <ShadeCarousel
                shades={shades}
                selectedId={selectedId}
                onOpen={openPreview}
                registerCard={registerCard}
              />
              <p className="shade-gallery__note">
                Hand-made samples prepared in your own light · Request a sample
                box
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {previewShade && (
        <ShadePreview
          shade={previewShade}
          position={(previewIndex ?? 0) + 1}
          total={shades.length}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onClose={closePreview}
        />
      )}
    </>
  );
}
