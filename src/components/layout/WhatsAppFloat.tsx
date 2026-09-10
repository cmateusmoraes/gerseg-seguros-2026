import { siteConfig, whatsappUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/** Botão flutuante de WhatsApp — presente em todas as páginas. */
export function WhatsAppFloat({
  number = siteConfig.whatsapp.number,
}: {
  number?: string;
}) {
  return (
    <a
      href={whatsappUrl(number)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-navy text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-btn bg-navy px-4 py-2.5 text-xs opacity-0 shadow-lg transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        Como posso te ajudar?
      </span>
    </a>
  );
}
