import { cookies } from "next/headers";

import { cn } from "lib";

import React from "react";

import { Display } from "./display";
import { Mockup } from "../mockup";
import { Section } from "../section";
import { Data } from "./data";

export async function Translations(props) {
  const res = await fetch("http://localhost:3000/features/translations/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    next: {
      tags: ["translations"],
    },
  });
  const { data } = await res.json();

  return (
    <section className={cn("grid grid-cols-1 py-8 lg:grid-cols-2 my-16")}>
      <Section {...props}>
        <Data data={data} />
      </Section>

      <Mockup>
        <Display data={data} />
      </Mockup>
    </section>
  );
}
