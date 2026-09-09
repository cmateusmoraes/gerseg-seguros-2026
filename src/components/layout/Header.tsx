"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { products, productUrl } from "@/lib/products";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const productToggle = useRef<HTMLButtonElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const close = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) close();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header
      ref={header}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          if (mobileOpen) mobileToggle.current?.focus();
          else if (productsOpen) productToggle.current?.focus();
          close();
        }
      }}
      className={cn(
        "sticky top-0 z-40 border-b border-navy/10 bg-surface/95 backdrop-blur-xl transition-shadow duration-300",
        scrolled && "shadow-[0_4px_30px_-15px_rgba(0,36,64,0.25)]",
      )}
    >
      <div className="border-b border-navy/10">
        <div className="container-site flex h-8 items-center justify-between gap-4 text-[10px] text-muted">
          <span>Experiência e confiança desde 1985.</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden transition-colors hover:text-navy sm:block"
          >
            {siteConfig.email}
          </a>
          <span className="sm:hidden">São Paulo, SP</span>
        </div>
      </div>
      <div
        className={cn(
          "container-site flex items-center justify-between gap-6 transition-[height] duration-300",
          scrolled ? "h-[72px]" : "h-[88px]",
        )}
      >
        <Link
          href="/"
          onClick={close}
          aria-label="Gerseg Seguros — página inicial"
          className="shrink-0"
        >
          <Image
            src="/assets/logo/logo-gerseg-azul.webp"
            alt="Gerseg Seguros"
            width={300}
            height={80}
            priority
            className="h-auto w-[165px] desk:w-[190px]"
          />
        </Link>
        <nav
          className="hidden items-center gap-8 desk:flex"
          aria-label="Navegação principal"
        >
          <Link href="/#quem-somos" className="nav-link">
            Quem somos
          </Link>
          <div
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setProductsOpen(false);
            }}
          >
            <button
              ref={productToggle}
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              aria-expanded={productsOpen}
              aria-controls="desktop-products"
              className="nav-link flex items-center gap-2"
            >
              Produtos{" "}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform",
                  productsOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            {productsOpen && (
              <div
                id="desktop-products"
                className="absolute left-1/2 top-full mt-5 w-[350px] -translate-x-1/2 border border-line bg-surface p-3 shadow-xl"
              >
                {products.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={productUrl(p.slug)}
                    onClick={close}
                    className="group flex items-center gap-4 border-b border-line px-3 py-3.5 text-xs last:border-0 hover:bg-[#eeece5]"
                  >
                    <span className="text-[10px] text-muted">0{i + 1}</span>
                    <span className="flex-1">{p.title}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
                <Link
                  href="/#produtos"
                  onClick={close}
                  className="mt-2 flex items-center justify-between bg-navy px-4 py-3 text-xs text-white"
                >
                  Todos os produtos{" "}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
          <Link href="/service/seguro-automovel/" className="nav-link">
            Seguro automóvel
          </Link>
          <Link href="/#contato" className="nav-link">
            Contato
          </Link>
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 items-center gap-3 rounded-btn bg-navy px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-navy-hover desk:flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Faça uma cotação
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={mobileToggle}
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setProductsOpen(false);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 desk:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="max-h-[calc(100dvh-122px)] overflow-y-auto border-t border-line bg-surface px-[5%] pb-6 desk:hidden"
        >
          <Link
            href="/#quem-somos"
            onClick={close}
            className="block border-b border-line py-4 text-sm"
          >
            Quem somos
          </Link>
          <button
            type="button"
            onClick={() => setProductsOpen(!productsOpen)}
            aria-expanded={productsOpen}
            aria-controls="mobile-products"
            className="flex w-full items-center justify-between border-b border-line py-4 text-sm"
          >
            Produtos{" "}
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform",
                productsOpen && "rotate-180",
              )}
            />
          </button>
          {productsOpen && (
            <div id="mobile-products" className="bg-[#eeece5] px-4">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={productUrl(p.slug)}
                  onClick={close}
                  className="flex min-h-11 items-center border-b border-navy/10 py-3 text-xs last:border-0"
                >
                  {p.title}
                </Link>
              ))}
              <Link
                href="/#produtos"
                onClick={close}
                className="block py-4 text-xs font-semibold"
              >
                Todos os produtos →
              </Link>
            </div>
          )}
          <Link
            href="/#contato"
            onClick={close}
            className="block border-b border-line py-4 text-sm"
          >
            Contato
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex min-h-12 items-center justify-center gap-3 rounded-btn bg-navy px-5 py-3 text-sm text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Faça uma cotação
          </a>
        </nav>
      )}
    </header>
  );
}
