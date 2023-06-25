import Image from "next/image";
import Link from "next/link";

import { cn } from "lib";

import { H2 } from "ui/typography/h2";
import { H3 } from "ui/typography/h3";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";

import { Badge, Card, CardContent, CardHeader } from "ui";

type QueryType = {
  token: string;
  locale: string;
  id: string;
};

async function getPosts(PostProps: QueryType) {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?locale=${PostProps?.locale}&where[type][equals]=${PostProps.id}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data.json();
}

type PostType = {
  id: string;
  name: string;
};

type PostBlockType = {
  token: string;
  locale: string;
  type: { value: PostType };
};

export async function PostBlock({
  token,
  locale,
  type: {
    value: { id, name },
  },
}: PostBlockType) {
  const data = await getPosts({ token, locale, id });

  if (!data.docs) return null;

  return (
    <div className="my-16 md:my-32">
      <article className="mx-auto my-12 max-w-3xl md:text-center">
        <H4>{name}</H4>
        <H2 className="mt-0 border-none">
          {name === "work" ? "Waar we trots op zijn" : "Het laatste nieuws"}
        </H2>

        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </P>
      </article>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.docs?.map((doc: any) => (
          <Card className="bg-transparant border-0 shadow-none" key={doc?.id}>
            <CardHeader className="p-0">
              <Link
                href={`/posts/${doc?.type?.slug}/${doc?.category[0]?.slug}/${doc?.slug}`}
              >
                <Image
                  alt={doc?.featured?.filename}
                  src={doc?.featured?.url}
                  height={500}
                  width={500}
                  className={cn("my-auto mx-auto object-cover", {
                    "aspect-square": doc?.type?.name === "work",
                    "aspect-[5/3]": doc?.type?.name === "blog",
                  })}
                />
              </Link>
            </CardHeader>

            <CardContent className="px-0 py-2">
              <Badge className="mb-2 rounded-sm" variant="action">
                <Link
                  href={`/posts/${doc?.type?.slug}/${doc?.category[0]?.slug}`}
                >
                  {doc?.category[0]?.name}
                </Link>
              </Badge>
              <H3 className="mt-0">
                <Link
                  href={`/posts/${doc?.type?.slug}/${doc?.category[0]?.slug}/${doc?.slug}`}
                >
                  {doc?.title}
                </Link>
              </H3>
            </CardContent>
          </Card>
        ))}
      </div>

      <Link
        className="link mt-4 flex justify-end "
        href={`/posts/${name === "blog" ? "blog" : "work"}`}
      >
        {name === "work" || name === "portfolio"
          ? "Zie meer werk"
          : "Ga naar blog"}
        →
      </Link>
    </div>
  );
}
