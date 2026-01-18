import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveTicker from "@/components/LiveTicker";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sports Texoma | Premier Multi-Sport Facility",
  description: "One destination, endless passion. Cricket, soccer, volleyball & more. Book courts, join tournaments, become a member.",
  keywords: "sports texoma, cricket texoma, youth sports texas, sports facility texas oklahoma, tournament registration",
  openGraph: {
    title: "Sports Texoma | Premier Multi-Sport Facility",
    description: "One destination, endless passion. Cricket, soccer, volleyball & more.",
    images: ["https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} bg-bg-cream text-text-dark font-body leading-relaxed overflow-x-hidden antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <LiveTicker />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
