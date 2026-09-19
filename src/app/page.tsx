import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Studio from "@/components/Studio";
import Collections from "@/components/Collections";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import Craft from "@/components/Craft";
import WhyTerranova from "@/components/WhyTerranova";
// import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
// import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Studio />
        <Collections />
        <Solutions />
        <Stats />
        <Craft />
        <WhyTerranova />
        {/* <SelectedWork /> */}
        <Process />
        {/* <Testimonials /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
