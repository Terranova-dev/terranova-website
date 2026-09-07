import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Terranova",
  description:
    "Tell us about your space and what you imagine. We reply within two working days and can arrange hand-made samples in your own light.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
