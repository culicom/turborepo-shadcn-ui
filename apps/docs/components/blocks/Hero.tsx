import Link from "next/link";

import { H1, H4, P } from "ui/typography";

import { buttonVariants } from "ui";

type Props = {
  tag: string;
  title: string;
  payline: string;
};

export function Hero(props: Props) {
  return (
    <section className="my-16 md:my-32 gap-y-6 space-y-8 md:container md:py-16 md:text-center">
      <div className="flex max-w-3xl flex-col md:mx-auto md:items-center md:text-center">
        <H4>{props?.tag}</H4>
        <H1 className="md:pb-4">{props?.title}</H1>
        <P className="text-lg text-muted-foreground">{props?.payline}</P>
      </div>
      <a href="#contact" className={buttonVariants({ variant: "action" })}>
        Neem contact op
      </a>
    </section>
  );
}
