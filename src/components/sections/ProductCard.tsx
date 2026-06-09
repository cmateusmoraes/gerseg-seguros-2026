import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productUrl, type Product } from "@/lib/products";

/** Card de produto do grid da Home. */
export function ProductCard({ product }: { product: Product }) {
  const href = productUrl(product.slug);
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg">
      <Link href={href} className="block overflow-hidden" tabIndex={-1}>
        <Image
          src={product.cardImage}
          alt={product.title}
          width={370}
          height={240}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-medium text-navy">
          <Link href={href} className="transition-colors hover:text-gold">
            {product.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {product.cardDescription}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-navy"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
