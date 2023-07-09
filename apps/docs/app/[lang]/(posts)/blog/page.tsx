import { Posts } from "../Posts";
import { Title } from "../Title";

type QueryType = {
  locale: string;
  sort: string;
};

async function getPosts(props: QueryType) {
  const filters = `&where[type.slug][equals]=blog`;

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
        type="blog"
        title="Het laatste nieuws"
        description="Ben je benieuwd naar de kennis die schuilgaat achter onze ideeën? Lees dan onze blogposts."
      />
      <Posts docs={data?.docs} />
    </>
  );
}

export const revalidate = 60;
