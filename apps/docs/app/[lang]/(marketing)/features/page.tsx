import { useTranslations } from "next-intl";

import { Button } from "ui";
import { Hero } from "../../../../components/blocks/Hero";
import { H2, Code } from "ui/typography";

import { DarkmodeSwitch } from "./darkmode-switch";
import { Cookies } from "./cookies";
import { I18n } from "./i18n";
import { Lighthouse } from "./lighthouse";
import { Analytics } from "./analytics";
import { Mockup } from "./mockup";
import Link from "next/link";

export default function Page() {
  const t = useTranslations("features");

  return (
    <div>
      <Hero
        tag={t("hero.tag")}
        title={t("hero.title")}
        payline={t("hero.payline")}
      />

      <div className="lg:space-y-32 my-16 md:my-32">
        <Mockup title={t("cookie.title")} summary={t("cookie.description")}>
          <Cookies />
        </Mockup>

        <Mockup
          title="Perfecte Lighthouse scores door Google"
          summary={
            <>
              Kobalt kent het geheim van Google. Google hecht veel waarde aan
              hun Lighthouse scores. Daarom is elke website van Kobalt hiervoor
              geoptimaliseerd. Op onze blog lees je hoe wij elke website laten
              testen door onze{" "}
              <Button asChild variant="inline" className="p-0">
                <Link href="/blog/de-kracht-van-google's-lighthouse-voor-seo-optimalisatie">
                  eigen Lighthouse integratie
                </Link>
              </Button>
              . <span className="hidden lg:inline">Hiernaast</span>
              <span className="inline lg:hidden">Hieronder</span> kun je ook
              onze eigen Lighthouse score zien, en zelf opnieuw ophalen. Test
              ook je eigen website bij{" "}
              <Button asChild variant="inline" className="p-0">
                <a
                  target="_blank"
                  href="https://pagespeed.web.dev/"
                  rel="noreferrer"
                >
                  Lighthouse
                </a>
              </Button>{" "}
              zelf.
            </>
          }
        >
          <Lighthouse />
        </Mockup>

        <Mockup
          title="Dark mode"
          summary={
            <>
              Kobalt laat websites aansluiten op het publiek. Voor een website
              van een club of bar is een darkmode bijvoorbeeld cruciaal. Lees op
              onze blog verder waarom{" "}
              <Button asChild variant="inline" className="p-0">
                <Link href="/blog/laat-dark-mode-ook-voor-jou-werken">
                  Dark mode
                </Link>
              </Button>{" "}
              ook voor jou belangrijk kan zijn.
            </>
          }
        >
          <DarkmodeSwitch />
        </Mockup>

        <Mockup
          title={
            <>
              Vergroot je bereik met slimme vertalingen <Code>(i18n)</Code>.
            </>
          }
          summary={
            <>
              Door teksten automatisch te laten vertalen kun je meer potentiele
              bezoekers bereiken. Op onze blog leggen we precies uit hoe we het
              doen, en waarom{" "}
              <Button asChild variant="inline" className="p-0">
                <Link href="/blog/hoe-kobalt-het-web-vertaalt">
                  Slimme vertalingen
                </Link>
              </Button>{" "}
              voor jou interessant zijn.
            </>
          }
        >
          <I18n />
        </Mockup>

        <Mockup
          title="Realtime analytics"
          summary={
            <>
              Eigen (slimme) analytics geven jou realtime inzicht in
              gebruikersaantallen op jouw website. Lees op onze blog meer over
              <Button asChild variant="inline" className="p-0">
                <Link href="/blog/analytics">onze analytics</Link>
              </Button>{" "}
              software.
            </>
          }
        >
          <Analytics />
        </Mockup>
      </div>
    </div>
  );
}
