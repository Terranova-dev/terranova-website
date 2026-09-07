import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsPage from "@/components/ProductsPage";

export const metadata: Metadata = {
  title: "Collections — Terranova",
  description:
    "Four families of flooring — engineered hardwood, natural stone & marble, microcement and terrazzo — sourced and finished by hand.",
};

export default function Products() {
  return (
    <>
      <Header />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </>
  );
}
