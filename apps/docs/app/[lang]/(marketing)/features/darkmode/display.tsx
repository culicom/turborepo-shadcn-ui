"use client";

import * as React from "react";

import { Button } from "ui";
import { Moon, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "lib";

export function Display() {
  const [theme, setTheme] = React.useState("light");
  console.log(theme);
  return (
    <div className={`bg-background flex lg:h-full flex-col w-full ${theme}`}>
      <motion.div
        className="absolute cursor-pointer z-10"
        initial={{ x: "50%", y: "50%", height: "200px", width: "200px" }}
        animate={{ right: 28, height: 20, width: 20, top: 46 }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunMedium className=" text-black h-full w-full dark:hidden" />
        <Moon className="hidden h-full text-white w-full dark:flex" />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 1.5 }}
        className="flex flex-col"
      >
        <header className="shadow-sm">
          <nav className="flex items-center justify-between flex-wrap bg-background mx-auto px-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <div className="h-4 bg-gray-500 w-16 block mx-auto rounded-sm"></div>
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
                  <div className="h-2 bg-gray-400 dark:bg-white w-16 mt-2 block mx-auto rounded-sm"></div>
                </li>
                <li className="mr-3">
                  <div className="h-2 bg-gray-400 dark:bg-white w-16 mt-2 block mx-auto rounded-sm"></div>
                </li>
                <li className="mr-3">
                  <div className="h-2 bg-gray-400 dark:bg-white w-16 mt-2 block mx-auto rounded-sm"></div>
                </li>
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
