import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsPage from "@/components/ProductsPage";

export const metadata: Metadata = {
  title: "Collections — Terranova",
  description:
    "Microconcrete, Hard, Hydroblock and Terrazzo surfaces, sourced and finished by hand for floors and walls.",
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
