import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Car,
  Headset,
  KeyRound,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
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

/** Ordem dos cards conforme conteudo/00-home.md */
const homeProductSlugs = [
  "plano-de-saude-pet",
  "seguro-notebook",
  "seguro-celular",
  "seguro-incendio-residencial",
  "seguro-aluguel-fianca",
  "seguro-automovel",
  "titulo-de-capitalizacao-para-locacao",
  "seguro-bike",
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
  },
  {
    icon: KeyRound,
    title: "Carro por assinatura",
    highlight: "Nós usamos!",
    text: "Nada melhor que utilizar o serviço para comprovar a eficiência. Entre em contato!",
  },
  {
    icon: Smartphone,
    title: "Celular por assinatura",
    highlight: "Samsung S21, S21+ e S21 Ultra",
    text: "Troque de celular todo ano por um preço menor do que você gasta para comprar um celular.",
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
        cta={<WhatsAppButton size="lg">Faça uma cotação</WhatsAppButton>}
        image={{
          src: "/assets/imagens/home-hero-automovel.jpg",
          alt: "Seguro automóvel — Gerseg Seguros",
        }}
      />

      {/* Quem Somos */}
      <section id="quem-somos" className="scroll-mt-28">
        <div className="container-site section-pad grid items-center gap-10 desk:grid-cols-2 desk:gap-14">
          <Image
            src="/assets/imagens/quem-somos.jpg"
            alt="Equipe Gerseg Seguros"
            width={760}
            height={420}
            className="w-full rounded-img border border-line object-cover"
          />
          <div>
            <SectionHeading title="Quem Somos" align="left" />
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
              <WhatsAppButton>Faça uma cotação</WhatsAppButton>
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
          <SectionHeading title="Nossos Diferenciais" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted">
            Temos mais de 40 anos de experiência no mercado de seguros, isso
            nos trouxe o conhecimento necessário para fazer com que nossos
            clientes não caiam em pegadinhas ou tenham problemas no momento em
            que mais precisarem dos serviços.
          </p>
          <FeatureGrid items={diferenciais} columns={4} className="mt-12" />
          <p className="mt-12 text-center font-serif text-xl font-bold text-navy">
            Ouvimos nossos clientes para oferecer as melhores soluções do mercado.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="scroll-mt-28">
        <div className="container-site section-pad">
          <SectionHeading title="Produtos" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 desk:grid-cols-4">
            {homeProductSlugs.map((slug) => (
              <ProductCard key={slug} product={getProduct(slug)} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton size="lg">Solicite uma cotação</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Solicite uma Proposta */}
      <section className="bg-white">
        <div className="container-site section-pad">
          <SectionHeading title="Solicite uma Proposta" />
          <div className="mt-12 grid gap-6 desk:grid-cols-3">
            {propostas.map(({ icon: Icon, title, highlight, text }) => (
              <div
                key={title}
                className="rounded-card border border-line bg-white p-8 text-center transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg"
              >
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-medium text-navy">{title}</h3>
                <p className="mt-2 font-semibold text-gold">{highlight}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento diferenciado / Contato */}
      <section id="contato" className="scroll-mt-28">
        <div className="container-site section-pad">
          <SectionHeading title="Atendimento diferenciado" />
          <div className="mt-12 grid gap-6 desk:grid-cols-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-card border border-line bg-white p-8 text-center transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg"
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
              className="rounded-card border border-line bg-white p-8 text-center transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg"
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
              className="rounded-card border border-line bg-white p-8 text-center transition-all duration-200 hover:-translate-y-[5px] hover:shadow-lg"
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
          <SectionHeading title="Seguradoras" />
          <div className="mt-12">
            <InsurersGrid />
          </div>
        </div>
      </section>
    </>
  );
}
