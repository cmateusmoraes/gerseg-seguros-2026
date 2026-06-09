import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CheckList } from "@/components/sections/CheckList";
import { CtaDark } from "@/components/sections/CtaDark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seguro Aluguel / Fiança",
};

export default function AluguelFiancaPage() {
  return (
    <>
      <PageBanner title="Seguro Aluguel / Fiança" />

      <ProductIntro
        paragraphs={[
          "Você não precisa se preocupar com fiador e caução, aluga o imóvel que quiser com agilidade e ainda conta com vários benefícios.",
          "São diversas opções de coberturas como pagamento de aluguel, encargos mensais da locação (IPTU, condomínio, água, luz, gás), danos ao imóvel, pintura, além de serviços emergenciais de reparos ao imóvel e descontos para você aproveitar.",
        ]}
        video={{
          src: "https://www.youtube.com/embed/dwSfAdEmagY",
          title: "Seguro Aluguel / Fiança — Gerseg Seguros",
        }}
        ctas={<WhatsAppButton>Entre em contato</WhatsAppButton>}
        phoneNote={siteConfig.phone.cellDisplay}
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="Coberturas diferenciadas" titleAccent="e exclusivas" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-12 desk:grid-cols-2">
            <CheckList
              title="Básicas"
              items={[
                "Pagamento de alugueis de acordo com o valor estipulado no contrato de locação;",
                "Multa moratória limitada a 10% do valor do contrato de locação;",
                "Custas judiciais e honorários advocatícios, fixada em sentença que decretar o despejo do Locatário.",
              ]}
            />
            <CheckList
              title="E mais um amplo leque de coberturas adicionais, entre elas:"
              items={[
                "Encargos Legais (IPTU, Despesas condominiais, Água, Luz, Gás encanado);",
                "Multa por rescisão Contratual;",
                "Danos físicos ao imóvel, exceto os decorrente de uso normal.",
                "Pintura do imóvel",
              ]}
            />
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm italic leading-relaxed text-muted">
            *Para a contratação é super simples, precisamos de alguns dados
            para solicitar a aprovação junto a seguradora, aprovando mandamos o
            orçamento e pronto é só fazer e assinar o contrato.
          </p>
        </div>
      </section>

      <CtaDark title="Entre em contato" />
    </>
  );
}
