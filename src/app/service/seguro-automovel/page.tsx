import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CheckList } from "@/components/sections/CheckList";
import { InsurersGrid } from "@/components/sections/InsurersGrid";
import { CtaDark } from "@/components/sections/CtaDark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/lib/config";
import { getProduct } from "@/lib/products";

const product = getProduct("seguro-automovel");

export const metadata: Metadata = {
  title: product.title,
};

export default function SeguroAutomovelPage() {
  return (
    <>
      <PageBanner title={product.title} />

      <ProductIntro
        paragraphs={[
          "A GERSEG Corretora de Seguros, oferece aos seus clientes um amplo portfólio de produtos para seguro de automóveis, em parceria com as melhores seguradoras, a GERSEG Corretora possui as melhores condições de coberturas e com custos diferenciados.",
          "Atendimento personalizado, garantia de qualidade e agilidade na prestação dos serviços, sabemos o quanto é importante que você, sua família e seu patrimônio estejam bem protegidos, faça uma consulta conosco!",
        ]}
        image={{
          src: product.cardImage,
          alt: product.title,
        }}
        ctas={<WhatsAppButton>Entre em contato</WhatsAppButton>}
        phoneNote={siteConfig.phone.cellDisplay}
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="Diferenciais" />
          <CheckList
            className="mx-auto mt-12 max-w-3xl"
            title="Básicas"
            columns={1}
            items={[
              "Escolha entre as 10 principais seguradoras do mercado",
              "Seguro que atende as suas necessidades",
              "Aqui você fala com um especialista que está no mercado há mais de 40 anos",
              "Sua cotação com rapidez",
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

      <CtaDark title="Entre em contato" />
    </>
  );
}
