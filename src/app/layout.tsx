import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import "./sections.css";

export const metadata: Metadata = {
  title: "Terranova — High-End Flooring",
  description:
    "Microconcrete, Hard, Hydroblock and Terrazzo surfaces, sourced and finished by hand for landmark residential, hospitality and commercial spaces.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
