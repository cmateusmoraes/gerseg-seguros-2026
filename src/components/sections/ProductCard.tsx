import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productUrl, type Product } from "@/lib/products";

/** Card de produto do grid da Home. */
export function ProductCard({ product }: { product: Product }) {
  const href = productUrl(product.slug);
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:border-gold/50 hover:shadow-card-hover">
      <Link href={href} className="block overflow-hidden" tabIndex={-1}>
        <Image
          src={product.cardImage}
          alt={product.title}
          width={370}
          height={240}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      {/* Filete dourado de acento */}
      <span aria-hidden className="h-1 w-full bg-gold" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-medium leading-snug text-navy">
          <Link href={href} className="transition-colors group-hover:text-gold">
            {product.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {product.cardDescription}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center justify-center gap-1.5 self-start rounded-btn bg-navy/5 px-4 py-2.5 text-sm font-semibold text-navy transition-all duration-200 group-hover:bg-gold group-hover:text-navy"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
