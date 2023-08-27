import { Hero } from "../../../../components/blocks/Hero";

import { Renderer } from "../../../../components/renderer";
import React from "react";

import { Cookie } from "./cookie";
import { Translations } from "./translations";
import { Lighthouse } from "./lighthouse";
import { Darkmode } from "./darkmode";
import { Analytics } from "./analytics";
import { CMS } from "./cms";
import { SEO } from "./seo";
import { Integrations } from "./integrations";

const components = {
  cookies: Cookie,
  darkmode: Darkmode,
  i18n: Translations,
  analytics: Analytics,
  lighthouse: Lighthouse,
  cms: CMS,
  seo: SEO,
  integrations: Integrations,
};

async function getPage() {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=feature&locale=nl&depth=5`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );

  return data.json();
}

export default async function Page() {
  const data = await getPage();

  const doc = data?.docs[0];

  return (
    <div>
      {doc?.hero?.basic ? (
        <Hero
          tag="FEATURES"
          title={doc?.hero?.basic?.title}
          payline={doc?.hero?.basic?.payoff}
        />
      ) : null}
      <div className={"lg:space-y-32 my-16 md:my-36 "}>
        {doc?.layout[1]?.list?.map((feature, index) =>
          components[feature?.slug]
            ? React.createElement(components[feature?.slug], {
                index,
                title: feature?.title,
                summary: <Renderer content={feature?.richText} />,
              })
            : null
        )}
      </div>
    </div>
  );
}
