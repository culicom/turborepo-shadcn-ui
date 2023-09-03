"use client";

import { cn } from "lib";
import { Alert, AlertDescription, AlertTitle } from "ui";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Display() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(isInView);
  return (
    <>
      <div ref={ref} className="flex flex-col">
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

      {isInView ? (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 200 }}
          transition={{ duration: 0.25, delay: 1 }}
          className="w-full bg-gray-100 absolute px-4 self-end bottom-0 flex items-end"
        >
          <span className="w-full flex flex-wrap justify-center self-center">
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 2 }}
              className="w-full"
            >
              <div className="flex  w-full justify-around">
                <div className="flex flex-col space-x-1 ">
                  <div className="w-2/3 h-4 bg-gray-500 mt-4 block mx-auto rounded-sm"></div>
                  <div className="w-24 h-2 bg-gray-500 mt-4 rounded-sm"></div>
                </div>
              </div>
            </motion.div>
          </span>
        </motion.div>
      ) : null}
    </>
  );
}
