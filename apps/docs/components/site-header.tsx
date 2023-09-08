import Link from "next/link";
import { Button } from "ui";
import { cn } from "lib";

import { siteConfig } from "../config/site";
import { HamburgerToggle } from "./hamburger-toggle";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";

export function SiteHeader({ lang }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex px-3 gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {siteConfig.mainNav?.length ? (
              <div className="hidden md:flex">
                {siteConfig.mainNav?.map(
                  (item, index) =>
                    item.href && (
                      <Button key={item.href} variant="link" asChild>
                        <Link
                          key={index}
                          href={`/${lang}${item.href}`}
                          className={cn(
                            "flex items-center text-sm font-medium"
                          )}
                        >
                          {item.title}
                        </Link>
                      </Button>
                    )
                )}
              </div>
            ) : null}
            <LocaleToggle />

            <ThemeToggle />
            <HamburgerToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
