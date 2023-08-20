import { useTranslations } from "next-intl";

import { Button } from "ui";
import { Hero } from "../../../../components/blocks/Hero";
import { H2, Code } from "ui/typography";
import "./styles.css";
import { DarkmodeSwitch } from "./darkmode-switch";
import { Cookies, Action as CookiesAction } from "./cookies";
import { I18n } from "./i18n";
import { Lighthouse } from "./lighthouse";
import { Analytics } from "./analytics";
import { Mockup } from "./mockup";
import Link from "next/link";
import { Renderer } from "../../../../components/renderer";
import { cn } from "lib";

const components = {
  cookies: { mockup: <Cookies />, action: <CookiesAction /> },
  lighthouse: { mockup: <Lighthouse /> },
  i18n: { mockup: <I18n /> },
  darkmode: { mockup: <DarkmodeSwitch /> },
  analytics: { mockup: <Analytics /> },
};

async function getPage() {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=feature&locale=nl&depth=5`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  return data.json();
}

export default async function Page() {
  const data = await getPage();

  const doc = data?.docs[0];
  // const t = useTranslations("features");

  console.log(doc?.layout[1]);

  return (
    <div>
      <Hero
        tag="FEATURES"
        title="What makes Kobalt different"
        payline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lacus nec urna imperdiet venenatis in at magna. Nulla ultrices semper dui, at maximus risus ultrices id."
      />
      {/* container */}
      <div className={"lg:space-y-32 my-16 md:my-36 "}>
        {doc?.layout[1]?.list?.map((feature, index) => (
          <Mockup
            index={index}
            key={feature?.slug}
            slug={feature?.slug}
            title={feature?.title}
            summary={<Renderer content={feature?.richText} />}
            action={components[feature?.slug].action}
          >
            {components[feature?.slug].mockup}
          </Mockup>
        ))}
      </div>
    </div>
  );
}
