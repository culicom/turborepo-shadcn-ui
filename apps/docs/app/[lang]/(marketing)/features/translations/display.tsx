"use client";

import { useCallback, useEffect, useState } from "react";

import { Button, Label } from "ui";
import { Loader2 } from "lucide-react";
import { Code, H3, H4 } from "ui/typography";
import { cn } from "lib";
import { motion } from "framer-motion";

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
  const [nextLocale, setNextLocale] = useState("en");
  const [displayResponse, setDisplayResponse] = useState(data);

  useEffect(() => {
    if (isTyping !== true) {
      startTyping();
    }
  }, [data]);
  //   .then((res) => res.json())
  //   .then((x) => console.log(x));
  // console.log(fetchData, "test");
  const startTyping = useCallback(() => {
    setCompletedTyping(false);
    setIsTyping(true);
    setDisplayResponse("");

    setTimeout(() => {
      let i = 0;
      const stringResponse = i18n[nextLocale];

      const intervalId = setInterval(() => {
        setDisplayResponse(stringResponse.slice(0, i));

        i++;

        if (i > stringResponse.length) {
          clearInterval(intervalId);
          setCompletedTyping(true);
          setIsTyping(false);

          setNextLocale(nextLocale === "nl" ? "en" : "nl");
        }
      }, 20);

      return () => clearInterval(intervalId);
    }, 500);
  }, [nextLocale]);

  return (
    <div className="flex flex-col h-72 lg:h-full w-full items-stretch justify-between">
      <motion.div
        initial={{ width: "60%" }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 0.25, delay: 1 }}
        className="flex flex-col mx-auto"
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
    </div>
  );
}
