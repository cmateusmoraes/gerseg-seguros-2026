import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Bike,
  Car,
  Clock3,
  Home,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { ProductExplorer } from "@/components/sections/ProductExplorer";
import { DifferenceAccordion } from "@/components/sections/DifferenceAccordion";
import { InsurersGrid } from "@/components/sections/InsurersGrid";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { HumanNote } from "@/components/sections/HumanNote";
import { homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <section
        className="home-hero relative isolate overflow-hidden bg-navy text-white"
        aria-labelledby="home-title"
      >
        <div className="container-site relative grid desk:min-h-[650px] desk:grid-cols-12">
          <div className="relative z-10 pb-8 pt-10 desk:col-span-6 desk:pb-20 desk:pt-20">
            <p className="eyebrow hero-enter text-gold">
              <span className="h-px w-9 bg-gold" /> Corretora de seguros desde
              1985
            </p>
            <h1
              id="home-title"
              className="hero-enter mt-8 max-w-[640px] font-serif text-[clamp(2.6rem,13.4vw,5rem)] desk:text-[clamp(3.25rem,5.1vw,5rem)] font-medium leading-[1.06] tracking-[-0.045em] [animation-delay:100ms]"
            >
              Protegendo
              <br />o que importa
              <br />
              <em className="font-normal text-gold">pra você.</em>
            </h1>
            <p className="hero-enter mt-7 max-w-[330px] text-sm leading-7 text-white/75 [animation-delay:200ms]">
              Há mais de 40 anos, experiência, confiança e atendimento que faz a
              diferença.
            </p>
            <div className="hero-enter mt-7 flex flex-wrap items-center gap-3 desk:gap-6 [animation-delay:300ms]">
              <WhatsAppButton
                variant="gold"
                className="min-h-[52px] px-5 text-xs desk:min-h-14 desk:px-6 desk:text-sm"
              >
                Faça uma cotação <ArrowUpRight size={18} aria-hidden="true" />
              </WhatsAppButton>
              <Link
                href="#produtos"
                className="group flex items-center gap-2 py-3 text-xs text-white/90 desk:gap-3 desk:text-sm"
              >
                Produtos{" "}
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div className="hero-enter mt-8 border-t border-white/15 pt-6 desk:mt-12 [animation-delay:400ms]">
              <HumanNote onDark>Você conta sua história. A gente escuta.</HumanNote>
            </div>
          </div>
          <div className="hero-photo relative min-h-[370px] desk:absolute desk:inset-y-0 desk:-right-[6%] desk:w-[64%]">
            <Image
              src="/assets/imagens/home-hero-automovel.webp"
              alt="Família em frente de casa, com carro e bicicleta elétrica"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 980px) 64vw, 100vw"
              className="absolute h-full w-full object-cover object-[65%_center]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent desk:-left-4 desk:bg-gradient-to-r desk:from-navy desk:from-[3%] desk:via-navy/10 desk:to-transparent"
            />
            <div
              aria-hidden="true"
              className="hero-orbit absolute -right-32 top-12 h-[480px] w-[480px] rounded-full border border-gold/45"
            />
            <Link
              href="/service/seguro-incendio-residencial/"
              className="scene-link absolute right-[12%] top-[24%]"
              aria-label="Conhecer o Seguro Incêndio Residencial"
            >
              <Home size={19} aria-hidden="true" />
              <span>Seu lar</span>
            </Link>
            <Link
              href="/service/seguro-automovel/"
              className="scene-link absolute left-[18%] top-[57%]"
              aria-label="Conhecer o Seguro Automóvel"
            >
              <Car size={19} aria-hidden="true" />
              <span>Seu carro</span>
            </Link>
            <Link
              href="/service/seguro-bike/"
              className="scene-link absolute bottom-[18%] right-[29%]"
              aria-label="Conhecer o Seguro Bike e Bike Elétrica"
            >
              <Bike size={19} aria-hidden="true" />
              <span>Sua bike</span>
            </Link>
            <div className="absolute bottom-7 right-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/85">
              <span className="h-px w-8 bg-gold" /> Solução ideal para você
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-line bg-[#eeece5]"
        aria-label="Seguradoras parceiras"
      >
        <div className="container-site grid items-center gap-7 py-9 desk:grid-cols-[220px_1fr] desk:gap-12">
          <p className="text-sm leading-6 text-muted">
            Trabalhamos com as{" "}
            <strong className="font-medium text-navy">
              melhores seguradoras do mercado.
            </strong>
          </p>
          <div className="grid grid-cols-3 items-center gap-x-6 gap-y-5 sm:grid-cols-5">
            {[
              { file: "porto-seguro", name: "Porto Seguro" },
              { file: "allianz", name: "Allianz" },
              { file: "tokio-marine", name: "Tokio Marine" },
              { file: "hdi", name: "HDI" },
              { file: "azul-seguros", name: "Azul Seguros" },
            ].map(({ file, name }) => (
              <Image
                key={file}
                src={`/assets/seguradoras/${file}.webp`}
                alt={name}
                width={110}
                height={80}
                className="mx-auto h-20 w-28 max-w-full object-contain mix-blend-multiply opacity-80 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="produtos" className="scroll-mt-28">
        <div className="container-site section-pad">
          <div
            data-reveal
            className="mb-10 flex flex-col justify-between gap-6 desk:flex-row desk:items-end"
          >
            <div>
              <p className="eyebrow text-muted">
                <span className="section-number">01</span> Produtos
              </p>
              <h2 className="display-heading mt-6">
                Solução ideal
                <br />
                <em>para você.</em>
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-7 text-muted">
              Ouvimos nossos clientes para oferecer as melhores soluções do
              mercado.
            </p>
          </div>
          <ProductExplorer />
          <div
            data-reveal
            className="mt-10 flex flex-col justify-between gap-5 border-t border-line pt-7 sm:flex-row sm:items-center"
          >
            <HumanNote>Em dúvida? A gente explica cada opção.</HumanNote>
            <WhatsAppButton
              variant="outline"
              className="self-start sm:self-auto"
            >
              Solicite uma cotação <ArrowUpRight size={17} aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section
        id="quem-somos"
        className="relative scroll-mt-28 overflow-hidden bg-[#eeece5]"
      >
        <div className="container-site section-pad grid items-center gap-12 desk:grid-cols-2 desk:gap-24">
          <div data-reveal className="relative pb-8 pr-7 desk:pb-12 desk:pr-10">
            <div className="relative overflow-hidden rounded-t-[180px]">
              <Image
                src="/assets/imagens/quem-somos.webp"
                alt="Atendimento da corretora, com notebook e materiais de trabalho"
                width={760}
                height={820}
                sizes="(min-width: 980px) 45vw, 90vw"
                className="h-[390px] w-full object-cover sm:h-[500px]"
              />
            </div>
            <div className="absolute bottom-0 right-0 flex h-40 w-44 flex-col justify-center bg-navy px-7 text-white desk:h-48 desk:w-52">
              <span className="text-xs uppercase tracking-[0.18em] text-gold">
                Desde
              </span>
              <span className="mt-1 font-serif text-6xl tracking-tight desk:text-7xl">
                1985<span className="text-gold">.</span>
              </span>
              <span className="mt-2 text-xs text-white/70">Gerseg Seguros</span>
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow text-muted">
              <span className="section-number">02</span> Quem somos
            </p>
            <h2 className="display-heading mt-6">
              De pessoa
              <br />
              <em>para pessoa.</em>
            </h2>
            <p className="mt-7 text-sm leading-7 text-muted">
              Fundada em 1985, ela sempre esteve no mercado de seguros com
              preços competitivos, atendimento personalizado e agilidade nas
              solicitações. Tudo isso com muita inovação, tecnologia e
              transparência.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Cada cliente é mais do que um novo negócio, é mais um membro da{" "}
              <strong className="font-semibold text-navy">
                família Gerseg.
              </strong>
            </p>
            <div className="my-8 grid grid-cols-2 gap-5 border-y border-navy/15 py-6">
              <div className="flex items-center gap-3 text-xs leading-5">
                <BadgeCheck size={24} strokeWidth={1.4} aria-hidden="true" />
                Corretores
                <br />
                com Susep
              </div>
              <div className="flex items-center gap-3 text-xs leading-5">
                <MapPin size={24} strokeWidth={1.4} aria-hidden="true" />
                São Paulo,
                <br />
                SP
              </div>
            </div>
            <WhatsAppButton variant="solid">
              Faça uma cotação <ArrowUpRight size={18} aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-site section-pad grid gap-12 desk:grid-cols-[0.9fr_1.1fr] desk:gap-24">
          <div data-reveal>
            <p className="eyebrow text-muted">
              <span className="section-number">03</span> Nossos diferenciais
            </p>
            <h2 className="display-heading mt-6">
              Atendimento
              <br />
              <em>diferenciado.</em>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-muted">
              Temos mais de 40 anos de experiência no mercado de seguros, isso
              nos trouxe o conhecimento necessário para fazer com que nossos
              clientes não caiam em pegadinhas ou tenham problemas no momento em
              que mais precisarem dos serviços.
            </p>
            <ArrowDownRight
              size={80}
              strokeWidth={0.75}
              className="mt-10 hidden text-gold desk:block"
              aria-hidden="true"
            />
          </div>
          <div data-reveal>
            <DifferenceAccordion />
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-28 bg-navy text-white">
        <div className="container-site section-pad relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-gold/20 after:absolute after:inset-12 after:rounded-full after:border after:border-gold/15"
          />
          <div
            data-reveal
            className="relative grid gap-10 desk:grid-cols-[1fr_auto] desk:items-center"
          >
            <div>
              <p className="eyebrow text-gold">
                <span className="section-number border-gold/40 text-gold">
                  04
                </span>{" "}
                Solicite uma proposta
              </p>
              <h2 className="display-heading mt-7 text-white">
                Como posso
                <br />
                <em className="text-gold">te ajudar?</em>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
                Por mensagem ou por telefone, a conversa é com quem quer conhecer
                você. Conte com a gente para entender cada opção e tirar suas dúvidas.
              </p>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-location="home_contact_circle"
              className="group relative flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-full bg-gold text-navy transition-transform duration-500 hover:rotate-[-8deg] hover:scale-105 desk:mr-20 desk:h-48 desk:w-48"
              aria-label="Faça uma cotação pelo WhatsApp"
            >
              <ArrowUpRight size={44} strokeWidth={1} aria-hidden="true" />
              <span className="text-xs font-medium">Faça uma cotação</span>
            </a>
          </div>
          <div
            data-reveal
            className="relative mt-14 grid border-t border-white/20 desk:grid-cols-3"
          >
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-location="home_contact_whatsapp"
              className="contact-link group desk:border-r desk:border-white/20 desk:pr-8"
            >
              <WhatsAppIcon className="h-5 w-5 text-gold" />
              <span className="mt-5 text-xs text-white/60">
                WhatsApp · Fácil e rápido
              </span>
              <span className="mt-2 flex items-center justify-between text-lg">
                {siteConfig.whatsapp.display}
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
            <a
              href={`tel:+55${siteConfig.phone.cellDisplay.replace(/\D/g, "")}`}
              data-analytics-location="home_contact_phone"
              className="contact-link group desk:border-r desk:border-white/20 desk:px-8"
            >
              <Phone size={20} className="text-gold" aria-hidden="true" />
              <span className="mt-5 text-xs text-white/60">
                Prefere conversar?
              </span>
              <span className="mt-2 flex items-center justify-between text-lg">
                {siteConfig.phone.cellDisplay}
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              data-analytics-location="home_contact_email"
              className="contact-link group desk:pl-8"
            >
              <Mail size={20} className="text-gold" aria-hidden="true" />
              <span className="mt-5 text-xs text-white/60">E-mail</span>
              <span className="mt-2 flex items-center justify-between gap-3 break-all text-sm desk:text-base">
                {siteConfig.email}
                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-white/60">
            <Clock3 size={14} aria-hidden="true" /> {siteConfig.hours}
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-site py-16 desk:py-20">
          <div
            data-reveal
            className="mb-10 flex flex-wrap items-center justify-between gap-4"
          >
            <p className="eyebrow text-muted">Seguradoras</p>
            <p className="text-sm text-muted">
              Experiência, confiança e atendimento que faz a diferença.
            </p>
          </div>
          <InsurersGrid />
        </div>
      </section>
    </>
  );
}
