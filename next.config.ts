import type { NextConfig } from "next";

/**
 * Site 100% estático (next export):
 * - output: 'export'        → gera a pasta out/ com HTML puro (sem servidor Node)
 * - trailingSlash: true     → rotas /service/<slug>/ viram pastas com index.html
 *                             (necessário para Apache/Nginx tradicionais)
 * - loader customizado      → `srcset` responsivo sem depender de servidor Node
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [480, 640, 768, 960, 1200, 1440],
    imageSizes: [32, 64, 96, 128, 192, 256, 384],
  },
};

export default nextConfig;
