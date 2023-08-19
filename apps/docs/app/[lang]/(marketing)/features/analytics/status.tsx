"use client";

import { useTransition } from "react";
import { Button } from "ui";
import { addItem } from "./actions";
import { Loader2 } from "lucide-react";

export function Status({ children }) {
  let [isPending, startTransition] = useTransition();
  return (
    <Button
      data-umami-event="analytics"
      disabled={isPending}
      onClick={() => startTransition(() => addItem())}
    >
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </Button>
  );
}
