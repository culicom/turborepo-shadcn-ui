"use client";

import * as React from "react";

import { Button } from "ui";
import { Moon, SunMedium } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "lib";

export function Display() {
  const [theme, setTheme] = React.useState("light");
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  React.useEffect(() => {
    console.log(isInView);
    if (isInView) {
      setTimeout(() => {
        setTheme("dark");

        setTimeout(() => {
          setTheme("light");
        }, 500);
      }, 2000);
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className={`bg-background flex lg:h-full flex-col w-full ${theme}`}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="flex flex-col"
      >
        {/* <header className="shadow-sm">
          <nav className="flex items-center justify-between flex-wrap bg-background mx-auto px-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <div className="h-4 bg-gray-500 w-12 block mx-auto rounded-sm"></div>
            </div>

            <div className="block lg:hidden">
              <button id="nav-toggle" className="focus:outline-none">
                <div className="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
                <div className="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
                <div className="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
                
              </button>
            </div>

            <div
              className="w-full my-2 mr-8 flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <div className="h-2 bg-gray-400 dark:bg-white w-12 mt-2 block mx-auto rounded-sm"></div>
                </li>
                <li className="mr-3">
                  <div className="h-2 bg-gray-400 dark:bg-white w-12 mt-2 block mx-auto rounded-sm"></div>
                </li>
                <li className="mr-3">
                  <div className="h-2 bg-gray-400 dark:bg-white w-12 mt-2 block mx-auto rounded-sm"></div>
                </li>
              </ul>
            </div>
          </nav>
        </header> */}

        <header className="shadow-sm">
          <nav className="flex items-center justify-between flex-wrap bg-background mx-auto px-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <a
                className="text-white no-underline hover:text-white hover:no-underline pl-2"
                href="#"
              >
                <div className="h-4 bg-gray-500 w-12 block mx-auto rounded-sm"></div>
              </a>
            </div>

            <div className="block mt-2 lg:hidden">
              <button id="nav-toggle" className="focus:outline-none">
                <div className="h-0.5 bg-gray-300 w-4 mb-1 block mx-auto rounded-sm"></div>
                <div className="h-0.5 bg-gray-300 w-4 mb-1 block mx-auto rounded-sm"></div>
                <div className="h-0.5 bg-gray-300 w-4 mb-1 block mx-auto rounded-sm"></div>
              </button>
            </div>

            <div
              className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 active:text-gray-900 no-underline"
                    href="#"
                  >
                    <div className="h-2 bg-gray-400 w-12 mt-2 block mx-auto rounded-sm"></div>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    <div className="h-2 bg-gray-400 w-12 mt-2 block mx-auto rounded-sm"></div>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    <div className="h-2 bg-gray-400 w-12 mt-2 block mx-auto rounded-sm"></div>
                  </a>
                </li>
                <motion.div
                  className="cursor-pointer z-10"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <SunMedium
                    width={16}
                    className=" text-black h-full w-full dark:hidden"
                  />
                  <Moon
                    width={16}
                    className="hidden h-full text-white w-full dark:flex"
                  />
                </motion.div>
              </ul>
            </div>
          </nav>
        </header>
        <div className="w-full grid grid-cols-6 items-start">
          {[0, 1, 2].map((card) => (
            <div
              key={card}
              className={cn(
                "w-full bg- col-span-6 sm:col-span-6 md:col-span-3 lg:block lg:col-span-2 xl:col-span-2",
                { hidden: card > 0, "md:block": card < 2 }
              )}
            >
              <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                <div className="h-20 bg-gray-200 block mx-auto rounded-sm"></div>
                <div className="mx-auto bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 mt-4 block mx-auto rounded-sm"></div>
                <div className="h-2 bg-gray-200 mt-2 block mx-auto rounded-sm"></div>
                <div className="flex justify-center mt-4">
                  <div className="rounded-sm h-4 w-8 px-4 bg-gray-200 mr-2"></div>
                  <div className="rounded-sm h-4 w-8 px-4 bg-black"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
