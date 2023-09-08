// @ts-nocheck
"use client";

import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { Button } from "ui";
import { addItem } from "./actions";

export function Data({ acceptCookies }) {
  let [isPending, startTransition] = useTransition();
  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(() => addItem())}
    >
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {acceptCookies}
    </Button>
  );
}
