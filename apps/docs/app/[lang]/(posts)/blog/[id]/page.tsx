import Image from "next/image";

import { cn } from "lib";

import { H1 } from "ui/typography/h1";
import { notFound } from "next/navigation";
import { Renderer } from "../../../../../components/renderer";
import { Title } from "../../Title";

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

  if (!doc) {
    return notFound();
  }

  return (
    <>
      <Title type="blog" />
      <article className="mx-auto max-w-3xl pb-8 ">
        <div className="mb-4 flex flex-col justify-center">
          <H1 className="pb-8 pt-0 md:text-center">{doc?.title}</H1>

          <Image
            priority
            alt={doc?.featured?.filename}
            src={doc?.featured?.url}
            height={600}
            width={600}
            className={cn("my-auto mx-auto w-full object-cover", {
              "aspect-[6/4]": doc.type?.name === "blog",
              "aspect-square": doc.type?.name === "showcase",
            })}
          />
        </div>

        <div className="mx-auto py-4">
          <Renderer content={doc?.layout[0]?.richText} />
        </div>
      </article>
    </>
  );
}

export const revalidate = 60;
