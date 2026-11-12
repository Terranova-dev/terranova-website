"use client";

import { useCallback, useRef, useState } from "react";
import { shades, type Shade } from "@/data/shades";
import { ShadePreview } from "@/components/ShadePreview";
import { ShadeCard } from "@/components/ShadeCard";

type ProductShadeGalleryProps = {
  family: Shade["family"];
};

export default function ProductShadeGallery({
  family,
}: ProductShadeGalleryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
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
        <div
          className={`product-shades__marquee${isPaused || previewIndex !== null ? " is-paused" : ""}`}
          role="region"
          aria-label={`${family} shade samples`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={(event) =>
            setIsPaused(event.currentTarget.contains(document.activeElement))
          }
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(event.currentTarget.matches(":hover"));
            }
          }}
        >
          <div className="product-shades__marquee-track">
            {[false, true].map((visualClone) => (
              <div
                key={visualClone ? "clone" : "shades"}
                className={`product-shades__marquee-group${visualClone ? " product-shades__marquee-group--clone" : ""}`}
                aria-hidden={visualClone || undefined}
              >
                {shades.map((shade, index) => (
                  <div
                    className="product-shades__marquee-item"
                    key={`${visualClone ? "clone-" : ""}${shade.id}`}
                  >
                    <ShadeCard
                      shade={shade}
                      index={index}
                      selected={selectedId === shade.id}
                      onOpen={openPreview}
                      registerRef={
                        visualClone
                          ? undefined
                          : (element) => registerCard(shade.id, element)
                      }
                      visualClone={visualClone}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
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
