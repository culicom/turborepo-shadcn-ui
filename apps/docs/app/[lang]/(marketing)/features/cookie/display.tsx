"use client";

import { cn } from "lib";
import { Alert, AlertDescription, AlertTitle } from "ui";
import { motion } from "framer-motion";

export function Display() {
  return (
    <>
      <div className="flex flex-col">
        <header className="shadow-sm">
          <nav className="flex items-center justify-between flex-wrap bg-white mx-auto px-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <a
                className="text-white no-underline hover:text-white hover:no-underline pl-2"
                href="#"
              >
                <div className="h-4 bg-gray-500 w-16 block mx-auto rounded-sm"></div>
              </a>
            </div>

            <div className="block lg:hidden">
              <button id="nav-toggle" className="focus:outline-none">
                <div className="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
                <div className="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
                <div className="h-1 bg-gray-300 w-8 mb-1 block mx-auto rounded-sm"></div>
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
                    <div className="h-2 bg-gray-400 w-16 mt-2 block mx-auto rounded-sm"></div>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    <div className="h-2 bg-gray-400 w-16 mt-2 block mx-auto rounded-sm"></div>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    <div className="h-2 bg-gray-400 w-16 mt-2 block mx-auto rounded-sm"></div>
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    <div className="h-2 bg-gray-400 w-16 mt-2 block mx-auto rounded-sm"></div>
                  </a>
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
                "w-full col-span-6 sm:col-span-6 md:col-span-3 lg:block lg:col-span-2 xl:col-span-2",
                { hidden: card > 0, "md:block": card < 2 }
              )}
            >
              <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
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
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 1.5 }}
        className="w-full absolute px-4 self-end md:h-fit h-72 flex items-end"
      >
        <Alert className="h-fit self-end [&:has(svg)]:pl-4">
          <AlertTitle>Wij sturen al je informatie op naar Google!</AlertTitle>
          <AlertDescription>
            Door gebruik te maken van deze website accepteer je dit automatisch.
          </AlertDescription>
        </Alert>
      </motion.div>
    </>
  );
}
