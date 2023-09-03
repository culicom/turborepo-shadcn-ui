import Image from "next/image";
import Link from "next/link";

import { cn } from "lib";

import { H2 } from "ui/typography/h2";
import { H3 } from "ui/typography/h3";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";

import { Badge, Button, Card, CardContent, CardHeader } from "ui";
import { badges } from "../../lib/colors";

const text = {
  blog: {
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
  },
  showcase: {
    nl: {
      title: "Waar we trots op zijn",
      text: (
        <>
          Hieronder zie je een greep uit het werk van Kobalt. We maken
          razendsnelle websites die <span>gebruiksvriendelijk</span>,{" "}
          <span>toegankelijk</span> en <span>modern</span> zijn. Dat doen we
          altijd passend bij jouw huisstijl. Bekijk onze showcase en laat je
          inspireren.
        </>
      ),
    },
    en: {
      title: "Work we are proud of",
      text: (
        <>
          Hieronder zie je een greep uit het werk van Kobalt. We maken
          razendsnelle websites die <span>gebruiksvriendelijk</span>,{" "}
          <span>toegankelijk</span> en <span>modern</span> zijn. Dat doen we
          altijd passend bij jouw huisstijl. Bekijk onze showcase en laat je
          inspireren.
        </>
      ),
    },
  },
};

type QueryType = {
  token: string;
  locale: string;
};

async function getPosts(PostProps: QueryType) {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?locale=${PostProps?.locale}&where[type][equals]=63e29b5845a339dda4a01787&limit=3`,
    {
      credentials: "include",
      next: { revalidate: 0 },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data.json();
}

type PostBlockType = {
  token: string;
  locale: string;
  type: string;
};

export async function PostBlock({
  token,
  locale,
  type,
}: // type: {
//   value: { id, name },
// },
PostBlockType) {
  const data = await getPosts({ token, locale });

  if (!data.docs) return null;

  return (
    <div className="my-16 md:my-36">
      <article className="mx-auto my-12 max-w-3xl md:text-center">
        <H4>{type}</H4>
        <H2 className="text-blue-950 dark:text-white mt-0 border-none">
          {text?.[type]?.[locale]?.title}
        </H2>

        <P className="text-lg text-muted-foreground">
          {text?.[type]?.[locale]?.text}
        </P>
      </article>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.docs?.map((doc: any) => (
          <Card className="bg-transparant border-0 shadow-none" key={doc?.id}>
            <CardHeader className="p-0">
              <Link href={`/${doc?.type?.slug}/${doc?.slug}`}>
                <Image
                  alt={doc?.featured?.filename}
                  src={doc?.featured?.url}
                  height={500}
                  width={500}
                  className={cn("my-auto mx-auto object-cover", {
                    "aspect-square": doc?.type?.name === "showcase",
                    "aspect-[5/3]": doc?.type?.name === "blog",
                  })}
                />
              </Link>
            </CardHeader>

            <CardContent className="px-0 py-2">
              <Badge
                variant={badges["category"][doc?.category[0]?.slug]}
                className={cn("mb-2 rounded-sm", {
                  "bg-gray-300 hover:bg-gray-400":
                    doc?.category[0]?.name === "mobile",
                })}
              >
                <Link href={`/${doc?.type?.slug}`}>
                  {doc?.category[0]?.name}
                </Link>
              </Badge>
              <H3 className="mt-0">
                <Link href={`/${doc?.type?.slug}/${doc?.slug}`}>
                  {doc?.title}
                </Link>
              </H3>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="link" className="flex justify-end" asChild>
        <Link className=" " href={`/${type === "blog" ? "blog" : "showcase"}`}>
          {text?.[type]?.[locale]?.action} <span className="ml-2">→</span>
        </Link>
      </Button>
    </div>
  );
}
