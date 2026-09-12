import Image from "next/image";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { YouTubeEmbed } from "@/components/sections/YouTubeEmbed";
import { HumanNote } from "@/components/sections/HumanNote";

interface ProductIntroProps {
  /** Título da seção (default: "Conheça o Produto") */
  title?: string;
  titleAccent?: string;
  /** Parágrafos descritivos (texto 100% dos .md) */
  paragraphs: string[];
  /** Imagem principal e, opcionalmente, vídeo complementar do YouTube */
  image?: { src: string; alt: string };
  video?: { src: string; title: string };
  /** CTAs (WhatsAppButton, links de afiliado, etc.) */
  ctas?: React.ReactNode;
  /** Telefone em destaque sob os CTAs */
  phoneNote?: string;
  /** Inverte a ordem (mídia à direita) */
  reverse?: boolean;
  trackingLocation?: string;
}

/** Seção "Conheça o Produto": mídia + texto + CTAs (template das páginas internas). */
export function ProductIntro({
  title = "Conheça o Produto",
  titleAccent,
  paragraphs,
  image,
  video,
  ctas,
  phoneNote,
  reverse = false,
  trackingLocation = "product_intro",
}: ProductIntroProps) {
  return (
    <section className="bg-white">
      <div className="container-site section-pad">
        <div
          data-reveal
          className="grid items-center gap-10 desk:grid-cols-2 desk:gap-20"
        >
          <div className={reverse ? "desk:order-2" : undefined}>
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={760}
                height={507}
                sizes="(min-width: 980px) 45vw, 90vw"
                className="aspect-[4/3] w-full rounded-[4px] object-cover"
              />
            ) : video ? (
              <YouTubeEmbed src={video.src} title={video.title} />
            ) : null}
          </div>
          <div className={reverse ? "desk:order-1" : undefined}>
            <SectionHeading
              title={title}
              titleAccent={titleAccent}
              align="left"
            />
            <div className="mt-6 space-y-4">
              {paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-base leading-relaxed text-muted"
                >
                  {p}
                </p>
              ))}
            </div>
            <HumanNote className="mt-6">Seu seguro, explicado em uma conversa.</HumanNote>
            {ctas && <div className="mt-6 flex flex-wrap gap-4">{ctas}</div>}
            {phoneNote && (
              <a href={`tel:+55${phoneNote.replace(/\D/g, "")}`} data-analytics-location={`${trackingLocation}_phone`} className="mt-3 inline-flex min-h-11 flex-wrap items-center gap-x-2 text-sm text-muted underline-offset-4 hover:text-navy hover:underline">
                Prefere conversar por telefone? <span className="font-medium text-navy">{phoneNote}</span>
              </a>
            )}
          </div>
        </div>
        {image && video && (
          <div className="mx-auto mt-12 max-w-4xl">
            <YouTubeEmbed
              src={video.src}
              title={video.title}
              posterSrc={image.src}
            />
          </div>
        )}
      </div>
    </section>
  );
}
