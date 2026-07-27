import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terranova — High-End Flooring",
  description:
    "Engineered hardwood, natural stone and marble, seamless microcement and terrazzo — designed and laid by hand for landmark residential, hospitality and commercial spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Jost:wght@400;500&family=Newsreader:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
