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

## Deploy (GitHub Actions → Dialhost por SSH)

Pull requests para `main` instalam as dependências, geram o site estático e validam os arquivos essenciais. Um push na `main` repete essas verificações e publica somente o artefato aprovado em `public_html`, usando SSH. O workflow está em `.github/workflows/deploy.yml`.

O deploy usa o environment `production` do GitHub e impede duas publicações simultâneas. Como a hospedagem Dialhost não disponibiliza `rsync`, o workflow envia um pacote versionado, valida seu conteúdo e troca o diretório de produção somente quando o pacote está completo. A versão anterior fica disponível para rollback e é restaurada automaticamente se a verificação pública falhar. A publicação preserva `.well-known/`, `cgi-bin/`, `email/` e os arquivos `google*.html` existentes na hospedagem.

### Configuração no GitHub

Em **Settings → Environments**, crie o environment `production`. Restrinja a publicação à branch `main` e cadastre:

| Tipo | Nome | Valor |
|------|------|-------|
| Secret | `DEPLOY_SSH_KEY` | Chave privada exclusiva do pipeline, sem senha |
| Secret | `DEPLOY_SSH_KNOWN_HOSTS` | Linha verificada do host Dialhost para `known_hosts` |
| Variable | `DEPLOY_SSH_HOST` | Host SSH da hospedagem |
| Variable | `DEPLOY_SSH_PORT` | Porta SSH informada pela Dialhost |
| Variable | `DEPLOY_SSH_USER` | `gersegse` |
| Variable | `DEPLOY_SSH_PATH` | `/home/gersegse/public_html` |

No painel Dialhost, importe e autorize apenas a chave pública correspondente. A chave privada fica somente nos secrets do GitHub.

### Primeira publicação

O servidor atual usa WordPress e está acima da cota de armazenamento. Antes de ativar o deploy automático:

1. Gere e baixe um backup completo dos arquivos e do banco de dados atuais.
2. Confirme que o backup abre e contém `wp-content`, a exportação do banco e os arquivos de verificação do Google.
3. Remova da raiz apenas os arquivos do WordPress que serão substituídos, liberando espaço suficiente para a publicação.
4. Confirme via SSH que `public_html` é gravável e que o uso de arquivos da conta está abaixo de 430 MB.
5. Rode **Actions → CI & Deploy → Run workflow** e confira a home, as páginas de produtos, `robots.txt` e a imagem de compartilhamento.

Depois da primeira migração, cada push na `main` publica automaticamente. O site exporta com `trailingSlash: true`, então cada rota vira `pasta/index.html` e funciona diretamente no Apache.
