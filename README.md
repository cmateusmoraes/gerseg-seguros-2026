# Gerseg Seguros — Site

Site estático da Gerseg Seguros (corretora de seguros, São Paulo/SP), construído com **Next.js (App Router, TypeScript) + Tailwind CSS + shadcn/ui** e exportado como HTML puro (`output: 'export'`) — sem servidor Node em produção.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta out/ (site estático completo)
```

## Arquitetura

| Item | Onde |
|------|------|
| Contatos canônicos, WhatsApp e links de afiliado Porto | `src/lib/config.ts` |
| Catálogo de produtos (menu + cards da home) | `src/lib/products.ts` |
| Design tokens (navy `#002440`, gold `#c7a77b`, papel `#f7f6f2`, fontes) | `tailwind.config.ts` + `src/app/globals.css` |
| Layout global (Header, Footer, WhatsApp flutuante) | `src/app/layout.tsx` |
| Páginas de produto | `src/app/service/<slug>/page.tsx` |

**Conversão:** não há formulário — todos os CTAs abrem o WhatsApp (`WhatsAppButton`). A página **Seguro Bike** usa um número próprio (`whatsappBike` em `config.ts`) — ⚠️ pendente de validação com a Karol.

**Imagens provisórias:** `card-seguro-bike.webp`, `pagina-bike-hero.webp` e `pagina-bike-atendimento.webp` (em `public/assets/imagens/`) são placeholders — substituir pelas fotos definitivas mantendo os mesmos nomes.

## Redesign editorial

A home combina fotografia ampla, títulos em Playfair Display com itálico, seções numeradas e cartões de produtos em tamanhos diferentes. `ProductExplorer` filtra o catálogo por categoria; `DifferenceAccordion` apresenta os diferenciais usando Radix Accordion. Cabeçalho, rodapé, banners e introduções de produto compartilham a nova identidade.

`Motion` usa IntersectionObserver e Web Animations para entradas na rolagem. Os elementos permanecem visíveis sem JavaScript, e `prefers-reduced-motion` desativa as animações. O CSS cuida das entradas do hero, transições dos cartões e estados de interação; nenhuma biblioteca de animação foi adicionada.

Para revisar o HTML de produção localmente, após `npm run build`, use `python -m http.server 4317 --bind 127.0.0.1 --directory out` e abra `http://127.0.0.1:4317/`.

## Deploy (GitHub Actions → FTP)

Push na branch `main` dispara `.github/workflows/deploy.yml`: instala dependências, roda `next build` (gera `out/`) e publica `out/` no servidor via FTP ([SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)).

### Configurando os GitHub Secrets

1. No repositório do GitHub, acesse **Settings → Secrets and variables → Actions**.
2. Clique em **New repository secret** e cadastre os 4 secrets:

| Secret | Valor | Exemplo |
|--------|-------|---------|
| `FTP_SERVER` | Host do servidor FTP | `ftp.gersegseguros.com.br` |
| `FTP_USERNAME` | Usuário FTP | `gerseg-deploy` |
| `FTP_PASSWORD` | Senha FTP | — |
| `FTP_SERVER_DIR` | Diretório remoto de destino | `/public_html/site2026/` |

3. Faça push na `main` (ou rode o workflow manualmente em **Actions → Build & Deploy (FTP) → Run workflow**).

> O site exporta com `trailingSlash: true`, então cada rota vira `pasta/index.html` — funciona em Apache/Nginx sem configuração extra.
