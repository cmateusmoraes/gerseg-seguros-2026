import Image from "next/image";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { YouTubeEmbed } from "@/components/sections/YouTubeEmbed";

interface ProductIntroProps {
  /** Título da seção (default: "Conheça o Produto") */
  title?: string;
  titleAccent?: string;
  /** Parágrafos descritivos (texto 100% dos .md) */
  paragraphs: string[];
  /** Imagem OU vídeo do YouTube */
  image?: { src: string; alt: string };
  video?: { src: string; title: string };
  /** CTAs (WhatsAppButton, links de afiliado, etc.) */
  ctas?: React.ReactNode;
  /** Telefone em destaque sob os CTAs */
  phoneNote?: string;
  /** Inverte a ordem (mídia à direita) */
  reverse?: boolean;
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
}: ProductIntroProps) {
  return (
    <section className="bg-white">
      <div className="container-site section-pad grid items-center gap-10 desk:grid-cols-2 desk:gap-14">
        <div className={reverse ? "desk:order-2" : undefined}>
          {video ? (
            <YouTubeEmbed src={video.src} title={video.title} />
          ) : image ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={760}
              height={520}
              className="w-full rounded-img border border-line object-cover"
            />
          ) : null}
        </div>
        <div className={reverse ? "desk:order-1" : undefined}>
          <SectionHeading title={title} titleAccent={titleAccent} align="left" />
          <div className="mt-6 space-y-4">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          {ctas && <div className="mt-8 flex flex-wrap gap-4">{ctas}</div>}
          {phoneNote && (
            <p className="mt-5 text-sm font-semibold text-navy">{phoneNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
