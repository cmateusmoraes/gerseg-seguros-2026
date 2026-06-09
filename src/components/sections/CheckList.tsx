import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckListProps {
  /** Subtítulo do bloco, ex.: "Básicas" / "Adicionais" */
  title?: string;
  items: string[];
  columns?: 1 | 2;
  className?: string;
}

/** Lista de coberturas/vantagens com check dourado (páginas de produto). */
export function CheckList({ title, items, columns = 1, className }: CheckListProps) {
  return (
    <div className={className}>
      {title && (
        <h3 className="mb-4 font-serif text-xl font-medium text-navy">{title}</h3>
      )}
      <ul
        className={cn(
          "space-y-3",
          columns === 2 && "desk:grid desk:grid-cols-2 desk:gap-x-8 desk:gap-y-3 desk:space-y-0"
        )}
      >
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
              <Check className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
