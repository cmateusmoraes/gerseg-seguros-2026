import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQ em accordion (shadcn/ui), 2 colunas no desktop como no mockup.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const mid = Math.ceil(items.length / 2);
  const columns = [items.slice(0, mid), items.slice(mid)];

  return (
    <div className="grid gap-3 desk:grid-cols-2 desk:gap-4">
      {columns.map((col, c) => (
        <Accordion key={c} type="single" collapsible className="space-y-3">
          {col.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ))}
    </div>
  );
}
