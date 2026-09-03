import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CheckList } from "@/components/sections/CheckList";
import { CtaDark } from "@/components/sections/CtaDark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getProduct } from "@/lib/products";

const product = getProduct("titulo-de-capitalizacao-para-locacao");

export const metadata: Metadata = {
  title: product.title,
};

export default function CapitalizacaoPage() {
  return (
    <>
      <PageBanner title={product.title} />

      <ProductIntro
        title="Como funciona o PortoCap Aluguel?"
        paragraphs={[
          "O PortoCap Aluguel é um título de capitalização com pagamento único e utilizado como solução para locação residencial ou comercial, pessoa física ou jurídica.",
          "Após escolher o imóvel, o inquilino deve negociar o preço da garantia com o proprietário e a imobiliária e, com a ajuda de um Corretor, adquirir um título de capitalização no mesmo valor, que servirá de caução à locação negociada. Este poderá ter vigência de 12, 15, 18, 24 ou 30 meses.",
          "Durante a vigência, o inquilino participa de sorteios mensais pela Loteria Federal e concorre a prêmios de até 5 vezes o valor do título de acordo com a regra vigente no momento da contratação. Além disso, conta com serviços emergenciais à residência alugada e, em caso de permanência até o final da vigência sem utilizar a garantia, resgate percentual do valor capitalizado de acordo com o plano escolhido.",
        ]}
        image={{
          src: product.cardImage,
          alt: product.title,
        }}
        ctas={
          <>
            <WhatsAppButton>Contrate agora!</WhatsAppButton>
            <WhatsAppButton variant="outline">
              Tire suas dúvidas: WhatsApp
            </WhatsAppButton>
          </>
        }
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="Conheça melhor o produto" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-12 desk:grid-cols-2">
            <CheckList
              items={[
                "Alugue um imóvel sem fiador e ainda concorra a sorteios de prêmios de até R$ 150 mil;",
                "Você não precisa de fiador para alugar um imóvel e nem seguro fiança, faça um título de capitalização para aluguel da Porto Seguro;",
                "Você não precisa mais apresentar um fiador e nem passar por análise ou comprovação de renda para alugar um imóvel;",
                "Com o Título de Capitalização da Porto Seguro inquilinos e proprietários garantem a locação com agilidade e o imóvel conta com serviços especiais.",
                "Garantia do seu título com a maior e mais confiável seguradora do Brasil, a Porto Seguros",
              ]}
            />
            <CheckList
              title="Principais vantagens"
              items={[
                "Serviços gratuitos a residência alugada;",
                "Sorteios mensais pela Loteria Federal, com o prêmio de 1 a 5 x o valor contratado;",
                "Resgate em caso de inadimplência para pagamento de débitos do imóvel;",
                "Flexível e sem comprovação de renda.",
              ]}
            />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <WhatsAppButton>Contrate agora!</WhatsAppButton>
            <WhatsAppButton variant="outline">
              Tire suas dúvidas: WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <CtaDark title="Contrate agora!" titleAccent="Tire suas dúvidas: WhatsApp" />
    </>
  );
}
