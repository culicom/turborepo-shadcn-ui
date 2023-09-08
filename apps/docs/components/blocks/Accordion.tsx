// @ts-nocheck

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui";
import { H2, H4, P } from "ui/typography";
import { Renderer } from "../renderer";

export function AccordionBlock({ title, richText, questions }) {
  return (
    <div className="my-16 md:my-36 mx-auto max-w-4xl gap-2">
      <article className="prose mx-auto mb-12 text-center">
        <H4>FAQ</H4>
        <H2 className="text-blue-950 dark:text-white mt-0 border-none">
          {title}
        </H2>

        <Renderer content={richText} />
      </article>
      <Accordion type="single" collapsible className="w-full">
        {questions.map((q) => (
          <AccordionItem key={q?.id} value={q?.id}>
            <AccordionTrigger>{q?.question}</AccordionTrigger>
            <AccordionContent>
              <P>{q?.answer}</P>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
