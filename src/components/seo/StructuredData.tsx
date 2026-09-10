interface StructuredDataProps {
  data: Record<string, unknown>;
  id: string;
}

/** Serializa JSON-LD estático sem permitir que caracteres HTML encerrem o script. */
export function StructuredData({ data, id }: StructuredDataProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export function ServiceStructuredData({ product }: { product: Product }) {
  return (
    <StructuredData
      id={`service-${product.slug}-structured-data`}
      data={serviceStructuredData(product)}
    />
  );
}
import type { Product } from "@/lib/products";
import { serviceStructuredData } from "@/lib/seo";
