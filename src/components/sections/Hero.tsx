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
}

/** Hero 2 colunas do design system (referência: mockup Seguro Bike). */
export function Hero({
  titleLines,
  titleAccent,
  paragraph,
  cta,
  image,
  badge,
  bullets,
}: HeroProps) {
  return (
    <section className="bg-white">
      <div className="container-site grid items-center gap-10 py-14 desk:grid-cols-2 desk:gap-14 desk:py-20">
        <div>
          <h1 className="font-serif text-4xl font-medium leading-tight desk:text-5xl">
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
            className="w-full rounded-img object-cover"
          />
        </div>
      </div>

      {bullets && bullets.length > 0 && (
        <div className="border-t border-line">
          <div className="container-site grid grid-cols-2 gap-6 py-6 desk:grid-cols-4">
            {bullets.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
                <span className="text-sm text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
