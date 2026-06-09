import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CheckList } from "@/components/sections/CheckList";
import { CtaDark } from "@/components/sections/CtaDark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seguro Incêndio Residencial",
};

export default function SeguroIncendioPage() {
  return (
    <>
      {/* Breadcrumb corrigido: "Services" (original) → "Serviços" */}
      <PageBanner title="Seguro Incêndio Residencial" />

      <ProductIntro
        paragraphs={[
          "No mundo de hoje, não podemos vacilar em nada quando o assunto for segurança. E, por incrível que pareça, muitas pessoas se preocupam mais com os seguros de outros bens e objetos, mas não com o seguro residencial, ou seja, deixam seu próprio lar desprotegido de roubos e problemas em geral. Seja uma pessoa prevenida e contrate um seguro residencial para garantir a segurança de seu lar e das pessoas que mais ama.",
          "Cobre os danos materiais causados por incêndio, raio ou explosão ao imóvel segurado, bem como outras coberturas adicionais.",
        ]}
        image={{
          src: "/assets/imagens/pagina-incendio.jpg",
          alt: "Seguro Incêndio Residencial",
        }}
        ctas={<WhatsAppButton>Entre em contato</WhatsAppButton>}
        phoneNote={siteConfig.phone.cellDisplay}
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="Coberturas" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-12 desk:grid-cols-[1fr_1.6fr]">
            <CheckList
              title="Básicas"
              items={["Incêndio", "Explosão", "Fumaça"]}
            />
            <CheckList
              title="Adicionais"
              columns={2}
              items={[
                "Danos morais",
                "Subtração de bicicletas",
                "Desmoronamento",
                "Vazamento de tubulações",
                "Danos elétricos",
                "Impacto de veículos",
                "Vendaval, furacão, ciclone, tornado e queda de granizo",
                "Quebra de vidros",
                "Responsabilidade civil familiar",
                "Subtração de bens",
                "Escritório em residência",
                "Perda ou pagamento de aluguel",
              ]}
            />
          </div>
        </div>
      </section>

      <CtaDark title="Entre em contato" />
    </>
  );
}
