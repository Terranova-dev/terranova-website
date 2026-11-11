"use client";

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Shade } from "@/data/shades";
import { ShadeCard } from "./ShadeCard";

type CarouselApi = UseEmblaCarouselType[1];

interface ShadeCarouselProps {
  shades: Shade[];
  selectedId: string | null;
  onOpen: (shade: Shade) => void;
  registerCard: (id: string, el: HTMLButtonElement | null) => void;
}

export function ShadeCarousel({
  shades,
  selectedId,
  onOpen,
  registerCard,
}: ShadeCarouselProps) {
  const [carouselRef, carouselApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    breakpoints: {
      "(max-width: 768px)": {
        dragFree: true,
      },
    },
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = (api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setCurrentSlide(api.selectedScrollSnap());
    };

    updateSelection(carouselApi);
    carouselApi.on("select", updateSelection);
    carouselApi.on("reInit", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("reInit", updateSelection);
    };
  }, [carouselApi]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      carouselApi?.scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      carouselApi?.scrollNext();
    }
  };

  return (
    <div className="shade-carousel-shell">
      <div className="shade-gallery__controls">
        <p className="shade-gallery__counter" aria-live="polite">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(shades.length).padStart(2, "0")}
        </p>
        <div className="shade-gallery__arrows">
          <button
            className="shade-gallery__arrow"
            type="button"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous shades"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            className="shade-gallery__arrow"
            type="button"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next shades"
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="shade-track"
        role="region"
        aria-label="Shade collection"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="shade-track__content">
          {shades.map((shade, index) => (
            <div
              key={shade.id}
              className="shade-slide"
              role="group"
              aria-roledescription="slide"
            >
              <ShadeCard
                shade={shade}
                index={index}
                selected={selectedId === shade.id}
                onOpen={onOpen}
                registerRef={(element) => registerCard(shade.id, element)}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="shade-gallery__progress"
        role="progressbar"
        aria-label="Slider position"
        aria-valuemin={1}
        aria-valuemax={shades.length}
        aria-valuenow={currentSlide + 1}
      >
        <span
          className="shade-gallery__progress-value"
          style={{ width: `${((currentSlide + 1) / shades.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
