import Link from "next/link";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface ErrorPageProps {
  /** Código HTTP exibido em destaque (ex.: "404") */
  code: string;
  /** Primeira linha do título — navy */
  title: string;
  /** Segunda linha do título — dourada */
  titleAccent: string;
  description: string;
}

/** Tela padrão das páginas de erro (404/500): código gigante + CTA de volta à Home. */
export function ErrorPage({ code, title, titleAccent, description }: ErrorPageProps) {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site flex flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="font-serif text-[100px] font-bold leading-none text-gold/40 desk:text-[140px]"
        >
          {code}
        </p>
        <SectionHeading as="h1" title={title} titleAccent={titleAccent} className="mt-3" />
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{description}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-btn bg-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-navy-hover"
          >
            Voltar para a Home
          </Link>
          <WhatsAppButton variant="outline">Fale conosco</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
