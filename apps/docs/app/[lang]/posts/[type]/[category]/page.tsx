import { Posts } from "../../Posts";

type QueryType = {
  category: string;
  locale: string;
  sort: string;
};

async function getPosts(props: QueryType) {
  const filters = props?.category
    ? `&where[category.slug][equals]=${props?.category}`
    : "";
  const sorting = props?.sort ? `?sort=${props?.sort}` : "";

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
    category: props?.params?.category,
    sort: "desc",
  });

  if (!data.docs) return null;

  return <Posts docs={data?.docs} />;
}

export const revalidate = 60;
