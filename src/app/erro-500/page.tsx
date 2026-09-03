import type { Metadata } from "next";
import { ErrorPage } from "@/components/sections/ErrorPage";

export const metadata: Metadata = {
  title: "Erro interno",
  robots: { index: false },
};

/**
 * Página 500 — gera out/erro-500/index.html no export estático; o servidor
 * aponta para ela via ErrorDocument (public/.htaccess). A rota não pode se
 * chamar /500: conflita com o 500.html interno do Next quando há trailingSlash.
 */
export default function InternalErrorPage() {
  return (
    <ErrorPage
      code="500"
      title="Algo deu errado"
      titleAccent="por aqui"
      description="Ocorreu um erro inesperado no servidor. Tente novamente em alguns instantes — se o problema continuar, fale com a gente pelo WhatsApp."
    />
  );
}
