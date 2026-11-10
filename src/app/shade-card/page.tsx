import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShadeSection } from "@/components/ShadeSection";

export const metadata: Metadata = {
  title: "Shade Card — Terranova",
  description:
    "Explore Terranova's curated palette of premium architectural finishes and material shades.",
};

export default function ShadeCardPage() {
  return (
    <>
      <Header />
      <main>
        <ShadeSection />
      </main>
      <Footer />
    </>
  );
}
