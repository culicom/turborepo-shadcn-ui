import { motion } from "framer-motion";
import { Card } from "ui";
import { H2 } from "ui/typography";
import { Mockup } from "./mockup";
import { DarkmodeSwitch } from "./darkmode-switch";
import { Cookies } from "./cookies";
import { I18n } from "./i18n";
import { Lighthouse } from "./lighthouse";
import { Analytics } from "./analytics";

import Link from "next/link";
import { Renderer } from "../../../../components/renderer";

const components = {
  cookies: <Cookies />,
  lighthouse: <Lighthouse />,
  i18n: <I18n />,
  darkmode: <DarkmodeSwitch />,
  analytics: <Analytics />,
};

export function Mockups({ data }) {
  return (
    <>
      {data?.map((feature) => (
        <Mockup
          key={feature?.slug}
          title={feature?.title}
          summary={<Renderer content={feature?.richText} />}
        >
          {components[feature?.slug]}
        </Mockup>
      ))}
    </>
  );
}
