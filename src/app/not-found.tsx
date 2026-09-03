import type { Metadata } from "next";
import { ErrorPage } from "@/components/sections/ErrorPage";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

/** Página 404 — o export estático gera out/404.html a partir daqui. */
export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      title="Ops! Página"
      titleAccent="não encontrada"
      description="O endereço que você acessou não existe ou foi movido. Volte para a página inicial ou fale com a gente pelo WhatsApp."
    />
  );
}
