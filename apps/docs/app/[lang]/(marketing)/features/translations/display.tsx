"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Button, Label } from "ui";
import { Loader2 } from "lucide-react";
import { Code, H3, H4 } from "ui/typography";
import { cn } from "lib";
import { AnimatePresence, motion, useInView } from "framer-motion";

const i18n = {
  nl: "Kobalt vertaalt jouw website slim met behulp van AI. Zo bereik je meer klanten, met minder moeite.",
  en: "Kobalt translates your website smartly using AI. This way, you reach more customers with less effort.",
};

function Blinker() {
  return (
    <svg
      viewBox="8 4 8 16"
      xmlns="http://www.w3.org/2000/svg"
      className="inline w-[1ch] animate-flicker"
    >
      <rect x="10" y="6" width="4" height="12" fill="#000" />
    </svg>
  );
}

export function Action() {
  return (
    <svg
      viewBox="8 4 8 16"
      xmlns="http://www.w3.org/2000/svg"
      className="inline w-[1ch] animate-flicker"
    >
      <rect x="10" y="6" width="4" height="12" fill="#000" />
    </svg>
  );
}

export function Display({ data }) {
  const [completedTyping, setCompletedTyping] = useState(null);
  const [isTyping, setIsTyping] = useState(null);
  const [displayResponse, setDisplayResponse] = useState(i18n[data]);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isTyping !== true && isInView) {
      startTyping();
    } else if (!isInView && displayResponse) {
      setDisplayResponse(null);
    }
  }, [data, isInView]);

  const startTyping = useCallback(() => {
    setCompletedTyping(false);
    setIsTyping(true);
    setDisplayResponse("");

    setTimeout(() => {
      let i = 0;

      const stringResponse = i18n[data];

      const intervalId = setInterval(() => {
        setDisplayResponse(stringResponse.slice(0, i));

        i++;

        if (i > stringResponse.length) {
          clearInterval(intervalId);
          setCompletedTyping(true);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      }, 20);

      return () => clearInterval(intervalId);
    }, 1000);
  }, [data]);

  return (
    <div
      ref={ref}
      className="flex flex-col h-[400px] overflow-hidden lg:h-full w-full items-stretch justify-between"
    >
      <header className="shadow-sm">
        <nav className="flex items-center justify-between flex-wrap bg-white mx-auto px-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a
              className="text-white no-underline hover:text-white hover:no-underline pl-2"
              href="#"
            >
              <div className="h-4 bg-gray-500 w-12 block mx-auto rounded-sm"></div>
            </a>
          </div>

          <div className="flex lg:hidden">
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              {data === "en" ? "🏴󠁧󠁢󠁥󠁮󠁧󠁿" : "🇳🇱"}
            </a>

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
              <li className="mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="#"
                >
                  {data === "en" ? "🏴󠁧󠁢󠁥󠁮󠁧󠁿" : "🇳🇱"}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="w-full flex flex-wrap justify-between my-2 items-start">
        {["nl", "en", "fr", "de", "es", "ru"].map((card, index) => (
          <motion.div
            layoutId={card}
            initial={{ opacity: 1 }}
            animate={{
              opacity: card === "en" && isInView && isTyping ? 0 : 1,
            }}
            exit={{ opacity: 1 }}
            key={card}
            className={cn("lg:w-1/3 md:w-1/2 w-full")}
          >
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-2">
              <div className="h-20 bg-gray-200 block mx-auto rounded-sm"></div>
              <div className="mx-auto bg-gray-200 rounded-md"></div>
              <div className="h-4 bg-gray-200 mt-4 block mx-auto rounded-sm"></div>
              <div className="h-2 bg-gray-200 mt-2 block mx-auto rounded-sm"></div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isInView && isTyping ? (
          <motion.div
            // initial={{ height: 200, width: "33%" }}
            // whileInView={{ height: 240, width: "66%" }}
            // transition={{ duration: 0.25, delay: 0.25 }}
            layoutId={"en"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute w-2/3 left-24 right-24 mt-20 "
          >
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div className="h-20 bg-gray-200 block mx-auto rounded-sm"></div>
              <div className="py-2">
                <div className="h-2 w-8 bg-black  rounded-sm"></div>
                <H3 className="my-0 text-xl">
                  {displayResponse}
                  {completedTyping === false ? <Blinker /> : null}
                </H3>
              </div>

              <div className="h-2 bg-gray-200 mt-2 block mx-auto rounded-sm"></div>
              <div className="h-2 bg-gray-200 mt-2 block mx-auto rounded-sm"></div>
              <div className="h-2 bg-gray-200 mt-2 block mx-auto rounded-sm"></div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
