import {
  AppWindow as AppWindowIcon,
  Boxes as BoxesIcon,
  Combine as CombineIcon,
  Languages as LanguagesIcon,
  PaintBucket as PaintBucketIcon,
  Search as SearchIcon,
} from "lucide-react";
import { Renderer } from "../renderer";
import { H2 } from "ui/typography/h2";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";
import { H3 } from "ui/typography";
import React from "react";

const data = [
  {
    title: "Door jou te beheren",
    icon: <CombineIcon className=" w-16 h-16 text-blue-950 dark:text-white " />,
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
    title: "Optimale functionaliteit",
    icon: <BoxesIcon className=" w-16 h-16 text-blue-950 dark:text-white " />,
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
    icon: (
      <PaintBucketIcon className=" w-16 h-16 text-blue-950 dark:text-white " />
    ),
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Kobalt maakt voor jou een op maat gemaakt webdesign. Je website matcht met je huisstijl en straalt professionaliteit uit. Alle webdesigns worden ‘mobile-first’ ontworpen. Dat betekent dat jouw website perfect werkt op alle mobiele devices.",
          },
        ],
      },
    ],
  },
  {
    title: "SEO gericht",
    icon: <SearchIcon className=" w-16 h-16 text-blue-950 dark:text-white " />,
    richText: [
      {
        children: [
          {
            type: "p",
            text: `Kobalt specialiseert zich in Search Engine Optimization (SEO). Door websites te optimaliseren op het gebied van SEO, scoren onze websites automatisch goed bij Google. Kobalt weet wat Google belangrijk vindt.`,
          },
        ],
      },
    ],
  },
  {
    title: "Nog beter vindbaar",
    icon: (
      <LanguagesIcon className=" w-16 h-16 text-blue-950 dark:text-white " />
    ),
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Kobalt werkt met geavanceerde Artificial Intelligence (AI) technieken om zo jouw website vindbaar en gebruiksklaar te maken in alle talen die jij wilt. Zo gebruiken wij AI om jouw publiek te vegroten.",
          },
        ],
      },
    ],
  },
  {
    title: "Software as a Service",
    icon: (
      <AppWindowIcon className=" w-16 h-16 text-blue-950 dark:text-white " />
    ),
    richText: [
      {
        children: [
          {
            type: "p",
            text: "Je neemt je website af voor een vast bedrag per maand. Vervolgens houdt kobalt jouw website veilig in de lucht, en wordt deze up-to-date gehouden met de laatste technieken. Het beschikken over een professionele website hoeft geen grote investering te zijn.",
          },
        ],
      },
    ],
  },
];

const Icons = {
  AppWindow: AppWindowIcon,
  Boxes: BoxesIcon,
  Combine: CombineIcon,
  Languages: LanguagesIcon,
  PaintBucket: PaintBucketIcon,
  Search: SearchIcon,
};

export function AboutBlock({ title, richText, columns }) {
  return (
    <div className="my-16 md:my-36">
      <article className="mx-auto max-w-3xl md:text-center">
        <H4>Onze websites</H4>

        <H2 className="dark:text-white text-blue-950 mt-0 border-none">
          {title}
        </H2>

        <Renderer content={richText} />
      </article>

      <ul className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {columns?.map((item) => (
          <li className="prose py-8 px-0" key={item?.title}>
            <div>
              <div className="flex justify-center text-center">
                {Icons[item?.icon]
                  ? React.createElement(Icons[item?.icon], {
                      className: " w-16 h-16 text-blue-950 dark:text-white ",
                    })
                  : null}
              </div>
              <H3 className="mt-8 text-center text-blue-700 font-semibold tracking-tight">
                {item?.title}
              </H3>

              <Renderer content={item.richText} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
