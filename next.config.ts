import type { NextConfig } from "next";

/**
 * Site 100% estático (next export):
 * - output: 'export'        → gera a pasta out/ com HTML puro (sem servidor Node)
 * - trailingSlash: true     → rotas /service/<slug>/ viram pastas com index.html
 *                             (necessário para Apache/Nginx tradicionais)
 * - images.unoptimized      → obrigatório no export estático (sem otimizador on-demand)
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
