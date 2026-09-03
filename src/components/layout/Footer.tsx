import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div aria-hidden className="h-1 w-full bg-gold" />
      <div className="container-site grid gap-10 py-14 desk:grid-cols-4 desk:gap-8">
        {/* Logo + tagline */}
        <div>
          <Link href="/">
            <Image
              src="/assets/logo/logo-gerseg-branca.webp"
              alt="Gerseg Seguros"
              width={170}
              height={50}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Corretora de Seguros desde 1985.
            <br />
            Experiência, confiança e atendimento que faz a diferença.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-serif text-lg">
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            Dúvidas? Contato
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{siteConfig.phone.cellDisplay}</li>
            <li>{siteConfig.phone.display}</li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Horário */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-serif text-lg">
            <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
            Horário de Atendimento
          </h3>
          <p className="text-sm text-white/80">{siteConfig.hoursShort}</p>
          <p className="mt-1 text-sm text-white/60">Segunda a sexta</p>
        </div>

        {/* Localização */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-serif text-lg">
            <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
            Nossa Localização
          </h3>
          <p className="text-sm leading-relaxed text-white/80">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 text-center text-xs text-white/50">
          © {year} Gerseg Seguros. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
