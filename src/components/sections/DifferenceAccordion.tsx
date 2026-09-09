"use client";

import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowUpRight,
  Award,
  Headset,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Headset,
    title: "Atendimento diferenciado",
    text: "Conhecemos nossos clientes para apresentar soluções ideais. De pessoa para pessoa.",
  },
  {
    icon: LifeBuoy,
    title: "Sempre conectados",
    text: "Prefere ser atendido pelo WhatsApp? Instagram? Telefone? Aqui o cliente escolhe.",
  },
  {
    icon: ShieldCheck,
    title: "Teve um contratempo?",
    text: "Imprevistos acontecem e nesse momento pode contar com a nossa ajuda.",
  },
  {
    icon: Award,
    title: "Profissionais capacitados",
    text: "Temos muita experiência no mercado, buscamos sempre o que o cliente precisa.",
  },
];

export function DifferenceAccordion() {
  return (
    <Accordion.Root type="single" defaultValue="0" collapsible>
      {items.map(({ icon: Icon, title, text }, index) => (
        <Accordion.Item
          value={String(index)}
          key={title}
          className="group border-b border-navy/20 first:border-t"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center gap-4 py-7 text-left transition-colors hover:text-[#896c44] sm:gap-5">
              <span className="text-[11px] text-muted">0{index + 1}</span>
              <Icon
                size={23}
                strokeWidth={1.4}
                className="shrink-0"
                aria-hidden="true"
              />
              <span className="flex-1 font-serif text-xl sm:text-2xl">
                {title}
              </span>
              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="pb-8 pl-[76px] pr-6 text-sm leading-7 text-muted sm:pl-[86px]">
              {text}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
