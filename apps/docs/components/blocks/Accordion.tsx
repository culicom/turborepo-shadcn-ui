import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui";
import { H2, H4, P } from "ui/typography";

export async function AccordionBlock() {
  return (
    <div className="my-16 md:my-32 mx-auto max-w-4xl gap-2">
      <article className="prose mx-auto mb-12 text-center">
        <H4>Faq</H4>
        <H2 className="mt-0 border-none">Veelgestelde vragen</H2>

        <P className="text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </P>
      </article>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
