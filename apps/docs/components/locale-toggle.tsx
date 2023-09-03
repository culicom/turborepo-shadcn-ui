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

// export function LocaleToggle() {
//   const pathname = usePathname();

//   const currentLocale = getCurrentLocale(pathname);

//   return (
//     <Button variant="ghost" asChild size="sm">
//       <Link href={currentLocale === "nl" ? "/en" : "/nl"}>
//         {currentLocale === "nl" ? "en" : "nl"}
//         <span className="sr-only">Toggle theme</span>
//       </Link>
//     </Button>
//   );
// }
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "ui";

import { Moon, SunMedium, Languages, Globe } from "lucide-react";
import { cn } from "lib";

const languages = {
  nl: [{ nl: "Nederlands" }, { en: "Engels" }],
  en: [{ nl: "Dutch" }, { en: "English" }],
};

export function LocaleToggle() {
  const pathname = usePathname();

  const currentLocale = getCurrentLocale(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Globe className="rotate-0 scale-100 dark:-rotate-90 mr-2" />
          {currentLocale} <span className="sr-only">Toggle Languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages[currentLocale]?.map((language) => (
          <DropdownMenuItem
            asChild
            disabled={Object.keys(language)[0] === currentLocale}
            key={Object.keys(language)[0]}
          >
            <Link
              className={cn("flex items-center text-sm font-medium")}
              href={`/${Object.keys(language)[0]}`}
            >
              {Object.values(language)[0]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
