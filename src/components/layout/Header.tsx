"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Facebook, Instagram, Mail, Menu, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { products, productUrl } from "@/lib/products";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const navLinks = [
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top bar */}
      <div className="bg-navy text-white">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-gold"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">{siteConfig.email}</span>
            <span className="sm:hidden">E-mail</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="hidden text-white/70 desk:inline">
              Fique conectado:
            </span>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Gerseg Seguros"
              className="transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Gerseg Seguros"
              className="transition-colors hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-white">
        <div className="container-site flex h-[72px] items-center justify-between gap-6">
          {/* Logo + tagline */}
          <Link href="/" className="flex shrink-0 items-center gap-3" onClick={closeMobile}>
            <Image
              src="/assets/logo/logo-gerseg-azul.png"
              alt="Gerseg Seguros"
              width={150}
              height={44}
              priority
              className="h-10 w-auto"
            />
            <span className="hidden border-l border-line pl-3 text-xs leading-tight text-muted lg:block">
              Corretora
              <br />
              de Seguros
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 desk:flex" aria-label="Navegação principal">
            <Link
              href="/#quem-somos"
              className="text-sm font-medium transition-colors hover:text-gold"
            >
              Quem Somos
            </Link>

            {/* Produtos dropdown (hover/focus) */}
            <div className="group relative">
              <Link
                href="/#produtos"
                className="flex items-center gap-1 py-6 text-sm font-medium transition-colors hover:text-gold"
              >
                Produtos
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 rounded-faq border border-line bg-white py-2 opacity-0 shadow-xl transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={productUrl(p.slug)}
                    className="block px-5 py-2.5 text-sm transition-colors hover:bg-surface hover:text-gold"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#contato"
              className="text-sm font-medium transition-colors hover:text-gold"
            >
              Contato
            </Link>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-btn bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-hover"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Como posso te ajudar?
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="desk:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden border-t border-line bg-white transition-all duration-200 desk:hidden",
            mobileOpen ? "max-h-[640px]" : "max-h-0 border-t-0"
          )}
        >
          <nav className="container-site flex flex-col py-4" aria-label="Navegação mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMobile}
                className="border-b border-line py-3 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              className="flex items-center justify-between border-b border-line py-3 text-sm font-medium"
              aria-expanded={mobileProductsOpen}
              onClick={() => setMobileProductsOpen((v) => !v)}
            >
              Produtos
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileProductsOpen && "rotate-180"
                )}
              />
            </button>
            {mobileProductsOpen && (
              <div className="flex flex-col bg-surface">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={productUrl(p.slug)}
                    onClick={closeMobile}
                    className="border-b border-line px-4 py-3 text-sm text-muted"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            )}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-btn bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Como posso te ajudar?
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
