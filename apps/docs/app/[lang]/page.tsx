import { cn } from "lib";
import { AboutBlock } from "./../../components/blocks/About";
import { AccordionBlock } from "./../../components/blocks/Accordion";
import { FeatureBlock } from "./../../components/blocks/Features";
import { Hero } from "./../../components/blocks/Hero";
import { PostBlock } from "./../../components/blocks/Posts";
import React from "react";
import { Techniques } from "../../components/techniques";

async function getPage(lang) {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=home&locale=${lang}&depth=5`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Pages API-Key ec5a5c3d-c78f-491b-997d-dd9ae1d24bdb`,
      },
      cache: "no-store",
    }
  );

  return data.json();
}

type Props = {
  params?: {
    locale: string;
  };
  searchParams?: {
    type?: string;
  };
};

const components = {
  features: FeatureBlock,
  postblock: PostBlock,
  about: AboutBlock,
  faq: AccordionBlock,
};

export default async function Page({ params: { lang } }) {
  const data = await getPage(lang);

  const doc = data?.docs[0];

  return (
    <div>
      {/* <Hero
        tag="Website nodig?"
        title={
          <span className="inline">
            Professionele websites voor (startende) ondernemers{" "}
            <span className="group">
              <span className="group-hover:hidden inline">🌍</span>
              <span className="group-hover:inline hidden ">🌎</span>
            </span>
          </span>
        }
        payline="Voor een vast bedrag per maand krijg je een uniek webontwerp en ben je zorgeloos online (inclusief hosting en domeinnaam). Je website is maandelijks opzegbaar."
      /> */}

      {doc?.hero?.basic ? <Hero {...doc?.hero?.basic} /> : null}

      <Techniques />

      {doc?.layout?.map((feature) =>
        components[feature?.blockType]
          ? React.createElement(components[feature?.blockType], {
              locale: lang,
              ...feature,
            })
          : null
      )}
    </div>
  );
}
