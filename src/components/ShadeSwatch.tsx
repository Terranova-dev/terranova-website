import Image from "next/image";
import { textures, type Shade } from "@/data/shades";

interface ShadeSwatchProps {
  shade: Shade;
  className?: string;
  edge?: boolean;
}

export function ShadeSwatch({
  shade,
  className = "",
  edge = true,
}: ShadeSwatchProps) {
  return (
    <div
      className={`shade-swatch${edge ? " shade-swatch-edge" : ""} ${className}`}
      style={{ backgroundColor: shade.hex }}
    >
      <Image
        src={textures[shade.texture]}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 767px) 76vw, (max-width: 1199px) 38vw, 390px"
        className="shade-swatch-texture"
      />
      <span className="shade-swatch-sheen" />
    </div>
  );
}
