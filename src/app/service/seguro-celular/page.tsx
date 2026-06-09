import type { Metadata } from "next";
import {
  CloudRain,
  CreditCard,
  Globe,
  ShieldAlert,
  Smartphone,
  TabletSmartphone,
  Wrench,
} from "lucide-react";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CoverageGrid } from "@/components/sections/CoverageGrid";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ExternalButton } from "@/components/ui/ExternalButton";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seguro Celular",
};

const coberturas = [
  { icon: Smartphone, title: "Queda Acidental" },
  { icon: ShieldAlert, title: "Roubo" },
  { icon: Wrench, title: "Quebra + Roubo" },
  { icon: TabletSmartphone, title: "Quebra + Roubo + Furto Simples" },
  { icon: Globe, title: "Garantia internacional" },
  { icon: CloudRain, title: "Danos por água" },
];

export default function SeguroCelularPage() {
  return (
    <>
      <PageBanner title="Seguro Celular" />

      <ProductIntro
        paragraphs={[
          "Tão importante quanto escolher o modelo do seu smartphone é garantir coberturas conforme sua rotina. Descubra o plano que mais combina com você e saia tranquilo de casa.",
        ]}
        image={{
          src: "/assets/imagens/pagina-celular.jpg",
          alt: "Seguro Celular",
        }}
        ctas={
          <>
            {/* Link de afiliado Porto Seguro (código do corretor G5317J) */}
            <ExternalButton href={siteConfig.affiliate.celular}>
              Contrate agora!
            </ExternalButton>
            <WhatsAppButton variant="outline">
              Tire suas dúvidas: WhatsApp
            </WhatsAppButton>
          </>
        }
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="Coberturas" />
          <CoverageGrid items={coberturas} columns={3} className="mt-12" />

          {/* Destaque comercial (asteriscos duplicados do original corrigidos) */}
          <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 rounded-card border border-gold/40 bg-gold/10 px-8 py-5 text-center">
            <CreditCard className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
            <p className="font-semibold text-navy">
              Parcelamento em até 12x sem juros no cartão de crédito
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ExternalButton href={siteConfig.affiliate.celular}>
              Contrate agora!
            </ExternalButton>
            <WhatsAppButton variant="outline">
              Tire suas dúvidas: WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container-site flex flex-col items-center gap-6 py-16 text-center desk:flex-row desk:justify-between desk:py-20 desk:text-left">
          <h2 className="font-serif text-3xl font-medium leading-tight text-white desk:text-4xl">
            Contrate agora!
            <span className="block text-gold">Tire suas dúvidas: WhatsApp</span>
          </h2>
          <div className="flex shrink-0 flex-wrap justify-center gap-4">
            <ExternalButton href={siteConfig.affiliate.celular}>
              Contrate agora!
            </ExternalButton>
            <WhatsAppButton variant="light">Tire suas dúvidas</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
