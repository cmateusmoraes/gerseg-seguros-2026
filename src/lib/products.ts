/**
 * Catálogo central de produtos: alimenta o submenu "Produtos" do header
 * e o grid de cards da Home. Ordem do array = ordem do menu (ESTRUTURA-SITE.md).
 */
export interface Product {
  slug: string;
  title: string;
  /** Descrição curta usada no card da Home (texto 100% de conteudo/00-home.md) */
  cardDescription: string;
  /** Descrição específica para buscadores e compartilhamentos. */
  seoDescription: string;
  cardImage: string;
}

export const products: Product[] = [
  {
    slug: "seguro-automovel",
    title: "Seguro Automóvel",
    cardDescription:
      "Porto Seguro, Azul, Sompo, Sulamérica, Allianz, Tokio Marine entre outros.",
    seoDescription:
      "Compare opções de seguro automóvel com atendimento personalizado da Gerseg Seguros, corretora em São Paulo desde 1985. Solicite sua cotação.",
    cardImage: "/assets/imagens/card-seguro-automovel-v3.webp",
  },
  {
    slug: "seguro-aluguel-fianca",
    title: "Seguro Aluguel / Fiança",
    cardDescription:
      "Você não precisa se preocupar com fiador e caução, aluga o imóvel que quiser com agilidade e ainda conta com vários benefícios.",
    seoDescription:
      "Alugue sem fiador ou caução com seguro fiança locatícia. Entenda as coberturas e solicite sua cotação com a Gerseg Seguros.",
    cardImage: "/assets/imagens/card-seguro-aluguel-v2.webp",
  },
  {
    slug: "titulo-de-capitalizacao-para-locacao",
    title: "Título de Capitalização / Locação",
    cardDescription:
      "Você não precisa de fiador para alugar um imóvel e nem seguro fiança, faça um título de capitalização para aluguel da Porto Seguro",
    seoDescription:
      "Conheça o PortoCap Aluguel, título de capitalização para locação residencial ou comercial, com consultoria da Gerseg Seguros.",
    cardImage: "/assets/imagens/card-capitalizacao-v2.webp",
  },
  {
    slug: "seguro-incendio-residencial",
    title: "Seguro Incêndio Residencial",
    cardDescription:
      "Não deixe seu próprio lar desprotegido de roubos e problemas em geral. Proteja seus bens, clique aqui.",
    seoDescription:
      "Proteja seu imóvel contra incêndio, raio, explosão e coberturas adicionais com atendimento personalizado da Gerseg Seguros.",
    cardImage: "/assets/imagens/card-seguro-incendio-v2.webp",
  },
  {
    slug: "seguro-bike",
    title: "Seguro Bike e Bike Elétrica",
    cardDescription:
      "Pedale com tranquilidade. Cobertura para bikes comuns e elétricas, com atendimento humanizado pela Porto Seguro.",
    seoDescription:
      "Seguro para bike comum ou elétrica com coberturas nacionais e internacionais e atendimento humanizado da Gerseg Seguros.",
    cardImage: "/assets/imagens/card-seguro-bike-v2.webp",
  },
  {
    slug: "plano-de-saude-pet",
    title: "Seguro de Saúde Pet",
    cardDescription:
      "Uma vida mais longa e saudável para o seu filho de quatro patas.",
    seoDescription:
      "Plano de saúde para cães e gatos com atendimento veterinário, opções de cobertura e suporte personalizado da Gerseg Seguros.",
    cardImage: "/assets/imagens/card-plano-saude-pet-v3.webp",
  },
  {
    slug: "seguro-celular",
    title: "Seguro Celular",
    cardDescription:
      "Tão importante quanto escolher o modelo do seu smartphone é garantir coberturas conforme sua rotina. Descubra o plano que mais combina com você. E saia tranquilo de casa.",
    seoDescription:
      "Seguro celular com cobertura para queda, roubo, furto, danos por água e proteção internacional. Tire suas dúvidas com a Gerseg Seguros.",
    cardImage: "/assets/imagens/card-seguro-celular-v2.webp",
  },
  {
    slug: "seguro-notebook",
    title: "Seguro Notebook",
    cardDescription:
      "Para quem trabalha usando notebook, o seguro é fundamental, pois garante primeiramente a indenização ao segurado de maneira ágil e precisa em um momento difícil.",
    seoDescription:
      "Seguro notebook para queda, tela quebrada, danos elétricos, roubo, furto qualificado, incêndio e danos por água.",
    cardImage: "/assets/imagens/card-seguro-notebook-v4.webp",
  },
];

export function productUrl(slug: string): string {
  return `/service/${slug}/`;
}

export function getProduct(slug: string): Product {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Produto não encontrado: ${slug}`);
  return p;
}
