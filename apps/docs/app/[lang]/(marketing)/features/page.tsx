import { Hero } from "../../../../components/blocks/Hero";

import { Renderer } from "../../../../components/renderer";
import React from "react";

import { Cookie } from "./cookie";
import { Translations } from "./translations";
import { Lighthouse } from "./lighthouse";
import { Darkmode } from "./darkmode";
import { Analytics } from "./analytics";

const components = {
  cookies: Cookie,
  darkmode: Darkmode,
  i18n: Translations,
  analytics: Analytics,
  lighthouse: Lighthouse,
};

async function getPage() {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=feature&locale=nl&depth=5`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  return data.json();
}

export default async function Page() {
  const data = await getPage();

  const doc = data?.docs[0];

  return (
    <div>
      <Hero
        tag="FEATURES"
        title="What makes Kobalt different"
        payline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lacus nec urna imperdiet venenatis in at magna. Nulla ultrices semper dui, at maximus risus ultrices id."
      />
      <div className={"lg:space-y-32 my-16 md:my-36 "}>
        {doc?.layout[1]?.list?.map((feature, index) =>
          React.createElement(components[feature?.slug], {
            index,
            title: feature?.title,
            summary: <Renderer content={feature?.richText} />,
          })
        )}
      </div>
    </div>
  );
}
