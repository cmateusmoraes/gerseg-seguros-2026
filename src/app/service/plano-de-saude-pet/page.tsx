import type { Metadata } from "next";
import { Clock, Home, Star, Stethoscope } from "lucide-react";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PricingTable, type Plan } from "@/components/sections/PricingTable";
import { CtaDark } from "@/components/sections/CtaDark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Plano de Saúde Pet",
};

const vantagens = [
  {
    icon: Home,
    title: "Atendimento a domicílio",
    description:
      "Nossa rede credenciada conta com profissionais que atendem seu pet a domicílio. Assim, ele pode ser cuidado no conforto de casa, sem o estresse de sair.",
  },
  {
    icon: Stethoscope,
    title: "Atendimento com especialistas",
    description:
      "Neurologistas, dermatologistas, fisioterapeutas, oftalmologistas, ortopedistas, anestesistas, endocrinologistas podem estar próximos de você, confira na nossa rede.",
  },
  {
    icon: Clock,
    title: "Plantão 24h",
    description:
      "Contamos com clínicas veterinárias com Plantão 24h, para que seu pet possa sempre ser atendido quando o imprevisto rolar.",
  },
  {
    icon: Star,
    title: "Somente as melhores clínicas",
    description:
      "Todos nossos atendimentos são avaliados pelos clientes, somente as clínicas mais bem avaliadas permanecem na nossa rede. Só o melhor para os pets, né?",
  },
];

const tranquiloFeatures = [
  "Microchipagem gratuita",
  "Consultas em horário de Plantão",
  "Vacinas obrigatórias",
  "Procedimentos clínicos",
  "Consultas em horário normal",
  "Clínico geral a domicílio",
  "Exames laboratoriais simples",
  "Exames laboratoriais complexos",
  "Exames de imagem",
];

/** Planos incrementais — sem preços (validar valores com a Karol antes de exibir). */
const plans: Plan[] = [
  {
    name: "Tranquilo",
    baseFeatures: tranquiloFeatures,
  },
  {
    name: "Ideal",
    baseFeatures: tranquiloFeatures,
    inheritsLabel: "Tudo do plano Tranquilo, e mais:",
    addedFeatures: [
      "Especialistas",
      "Exames cardiológicos",
      "Cirurgias",
      "Anestesia inalatória",
      "Internação",
    ],
  },
  {
    name: "Essencial",
    baseFeatures: [],
    inheritsLabel: "Tudo do plano Ideal, e mais:",
    addedFeatures: ["Fisioterapia e Acupuntura", "Exames de Alta Complexidade"],
  },
  {
    name: "Completo",
    baseFeatures: [],
    inheritsLabel: "Tudo do plano Essencial, e mais:",
    addedFeatures: ["Rede premium"],
    highlighted: true,
  },
];

export default function PlanoSaudePetPage() {
  return (
    <>
      {/* Breadcrumb original: Home › Plano de Saúde Pet (sem "Serviços") */}
      <PageBanner title="Plano de Saúde Pet" trail={[]} />

      <ProductIntro
        paragraphs={[
          "Uma vida mais longa e saudável para o seu filho de quatro patas. Entenda como funciona o melhor e maior plano de saúde pet do Brasil e nunca mais tenha surpresas no orçamento.",
        ]}
        video={{
          src: "https://www.youtube.com/embed/1vMumJWw-Q0?rel=0",
          title: "Plano de Saúde Pet — Gerseg Seguros",
        }}
        ctas={<WhatsAppButton>Contrate agora!</WhatsAppButton>}
        phoneNote={`Tire suas dúvidas: ${siteConfig.phone.cellDisplay}`}
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading
            title="Vantagens do plano de saúde"
            titleAccent="para seu cachorro e gato"
          />
          <FeatureGrid items={vantagens} columns={4} className="mt-12" />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-pad">
          <SectionHeading
            title="Compare e escolha"
            titleAccent="o melhor plano para o seu pet"
          />
          <div className="mt-12">
            <PricingTable plans={plans} />
          </div>
          <div className="mt-12 text-center">
            <WhatsAppButton size="lg">Contrate agora!</WhatsAppButton>
            <p className="mt-4 text-sm font-semibold text-navy">
              Tire suas dúvidas: {siteConfig.phone.cellDisplay}
            </p>
          </div>
        </div>
      </section>

      <CtaDark title="Contrate agora!" titleAccent="Tire suas dúvidas: WhatsApp" />
    </>
  );
}
