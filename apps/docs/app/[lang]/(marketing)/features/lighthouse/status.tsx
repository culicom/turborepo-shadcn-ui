"use client";

import { useTransition } from "react";
import { Button } from "ui";
import { addItem } from "./actions";
import { Loader2 } from "lucide-react";

export function Status() {
  let [isPending, startTransition] = useTransition();
  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(() => addItem())}
    >
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Ophalen
    </Button>
  );
}
