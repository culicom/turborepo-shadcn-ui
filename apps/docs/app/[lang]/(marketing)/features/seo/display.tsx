"use client";
import { Status } from "./status";
import { Reorder, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import google from "./Google_2015_logo.svg";
import Image from "next/image";
import { Button } from "ui";
import { cn } from "lib";

async function getStats(user) {
  var start = new Date();

  var end = new Date();

  const data = await fetch(
    `${process.env.UMAMI_URI}/api/websites/${
      process.env.UMAMI_ID
    }/pageviews?startAt=${start.setUTCFullYear(2022)}&endAt=${end.setUTCHours(
      23,
      59,
      59,
      999
    )}&unit=day&timezone=Europe%2FParis`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    }
  );

  const stats = await data.json();

  return stats;
}

export function Display() {
  // const user = await getUser();
  // const data = await getStats(user);
  const defaultOrder = [0, 1, 2];
  const [items, setItems] = useState(defaultOrder);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (!isInView) {
      setItems(defaultOrder);
    } else {
      //   setTimeout(() => {
      //   let i = 0;
      //   const stringResponse = i18n[nextLocale];

      //   const intervalId = setInterval(() => {
      //     setDisplayResponse(stringResponse.slice(0, i));

      //     i++;

      //     if (i > stringResponse.length) {
      //       clearInterval(intervalId);
      //       setCompletedTyping(true);
      //       setIsTyping(false);

      //       setNextLocale(nextLocale === "nl" ? "en" : "nl");
      //     }
      //   }, 20);

      //   return () => clearInterval(intervalId);
      // }, 1000);
      setTimeout(() => {
        setItems([0, 2, 1]);

        setTimeout(() => {
          setItems([2, 0, 1]);
        }, 500);
      }, 1000);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex flex-col w-full h-full lg:h-full items-stretch justify-between"
    >
      {/* <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 2 }}
        > */}
      <div className="flex mx-auto w-full py-2 justify-around">
        <Image
          className="absolute left-4 md:left-12 mt-2"
          width={60}
          alt="Google logo"
          src={google}
        />
        <div className="flex items-center w-2/3 md:w-1/2 border-gray-100 border rounded-full h-8">
          <motion.div
            initial={{ width: 0 }}
            viewport={{ once: true }}
            whileInView={{ width: 200 }}
            transition={{ duration: 0.25, delay: 0.5 }}
            className="mx-4 w-1/2 bg-gray-100 rounded-full h-1"
          ></motion.div>
        </div>
      </div>
      <div className="flex flex-col w-2/3 md:w-1/2 py-4 mx-auto  justify-around">
        <Reorder.Group
          className="space-y-4"
          axis="y"
          values={items}
          onReorder={setItems}
        >
          {items.map((result) => (
            <Reorder.Item dragListener={false} key={result} value={result}>
              <div
                className={cn("p-4 flex flex-col fit-content ", {
                  "shadow-md": result === 2,
                })}
              >
                <div className="flex space-x-4">
                  {result === 2 ? (
                    <Button
                      className="text-sm h-auto text-blue-700 underline px-0"
                      size="sm"
                      variant="link"
                    >
                      Kobalt
                    </Button>
                  ) : (
                    <>
                      <div className="w-24 h-2 bg-blue-700 mt-2 rounded-sm"></div>
                      <div className="w-24 h-2 bg-blue-700 mt-2 rounded-sm"></div>
                    </>
                  )}
                </div>
                <div className="w-18 h-1 bg-green-600 mt-1 rounded-sm"></div>

                <div className="flex flex-wrap space-x-4 mt-2">
                  <div className="w-20 h-2 bg-gray-500 rounded-sm"></div>
                  <div className="w-12 h-2 bg-gray-500 rounded-sm"></div>
                  <div className="w-24 h-2 bg-gray-500 rounded-sm"></div>
                </div>

                <div className="flex flex-wrap space-x-4 mt-2">
                  <div className="w-24 h-2 bg-gray-500 rounded-sm"></div>
                  <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
                  <div className="w-8 h-2 bg-gray-500 rounded-sm"></div>
                </div>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      {/* </motion.div> */}
    </div>
  );
}
