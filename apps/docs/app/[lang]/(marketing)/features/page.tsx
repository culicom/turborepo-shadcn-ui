import { PropsWithChildren } from "react";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Button } from "ui";
import { Hero } from "../../../../components/blocks/Hero";
import { H2, Code } from "ui/typography";

import { DarkmodeSwitch } from "./darkmode-switch";
import { Cookies } from "./cookies";
import { I18n } from "./i18n";
import { Lighthouse } from "./lighthouse";
import { Analytics } from "./analytics";

function Mockup({ children }: PropsWithChildren) {
  return <div className="rounded bg-muted border">{children}</div>;
}

export default function Page() {
  const t = useTranslations("features");

  return (
    <div>
      <Hero
        tag={t("hero.tag")}
        title={t("hero.title")}
        payline={t("hero.payline")}
      />

      <div className="my-16 md:my-32">
        {/* First */}
        <section className="grid grid-cols-1 py-8 md:grid-cols-2 my-16">
          <div className="mb-4 flex flex-col justify-center space-y-4 md:mb-0 md:mr-8">
            <H2 className={clsx("lg:after:content-['_→']")}>
              Geen vervelende cookiebanner
            </H2>
            <summary className="list-none">
              Kobalt verwerkt geen privacygevoelige informatie voor haar
              analytics. Hiermee voldoet Kobalt aan GDPR en gebruiken wij geen
              cookiebanner (die overigens door andere bedrijfen [Link](onjuist)
              gebruikt wordt.)
            </summary>
          </div>

          <Mockup>
            <div className="flex justify-center p-2 pt-32">
              <Cookies />
            </div>
          </Mockup>
        </section>

        {/* Second */}
        <section className="grid grid-cols-1 py-8 md:grid-cols-2 my-16">
          <div className="mb-4 flex flex-col  justify-center space-y-4 md:order-2  md:mb-0 md:ml-8">
            <H2 className={clsx("lg:before:content-['←_']")}>
              Perfecte Lighthouse scores door Google
            </H2>
            <summary className="list-none">
              Kobalt kent het geheim van Google. Google hecht veel waarde aan
              hun Lighthouse scores. Daarom is elke website van Kobalt hiervoor
              geoptimaliseerd. Test zelf maar:{" "}
              <Button asChild variant="link" className="inline p-0">
                <a
                  target="_blank"
                  href="https://pagespeed.web.dev/"
                  rel="noreferrer"
                >
                  Lighthouse
                </a>
              </Button>
            </summary>
          </div>

          <Mockup>
            <div className="flex flex-wrap justify-center  px-2 py-2">
              <Lighthouse pageSpeedKey={process.env.PAGE_SPEED_KEY} />
            </div>
          </Mockup>
        </section>

        {/* Third */}
        <section
          id="translations"
          className="grid grid-cols-1 py-8 md:grid-cols-2 my-16"
        >
          <div className="mb-4 flex flex-col justify-center space-y-4 md:mb-0 md:mr-8">
            <H2 className={clsx("lg:after:content-['_→']")}>Dark mode</H2>
            <summary className="list-none">
              Kobalt laat websites aansluiten op het publiek. Voor een website
              van een club of bar is een darkmode bijvoorbeeld cruciaal.
            </summary>
          </div>

          <Mockup>
            <div className="flex flex-wrap justify-center px-2 h-36 py-2 md:space-x-4">
              <DarkmodeSwitch />
            </div>
          </Mockup>
        </section>

        {/* Fourth */}
        <section className="grid grid-cols-1 py-8 md:grid-cols-2 my-16">
          <div className="mb-4 flex flex-col  justify-center space-y-4 md:order-2  md:mb-0 md:ml-8">
            <H2 className={clsx("lg:before:content-['←_']")}>
              Vergroot je bereik met slimme vertalingen <Code>(i18n)</Code>.
            </H2>
            <summary className="list-none">
              Door teksten automatisch te laten vertalen kun je meer potentiele
              bezoekers bereiken.
            </summary>
          </div>

          <Mockup>
            <div className="flex flex-col items-center h-full justify-center px-2 py-2">
              <I18n />
            </div>
          </Mockup>
        </section>

        {/* Fifth */}
        <section className="grid grid-cols-1 py-8 md:grid-cols-2 my-16">
          <div className="mb-4 flex flex-col  justify-center space-y-4 md:order-2  md:mb-0 md:ml-8">
            <H2 className={clsx("lg:before:content-['←_']")}>Analytics</H2>
            <summary className="list-none">...</summary>
          </div>

          <Mockup>
            <div className="flex flex-col items-center h-full justify-center px-2 py-2">
              <Analytics />
            </div>
          </Mockup>
        </section>
      </div>
    </div>
  );
}
