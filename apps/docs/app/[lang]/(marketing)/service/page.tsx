import { Hero } from "../../../../components/blocks/Hero";
import { TimeLineBlock } from "../../../../components/blocks/TimeLine";
import { Renderer } from "../../../../components/renderer";

async function getPage() {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=service&locale=nl&depth=5`,
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

type Props = {
  params?: {
    locale: string;
  };
  searchParams?: {
    type?: string;
  };
};

export default async function Page() {
  const data = await getPage();

  const doc = data?.docs[0];

  return (
    <div>
      {doc?.hero?.basic ? (
        <Hero
          tag="SERVICE"
          title={doc?.hero?.basic?.title}
          payline={doc?.hero?.basic?.payoff}
        />
      ) : null}

      <article className="mx-auto my-16 md:my-36 max-w-3xl">
        <Renderer content={doc?.layout[0]?.richText} />
      </article>

      <TimeLineBlock {...doc?.layout[2]} />
    </div>
  );
}
