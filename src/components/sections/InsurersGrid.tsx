import Image from "next/image";

const insurers = [
  { name: "Porto Seguro", file: "porto-seguro.png" },
  { name: "Azul Seguros", file: "azul-seguros.png" },
  { name: "Tokio Marine", file: "tokio-marine.png" },
  { name: "SulAmérica", file: "sulamerica.png" },
  { name: "Suhai", file: "suhai.png" },
  { name: "Sompo", file: "sompo.png" },
  { name: "Mapfre", file: "mapfre.png" },
  { name: "Allianz", file: "allianz.png" },
  { name: "HDI", file: "hdi.png" },
  { name: "Liberty Seguros", file: "liberty.png" },
];

/** Grid com os logos das 10 seguradoras parceiras. */
export function InsurersGrid() {
  return (
    <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 desk:grid-cols-5">
      {insurers.map((s) => (
        <li
          key={s.file}
          className="flex h-28 items-center justify-center rounded-card border border-line bg-white p-4 transition-all duration-200 hover:-translate-y-[5px] hover:shadow-md"
        >
          <Image
            src={`/assets/seguradoras/${s.file}`}
            alt={s.name}
            width={110}
            height={110}
            className="max-h-20 w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
