import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4 | 5;
  /** Numeral serif dourado (01, 02...) acima de cada item */
  numbered?: boolean;
  /** Deslocamento vertical alternado no desktop (quebra a simetria) */
  stagger?: boolean;
  className?: string;
}

/**
 * Grid leve de diferenciais (sem card/borda) — referência: seção
 * "Por que escolher a Gerseg Seguros?" do mockup.
 */
export function FeatureGrid({
  items,
  columns = 4,
  numbered = false,
  stagger = false,
  className,
}: FeatureGridProps) {
  const cols: Record<number, string> = {
    2: "desk:grid-cols-2",
    3: "desk:grid-cols-3",
    4: "desk:grid-cols-4",
    5: "desk:grid-cols-5",
  };
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 sm:grid-cols-2",
        cols[columns],
        stagger && "desk:items-start",
        className
      )}
    >
      {items.map(({ icon: Icon, title, description }, i) => (
        <div
          key={title}
          className={cn(
            "relative desk:border-l desk:border-line desk:pl-5 desk:first:border-0 desk:first:pl-0",
            stagger && i % 2 === 1 && "desk:translate-y-10"
          )}
        >
          {numbered && (
            <span
              aria-hidden
              className="mb-2 block font-serif text-3xl font-bold leading-none text-gold"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-faq bg-gold/10 text-gold ring-1 ring-gold/25">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="text-sm font-semibold text-navy">{title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted">{description}</p>
        </div>
      ))}
    </div>
  );
}
