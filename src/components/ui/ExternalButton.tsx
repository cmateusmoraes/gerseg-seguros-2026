import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "gold";
  className?: string;
  product?: string;
  trackingLocation?: string;
}

/**
 * Botão para links externos (ex.: loja online da Porto Seguro — afiliado).
 * Não alterar as URLs: carregam o código do corretor (G5317J).
 */
export function ExternalButton({
  href,
  children,
  variant = "gold",
  className,
  product,
  trackingLocation = "external_button",
}: ExternalButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-affiliate={product}
      data-analytics-location={trackingLocation}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-btn px-6 py-3 text-sm font-semibold transition-all duration-200",
        variant === "gold"
          ? "bg-gold text-white hover:brightness-110"
          : "bg-navy text-white hover:bg-navy-hover",
        className
      )}
    >
      {children}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
