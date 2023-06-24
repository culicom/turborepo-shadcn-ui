"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Label, Switch } from "ui";

export function DarkmodeSwitch() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex w-full flex-row items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5">
        <Label className="text-base">Toggle darkmode</Label>
      </div>
      <Switch
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}
