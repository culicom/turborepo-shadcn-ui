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
      <Hero
        tag="KOBALTS DIENSTEN"
        title="Zie wat Kobalt voor uw bedrijf kan betekenen"
        payline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            lacus nec urna imperdiet venenatis in at magna. Nulla ultrices
            semper dui, at maximus risus ultrices id."
      />

      <article className="mx-auto my-16 max-w-3xl">
        <Renderer content={doc?.layout[0]?.richText} />
      </article>

      <TimeLineBlock {...doc?.layout[2]} />
    </div>
  );
}
