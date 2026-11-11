import type { Metadata } from "next";
import { ShadeSection } from "@/components/ShadeSection";

export const metadata: Metadata = {
  title: "Shade Library — Terranova Finishes",
  description:
    "Explore a curated palette of microconcrete, terrazzo and mineral plaster shades — 12 timeless finishes crafted for contemporary architectural spaces.",
};

export default function ShadeCardPage() {
  return <ShadeSection />;
}
