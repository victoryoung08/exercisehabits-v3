"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type AccordionBlockProps = {
  heading: string;
  accordion: AccordionProp[];
};

export type AccordionProp = {
  heading: string;
  content: string;
};

export default function AccordionBlock({
  heading,
  accordion,
}: AccordionBlockProps) {
  return (
    <section className="section-padding flex flex-col gap-4 max-w-3xl mx-auto">
      <div>
        <h2 className="text-balance text-center">{heading}</h2>
      </div>
      <div>
        <Accordion type="single" collapsible>
          {accordion.map((faq) => (
            <AccordionItem value={faq.heading} key={faq.heading}>
              <AccordionTrigger>
                <h4>{faq.heading}</h4>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
