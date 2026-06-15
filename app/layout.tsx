import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CardSpotlight } from "../components/CardSpotlight";
import { ScrollReveal } from "../components/ScrollReveal";

const description =
  "Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fonia-labs.vercel.app"),
  title: {
    default: "Fonia Labs | Where Ideas Become Companies",
    template: "%s | Fonia Labs"
  },
  description,
  keywords: [
    "Fonia Labs",
    "innovation group",
    "startup factory",
    "company building",
    "FonTech",
    "Ifidon Abraham"
  ],
  authors: [{ name: "Ifidon Abraham" }],
  creator: "Ifidon Abraham",
  openGraph: {
    type: "website",
    title: "Fonia Labs | Where Ideas Become Companies",
    description,
    siteName: "Fonia Labs"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonia Labs | Where Ideas Become Companies",
    description
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CardSpotlight />
        <ScrollReveal />
      </body>
    </html>
  );
}
