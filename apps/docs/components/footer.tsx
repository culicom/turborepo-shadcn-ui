import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "../config/site";

import { Icons } from "./icons";
import { Logo } from "./logo";
import { H3 } from "ui/typography/h3";
import { Button } from "ui";

async function getNavItems() {
  const data = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?locale=nl&limit=4`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data.json();
}

export async function Footer() {
  const navItems = await getNavItems();

  return (
    <>
      {/* <svg
        id="visual"
        height="50"
        className="w-full text-blue-700 dark:text-gray-800"
      >
        <path
          d="M0 21L15 22C30 23 60 25 90 24C120 23 150 19 180 18.3C210 17.7 240 20.3 270 22.7C300 25 330 27 360 26.2C390 25.3 420 21.7 450 18.8C480 16 510 14 540 15.3C570 16.7 600 21.3 630 25C660 28.7 690 31.3 720 30.7C750 30 780 26 810 24C840 22 870 22 885 22L900 22L900 51L885 51C870 51 840 51 810 51C780 51 750 51 720 51C690 51 660 51 630 51C600 51 570 51 540 51C510 51 480 51 450 51C420 51 390 51 360 51C330 51 300 51 270 51C240 51 210 51 180 51C150 51 120 51 90 51C60 51 30 51 15 51L0 51Z"
          fill="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg> */}
      <footer
        className="bg-blue-950 py-4 dark:bg-gray-900"
        aria-label="Site Footer"
      >
        <div className="container mx-auto py-8 text-white sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex sm:justify-start">
                <Link
                  href="/"
                  className="group z-20 flex items-center space-x-2.5 text-white"
                >
                  <Logo text="white" />
                </Link>
              </div>

              <div className="text-left sm:text-left">
                <ul className="mt-8 text-sm">
                  <li>
                    <Button variant="link" asChild className="pl-0 text-white">
                      <Link href="mailto:contact@culicom.amsterdam">
                        <Icons.mail className="mr-2 w-4" />
                        contact@culicom.amsterdam
                      </Link>
                    </Button>
                  </li>

                  <li>
                    <Button variant="link" className="pl-0 text-white">
                      <Icons.phone className="mr-2 w-4" />
                      0612345678
                    </Button>
                  </li>

                  <li>
                    <Button variant="link" className="pl-0 text-white">
                      <Icons.pin className="mr-2 w-4" />
                      <address className="pl-0 text-left not-italic">
                        Develstein 544, Amsterdam Zuidoost
                      </address>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="col-span-1 text-left sm:text-left">
                <H3 className="mt-0">Links</H3>

                <nav aria-label="Footer Links" className="mt-8">
                  <ul className="text-sm">
                    {siteConfig.mainNav?.map((item) => (
                      <li key={item?.href}>
                        <Button
                          className="pl-0 text-white"
                          asChild
                          variant="link"
                        >
                          <Link
                            href={item?.href}
                            className="line-clamp-2 truncate"
                          >
                            {item?.title}
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="col-span-3 text-left sm:text-left">
                <H3 className="mt-0">Blog posts</H3>

                <nav aria-label="Footer blog posts" className="mt-8">
                  <ul className="text-sm">
                    {navItems?.docs?.map((doc: any) => (
                      <li key={doc?.id}>
                        <Button
                          className="inline pl-0 text-white"
                          asChild
                          variant="link"
                        >
                          <Link
                            href={`/posts/${doc?.type?.slug}/${doc?.category[0]?.slug}/${doc?.slug}`}
                          >
                            <span className="line-clamp-2 truncate">
                              {doc?.title}
                            </span>
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <div className="text-left sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-white">
                <span className="mr-2 block sm:inline">
                  All rights reserved.
                </span>

                <Link
                  className="inline-block text-white underline transition"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </p>

              <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
                &copy; Kobalt.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
