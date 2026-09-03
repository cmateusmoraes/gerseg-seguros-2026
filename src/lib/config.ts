/**
 * Contatos canônicos e links externos da Gerseg Seguros.
 * NUNCA hardcodar telefone/WhatsApp/e-mail nas páginas — sempre importar daqui.
 */
export const siteConfig = {
  name: "Gerseg Seguros",
  tagline: "Corretora de Seguros",
  description:
    "Corretora de Seguros com mais de 40 anos de mercado, também oferecemos planos para assinatura de veículos e celular por assinatura. Entre em contato!",

  phone: {
    /** Telefone fixo canônico */
    display: "(11) 3229-6314",
    /** Celular exibido como contato (não é o número dos links de WhatsApp) */
    cellDisplay: "(11) 98541-9978",
  },

  /** WhatsApp canônico do site (fixo (11) 3229-6314) */
  whatsapp: {
    number: "551132296314",
    display: "(11) 3229-6314",
  },

  /**
   * WhatsApp exclusivo da página Seguro Bike — número divergente vindo do
   * mockup do cliente. ⚠️ Validar com a Karol se é o canal definitivo.
   */
  whatsappBike: {
    number: "551132294057",
    display: "11 3229-4057",
  },

  email: "gerseg@gersegseguros.com.br",

  address: {
    street: "Largo do Paissandú, 72 Cj. 405 — Centro",
    city: "São Paulo / SP",
  },

  /** Horário canônico (README). O mockup Bike cita 8h — validar com a Karol. */
  hours: "Segunda a sexta, 09h às 18h",
  hoursShort: "09.00h às 18.00h",

  social: {
    instagram: "https://www.instagram.com/gersegseguros/",
    instagramHandle: "@gersegseguros",
    facebook: "https://www.facebook.com/GersegSeguros",
  },

  /**
   * Links de afiliado Porto Seguro (código do corretor G5317J).
   * ⚠️ Preservar EXATAMENTE como documentados — rastreiam conversões.
   */
  affiliate: {
    notebook:
      "https://wwws.portoseguro.com.br/vendaonline/equipamentosportateis/home.ns?cod=db90f63e731e4aa19f6005251a2430d6&utm_source=G5317J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_BV53YJ&utm_content=GERSEG__SEGUROS&origem=",
    celular: "http://porto.vc/RAMOS_ELEMENTARES_G5317J",
  },
} as const;

/** Monta a URL de click-to-chat do WhatsApp, opcionalmente com mensagem preenchida. */
export function whatsappUrl(
  number: string = siteConfig.whatsapp.number,
  message?: string
): string {
  const baseUrl = `https://wa.me/${number}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
