import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About — Terranova",
  description:
    "Terranova began with a simple conviction — that the floor is the most important surface in any room, and deserves to be specified, supplied and laid by a single team.",
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
