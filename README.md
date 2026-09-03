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
| Design tokens (navy `#0d1b3d`, gold `#b59672`, fontes) | `tailwind.config.ts` + `src/app/globals.css` |
| Layout global (Header, Footer, WhatsApp flutuante) | `src/app/layout.tsx` |
| Páginas de produto | `src/app/service/<slug>/page.tsx` |

**Conversão:** não há formulário — todos os CTAs abrem o WhatsApp (`WhatsAppButton`). A página **Seguro Bike** usa um número próprio (`whatsappBike` em `config.ts`) — ⚠️ pendente de validação com a Karol.

**Imagens provisórias:** `card-seguro-bike.webp`, `pagina-bike-hero.webp` e `pagina-bike-atendimento.webp` (em `public/assets/imagens/`) são placeholders — substituir pelas fotos definitivas mantendo os mesmos nomes.

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
