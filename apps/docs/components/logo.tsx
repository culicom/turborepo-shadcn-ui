import { Inter, PT_Sans } from "next/font/google";

import { cn } from "lib";

import { H3 } from "ui/typography/h3";

const ptSansNarrow = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

type LogoType = {
  text?: string;
};

export function Logo(props: LogoType) {
  return <H3 className={cn(`mt-0`, ptSansNarrow.className)}>Kobalt.</H3>;
}
