import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { productUrl, products } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/` },
    ...products.map((product) => ({
      url: new URL(productUrl(product.slug), `${siteConfig.url}/`).toString(),
    })),
  ];
}
