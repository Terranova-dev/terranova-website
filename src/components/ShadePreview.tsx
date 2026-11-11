"use client";

import { useEffect, useRef, useState } from "react";
import type { Shade } from "@/data/shades";
import { ShadeSwatch } from "./ShadeSwatch";

interface ShadePreviewProps {
  shade: Shade;
  position: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export function ShadePreview({
  shade,
  position,
  total,
  onPrev,
  onNext,
  onClose,
}: ShadePreviewProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [copyErrorCode, setCopyErrorCode] = useState<string | null>(null);
  const copyTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    panelRef.current?.focus();
  }, [shade.id]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(copyTimer.current);
    };
  }, []);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(shade.code);
      setCopiedCode(shade.code);
      setCopyErrorCode(null);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopiedCode(null), 2000);
    } catch (error) {
      console.error("Unable to copy shade code to clipboard.", error);
      setCopyErrorCode(shade.code);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      onNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      onPrev();
    }
  };

  return (
    <div
      className="shade-preview__backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${shade.name} shade preview`}
      onKeyDown={onKeyDown}
    >
      <button
        className="shade-overlay__backdrop"
        type="button"
        aria-label="Close shade preview"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="shade-panel"
      >
        <div className="shade-preview__swatch">
          <ShadeSwatch shade={shade} edge={false} />
        </div>
        <div className="shade-preview__content">
          <div>
            <p className="shade-section__eyebrow">{shade.family}</p>
            <h2 className="shade-preview__name">{shade.name}</h2>
            <p className="shade-preview__description">{shade.blurb}</p>
            <dl className="shade-preview__details">
              <div>
                <dt>Shade code</dt>
                <dd>{shade.code}</dd>
              </div>
              <div>
                <dt>Finish</dt>
                <dd>{shade.finish}</dd>
              </div>
              <div>
                <dt>Surface tone</dt>
                <dd>
                  <span
                    className="shade-preview__tone"
                    style={{ backgroundColor: shade.hex }}
                    aria-hidden="true"
                  />
                  {shade.hex}
                </dd>
              </div>
            </dl>
          </div>

          <div className="shade-preview__actions">
            <button
              type="button"
              className="shade-preview__copy"
              onClick={copyCode}
            >
              <span aria-live="polite">
                {copyErrorCode === shade.code
                  ? "Copy unavailable"
                  : copiedCode === shade.code
                    ? "Copied"
                    : "Copy shade code"}
              </span>
            </button>
            <div className="shade-preview__navigation">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous shade"
                className="shade-gallery__arrow"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <span>
                {String(position).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next shade"
                className="shade-gallery__arrow"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            className="shade-preview__close"
            onClick={onClose}
            aria-label="Close preview"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
