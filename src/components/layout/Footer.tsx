import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-navy/15 bg-[#eeece5] text-navy">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 desk:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] desk:gap-12 desk:py-16">
        <div>
          <Link href="/" aria-label="Gerseg Seguros — página inicial">
            <Image
              src="/assets/logo/logo-gerseg-azul.webp"
              alt="Gerseg Seguros"
              width={300}
              height={80}
              className="h-auto w-48"
            />
          </Link>
          <p className="mt-5 max-w-[240px] text-xs leading-6 text-muted">
            Corretora de Seguros desde 1985.
            <br />
            Experiência, confiança e atendimento que faz a diferença.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              {
                label: "Instagram",
                href: siteConfig.social.instagram,
                Icon: Instagram,
                socialNetwork: "instagram",
              },
              {
                label: "Facebook",
                href: siteConfig.social.facebook,
                Icon: Facebook,
                socialNetwork: "facebook",
              },
              {
                label: "WhatsApp",
                href: whatsappUrl(),
                Icon: WhatsAppIcon,
                socialNetwork: undefined,
              },
            ].map(({ label, href, Icon, socialNetwork }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} da Gerseg Seguros`}
                data-analytics-social={socialNetwork}
                data-analytics-location="footer_social"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 transition-colors hover:bg-navy hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="eyebrow mb-6 text-muted">Gerseg</h2>
          <nav
            className="flex flex-col items-start gap-4 text-xs"
            aria-label="Navegação do rodapé"
          >
            <Link href="/#quem-somos" className="hover:underline">
              Quem somos
            </Link>
            <Link href="/#produtos" className="hover:underline">
              Produtos
            </Link>
            <Link href="/#contato" className="hover:underline">
              Contato
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="eyebrow mb-6 text-muted">Dúvidas? Contato</h2>
          <a
            href={`tel:+55${siteConfig.phone.cellDisplay.replace(/\D/g, "")}`}
            data-analytics-location="footer_phone_mobile"
            className="block text-sm hover:underline"
          >
            {siteConfig.phone.cellDisplay}
          </a>
          <a
            href={`tel:+${siteConfig.whatsapp.number}`}
            data-analytics-location="footer_phone_main"
            className="mt-3 block text-sm hover:underline"
          >
            {siteConfig.phone.display}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            data-analytics-location="footer_email"
            className="mt-4 inline-flex items-center gap-2 text-xs hover:underline"
          >
            E-mail <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <p className="mt-5 text-xs leading-6 text-muted">
            {siteConfig.hours}
          </p>
        </div>
        <div>
          <h2 className="eyebrow mb-6 text-muted">Nossa localização</h2>
          <p className="text-xs leading-7">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}
          </p>
          <p className="mt-6 font-serif text-xl italic">
            De pessoa para pessoa.
          </p>
        </div>
      </div>
      <div className="container-site flex flex-col justify-between gap-3 border-t border-navy/15 py-6 pb-24 text-[10px] text-muted sm:flex-row sm:pb-6">
        <span>
          © {new Date().getFullYear()} Gerseg Seguros. Todos os direitos
          reservados.
        </span>
        <span>Corretora de Seguros · São Paulo, SP</span>
      </div>
    </footer>
  );
}
