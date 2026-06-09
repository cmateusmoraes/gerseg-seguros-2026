import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  /** Itens intermediários do breadcrumb (depois de "Home", antes da página atual) */
  trail?: { label: string; href?: string }[];
}

/** Banner de título das páginas internas + breadcrumb "Home › Serviços › …". */
export function PageBanner({ title, trail = [{ label: "Serviços" }] }: PageBannerProps) {
  return (
    <section className="bg-navy text-white">
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
                  <Link href={item.href} className="transition-colors hover:text-gold">
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
                {title}
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="font-serif text-4xl font-medium leading-tight desk:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
