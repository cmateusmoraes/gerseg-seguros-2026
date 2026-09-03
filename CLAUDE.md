# CLAUDE.md — Site Gerseg Seguros

Contexto para trabalhar neste repositório. Leia antes de qualquer alteração.

## O que é este projeto

Site institucional da **Gerseg Seguros**, corretora de seguros fundada em 1985, sediada no Largo do Paissandú, 72 — Cj. 405 — Centro — São Paulo/SP. Redesign completo do site WordPress antigo (gersegseguros.com.br), construído do zero em junho/2026.

O material de referência original (conteúdo de cada página, inventário de assets, estrutura do site antigo) está na **pasta pai** deste repo: `../conteudo/*.md`, `../ESTRUTURA-SITE.md`, `../INVENTARIO-ASSETS.md`, `../README.md`. **Todo texto do site vem 100% desses arquivos — nunca inventar copy.** Se uma alteração precisar de texto novo, perguntar ao usuário (Mateus) em vez de criar.

## Stack e restrições inegociáveis

- **Next.js 15 (App Router) + TypeScript estrito + Tailwind CSS 3 + shadcn/ui** (Accordion via Radix)
- **Site 100% estático**: `output: 'export'` + `trailingSlash: true` + `images: { unoptimized: true }` em `next.config.ts`. Gera `out/` e publica em servidor Apache/Nginx via FTP. **Proibido**: rotas de API, Server Actions, middleware, qualquer dependência de runtime Node em produção, `next/image` sem unoptimized.
- Fontes via `next/font/google`: **Playfair Display** (500/700, headlines serif) + **Inter** (300–600, body) — nunca usar `<link>` no head.
- CSS: só Tailwind (utility-first). Sem CSS externo; tokens em `globals.css` + `tailwind.config.ts`.

## Design system (canônico — veio do mockup da página Bike)

A página `/service/seguro-bike/` é a **referência visual do site inteiro** (`../conteudo/08-seguro-bike.md` + `../assets/screenshots/08-seguro-bike-mockup.jpg`).

- Cores (mapeadas no Tailwind): `navy` #0d1b3d (primária), `navy-hover` #13295f, `gold` #b59672 (accent de headlines), `surface` #f8f8f8 (fundo), `line` #ececec (bordas), `muted` #666
- Headlines em duas cores: linha 1 navy (ou branca em fundo escuro), linha 2 dourada → componente `SectionHeading`
- Border-radius (classes Tailwind customizadas): `rounded-card` 18px, `rounded-faq` 12px, `rounded-btn` 10px, `rounded-img` 20px
- Hover de cards: `hover:-translate-y-[5px]` sutil
- Container: `.container-site` (max 1200px, largura 90%); seções: `.section-pad` (90px vertical no desktop)
- Breakpoint principal: `desk:` = 980px (screen customizada)

## Estrutura do código

```
src/
├── app/
│   ├── layout.tsx                 # fontes, metadata, Header + Footer + WhatsAppFloat globais
│   ├── page.tsx                   # Home (one-page com âncoras #quem-somos, #produtos, #contato)
│   └── service/<slug>/page.tsx    # 8 páginas de produto (rotas idênticas ao site antigo, p/ SEO)
├── lib/
│   ├── config.ts                  # ★ contatos canônicos, WhatsApp, afiliados — NUNCA hardcodar
│   ├── products.ts                # catálogo: alimenta menu Produtos e grid da Home
│   └── utils.ts                   # cn()
└── components/
    ├── layout/    Header, Footer, WhatsAppFloat
    ├── ui/        WhatsAppButton (CTA padrão), ExternalButton (afiliados), accordion (shadcn)
    ├── icons/     WhatsAppIcon (SVG inline — lucide não tem ícone de marca)
    └── sections/  SectionHeading, Hero, PageBanner, ProductIntro, ProductCard, CoverageGrid,
                   FeatureGrid, StepsGrid, FaqAccordion, CtaDark, InsurersGrid, PricingTable,
                   CheckList, YouTubeEmbed
```

As 9 rotas: `/` + `/service/` → `titulo-de-capitalizacao-para-locacao`, `seguro-aluguel-fianca`, `plano-de-saude-pet`, `seguro-automovel`, `seguro-notebook`, `seguro-celular`, `seguro-incendio-residencial`, `seguro-bike`.

## Regras de negócio críticas

