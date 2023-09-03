import { cookies } from "next/headers";
import { Data } from "./data";
import { cn } from "lib";

import React from "react";

import { Display } from "./display";
import { Mockup } from "../mockup";
import { Section } from "../section";

export async function Cookie(props) {
  const res = await fetch("http://localhost:3000/features/cookie/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    next: {
      tags: ["cookie"],
    },
  });
  const { data } = await res.json();

  return (
    <>
      <Section {...props}>
        <Data acceptCookies={data} />
      </Section>

      <Mockup>
        <Display />
      </Mockup>
    </>
  );
}
