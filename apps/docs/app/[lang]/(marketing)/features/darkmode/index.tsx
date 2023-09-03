import { cookies } from "next/headers";
import { cn } from "lib";

import React from "react";

import { Display } from "./display";
import { Mockup } from "../mockup";
import { Section } from "../section";

export async function Darkmode(props) {
  return (
    <>
      <Section {...props}></Section>

      <Mockup>
        <Display />
      </Mockup>
    </>
  );
}
