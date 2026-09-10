import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { productUrl, products, type Product } from "@/lib/products";

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;
export const socialShareImagePath =
  "/assets/imagens/gerseg-social-share.jpg";

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "09:00",
  closes: "18:00",
};

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      "@id": organizationId,
      name: siteConfig.name,
      alternateName: siteConfig.fullName,
      url: `${siteConfig.url}/`,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/logo/logo-gerseg-azul.png"),
        width: 300,
        height: 80,
      },
      image: {
        "@type": "ImageObject",
        url: absoluteUrl(socialShareImagePath),
        width: 1200,
        height: 630,
        caption: "Gerseg Seguros — protegendo o que importa pra você.",
      },
      description: siteConfig.description,
      foundingDate: "1985",
      slogan: "De pessoa para pessoa.",
      telephone: `+${siteConfig.whatsapp.number}`,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country,
      },
      openingHoursSpecification: openingHours,
      sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${siteConfig.whatsapp.number}`,
        email: siteConfig.email,
        availableLanguage: "Portuguese",
        hoursAvailable: openingHours,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Seguros e serviços",
        itemListElement: products.map((product) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: product.title,
            url: absoluteUrl(productUrl(product.slug)),
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      alternateName: siteConfig.fullName,
      inLanguage: "pt-BR",
      publisher: { "@id": organizationId },
    },
  ],
};

const socialImage = {
  url: socialShareImagePath,
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Gerseg Seguros — protegendo o que importa pra você",
};

export const homeMetadata: Metadata = {
  title: { absolute: "Gerseg Seguros | Corretora de Seguros em São Paulo" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gerseg Seguros | Corretora de Seguros em São Paulo",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerseg Seguros | Corretora de Seguros em São Paulo",
    description: siteConfig.description,
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  },
};

export function serviceMetadata(product: Product): Metadata {
  const url = productUrl(product.slug);

  return {
    title: product.title,
    description: product.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.title} | ${siteConfig.name}`,
      description: product.seoDescription,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | ${siteConfig.name}`,
      description: product.seoDescription,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}

export function serviceStructuredData(product: Product) {
  const url = absoluteUrl(productUrl(product.slug));
  const serviceId = `${url}#service`;
  const breadcrumbId = `${url}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${product.title} | ${siteConfig.name}`,
        description: product.seoDescription,
        inLanguage: "pt-BR",
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: product.title,
        serviceType: product.title,
        description: product.seoDescription,
        url,
        image: absoluteUrl(product.cardImage),
        provider: { "@id": organizationId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: `${siteConfig.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Seguros e serviços",
            item: `${siteConfig.url}/#produtos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqStructuredData(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
