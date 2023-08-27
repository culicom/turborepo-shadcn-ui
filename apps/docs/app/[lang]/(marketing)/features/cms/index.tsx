import { cookies } from "next/headers";

import { cn } from "lib";

import React from "react";

import { Display } from "./display";
import { Mockup } from "../mockup";
import { Section } from "../section";

export async function CMS(props) {
  return (
    <section className={cn("grid grid-cols-1 py-8 lg:grid-cols-2 my-16")}>
      <Section {...props}></Section>

      <Mockup>
        <Display />
      </Mockup>
    </section>
  );
}
