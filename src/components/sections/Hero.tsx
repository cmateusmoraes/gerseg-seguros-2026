import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface HeroBullet {
  icon: LucideIcon;
  label: string;
}

interface HeroProps {
  /** Linhas navy do H1 */
  titleLines: string[];
  /** Linha dourada do H1 */
  titleAccent?: string;
  paragraph: string;
  cta: React.ReactNode;
  image: { src: string; alt: string };
  /** Selo no canto da imagem (ex.: "Corretora parceira" + logo Porto) */
  badge?: { label: string; logoSrc: string; logoAlt: string };
  bullets?: HeroBullet[];
  /**
   * "split" (padrão): 2 colunas texto + imagem (referência mockup Bike).
   * "banner": imagem panorâmica full-width com texto sobreposto (Home).
   */
  variant?: "split" | "banner";
}

/** Hero do design system. */
export function Hero({
  titleLines,
  titleAccent,
  paragraph,
  cta,
  image,
  badge,
  bullets,
  variant = "split",
}: HeroProps) {
  if (variant === "banner") {
    return (
      <section className="relative min-h-[520px] w-full overflow-hidden bg-navy desk:min-h-[640px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim navy: forte à esquerda (legibilidade do texto), some à direita */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-navy/40 desk:bg-transparent"
        />
        <div className="container-site relative flex min-h-[520px] items-center py-16 desk:min-h-[640px]">
          <div className="max-w-xl">
            <span aria-hidden className="mb-6 flex items-center gap-1.5">
              <span className="h-[3px] w-12 rounded-full bg-gold" />
              <span className="h-[3px] w-3 rounded-full bg-gold/50" />
            </span>
            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight desk:text-[3.4rem]">
              {titleLines.map((line) => (
                <span key={line} className="block text-white">
                  {line}
                </span>
              ))}
              {titleAccent && <span className="block text-gold">{titleAccent}</span>}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
              {paragraph}
            </p>
            <div className="mt-8">{cta}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Acento de fundo sutil em tom dourado */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-28 hidden h-[480px] w-[480px] rounded-full bg-gold/[0.07] desk:block"
      />
      <div className="container-site relative grid items-center gap-10 py-14 desk:grid-cols-2 desk:gap-14 desk:py-20">
        <div>
          <span aria-hidden className="mb-6 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-gold" />
            <span className="h-[3px] w-3 rounded-full bg-gold/50" />
          </span>
          <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight desk:text-[3.4rem]">
            {titleLines.map((line) => (
              <span key={line} className="block text-navy">
                {line}
              </span>
            ))}
            {titleAccent && <span className="block text-gold">{titleAccent}</span>}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {paragraph}
          </p>
          <div className="mt-8">{cta}</div>
        </div>

        <div className="relative">
          {badge && (
            <div className="absolute right-4 top-4 z-10 flex flex-col items-center gap-1 rounded-btn bg-white/90 px-4 py-2 shadow-md backdrop-blur">
              <span className="text-[10px] uppercase tracking-wider text-muted">
                {badge.label}
              </span>
              <Image
                src={badge.logoSrc}
                alt={badge.logoAlt}
                width={90}
                height={28}
                className="h-6 w-auto object-contain"
              />
            </div>
          )}
          <Image
            src={image.src}
            alt={image.alt}
            width={900}
            height={760}
            priority
            className="h-72 w-full rounded-img border-2 border-gold/40 object-cover shadow-card desk:h-[480px]"
          />
        </div>
      </div>

      {bullets && bullets.length > 0 && (
        <div className="border-t border-line">
          <div className="container-site grid grid-cols-2 gap-6 py-6 desk:grid-cols-4">
            {bullets.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
