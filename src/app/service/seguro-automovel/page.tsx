import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CheckList } from "@/components/sections/CheckList";
import { InsurersGrid } from "@/components/sections/InsurersGrid";
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

const product = getProduct("seguro-automovel");

export const metadata: Metadata = serviceMetadata(product);

const faq = [
  {
    question: "Quais seguradoras posso comparar na cotação do seguro auto?",
    answer:
      "A Gerseg trabalha com seguradoras como Porto Seguro, Azul, Sompo, SulAmérica, Allianz, Tokio Marine, HDI, Liberty, Mapfre e Suhai.",
  },
  {
    question: "A cotação pode ser ajustada às minhas necessidades?",
    answer:
      "Sim. O atendimento é personalizado para comparar opções e buscar um seguro adequado às necessidades apresentadas por cada cliente.",
  },
  {
    question: "Como solicitar uma cotação de seguro automóvel?",
    answer:
      "Você pode iniciar a conversa pelo WhatsApp ou ligar para a Gerseg. Um especialista orienta a cotação e explica as opções disponíveis.",
  },
];

export default function SeguroAutomovelPage() {
  return (
    <>
      <ServiceStructuredData product={product} />
      <StructuredData
        id="seguro-automovel-faq-structured-data"
        data={faqStructuredData(faq)}
      />
      <PageBanner
        title="Seguro auto em São Paulo com orientação de quem entende"
        currentLabel={product.title}
      />

      <ProductIntro
        paragraphs={[
          "A Gerseg compara opções de seguro automóvel entre dez das principais seguradoras do mercado. O objetivo é encontrar coberturas alinhadas às necessidades apresentadas por cada cliente.",
          "Fundada em 1985, a corretora oferece atendimento personalizado e agilidade na cotação. Você fala com um especialista para entender as alternativas e proteger seu carro com mais segurança na escolha.",
        ]}
        image={{
          src: product.cardImage,
          alt: product.title,
        }}
        ctas={
          <WhatsAppButton
            message="Olá! Quero cotar um seguro auto com a Gerseg."
            trackingLocation="seguro_auto_intro"
          >
            Cotar meu seguro auto
          </WhatsAppButton>
        }
        phoneNote={siteConfig.phone.cellDisplay}
        trackingLocation="seguro_auto_intro"
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="Diferenciais" />
          <CheckList
            className="mx-auto mt-12 max-w-3xl"
            title="Por que cotar com a Gerseg"
            columns={1}
            items={[
              "Compare opções entre 10 das principais seguradoras do mercado",
              "Busque um seguro alinhado às suas necessidades",
              "Fale com um especialista de uma corretora com mais de 40 anos de experiência",
              "Receba sua cotação com agilidade",
            ]}
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-pad">
          <SectionHeading title="Seguradoras" />
          <div className="mt-12">
            <InsurersGrid />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-pad">
          <SectionHeading
            eyebrow="Seguro Automóvel"
            title="Dúvidas frequentes"
          />
          <div className="mt-12">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <CtaDark
        title="Cote seu seguro auto"
        titleAccent="com atendimento personalizado."
        message="Olá! Quero cotar um seguro auto com a Gerseg."
        trackingLocation="seguro_auto_final"
      />
    </>
  );
}
