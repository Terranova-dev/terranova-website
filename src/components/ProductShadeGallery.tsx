"use client";

import { useCallback, useRef, useState } from "react";
import { shades, type Shade } from "@/data/shades";
import { ShadeCarousel } from "@/components/ShadeCarousel";
import { ShadePreview } from "@/components/ShadePreview";

type ProductShadeGalleryProps = {
  family: Shade["family"];
};

export default function ProductShadeGallery({
  family,
}: ProductShadeGalleryProps) {
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

  const stepPreview = useCallback((direction: number) => {
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
      <section className="product-shades" aria-label={`${family} shades`}>
        <div className="product-shades__heading">
          <div>
            <span className="eyebrow eyebrow--mark">Shade samples</span>
            <h3 className="product-shades__title">{family}</h3>
          </div>
          <span className="product-shades__count">
            {String(shades.length).padStart(2, "0")} shades
          </span>
        </div>
        <ShadeCarousel
          shades={shades}
          selectedId={selectedId}
          onOpen={openPreview}
          registerCard={registerCard}
          autoAdvanceMs={3000}
          isPaused={previewIndex !== null}
        />
      </section>

      {previewShade && (
        <ShadePreview
          shade={previewShade}
          position={(previewIndex ?? 0) + 1}
          total={shades.length}
          onPrev={() => stepPreview(-1)}
          onNext={() => stepPreview(1)}
          onClose={closePreview}
        />
      )}
    </>
  );
}
