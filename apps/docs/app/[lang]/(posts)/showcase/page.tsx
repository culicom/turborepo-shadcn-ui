import { Posts } from "../Posts";
import { Title } from "../Title";

type QueryType = {
  locale: string;
  sort: string;
};

async function getPosts(props: QueryType) {
  const filters = `&where[type.slug][equals]=showcase`;

  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?locale=${props?.locale}${filters}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data.json();
}

export default async function Page(props: any) {
  const data = await getPosts({
    locale: "nl",
    sort: "desc",
  });

  if (!data.docs) return null;

  return (
    <>
      <Title
        type="showcase"
        title="Waar we trots op zijn"
        description="Hieronder zie je een greep uit het werk van Kobalt. We maken razendsnelle websites die gebruiksvriendelijk, toegankelijk en modern zijn. Dat doen we altijd passend bij jouw huisstijl. Bekijk onze showcase en laat je inspireren."
      />
      <Posts docs={data?.docs} />
    </>
  );
}

export const revalidate = 60;
