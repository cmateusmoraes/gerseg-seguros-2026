import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export interface Plan {
  name: string;
  /** Itens herdados do plano anterior (exibidos compactos) */
  baseFeatures: string[];
  /** Itens NOVOS deste plano (destacados) */
  addedFeatures?: string[];
  /** Rótulo do que é herdado, ex.: "Tudo do plano Ideal" */
  inheritsLabel?: string;
  highlighted?: boolean;
}

/**
 * Cards comparativos de planos (Plano de Saúde Pet).
 * Sem preços por decisão de projeto — CTA "Consulte valores no WhatsApp".
 */
export function PricingTable({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 desk:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "flex flex-col rounded-card border bg-white p-6 transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg",
            plan.highlighted ? "border-gold shadow-md" : "border-line"
          )}
        >
          {plan.highlighted && (
            <span className="mb-3 self-start rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              Mais completo
            </span>
          )}
          <h3 className="font-serif text-2xl font-medium text-navy">{plan.name}</h3>

          <ul className="mt-5 flex-1 space-y-2.5">
            {plan.inheritsLabel ? (
              <li className="text-sm font-semibold text-navy">{plan.inheritsLabel}</li>
            ) : null}
            {(plan.inheritsLabel ? [] : plan.baseFeatures).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {f}
              </li>
            ))}
            {plan.addedFeatures?.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm font-medium text-navy">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <WhatsAppButton
            size="sm"
            variant={plan.highlighted ? "gold" : "solid"}
            className="mt-6 w-full"
          >
            Consulte valores
          </WhatsAppButton>
        </div>
      ))}
    </div>
  );
}
