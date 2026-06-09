import { siteConfig, whatsappUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

interface CtaDarkProps {
  /** Linha 1 — branca */
  title: string;
  /** Linha 2 — dourada */
  titleAccent?: string;
  /** Número E.164 do WhatsApp (default: canônico) */
  number?: string;
  /** Número formatado exibido no card */
  numberDisplay?: string;
  subtext?: string;
}

/**
 * CTA final de página: fundo navy, headline 2 cores à esquerda,
 * card de telefone clicável à direita (referência: mockup Bike).
 */
export function CtaDark({
  title,
  titleAccent,
  number = siteConfig.whatsapp.number,
  numberDisplay = siteConfig.whatsapp.display,
  subtext = "Atendimento pelo WhatsApp",
}: CtaDarkProps) {
  return (
    <section className="bg-navy">
      <div className="container-site flex flex-col items-center gap-8 py-16 text-center desk:flex-row desk:justify-between desk:py-20 desk:text-left">
        <h2 className="font-serif text-3xl font-medium leading-tight text-white desk:text-4xl">
          {title}
          {titleAccent && <span className="block text-gold">{titleAccent}</span>}
        </h2>
        <a
          href={whatsappUrl(number)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-4 rounded-card border border-white/40 px-8 py-5 text-white transition-all duration-200 hover:-translate-y-[5px] hover:border-gold hover:text-gold"
        >
          <WhatsAppIcon className="h-8 w-8" />
          <span>
            <span className="block font-serif text-2xl font-bold desk:text-3xl">
              {numberDisplay}
            </span>
            <span className="block text-xs text-white/70">{subtext}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
