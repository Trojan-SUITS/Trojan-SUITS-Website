import type { Metadata } from "next";
import { Orbitron, Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trojan SUITS 2027 | USC NASA SUITS Team",
  description:
    "USC's student team for NASA SUITS — building a mixed-reality heads-up display for astronauts. Now recruiting members, advisors, and outreach partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-sans">
        <Starfield />
        <div className="hud-overlay" />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
