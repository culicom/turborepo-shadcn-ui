"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { H1, H4, P } from "ui/typography";

import { buttonVariants } from "ui";
import { Renderer } from "../renderer";

type Props = {
  tag: string;
  title: any;
  payline: string;
};

export function Article(props) {
  return (
    <article className="mx-auto my-16 md:my-36 max-w-3xl">
      <Renderer content={props?.richText} />
    </article>
  );
}
