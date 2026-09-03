import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Kicker em caps acima do título (ex.: "COMO FUNCIONA") */
  eyebrow?: string;
  /** Primeira linha — navy */
  title: string;
  /** Segunda linha — dourado (padrão visual do mockup) */
  titleAccent?: string;
  align?: "left" | "center";
  /** Usar em fundos escuros (linha 1 branca) */
  onDark?: boolean;
  /** Régua dourada curta abaixo do título (acento editorial) */
  withRule?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

/**
 * Headline padrão do design system: serif em duas cores
 * (linha 1 navy/branca, linha 2 dourada).
 */
export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  align = "center",
  onDark = false,
  withRule = false,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-serif font-medium leading-tight",
          Tag === "h1" ? "text-4xl desk:text-5xl" : "text-3xl desk:text-4xl",
          onDark ? "text-white" : "text-navy"
        )}
      >
        {title}
        {titleAccent && <span className="block text-gold">{titleAccent}</span>}
      </Tag>
      {withRule && (
        <span
          aria-hidden
          className={cn(
            "mt-5 flex items-center gap-1.5",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-[3px] w-12 rounded-full bg-gold" />
          <span className="h-[3px] w-3 rounded-full bg-gold/50" />
        </span>
      )}
    </div>
  );
}
