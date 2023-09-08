"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { H1, H4, P } from "ui/typography";

import { buttonVariants } from "ui";

type LinkType = {
  label: string;
  url: any;
};

type Props = {
  tag: string;
  title: any;
  payoff: string;
  link: LinkType;
};

export function Hero(props: Props) {
  return (
    <section className="my-16 md:my-32 gap-y-6 space-y-8 md:container md:py-16 md:text-center">
      <motion.div
        initial={{ x: -4, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        viewport={{ once: true }}
        className="flex max-w-3xl flex-col md:mx-auto md:items-center md:text-center"
      >
        <H4>{props?.tag}</H4>
        <H1 className="md:pb-4">{props?.title}</H1>
        <P className="text-lg text-muted-foreground">{props?.payoff}</P>
      </motion.div>
      <motion.div
        initial={{ x: 4, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 1 }}
        viewport={{ once: true }}
      >
        <a
          href={props?.link?.url}
          className={buttonVariants({ variant: "action" })}
        >
          {props?.link?.label}
        </a>
      </motion.div>
    </section>
  );
}
