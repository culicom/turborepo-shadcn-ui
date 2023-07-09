"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button, Label, Switch } from "ui";
import { Moon, SunMedium } from "lucide-react";
import { P } from "ui/typography";

export function DarkmodeSwitch() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex h-64 lg:h-full flex-col w-full items-between justify-between">
      <div />
      <P className="text-3xl justify-center text-gray-500 flex text-center">
        <SunMedium className="h-12 w-12 dark:hidden" />
        <Moon className="hidden h-12 w-12 dark:flex" />
      </P>

      <div className="flex items-center space-x-2 self-end">
        <Button
          className="dark:hidden"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Darkmode aan
        </Button>
        <Button
          data-umami-event="darkmode"
          className="dark:block hidden"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Darkmode uit
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
