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
  metadataBase: new URL('https://texomacricket.com'),
  title: {
    default: "Texoma Cricket League | Premier Youth Cricket in Texas & Oklahoma",
    template: "%s | Texoma Cricket League"
  },
  description: "Join 1,200+ youth cricketers in Texoma's fastest-growing cricket league. Register for tournaments, coaching programs, and seasonal leagues for ages 6-18.",
  keywords: ["texoma cricket", "youth cricket texas", "cricket league oklahoma", "junior cricket programs", "cricket tournaments texas", "kids cricket league", "cricket coaching", "TCL"],
  authors: [{ name: "Texoma Cricket League" }],
  creator: "Texoma Cricket League",
  publisher: "Texoma Cricket League",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://texomacricket.com',
    siteName: 'Texoma Cricket League',
    title: "Texoma Cricket League | Premier Youth Cricket in Texas & Oklahoma",
    description: "Join 1,200+ youth cricketers in Texoma's fastest-growing cricket league. Register for tournaments, coaching programs, and seasonal leagues for ages 6-18.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Texoma Cricket League - Premier Youth Cricket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Texoma Cricket League | Premier Youth Cricket",
    description: "Join 1,200+ youth cricketers in Texoma's fastest-growing cricket league.",
    images: ['/og-image.png'],
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
