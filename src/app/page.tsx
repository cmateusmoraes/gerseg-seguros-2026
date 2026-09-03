import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Bike,
  Car,
  Headset,
  KeyRound,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";
import { getProduct } from "@/lib/products";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProductCard } from "@/components/sections/ProductCard";
import { InsurersGrid } from "@/components/sections/InsurersGrid";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/** Ordem dos cards definida para a Home */
const homeProductSlugs = [
  "seguro-automovel",
  "seguro-aluguel-fianca",
  "titulo-de-capitalizacao-para-locacao",
  "seguro-incendio-residencial",
  "seguro-bike",
  "plano-de-saude-pet",
  "seguro-celular",
  "seguro-notebook",
];

const diferenciais = [
  {
    icon: Headset,
    title: "Atendimento diferenciado",
    description:
      "Conhecemos nossos clientes para apresentar soluções ideias. De pessoa para pessoa.",
  },
  {
    icon: LifeBuoy,
    title: "Sempre conectados",
    description:
      "Prefere ser atendido pelo WhatsApp? Instagram? Telefone? Aqui o cliente escolhe.",
  },
  {
    icon: ShieldCheck,
    title: "Teve um contratempo?",
    description:
      "Imprevistos acontecem e nesse momento pode contar com a nossa ajuda.",
  },
  {
    icon: Award,
    title: "Profissionais capacitados",
    description:
      "Temos muita experiência no mercado, buscamos sempre o que o cliente precisa.",
  },
];

const propostas = [
  {
    icon: Car,
    title: "Seguro Automóvel",
    highlight: "Cote já!",
    text: "Trabalhamos com as melhores seguradoras do mercado.",
    message: "Olá! Gostaria de solicitar uma cotação de Seguro Automóvel.",
  },
  {
    icon: KeyRound,
    title: "Seguro Aluguel / Fiança",
    highlight: "Sem fiador e sem caução",
    text: "Você não precisa se preocupar com fiador e caução, aluga o imóvel que quiser com agilidade e ainda conta com vários benefícios.",
    message:
      "Olá! Gostaria de solicitar uma proposta de Seguro Aluguel / Fiança.",
  },
  {
    icon: Bike,
    title: "Seguro Bike e Bike Elétrica",
    highlight: "Bikes comuns e elétricas",
    text: "Pedale com tranquilidade. Cobertura para bikes comuns e elétricas, com atendimento humanizado pela Porto Seguro.",
    message:
      "Olá! Gostaria de solicitar uma cotação de Seguro Bike e Bike Elétrica.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        titleLines={["Há mais de 40 anos"]}
        titleAccent="protegendo o que importa pra você."
        paragraph={siteConfig.description}
        cta={<WhatsAppButton variant="gold">Faça uma cotação</WhatsAppButton>}
        image={{
          src: "/assets/imagens/home-hero-automovel.webp",
          alt: "Casa, carro e bike elétrica protegidos pela Gerseg Seguros",
        }}
      />

      {/* Quem Somos */}
      <section id="quem-somos" className="scroll-mt-28">
        <div className="container-site section-pad grid items-center gap-10 desk:grid-cols-2 desk:gap-14">
          <Image
            src="/assets/imagens/quem-somos.webp"
            alt="Equipe Gerseg Seguros"
            width={760}
            height={420}
            className="h-72 w-full rounded-img border-2 border-gold/40 object-cover shadow-card desk:h-[440px]"
          />
          <div>
            <SectionHeading title="Quem Somos" align="left" withRule />
            <p className="mt-6 text-base leading-relaxed text-muted">
              Fundada em 1985, ela sempre esteve no mercado de seguros com
              preços competitivos, atendimento personalizado e agilidade nas
              solicitações. Tudo isso com muita inovação, tecnologia e
              transparência. Cada cliente é mais do que um novo negócio, é mais
              um membro da <strong className="text-navy">família Gerseg</strong>.
            </p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { icon: BadgeCheck, label: "Solução ideal para você" },
                { icon: ShieldCheck, label: "Corretores com Susep" },
                { icon: MapPin, label: "São Paulo, SP" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                  <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <WhatsAppButton variant="gold">Faça uma cotação</WhatsAppButton>
              <span className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                {siteConfig.phone.cellDisplay}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="bg-white">
        <div className="container-site section-pad">
          <SectionHeading title="Nossos Diferenciais" align="left" withRule />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Temos mais de 40 anos de experiência no mercado de seguros, isso
            nos trouxe o conhecimento necessário para fazer com que nossos
            clientes não caiam em pegadinhas ou tenham problemas no momento em
            que mais precisarem dos serviços.
          </p>
          <FeatureGrid items={diferenciais} columns={4} numbered className="mt-12" />
          <p className="mt-12 text-center font-serif text-xl font-bold text-navy">
            Ouvimos nossos clientes para oferecer as melhores
            <span className="text-gold"> soluções do mercado.</span>
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="scroll-mt-28">
        <div className="container-site section-pad">
          <SectionHeading title="Produtos" align="left" withRule />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 desk:grid-cols-4">
            {homeProductSlugs.map((slug) => (
              <ProductCard key={slug} product={getProduct(slug)} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton variant="gold">Solicite uma cotação</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Solicite uma Proposta — faixa escura */}
      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/[0.03] desk:block"
        />
        <div className="container-site section-pad relative">
          <SectionHeading title="Solicite uma Proposta" onDark withRule />
          <div className="mt-12 grid gap-6 desk:grid-cols-3">
            {propostas.map(({ icon: Icon, title, highlight, text, message }) => (
              <a
                key={title}
                href={whatsappUrl(siteConfig.whatsapp.number, message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Solicitar proposta de ${title} pelo WhatsApp`}
                className="rounded-card border border-white/10 bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-navy"
              >
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-medium text-navy">{title}</h3>
                <p className="mt-2 font-semibold text-gold">{highlight}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento diferenciado / Contato */}
      <section id="contato" className="scroll-mt-28">
        <div className="container-site section-pad">
          <SectionHeading title="Atendimento diferenciado" withRule />
          <div className="mt-12 grid gap-6 desk:grid-cols-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-card border border-line bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:border-gold/40 hover:shadow-card-hover"
            >
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <h3 className="font-serif text-xl font-medium text-navy">WhatsApp</h3>
              <p className="mt-2 font-semibold text-gold">Fácil e rápido</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <strong className="text-navy">Clique aqui</strong> e fale
                conosco agora mesmo. Atendimento de segunda a sexta das 9h às
                18hs.
              </p>
            </a>
            <a
              href={`tel:+5511985419978`}
              className="group rounded-card border border-line bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:border-gold/40 hover:shadow-card-hover"
            >
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
                <Phone className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-medium text-navy">Telefone</h3>
              <p className="mt-2 font-semibold text-gold">
                {siteConfig.phone.cellDisplay}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Prefere conversar? Entre em contato por telefone.
              </p>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group rounded-card border border-line bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:border-gold/40 hover:shadow-card-hover"
            >
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
                <Mail className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-medium text-navy">E-mail</h3>
              <p className="mt-2 break-all font-semibold text-gold">{siteConfig.email}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Clique aqui para enviar um e-mail.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Seguradoras */}
      <section className="bg-white">
        <div className="container-site section-pad">
          <SectionHeading title="Seguradoras" withRule />
          <div className="mt-12">
            <InsurersGrid />
          </div>
        </div>
      </section>
    </>
  );
}
