"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "../config/site";
import { cn } from "lib";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "ui";

import { Icons } from "./icons";

export function HamburgerToggle() {
  const [open, toggleOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    toggleOpen(false);
  }, [pathname]);

  return (
    <Sheet onOpenChange={() => toggleOpen(!open)} open={open}>
      <SheetTrigger className="flex md:hidden">
        <Icons.menu />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent position="top" size="full">
        <SheetHeader className="h-full">
          <SheetDescription className="mx-auto flex flex-col space-y-4 text-center ">
            {siteConfig.mainNav?.length
              ? siteConfig.mainNav?.map(
                  (item) =>
                    item.href && (
                      <Link
                        href={item.href}
                        key={item.href}
                        className={cn("mx-auto flex items-center ")}
                      >
                        {item.title}
                      </Link>
                    )
                )
              : null}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
