"use client";

import { useCallback, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "ui/components/alert";
import { Button } from "ui";
import { Loader2 } from "lucide-react";
import { Code } from "ui/typography";

export function Cookies() {
  const [completedFetching, setCompletedFetching] = useState(null);

  const startTyping = useCallback(() => {
    setCompletedFetching(false);

    setTimeout(() => {
      setCompletedFetching(true);
    }, 500);
  }, []);

  if (completedFetching) {
    return (
      <div className="w-full  self-end md:h-fit h-72 flex items-end">
        <Alert className=" md:h-fit self-end ">
          <AlertTitle>Bedankt voor het accepteren!</AlertTitle>
          <AlertDescription>
            We deden het toch al, maar nu met toestemming.
          </AlertDescription>
          <div className="justify-end mt-4 flex space-x-2">
            <Button className="cursor-not-allowed" disabled variant="ghost">
              Weiger
            </Button>
            <Button disabled>Toestaan</Button>
          </div>
        </Alert>
      </div>
    );
  }

  return (
    <div className="w-full self-end md:h-fit h-72 flex items-end">
      <Alert className="h-fit self-end [&:has(svg)]:pl-4">
        <AlertTitle>Wij sturen al je informatie op naar Google!</AlertTitle>
        <AlertDescription>
          Door gebruik te maken van deze website accepteer je dit automatisch.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function Action() {
  const [completedFetching, setCompletedFetching] = useState(null);

  const startTyping = useCallback(() => {
    setCompletedFetching(false);

    setTimeout(() => {
      setCompletedFetching(true);
    }, 500);
  }, []);

  return (
    <div className="w-full items-center justify-end mt-4 flex space-x-2">
      <span className="text-xs">
        ...: <Code>uit</Code>
      </span>
      <Button onClick={startTyping} disabled={completedFetching === false}>
        {completedFetching === false ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        Toestaan
      </Button>
    </div>
  );
}
