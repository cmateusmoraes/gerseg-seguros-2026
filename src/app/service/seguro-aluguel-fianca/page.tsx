import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CheckList } from "@/components/sections/CheckList";
import { CtaDark } from "@/components/sections/CtaDark";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  ServiceStructuredData,
  StructuredData,
} from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/config";
import { getProduct } from "@/lib/products";
import { faqStructuredData, serviceMetadata } from "@/lib/seo";

const product = getProduct("seguro-aluguel-fianca");

export const metadata: Metadata = serviceMetadata(product);

const faq = [
  {
    question: "Como funciona o seguro fiança para aluguel?",
    answer:
      "O seguro fiança substitui a necessidade de fiador ou caução. A proposta passa por análise da seguradora e, após a aprovação, a Gerseg apresenta o orçamento para contratação.",
  },
  {
    question: "Quais despesas podem fazer parte da cobertura?",
    answer:
      "Além do aluguel, a proposta pode incluir coberturas para encargos da locação, como IPTU, condomínio, água, luz e gás, e opções para danos ao imóvel e pintura. A contratação depende das condições apresentadas pela seguradora.",
  },
  {
    question: "Quais são as etapas para contratar?",
    answer:
      "A Gerseg solicita os dados necessários, encaminha a análise à seguradora e, quando aprovada, envia o orçamento. Depois da escolha da proposta, seguem a emissão e a assinatura do contrato.",
  },
  {
    question: "Seguro fiança e título de capitalização são a mesma coisa?",
    answer:
      "Não. São modalidades diferentes de garantia para locação. A Gerseg trabalha com seguro fiança e também com título de capitalização para aluguel, permitindo comparar as alternativas para cada negociação.",
  },
];

export default function AluguelFiancaPage() {
  return (
    <>
      <ServiceStructuredData product={product} />
      <StructuredData
        id="seguro-fianca-faq-structured-data"
        data={faqStructuredData(faq)}
      />
      <PageBanner
        title="Seguro fiança para alugar com orientação em cada etapa"
        currentLabel={product.title}
      />

      <ProductIntro
        paragraphs={[
          "Com o seguro fiança, você pode alugar um imóvel sem apresentar fiador ou caução. A Gerseg orienta a cotação e explica cada etapa da contratação.",
          "Conforme as condições da proposta, podem ser incluídas coberturas para aluguel, encargos mensais da locação, danos ao imóvel, pintura e serviços emergenciais de reparo.",
        ]}
        image={{
          src: product.cardImage,
          alt: product.title,
        }}
        video={{
          src: "https://www.youtube.com/embed/dwSfAdEmagY",
          title: "Seguro Aluguel / Fiança — Gerseg Seguros",
        }}
        ctas={
          <WhatsAppButton
            message="Olá! Quero solicitar uma cotação de seguro fiança com a Gerseg."
            trackingLocation="seguro_fianca_intro"
          >
            Solicitar cotação de seguro fiança
          </WhatsAppButton>
        }
        phoneNote={siteConfig.phone.cellDisplay}
        trackingLocation="seguro_fianca_intro"
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="O que o seguro fiança" titleAccent="pode cobrir" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-12 desk:grid-cols-2">
            <CheckList
              title="Cobertura básica"
              items={[
                "Pagamento de aluguéis conforme o valor estipulado no contrato de locação;",
                "Multa moratória limitada a 10% do valor do contrato de locação;",
                "Custas judiciais e honorários advocatícios fixados em sentença que decretar o despejo do locatário.",
              ]}
            />
            <CheckList
              title="Coberturas adicionais possíveis"
              items={[
                "Encargos da locação, como IPTU, condomínio, água, luz e gás encanado;",
                "Multa por rescisão contratual;",
                "Danos físicos ao imóvel, exceto os decorrentes do uso normal;",
                "Pintura do imóvel.",
              ]}
            />
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Para iniciar a contratação, solicitamos alguns dados e encaminhamos
            a proposta para análise da seguradora. Após a aprovação, apresentamos
            o orçamento para escolha, emissão e assinatura do contrato. As
            coberturas dependem das condições da proposta e da apólice contratada.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Quer comparar outra garantia para locação? Conheça também o{" "}
            <Link
              href="/service/titulo-de-capitalizacao-para-locacao/"
              className="font-medium text-navy underline underline-offset-4"
            >
              título de capitalização para aluguel
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-pad">
          <SectionHeading eyebrow="Seguro Fiança" title="Dúvidas frequentes" />
          <div className="mt-12">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <CtaDark
        title="Solicite sua cotação"
        titleAccent="de seguro fiança."
        message="Olá! Quero solicitar uma cotação de seguro fiança com a Gerseg."
        trackingLocation="seguro_fianca_final"
      />
    </>
  );
}
