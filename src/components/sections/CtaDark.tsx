import { ArrowUpRight, Clock3, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { HumanNote } from "@/components/sections/HumanNote";

interface CtaDarkProps {
  title: string;
  titleAccent?: string;
  /** Preserve each product's contact, including the dedicated Bike number. */
  number?: string;
  numberDisplay?: string;
  subtext?: string;
  description?: string;
}

/** One continuous surface brings the invitation and contact options together. */
export function CtaDark({
  title,
  titleAccent,
  number = siteConfig.whatsapp.number,
  numberDisplay = siteConfig.whatsapp.display,
  subtext = "Pode perguntar. A gente explica.",
  description = "Conte o que você precisa. A gente ouve, explica as opções e ajuda você a escolher com tranquilidade.",
}: CtaDarkProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white" aria-label="Converse com a Gerseg">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-72 -z-10 h-[650px] w-[650px] rounded-full border border-gold/15 after:absolute after:inset-14 after:rounded-full after:border after:border-gold/10" />
      <div className="container-site py-14 desk:py-20">
        <div data-reveal className="grid items-center gap-10 desk:grid-cols-[1.15fr_0.85fr] desk:gap-16">
          <div className="max-w-2xl">
            <HumanNote onDark>De pessoa pra pessoa.</HumanNote>
            <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.12] tracking-[-0.035em] desk:text-5xl">
              {title}
              {titleAccent && <span className="mt-1 block font-normal italic text-gold">{titleAccent}</span>}
            </h2>
            <p className="mt-5 max-w-[440px] text-sm leading-7 text-white/75">{description}</p>
          </div>
          <div className="border-t border-white/20 pt-8 desk:border-l desk:border-t-0 desk:py-2 desk:pl-14">
            <p className="font-serif text-2xl font-medium">Uma conversa faz a diferença.</p>
            <p className="mt-2 text-sm leading-6 text-white/70">{subtext}</p>
            <a href={whatsappUrl(number)} target="_blank" rel="noopener noreferrer" aria-label={`Conversar com a Gerseg pelo WhatsApp no número ${numberDisplay}`} className="group mt-6 inline-flex min-h-14 w-full items-center justify-between gap-3 rounded-btn bg-gold px-5 py-4 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105">
              <span className="flex items-center gap-3"><WhatsAppIcon className="h-5 w-5 shrink-0" />Conversar no WhatsApp</span>
              <ArrowUpRight size={19} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href={`tel:+${number}`} className="mt-4 flex min-h-11 flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80 underline-offset-4 hover:text-white hover:underline">
              <Phone size={15} className="mr-1 shrink-0 text-gold" aria-hidden="true" />
              <span>Prefere ligar?</span><span className="whitespace-nowrap font-medium text-white">{numberDisplay}</span>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/15 pt-5 text-xs leading-6 text-white/65 sm:flex-row desk:mt-12">
          <p>Atendimento próximo, do primeiro contato em diante.</p>
          <p className="flex items-center gap-2"><Clock3 size={14} className="shrink-0" aria-hidden="true" />{siteConfig.hours}</p>
        </div>
      </div>
    </section>
  );
}
