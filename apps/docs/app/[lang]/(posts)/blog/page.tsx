import { Posts } from "../Posts";
import { Title } from "../Title";

const text = {
  nl: {
    title: "Het laatste nieuws",
    text: "Ben je benieuwd naar de kennis die schuilgaat achter onze ideeën? Lees dan onze blogposts.",
    action: "Ga naar blog",
  },
  en: {
    title: "The latest news",
    text: "Curious about the Knowledge Behind Our Ideas? Read Our Blog Posts.",
    action: "Go to blog",
  },
};

type QueryType = {
  lang: string;
};

async function getPosts({ lang = "nl" }: QueryType) {
  const filters = `&where[type.slug][equals]=blog`;

  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?locale=${lang}${filters}`,
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
    ...props?.params,
  });

  if (!data.docs) return null;

  return (
    <>
      <Title
        type="BLOG"
        title={text?.[props?.params?.lang]?.title}
        description={text?.[props?.params?.lang]?.text}
      />
      <Posts docs={data?.docs} />
    </>
  );
}

export const revalidate = 60;