### Conversão = 100% WhatsApp
Não existe formulário de contato e não deve existir. Todo CTA ("Fale conosco", "Contrate agora", "Solicite uma proposta" etc.) abre o WhatsApp via `WhatsAppButton` (`https://wa.me/<numero>`, `target="_blank" rel="noopener noreferrer"`). Botão flutuante `WhatsAppFloat` em todas as páginas (no layout).

### Contatos canônicos (centralizados em `src/lib/config.ts`)
- Telefone fixo / WhatsApp dos links: **(11) 3229-6314** → `551132296314`
- Celular exibido como contato (não é link wa.me): **(11) 98541-9978**
- E-mail: **gerseg@gersegseguros.com.br**
- ⚠️ **Exceção**: a página Seguro Bike usa **(11) 3229-4057** (`siteConfig.whatsappBike`) em todos os seus CTAs — número do mockup do cliente, divergente do resto do site. Decisão consciente do Mateus, **pendente de validação com a Karol** (cliente). Não "corrigir" sem ser pedido.

### Links de afiliado Porto Seguro (código do corretor G5317J)
Em `siteConfig.affiliate` — **preservar byte a byte**, rastreiam comissões:
- Notebook: URL longa `wwws.portoseguro.com.br/vendaonline/...&utm_source=G5317J...`
- Celular: `http://porto.vc/RAMOS_ELEMENTARES_G5317J`
Páginas Notebook e Celular usam `ExternalButton` com esses links como "Contrate agora!" (vão para a loja da Porto, não para WhatsApp).

### Correções editoriais já aplicadas (não regredir)
- "Vantages" → "Vantagens" (página Pet)
- Breadcrumb "Services" → "Serviços" (página Incêndio)
- Asteriscos duplicados removidos no destaque "Parcelamento em até 12x" (Celular)
- Padronização "mais de 40 anos" de mercado (fundada em 1985; o material antigo variava 30/35/40)
- Breadcrumb da página Pet **não** tem nível "Serviços" (fiel ao original): `Home › Plano de Saúde Pet`

## Pendências conhecidas (validar com a Karol antes do go-live)

1. **Número WhatsApp da página Bike** (3229-4057 vs canônico 3229-6314)
2. **Horário de atendimento**: site usa 09h–18h (canônico do material); mockup Bike dizia 8h–18h
3. **Respostas de 2 FAQs da Bike** ("cobre acessórios?" e "bike usada?") — usam as respostas sugeridas no material, marcadas com comentário no código
4. **Preços do Plano Pet**: tabela renderiza **sem valores** (R$ 49,90–299,90 do site antigo podem estar defasados) — CTA "Consulte valores"; os valores estão em `../conteudo/03-plano-saude-pet.md` se for preciso reativar
5. **3 imagens placeholder** (navy/gold geradas programaticamente) em `public/assets/imagens/`: `card-seguro-bike.webp`, `pagina-bike-hero.webp`, `pagina-bike-atendimento.webp` — substituir pelas fotos definitivas mantendo nome e proporção
6. **GTM** (GTM-NQ8BGMZ do site antigo) não foi incluído — decisão em aberto

## Comandos e deploy

```bash
npm run dev     # localhost:3000
npm run build   # gera out/ (export estático) + typecheck — rodar antes de commitar
```

- Repo GitHub: `cmateusmoraes/gerseg-seguros-2026` (este diretório `site/` é a raiz do repo)
- Deploy: push na `main` → `.github/workflows/deploy.yml` → build → FTP (SamKirkland/FTP-Deploy-Action)
- Secrets necessários: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR` (destino: `/public_html/site2026/`). Instruções no `README.md`.
- `.env.example` documenta que o site não usa env em runtime.

## Convenções ao alterar

- Componentes de seção são **server components**; só `Header` e `accordion` são `"use client"`. Manter client components no mínimo.
- Novos produtos: adicionar em `src/lib/products.ts` (menu e grid da Home atualizam sozinhos) + criar `src/app/service/<slug>/page.tsx` + card 370x240 em `public/assets/imagens/`.
- Metadata: títulos seguem template `%s – Gerseg Seguros` (layout); a página Bike usa título absoluto `Gerseg Seguros | Seguro Bike e Bike Elétrica` (canônico do material).
- Ícones: lucide-react (exceto WhatsApp → `WhatsAppIcon` próprio).
- Imagens novas: sempre `next/image` com `width`/`height` explícitos (export estático não otimiza).
- O projeto está dentro de pasta OneDrive — se o git se comportar de forma estranha (locks, arquivos sumindo), suspeite do sync.
