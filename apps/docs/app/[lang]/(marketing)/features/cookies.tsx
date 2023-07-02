"use client";

import { useCallback, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "ui/components/alert";
import { Button } from "ui";
import { Loader2 } from "lucide-react";

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
      <Alert>
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
    );
  }

  return (
    <Alert className="[&:has(svg)]:pl-4">
      <AlertTitle>Wij sturen al je informatie op naar Google!</AlertTitle>
      <AlertDescription>
        Door gebruik te maken van deze website accepteer je dit automatisch.
      </AlertDescription>
      <div className="w-full justify-end mt-4 flex space-x-2">
        <Button className="cursor-not-allowed" disabled variant="ghost">
          Weiger
        </Button>
        <Button onClick={startTyping} disabled={completedFetching === false}>
          {completedFetching === false ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Toestaan
        </Button>
      </div>
    </Alert>
  );
}
