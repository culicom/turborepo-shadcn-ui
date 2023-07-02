"use client";

import { useCallback, useState } from "react";

import { Button, Label } from "ui";
import { Loader2 } from "lucide-react";
import { P } from "ui/typography";

const i18n = {
  nl: "Kobalt vertaalt jouw website slim met behulp van AI. Zo bereik je meer klanten, met minder moeite.",
  en: "Kobalt translates your website smartly using AI. This way, you reach more customers with less effort.",
};

function Blinker() {
  return (
    <svg
      viewBox="8 4 8 16"
      xmlns="http://www.w3.org/2000/svg"
      className="inline w-[1ch] animate-flicker"
    >
      <rect x="10" y="6" width="4" height="12" fill="#000" />
    </svg>
  );
}

export function I18n() {
  const [completedTyping, setCompletedTyping] = useState(null);
  const [displayResponse, setDisplayResponse] = useState(
    "Kobalt laat websites aansluiten op het publiek. Voor een website van een club of bar is een darkmode bijvoorbeeld cruciaal."
  );

  const startTyping = useCallback(() => {
    setCompletedTyping(false);
    setDisplayResponse("");

    setTimeout(() => {
      let i = 0;
      const stringResponse = i18n?.en;

      const intervalId = setInterval(() => {
        setDisplayResponse(stringResponse.slice(0, i));

        i++;

        if (i > stringResponse.length) {
          clearInterval(intervalId);
          setCompletedTyping(true);
        }
      }, 20);

      return () => clearInterval(intervalId);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col min-h-[12rem] h-full w-full items-stretch justify-between">
      <div />
      <Label className="text-center text-md text-muted-foreground">
        {displayResponse}
        {completedTyping === false ? <Blinker /> : null}
      </Label>
      <div className="self-end">
        <Button disabled={completedTyping === false} onClick={startTyping}>
          {completedTyping === false ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Translate
        </Button>
      </div>
    </div>
  );
}
