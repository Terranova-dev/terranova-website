import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import "./sections.css";

export const metadata: Metadata = {
  title: "Terranova — High-End Flooring",
  description:
    "Engineered hardwood, natural stone and marble, seamless microcement and terrazzo — designed and laid by hand for landmark residential, hospitality and commercial spaces.",
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
