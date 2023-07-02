import {
  AppWindow,
  Boxes,
  Combine,
  Languages,
  PaintBucket,
  Search,
} from "lucide-react";
import { Renderer } from "../renderer";
import { H2 } from "ui/typography/h2";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";

const data = [
  {
    title: "Zelf te beheren",
    icon: <Combine className=" w-16 h-16 text-blue-950" />,
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Kobalt werkt met een uniek Content Management System (CMS). Zo kun je ook zelf bij de content van je website of webshop. Wel zo handig wanneer je tussentijdse aanpassingen wilt doen aan de content van je website.",
          },
        ],
      },
    ],
  },
  {
    title: "Functionele websites",
    icon: <Boxes className=" w-16 h-16 text-blue-950" />,
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Kobalt maakt snelle, gebruiksvriendelijke en toegankelijke websites die door iedereen te gebruiken zijn. Met ieder toestel, en zelfs met een slechte internetverbinding is jouw website razendsnel.",
          },
        ],
      },
    ],
  },
  {
    title: "Professioneel webdesign",
    icon: <PaintBucket className=" w-16 h-16 text-blue-950" />,
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Kobalt maakt voor jou een op maat gemaakt webdesign. Je website matcht met je huisstijl en straalt professionaliteit uit. Alle webdesigns worden ‘mobile-first’ ontworpen. Dat betekent dat jouw website perfect werkt alle mobiele devices. ",
          },
        ],
      },
    ],
  },
  {
    title: "SEO",
    icon: <Search className=" w-16 h-16 text-blue-950" />,
    richText: [
      {
        children: [
          {
            type: "p",
            text: `Kobalt specialiseert zich in Search engine optimization (SEO). Door websites te optimaliseren op het gebied van SEO, scoren onze websites automatisch goed bij Google. Kobalt weet wat Google belangrijk vindt.`,
          },
        ],
      },
    ],
  },
  {
    title: "Vertaling",
    icon: <Languages className=" w-16 h-16 text-blue-950" />,
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Kobalt werkt met geavanceerde Artificial intelligence (AI) technieken om zo jouw website vindbaar en gebruiksklaar te maken in alle talen die jij wilt. Zo gebruiken wij AI om jouw publiek te vegroten.",
          },
        ],
      },
    ],
  },
  {
    title: "Software as a Service",
    icon: <AppWindow className=" w-16 h-16 text-blue-950" />,
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Je neemt je website af voor een vast bedrag per maand. Jouw website blijft veilig in de lucht, en wordt up-to-date gehouden met de laatste technieken. Een website hoeft geen grote investering te zijn.",
          },
        ],
      },
    ],
  },
];

export function AboutBlock() {
  return (
    <div className="my-16 md:my-32">
      <article className="mx-auto max-w-3xl md:text-center">
        <H4>Over Kobalt</H4>

        <H2 className="mt-0 border-none">Kobalt.</H2>

        <P className="text-lg text-muted-foreground">
          Kobalt biedt (startende) ondernemers de mogelijkheid om op een
          laagdrempelige en voorspelbare manier hun dienst, merk of product
          online zichtbaar en vindbaar te maken. Dit doet Kobalt door moderne en
          op maat gemaakte websites aan te bieden voor een vast bedrag per
          maand.
        </P>
      </article>

      <ul className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <li className="prose py-8 px-0" key={item?.title}>
            <div>
              <div className="mb-9 flex justify-center text-center">
                {item?.icon}
              </div>
              <h3 className="mt-8 scroll-m-20 text-center text-2xl text-blue-700 font-semibold tracking-tight">
                {item?.title}
              </h3>

              <Renderer content={item.richText} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
