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
  className?: string;
}

/**
 * Grid leve de diferenciais (sem card/borda) — referência: seção
 * "Por que escolher a Gerseg Seguros?" do mockup.
 */
export function FeatureGrid({ items, columns = 4, className }: FeatureGridProps) {
  const cols: Record<number, string> = {
    2: "desk:grid-cols-2",
    3: "desk:grid-cols-3",
    4: "desk:grid-cols-4",
    5: "desk:grid-cols-5",
  };
  return (
    <div className={cn("grid grid-cols-1 gap-8 sm:grid-cols-2", cols[columns], className)}>
      {items.map(({ icon: Icon, title, description }) => (
        <div key={title} className="desk:border-l desk:border-line desk:pl-5 desk:first:border-0 desk:first:pl-0">
          <Icon className="mb-3 h-7 w-7 text-navy" aria-hidden="true" />
          <h3 className="text-sm font-semibold text-navy">{title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted">{description}</p>
        </div>
      ))}
    </div>
  );
}
