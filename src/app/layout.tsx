import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Motion } from "@/components/layout/Motion";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { StructuredData } from "@/components/seo/StructuredData";
import { siteStructuredData } from "@/lib/seo";
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
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Gerseg Seguros | Corretora de Seguros em São Paulo",
    template: "%s | Gerseg Seguros",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Gerseg Seguros | Corretora de Seguros em São Paulo",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link
          rel="describedby"
          href="/llms.txt"
          type="text/markdown"
          title="Resumo da Gerseg Seguros para assistentes de IA"
        />
      </head>
      <body>
        <StructuredData id="site-structured-data" data={siteStructuredData} />
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}
