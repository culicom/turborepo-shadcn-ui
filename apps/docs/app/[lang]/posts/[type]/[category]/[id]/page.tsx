import Image from "next/image";
import Link from "next/link";

import { Badge } from "ui";
import { cn } from "utils";

import { Renderer } from "../../../../../../components/renderer";
import { H1 } from "ui/typography/h1";

type QueryType = {
  id: string;
};

async function getPost({ id }: QueryType) {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?where[slug][equals]=${id}`,
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
  const data = await getPost({
    id: props?.params?.id,
  });

  const doc = data?.docs[0];

  return (
    <article className="mx-auto max-w-3xl py-8 ">
      <div className="my-4 flex flex-col justify-center">
        <Badge
          className="mb-2 rounded-sm md:mx-auto w-fit mb-4"
          variant="action"
        >
          <Link href={`/posts/${doc?.type?.slug}/${doc?.category[0]?.slug}`}>
            {doc?.category[0]?.name}
          </Link>
        </Badge>

        <H1 className="pb-8 md:text-center">{doc?.title}</H1>

        <Image
          priority
          alt={doc?.featured?.filename}
          src={doc?.featured?.url}
          height={600}
          width={600}
          className={cn("my-auto mx-auto w-full object-cover", {
            "aspect-[6/4]": doc.type?.name === "blog",
            "aspect-square": doc.type?.name === "work",
          })}
        />
      </div>

      <div className="mx-auto py-4">
        <Renderer content={doc?.layout[0]?.richText} />
      </div>
    </article>
  );
}
