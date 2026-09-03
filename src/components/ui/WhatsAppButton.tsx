import { cva, type VariantProps } from "class-variance-authority";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const whatsappButton = cva(
  "inline-flex items-center justify-center gap-2.5 rounded-btn font-sans font-semibold transition-all duration-200",
  {
    variants: {
      variant: {
        solid: "bg-navy text-white hover:bg-navy-hover",
        azure:
          "bg-azure text-white shadow-card hover:bg-azure-hover hover:-translate-y-px",
        gold: "bg-gold text-navy hover:brightness-105",
        outline:
          "border-2 border-navy text-navy hover:bg-navy hover:text-white",
        light:
          "bg-white text-navy hover:bg-gold hover:text-white",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base uppercase tracking-wide",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

interface WhatsAppButtonProps extends VariantProps<typeof whatsappButton> {
  children: React.ReactNode;
  /** Número E.164 sem "+" (default: WhatsApp canônico do site) */
  number?: string;
  withIcon?: boolean;
  className?: string;
}

/**
 * Único CTA de conversão do site: todo botão de contato abre o WhatsApp.
 * O número vem de lib/config.ts — nunca hardcodar.
 */
export function WhatsAppButton({
  children,
  number = siteConfig.whatsapp.number,
  variant,
  size,
  withIcon = true,
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(number)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(whatsappButton({ variant, size }), className)}
    >
      {withIcon && <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />}
      {children}
    </a>
  );
}
