import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Badge, Card, CardContent, CardHeader } from "ui";

import { H3 } from "ui/typography";
import { badges } from "../../../lib/colors";

export async function Posts({ docs }: any) {
  return (
    <div className="my-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {docs?.map((doc: any) => (
        <Card className="bg-transparant border-0 shadow-none" key={doc?.id}>
          <CardHeader className="p-0">
            <Link href={`/${doc?.type?.slug}/${doc?.slug}`}>
              <Image
                alt={doc?.featured?.filename}
                src={doc?.featured?.url}
                height={500}
                width={500}
                className={cn(
                  "my-auto mx-auto object-cover filter dark:invert",
                  {
                    "aspect-square":
                      doc?.type?.name === "showcase" ||
                      doc?.type?.name === "work",
                    "aspect-[5/3]": doc?.type?.name === "blog",
                  }
                )}
              />
            </Link>
          </CardHeader>

          <CardContent className="px-0 py-2">
            <Badge
              variant={badges?.category[doc?.category[0]?.name]}
              className={cn("mb-2 rounded-sm ", {
                "bg-gray-300 hover:bg-gray-400":
                  doc?.category[0]?.name === "mobile",
              })}
            >
              <Link href={`/blog/${doc?.category[0]?.slug}`}>
                {doc?.category[0]?.name}
              </Link>
            </Badge>
            <H3 className="mt-0">
              <Link href={`/blog/${doc?.slug}`}>{doc?.title}</Link>
            </H3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
