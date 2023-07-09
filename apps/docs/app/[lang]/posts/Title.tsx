"use client";
import { useParams } from "next/navigation";

import { H1, H4, P } from "ui/typography";
export function Title() {
  const params = useParams();

  return (
    <div className="sm:mt-0 sm:mb-0 sm:py-0 sm:pb-0 sm:pt-12">
      <div className="flex md:justify-center">
        <ul className="">
          {params?.id ? (
            <li>
              <H4 className="border-b-0 hover:no-underline md:text-center">
                {params?.type}
              </H4>
            </li>
          ) : params?.type && !params?.category ? (
            <li>
              <div className="flex max-w-3xl flex-col md:mx-auto md:items-center md:text-center">
                <H4> {params?.type}</H4>
                <H1 className="md:pb-4">
                  {params?.type === "blog"
                    ? "Het laatste nieuws"
                    : "Waar we trots op zijn"}
                </H1>
                <P className="text-lg text-muted-foreground">
                  {params?.type === "blog"
                    ? "Ben je benieuwd naar de kennis die schuilgaat achter onze ideeën? Lees dan onze blogposts."
                    : "Hieronder zie je een greep uit het werk van Kobalt. We maken razendsnelle websites die gebruiksvriendelijk, toegankelijk en modern zijn. Dat doen we altijd passend bij jouw huisstijl. Bekijk onze showcase en laat je inspireren."}
                </P>
              </div>
            </li>
          ) : params?.category ? (
            <li>
              <H4 className="border-b-0 text-center">{params?.category}</H4>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
