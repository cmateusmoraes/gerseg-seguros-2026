import type { LucideIcon } from "lucide-react";

export interface Step {
  title: string;
  description: string;
  icon?: LucideIcon;
}

/**
 * Passos numerados com círculo destacado e linha pontilhada conectando
 * (referência: seção "Contratar é fácil e seguro" do mockup).
 */
export function StepsGrid({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-10 desk:grid-cols-3 desk:gap-6">
      {steps.map(({ title, description, icon: Icon }, i) => (
        <li key={title} className="relative flex flex-col items-center text-center">
          {/* linha pontilhada (desktop, entre os passos) */}
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[calc(50%+44px)] top-8 hidden w-[calc(100%-88px)] border-t-2 border-dotted border-gold/50 desk:block"
            />
          )}
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-navy bg-white font-serif text-2xl font-bold text-navy">
            {i + 1}
          </span>
          {Icon && <Icon className="mt-4 h-6 w-6 text-gold" aria-hidden="true" />}
          <h3 className="mt-3 font-serif text-lg font-medium text-navy">{title}</h3>
          <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-muted">
            {description}
          </p>
        </li>
      ))}
    </ol>
  );
}
