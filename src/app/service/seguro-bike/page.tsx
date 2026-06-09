import type { Metadata } from "next";
import Image from "next/image";
import {
  Bike,
  CreditCard,
  FileText,
  Globe,
  HeartPulse,
  Headset,
  MessageCircle,
  MessagesSquare,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CoverageGrid } from "@/components/sections/CoverageGrid";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StepsGrid } from "@/components/sections/StepsGrid";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaDark } from "@/components/sections/CtaDark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  // Título canônico da página (ESTRUTURA-SITE.md) — não usa o template "%s – Gerseg Seguros"
  title: { absolute: "Gerseg Seguros | Seguro Bike e Bike Elétrica" },
};

/**
 * ⚠️ Esta página usa o número (11) 3229-4057 (mockup do cliente),
 * DIVERGENTE do canônico (11) 3229-6314 — decisão registrada com o Mateus;
 * pendente de validação final com a Karol. Trocar em lib/config.ts se necessário.
 */
const bikeNumber = siteConfig.whatsappBike.number;

const coberturas = [
  {
    icon: ShieldAlert,
    title: "Roubo e subtração",
    description: "Proteção contra roubo e furto qualificado.",
  },
  {
    icon: Bike,
    title: "Danos causados por quedas e acidentes",
    description: "Cobertura para danos causados durante o uso.",
  },
  {
    icon: Zap,
    title: "Danos elétricos para bikes elétricas",
    description: "Cobertura ideal para bikes e scooters elétricas.",
  },
  {
    icon: Globe,
    title: "Cobertura nacional e internacional",
    description: "Mais tranquilidade até fora do Brasil.",
  },
  {
    icon: Users,
    title: "Responsabilidade civil contra terceiros",
    description: "Proteção contra danos causados a terceiros.",
  },
  {
    icon: HeartPulse,
    title: "Acidentes pessoais",
    description: "Mais proteção para você no dia a dia.",
  },
];

const porQueEscolher = [
  {
    icon: Headset,
    title: "Atendimento humanizado",
    description: "Fale com especialistas sempre que precisar.",
  },
  {
    icon: MessagesSquare,
    title: "Cotação rápida pelo WhatsApp",
    description: "Simples, ágil e sem complicação.",
  },
  {
    icon: FileText,
    title: "Explicação clara das coberturas",
    description: "Entenda tudo antes de contratar.",
  },
  {
    icon: Bike,
    title: "Seguro para bikes comuns e elétricas",
    description: "Proteção completa para seu estilo de pedal.",
  },
  {
    icon: ShieldCheck,
    title: "Processo simples e sem burocracia",
    description: "Mais praticidade para o seu dia a dia.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Fale com um especialista",
    description: "Clique no botão abaixo e inicie sua conversa pelo WhatsApp.",
  },
  {
    icon: FileText,
    title: "Receba sua cotação",
    description:
      "Enviamos as melhores opções de cobertura de acordo com seu perfil.",
  },
  {
    icon: Shield,
    title: "Proteja sua bike",
    description:
      "Escolha a melhor opção e tenha a tranquilidade que você merece.",
  },
];

const faq = [
  {
    question: "O seguro cobre bike elétrica?",
    answer: "Sim. O seguro cobre bikes e scooters elétricas.",
  },
  {
    question: "Bike usada pode fazer seguro?",
    // Resposta sugerida em conteudo/08-seguro-bike.md — validar com a Karol
    answer:
      "Sim. Bikes usadas em bom estado de conservação podem ser seguradas. Solicite uma cotação para verificar.",
  },
  {
    question: "Tem cobertura internacional?",
    answer: "Sim. Há cobertura nacional e internacional.",
  },
  {
    question: "O seguro cobre acessórios?",
    // Resposta sugerida em conteudo/08-seguro-bike.md — validar com a Karol
    answer:
      "Sim, é possível incluir cobertura adicional para acessórios. Fale com um especialista para avaliar seu equipamento.",
  },
  {
    question: "Posso parcelar?",
    answer: "Sim. Trabalhamos com parcelamento facilitado.",
  },
  {
    question: "Como faço para contratar?",
    answer: "Basta clicar no WhatsApp e solicitar sua cotação.",
  },
];

export default function SeguroBikePage() {
  return (
    <>
      <Hero
        titleLines={["Seguro para", "Bike e Bike Elétrica"]}
        titleAccent="com atendimento humanizado."
        paragraph="Com o seguro da Porto Seguro e a consultoria especializada da Gerseg Seguros, você pedala com mais tranquilidade em qualquer lugar."
        cta={
          <WhatsAppButton number={bikeNumber} size="lg">
            Fale com um especialista
          </WhatsAppButton>
        }
        image={{
          // TODO: substituir placeholder pela foto definitiva (scooter/bike elétrica)
          src: "/assets/imagens/pagina-bike-hero.jpg",
          alt: "Bike elétrica em ambiente urbano",
        }}
        badge={{
          label: "Corretora parceira",
          logoSrc: "/assets/seguradoras/porto-seguro.png",
          logoAlt: "Porto Seguro",
        }}
        bullets={[
          { icon: Globe, label: "Cobertura nacional e internacional" },
          { icon: CreditCard, label: "Parcelamento facilitado" },
          { icon: Headset, label: "Atendimento especializado" },
          { icon: Zap, label: "Bikes e motos elétricas" },
        ]}
      />

      {/* Coberturas */}
      <section id="coberturas" className="scroll-mt-28">
        <div className="container-site section-pad">
          <SectionHeading
            title="O seguro bike da Porto cobre"
            titleAccent="muito mais do que você imagina."
          />
          <CoverageGrid items={coberturas} columns={3} className="mt-12" />
        </div>
      </section>

      {/* Por que escolher */}
      <section id="vantagens" className="scroll-mt-28 bg-white">
        <div className="container-site section-pad grid items-center gap-10 desk:grid-cols-[1fr_1.4fr] desk:gap-14">
          <Image
            // TODO: substituir placeholder pela foto definitiva (pessoa com celular/logo Gerseg)
            src="/assets/imagens/pagina-bike-atendimento.jpg"
            alt="Atendimento Gerseg Seguros pelo celular"
            width={600}
            height={760}
            className="hidden w-full rounded-img object-cover desk:block"
          />
          <div>
            <SectionHeading
              eyebrow="Atendimento que faz a diferença"
              title="Por que escolher a Gerseg Seguros?"
              align="left"
            />
            <FeatureGrid items={porQueEscolher} columns={3} className="mt-10" />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="scroll-mt-28">
        <div className="container-site section-pad">
          <SectionHeading eyebrow="Como funciona" title="Contratar é fácil e seguro" />
          <div className="mt-14">
            <StepsGrid steps={steps} />
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton number={bikeNumber} size="lg">
              Fale com um especialista
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container-site section-pad">
          <h2 className="mb-10 font-serif text-3xl font-medium text-navy desk:text-4xl">
            Dúvidas frequentes
          </h2>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CTA final */}
      <CtaDark
        title="Fale agora com um especialista"
        titleAccent="e proteja o que te move."
        number={bikeNumber}
        numberDisplay={siteConfig.whatsappBike.display}
        subtext="Atendimento pelo WhatsApp"
      />
    </>
  );
}
