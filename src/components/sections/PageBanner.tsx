import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  /** Rótulo curto no breadcrumb quando o H1 for mais descritivo. */
  currentLabel?: string;
  /** Itens intermediários do breadcrumb (depois de "Home", antes da página atual) */
  trail?: { label: string; href?: string }[];
}

/** Banner de título das páginas internas + breadcrumb "Home › Serviços › …". */
export function PageBanner({
  title,
  currentLabel = title,
  trail = [{ label: "Serviços", href: "/#produtos" }],
}: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-40 -z-10 h-[580px] w-[580px] rounded-full border border-gold/25 after:absolute after:inset-12 after:rounded-full after:border after:border-gold/15"
      />
      <div className="container-site py-14 desk:py-20">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            {trail.map((item) => (
              <li key={item.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span aria-current="page" className="text-gold">
                {currentLabel}
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="hero-enter max-w-4xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] desk:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
