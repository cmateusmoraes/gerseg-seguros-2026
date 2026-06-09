import type { Metadata } from "next";
import {
  CloudRain,
  Flame,
  Laptop,
  MonitorX,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CoverageGrid } from "@/components/sections/CoverageGrid";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ExternalButton } from "@/components/ui/ExternalButton";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seguro Notebook",
};

const coberturas = [
  { icon: Laptop, title: "Queda Acidental" },
  { icon: MonitorX, title: "Quebra de Tela do Notebook" },
  { icon: Zap, title: "Falha por Danos Elétricos" },
  { icon: Flame, title: "Incêndio, Queda de Raio, ou Explosão" },
  {
    icon: ShieldAlert,
    title: "Roubo e/ou Furto Qualificado do Equipamento, incluindo Assaltos",
  },
  { icon: CloudRain, title: "Danos por água" },
];

export default function SeguroNotebookPage() {
  return (
    <>
      <PageBanner title="Seguro Notebook" />

      <ProductIntro
        paragraphs={[
          "Para quem trabalha usando notebook, o seguro é fundamental, pois garante primeiramente a indenização ao segurado de maneira ágil e precisa em um momento difícil.",
          "Para você, a proteção garante tranquilidade ao proteger as conquistas, pois todos sabemos como é difícil ficar sem seu equipamento nos momentos em que se precisa dele.",
        ]}
        image={{
          src: "/assets/imagens/pagina-notebook.jpg",
          alt: "Seguro Notebook",
        }}
        ctas={
          /* Link de afiliado Porto Seguro (código G5317J) — contratação online direta */
          <ExternalButton href={siteConfig.affiliate.notebook}>
            Contrate agora!
          </ExternalButton>
        }
        phoneNote={siteConfig.phone.cellDisplay}
      />

      <section>
        <div className="container-site section-pad">
          <SectionHeading title="Coberturas" />
          <CoverageGrid items={coberturas} columns={3} className="mt-12" />
          <div className="mt-12 flex flex-col items-center gap-4">
            <ExternalButton href={siteConfig.affiliate.notebook}>
              Contrate agora!
            </ExternalButton>
            <p className="text-sm font-semibold text-navy">
              Tire suas dúvidas: {siteConfig.phone.cellDisplay}
            </p>
          </div>
        </div>
      </section>

      {/* CTA final: contratação online (afiliado) + dúvidas via WhatsApp */}
      <section className="bg-navy">
        <div className="container-site flex flex-col items-center gap-6 py-16 text-center desk:flex-row desk:justify-between desk:py-20 desk:text-left">
          <h2 className="font-serif text-3xl font-medium leading-tight text-white desk:text-4xl">
            Contrate agora!
            <span className="block text-gold">Tire suas dúvidas: WhatsApp</span>
          </h2>
          <div className="flex shrink-0 flex-wrap justify-center gap-4">
            <ExternalButton href={siteConfig.affiliate.notebook}>
              Contrate agora!
            </ExternalButton>
            <WhatsAppButton variant="light">Tire suas dúvidas</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
