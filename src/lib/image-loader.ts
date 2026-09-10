import type { ImageLoaderProps } from "next/image";
import manifest from "@/lib/responsive-image-manifest.json";

type ResponsiveImage = {
  width: number;
  variants: number[];
};

const images = manifest as Record<string, ResponsiveImage>;

function variantUrl(src: string, width: number): string {
  const filename = src.split("/").pop()?.replace(/\.webp$/i, "") ?? "image";
  return `/assets/imagens/responsive/${filename}-${width}w.webp`;
}

/**
 * Loader estático para o `next/image`.
 *
 * Imagens editoriais recebem arquivos físicos em vários tamanhos. Arquivos pequenos,
 * como logos, continuam usando o original; o parâmetro de largura mantém o contrato
 * do loader e permite que o navegador escolha a densidade correta no `srcset`.
 */
export default function imageLoader({
  src,
  width,
  quality = 90,
}: ImageLoaderProps): string {
  const image = images[src];

  if (!image) {
    const separator = src.includes("?") ? "&" : "?";
    return `${src}${separator}w=${width}&q=${quality}`;
  }

  const variant = image.variants.find((candidate) => candidate >= width);
  if (!variant || width >= image.width) return src;

  return variantUrl(src, variant);
}
