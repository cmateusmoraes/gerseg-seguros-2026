import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Motion } from "@/components/layout/Motion";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "./fonts/playfair-display-latin.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "./fonts/playfair-display-italic-latin.woff2",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gerseg Seguros – Corretora de Seguros",
    template: "%s – Gerseg Seguros",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Gerseg Seguros – Corretora de Seguros",
    description: siteConfig.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <Motion />
      </body>
    </html>
  );
}
