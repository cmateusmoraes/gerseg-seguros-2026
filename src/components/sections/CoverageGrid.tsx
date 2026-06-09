import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CoverageItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface CoverageGridProps {
  items: CoverageItem[];
  /** Colunas no desktop (default 3) */
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/**
 * Grid de coberturas/vantagens: ícone + título + descrição curta
 * (referência: seção "O seguro bike da Porto cobre" do mockup).
 */
export function CoverageGrid({ items, columns = 3, className }: CoverageGridProps) {
  const cols: Record<number, string> = {
    2: "desk:grid-cols-2",
    3: "desk:grid-cols-3",
    4: "desk:grid-cols-4",
    5: "desk:grid-cols-5",
    6: "desk:grid-cols-6",
  };
  return (
    <div className={cn("grid grid-cols-1 gap-5 sm:grid-cols-2", cols[columns], className)}>
      {items.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="rounded-card border border-line bg-white p-6 text-center transition-all duration-200 hover:-translate-y-[5px] hover:shadow-md"
        >
          <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-line text-navy">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="text-sm font-semibold text-navy">{title}</h3>
          {description && (
            <p className="mt-2 text-xs leading-relaxed text-muted">{description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
