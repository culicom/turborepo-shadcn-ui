import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui";
import { H2, H4, P } from "ui/typography";
//
//
//
// -
const faq = [
  {
    id: "faq-1",
    question: "Waarvoor zijn de eenmalige ontwikkelkosten?",
    answer:
      "Je betaalt eenmaling €500,- (excl. btw) ontwikkelkosten voor het ontwikkelen van een uniek website ontwerp inclusief doordachte huisstijl. Hierbij kun je denken aan een simpel logo ontwerp en een goed gebruik van iconen, kleuren, fonts etc. Het website ontwerp wordt technisch uitgewerkt zodat je zo snel mogelijk live kunt, maar hierbij hebben we eerst wel een paar contactmomenten met elkaar. Wil je ook nog een webshop aan je website toevoegen? Dan rekent Kobalt daar €250,- (excl. btw) extra ontwikkelkosten voor.",
  },
  {
    id: "faq-2",
    question: "Wat als ik nog geen logo en/of huisstijl heb?",
    answer:
      "Voor de eenmalige ontwikkelkosten van €500,- (excl. btw) word je voorzien van een doordachte huisstijl inclusief eenvoudig logo. Dit betekent dat je een simpel logo ontwerp kunt krijgen indien je nog niet over een logo beschikt en dat er in samenspraak een adequate huisstijl voor jouw onderneming wordt opgemaakt.",
  },
  {
    id: "faq-3",
    question:
      "Ben ik voor het maandelijks terugkerende bedrag helemaal online en ondersteund?",
    answer:
      "Ja want bij Kobalt kom je niet voor verrassingen te staan. Voor €100,- (excl. btw) per maand blijft je website live, onderhouden en up to date. We leveren dus alle support die jouw website nodig heeft. Heb je ook nog een webshop? Dan vraagt Kobalt daar €50 (excl. btw) per maand extra voor. ",
  },
  {
    id: "faq-4",
    question: "Is een website bij Kobalt echt maandelijks opzegbaar?",
    answer:
      "Ja zeker, je kunt je website en webshop ten alle tijden opzeggen. Vergeet alleen het opzegtermijn van maand niet.",
  },
];

export async function AccordionBlock() {
  return (
    <div className="my-16 md:my-32 mx-auto max-w-4xl gap-2">
      <article className="prose mx-auto mb-12 text-center">
        <H4>Faq</H4>
        <H2 className="text-blue-950 dark:text-white mt-0 border-none">
          Veelgestelde vragen
        </H2>

        <P className="text-lg text-muted-foreground">
          Heb je een vraag aan ons? Waarschijnlijk is je vraag al een keer
          eerder gesteld. Hier vind je een overzicht van de{" "}
          <b>veelgestelde vragen</b>.
        </P>
      </article>
      <Accordion type="single" className="w-full">
        {faq.map((q) => (
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
