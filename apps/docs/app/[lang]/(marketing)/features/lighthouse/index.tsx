import { cookies } from "next/headers";
import { Data } from "./data";
import { cn } from "lib";

import React from "react";

import { Display } from "./display";
import { Mockup } from "../mockup";
import { Section } from "../section";

export async function Lighthouse(props) {
  return (
    <>
      <Section {...props}>
        <Data />
      </Section>

      <Mockup>
        <Display />
      </Mockup>
    </>
  );
}
