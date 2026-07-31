import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Self-hosted (rather than next/font/google) so the production build doesn't
// depend on fetching fonts.gstatic.com at build time — that fetch has been
// flaky/failing on some hosts' build infra with Next.js 16.2.
const orbitron = localFont({
  src: [
    { path: "../fonts/orbitron.woff2", weight: "500", style: "normal" },
    { path: "../fonts/orbitron.woff2", weight: "700", style: "normal" },
    { path: "../fonts/orbitron.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = localFont({
  src: [
    { path: "../fonts/rajdhani-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/rajdhani-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/rajdhani-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-rajdhani",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trojan SUITS 2027 | USC NASA SUITS Team",
  description:
    "USC's student team for NASA SUITS: building a mixed-reality heads-up display for astronauts. Now recruiting members, advisors, and outreach partners.",
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
