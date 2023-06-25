import { PropsWithChildren } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Alert, AlertDescription, AlertTitle } from "ui/components/alert";

import { Button } from "ui";
import { Hero } from "../../../../components/blocks/Hero";
import { H2, Code } from "ui/typography";

import { CircularProgressBar } from "./circular-progress-bar";
import { DarkmodeSwitch } from "./darkmode-switch";

function Mockup({ children }: PropsWithChildren) {
  return <div className="rounded bg-muted border">{children}</div>;
}

export default function Page(props: any) {
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
        <section className="grid grid-cols-1 py-8 md:grid-cols-2">
          <div className="mb-4 flex flex-col justify-center space-y-4 md:mb-0 md:mr-8">
            <H2 className={clsx("lg:after:content-['_→']")}>
              Geen vervelende cookiebanner
            </H2>
            <summary className="list-none">
              Door over eigen analytics te beschikken voldoet Kobalt aan GDPR
              richtlijnen en slaan wij geen onnodige cookies op, zelfs niet voor
              onze analytics.
            </summary>
          </div>

          <Mockup>
            <div className="flex justify-center  px-4 pb-4 pt-32">
              <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            </div>
          </Mockup>
        </section>

        {/* Second */}
        <section className="grid grid-cols-1 py-8 md:grid-cols-2">
          <div className="mb-4 flex flex-col  justify-center space-y-4 md:order-2  md:mb-0 md:ml-8">
            <H2 className={clsx("lg:before:content-['←_']")}>
              Perfecte Lighthouse scores door Google
            </H2>
            <summary className="list-none">
              Kobalt kent het geheim van Google. Google hecht veel waarde aan
              hun Lighthouse scores. Daarom is elke website van Kobalt hiervoor
              geoptimaliseerd. Test zelf maar:{" "}
              <Button asChild variant="link">
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
            <div className="flex flex-wrap justify-center px-2  py-12 md:space-x-4 md:py-24">
              <label className="text-success mx-2 flex flex-col space-y-2 py-2 text-center text-sm">
                <CircularProgressBar
                  strokeWidth={10}
                  sqSize={100}
                  percentage={100}
                />
                Performance
              </label>
              <label className="text-success mx-2 flex flex-col space-y-2 py-2 text-center text-sm">
                <CircularProgressBar
                  strokeWidth={10}
                  sqSize={100}
                  percentage={100}
                />
                Accessibility
              </label>
              <label className="text-success mx-2 flex flex-col space-y-2 py-2 text-center text-sm">
                <CircularProgressBar
                  strokeWidth={10}
                  sqSize={100}
                  percentage={100}
                />
                Best practices
              </label>
              <label className="text-success mx-2 flex flex-col space-y-2 py-2 text-center text-sm">
                <CircularProgressBar
                  strokeWidth={10}
                  sqSize={100}
                  percentage={100}
                />
                SEO
              </label>
            </div>
          </Mockup>
        </section>

        {/* Third */}
        <section
          id="translations"
          className="grid grid-cols-1 py-8 md:grid-cols-2"
        >
          <div className="mb-4 flex flex-col justify-center space-y-4 md:mb-0 md:mr-8">
            <H2 className={clsx("lg:after:content-['_→']")}>Dark mode</H2>
            <summary className="list-none">
              Kobalt laat websites aansluiten op het publiek. Voor een website
              van een club of bar is een darkmode bijvoorbeeld cruciaal.
            </summary>
          </div>

          <Mockup>
            <div className="flex flex-wrap justify-center px-2  pb-4  pt-32 md:space-x-4">
              <DarkmodeSwitch />
            </div>
          </Mockup>
        </section>

        {/* Fourth */}
        <section className="grid grid-cols-1 py-8 md:grid-cols-2">
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
              <Button
                asChild
                variant="link"
                className="text-xl text-muted-foreground"
              >
                <Link
                  href={`/${
                    props?.params?.lang === "nl" ? "en" : "nl"
                  }/features#translations`}
                >
                  {t("localisation")}
                </Link>
              </Button>
            </div>
          </Mockup>
        </section>
      </div>
    </div>
  );
}
