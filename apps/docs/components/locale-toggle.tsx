"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "ui";

function getCurrentLocale(pathname: string) {
  if (pathname === "/en" || pathname.startsWith("/en")) {
    return "en";
  }

  return "nl";
}

export function LocaleToggle() {
  const pathname = usePathname();

  const currentLocale = getCurrentLocale(pathname);

  return (
    <Button variant="ghost" asChild size="sm">
      <Link href={currentLocale === "nl" ? "/en" : "/nl"}>
        {currentLocale === "nl" ? "en" : "nl"}
        <span className="sr-only">Toggle theme</span>
      </Link>
    </Button>
  );
}
