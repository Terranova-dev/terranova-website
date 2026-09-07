import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects — Terranova",
  description:
    "A selection of homes, hotels and workspaces floored by hand — each composed for its own light, life and footfall.",
};

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <ProjectsPage />
      </main>
      <Footer />
    </>
  );
}
