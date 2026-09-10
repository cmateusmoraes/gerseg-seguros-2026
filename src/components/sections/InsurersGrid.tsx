import Image from "next/image";

const insurers = [
  { name: "Porto Seguro", file: "porto-seguro.webp" },
  { name: "Azul Seguros", file: "azul-seguros.webp" },
  { name: "Tokio Marine", file: "tokio-marine.webp" },
  { name: "SulAmérica", file: "sulamerica.webp" },
  { name: "Suhai", file: "suhai.webp" },
  { name: "Sompo", file: "sompo.webp" },
  { name: "Mapfre", file: "mapfre.webp" },
  { name: "Allianz", file: "allianz.webp" },
  { name: "HDI", file: "hdi.webp" },
  { name: "Liberty Seguros", file: "liberty.webp" },
];

/** Grid com os logos das 10 seguradoras parceiras. */
export function InsurersGrid() {
  return (
    <ul className="grid grid-cols-2 items-center border-l border-t border-line sm:grid-cols-5">
      {insurers.map((s) => (
        <li
          key={s.file}
          className="flex h-28 items-center justify-center border-b border-r border-line p-4 transition-colors duration-300 hover:bg-white"
        >
          <Image
            src={`/assets/seguradoras/${s.file}`}
            alt={s.name}
            width={110}
            height={110}
            className="h-20 w-24 object-contain mix-blend-multiply"
          />
        </li>
      ))}
    </ul>
  );
}
