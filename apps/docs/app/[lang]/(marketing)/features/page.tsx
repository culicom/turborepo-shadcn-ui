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
import { cn } from "lib";

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

async function getPage(lang) {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=feature&locale=${lang}&depth=5`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 },
    }
  );

  return data.json();
}

export default async function Page({ params: { lang } }) {
  const data = await getPage(lang);
  console.log(data);
  const doc = data?.docs[0];

  return (
    <div>
      {doc?.hero?.basic ? <Hero {...doc?.hero?.basic} /> : null}
      <div className={"lg:space-y-32 my-16 md:my-36 "}>
        {doc?.layout[1]?.list?.map((feature, index) =>
          components[feature?.slug] ? (
            <section
              key={feature?.slug}
              className={cn(
                "px-2 lg:sticky lg:top-0 bg-background items-center z-1000 grid grid-cols-1 py-8 lg:grid-cols-2 my-16 lg:h-screen"
              )}
            >
              {React.createElement(components[feature?.slug], {
                index,
                title: feature?.title,
                summary: <Renderer content={feature?.richText} />,
              })}
            </section>
          ) : null
        )}
      </div>
    </div>
  );
}
