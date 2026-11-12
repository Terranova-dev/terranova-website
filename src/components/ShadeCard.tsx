import type { CSSProperties } from "react";
import type { Shade } from "@/data/shades";
import { ShadeSwatch } from "./ShadeSwatch";

interface ShadeCardProps {
  shade: Shade;
  index: number;
  selected: boolean;
  onOpen: (shade: Shade) => void;
  registerRef?: (el: HTMLButtonElement | null) => void;
}

export function ShadeCard({
  shade,
  index,
  selected,
  onOpen,
  registerRef,
}: ShadeCardProps) {
  return (
    <button
      ref={registerRef}
      type="button"
      onClick={() => onOpen(shade)}
      aria-pressed={selected}
      aria-label={`${shade.name}, shade ${shade.code} — open enlarged preview`}
      className="shade-card"
      style={{ "--stagger": `${index * 70}ms` } as CSSProperties}
    >
      <span className="shade-rise">
        <ShadeSwatch shade={shade} className="shade-card__swatch" />
        <span className="shade-card__caption">
          <span className="shade-card__title-row">
            <span className="shade-card__name">{shade.name}</span>
            <span className="shade-card__tick" aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 7.5 5.5 11 12 3.5" />
              </svg>
            </span>
          </span>
          <span className="shade-card__code-wrap">
            <span className="shade-card__code">{shade.code}</span>
            <span className="shade-card__underline" aria-hidden="true" />
          </span>
          <span className="shade-card__finish">
            {shade.finish}
          </span>
        </span>
      </span>
    </button>
  );
}
