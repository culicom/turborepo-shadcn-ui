"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";

import { Button } from "ui";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunMedium className="rotate-0 scale-100  dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0  dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
