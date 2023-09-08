import React from "react";
import { Hero } from "../../../../components/blocks/Hero";
import { TimeLineBlock } from "../../../../components/blocks/TimeLine";
import { Renderer } from "../../../../components/renderer";
import { Techniques } from "../../../../components/techniques";
import { Article } from "../../../../components/blocks/Article";
import { PostBlock } from "../../../../components/blocks/Posts";

type Props = {
  params?: {
    locale: string;
  };
  searchParams?: {
    type?: string;
  };
};

const components = {
  timeline: TimeLineBlock,
  postblock: PostBlock,
  article: Article,
};

async function getPage(lang) {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=service&locale=${lang}&depth=5`,
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

      <Techniques />

      {console.log(doc)}

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
