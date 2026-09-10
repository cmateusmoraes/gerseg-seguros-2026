"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, productUrl } from "@/lib/products";
import { cn } from "@/lib/utils";

const categories = [
  { label: "Todos os produtos", slugs: products.map((p) => p.slug) },
  { label: "Mobilidade", slugs: ["seguro-automovel", "seguro-bike"] },
  {
    label: "Seu lar",
    slugs: [
      "seguro-aluguel-fianca",
      "titulo-de-capitalizacao-para-locacao",
      "seguro-incendio-residencial",
    ],
  },
  {
    label: "Seu dia a dia",
    slugs: ["plano-de-saude-pet", "seguro-celular", "seguro-notebook"],
  },
] as const;

export function ProductExplorer() {
  const [active, setActive] = useState(0);
  const category = categories[active] ?? categories[0];
  const visible = products.filter((product) =>
    (category.slugs as readonly string[]).includes(product.slug),
  );

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar produtos por categoria"
      >
        {categories.map((category, index) => (
          <button
            key={category.label}
            type="button"
            aria-label={`${category.label}, ${category.slugs.length} produtos`}
            aria-pressed={active === index}
            aria-controls="product-results"
            onClick={() => setActive(index)}
            className={cn(
              "min-h-11 rounded-full border px-5 py-3 text-xs font-medium transition-colors duration-300",
              active === index
                ? "border-navy bg-navy text-white"
                : "border-navy/20 bg-transparent text-muted hover:border-navy hover:text-navy",
            )}
          >
            {category.label}
            <span
              aria-hidden="true"
              className={cn(
                "ml-3 text-[10px]",
                active === index ? "text-white/60" : "text-muted",
              )}
            >
              {String(category.slugs.length).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} produtos em {category.label}.
      </p>
      <div
        id="product-results"
        className={cn(
          "grid gap-5 sm:grid-cols-2",
          visible.length === 2 ? "desk:grid-cols-2" : "desk:grid-cols-3",
        )}
      >
        {visible.map((product, index) => (
          <Link
            key={`${active}-${product.slug}`}
            href={productUrl(product.slug)}
            className={cn(
              "product-tile group relative isolate flex min-h-[330px] flex-col justify-end overflow-hidden rounded-[4px] bg-navy p-6 text-white sm:min-h-[365px] desk:p-7",
              active === 0 && index === 0 && "desk:col-span-2 desk:min-h-[400px]",
              active === 0 && index === 1 && "desk:min-h-[400px]",
            )}
          >
            <Image
              src={product.cardImage}
              alt=""
              fill
              sizes={
                active === 0 && index === 0
                  ? "(min-width: 980px) 62vw, (min-width: 640px) 45vw, 90vw"
                  : "(min-width: 980px) 31vw, (min-width: 640px) 45vw, 90vw"
              }
              className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-t from-[#001a2e] via-[#001a2e]/35 to-[#001a2e]/5"
            />
            <span className="absolute left-6 top-6 text-[10px] tracking-[0.18em] text-white/80">
              GERSEG / {String(products.indexOf(product) + 1).padStart(2, "0")}
            </span>
            <span className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/45 transition-all duration-300 group-hover:rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
              <ArrowUpRight size={19} aria-hidden="true" />
            </span>
            <h3
              className={cn(
                "max-w-[320px] font-serif text-[27px] font-medium leading-[1.16] tracking-tight",
                active === 0 && index === 0 && "desk:max-w-none desk:text-[38px]",
              )}
            >
              {product.title}
            </h3>
            <p className="mt-3 max-w-md text-xs leading-6 text-white/80">
              {product.cardDescription}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-gold">
              Saiba mais <ArrowUpRight size={13} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
