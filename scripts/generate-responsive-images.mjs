import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import manifest from "../src/lib/responsive-image-manifest.json" with { type: "json" };

const publicDirectory = path.resolve("public");
const outputDirectory = path.join(publicDirectory, "assets", "imagens", "responsive");

await fs.mkdir(outputDirectory, { recursive: true });

for (const [publicPath, image] of Object.entries(manifest)) {
  const source = path.join(publicDirectory, publicPath.replace(/^\/assets\//, "assets/"));
  const basename = path.basename(publicPath, path.extname(publicPath));

  for (const width of image.variants) {
    if (width >= image.width) {
      throw new Error(`${publicPath}: a variante ${width}px não é menor que o original.`);
    }

    const destination = path.join(outputDirectory, `${basename}-${width}w.webp`);
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 90, effort: 6, smartSubsample: true })
      .toFile(destination);
  }
}

console.log(`Imagens responsivas geradas em ${outputDirectory}`);
