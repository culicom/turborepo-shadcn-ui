"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button, Label, Switch } from "ui";
import { Moon, SunMedium } from "lucide-react";
import { P } from "ui/typography";

export function DarkmodeSwitch() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex flex-col w-full h-full items-stretch justify-between">
      <div />
      <P className="text-xl justify-center flex text-center">
        <SunMedium className="dark:hidden" />
        <Moon className="hidden dark:flex" />
      </P>

      <div className="flex items-center space-x-2 self-end">
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle
        </Button>
      </div>
    </div>
  );
  // return (
  //   <div className="flex w-full flex-row items-center justify-between rounded-lg border p-4">
  //     <div className="space-y-0.5">
  //       <Label className="text-base">Toggle darkmode</Label>
  //     </div>
  //     <Switch
  //       onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
  //     />
  //   </div>
  // );
}
