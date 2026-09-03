import { ArrowUpRight } from "lucide-react";
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
  description?: string;
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
  description = "Converse com um especialista e encontre a proteção ideal para o que é importante para você.",
}: CtaDarkProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-14 desk:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-28 h-64 w-64 rounded-full bg-gold/[0.08] blur-3xl"
      />

      <div className="container-site relative">
        <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.055] px-6 py-9 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)] backdrop-blur-sm desk:px-12 desk:py-11">
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 hidden w-[38%] bg-gradient-to-l from-gold/[0.09] to-transparent desk:block"
          />

          <div className="relative grid items-center gap-8 desk:grid-cols-[minmax(0,1fr)_auto] desk:gap-14">
            <div className="max-w-2xl text-center desk:text-left">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-9 bg-gold" aria-hidden />
                Atendimento personalizado
              </span>
              <h2 className="font-serif text-3xl font-medium leading-[1.12] text-white desk:text-[2.75rem]">
                {title}
                {titleAccent && (
                  <span className="block text-gold">{titleAccent}</span>
                )}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 desk:mx-0 desk:text-base">
                {description}
              </p>
            </div>

            <a
              href={whatsappUrl(number)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar com a Gerseg pelo WhatsApp no número ${numberDisplay}`}
              className="group mx-auto flex w-full max-w-sm items-center gap-4 rounded-card bg-gold px-5 py-4 text-left text-navy shadow-[0_18px_35px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-navy desk:mx-0 desk:min-w-[340px] desk:px-6 desk:py-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-transform duration-300 group-hover:scale-105">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-navy/65">
                  Conversar no WhatsApp
                </span>
                <span className="mt-0.5 block font-serif text-xl font-bold desk:text-2xl">
                  {numberDisplay}
                </span>
                <span className="block text-xs text-navy/65">{subtext}</span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
