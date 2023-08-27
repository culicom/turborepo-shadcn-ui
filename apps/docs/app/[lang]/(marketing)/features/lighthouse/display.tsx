"use client";

import { Scores } from "./circular-progress-bar";
import score from "./score.json";

import { motion } from "framer-motion";
import { cn } from "lib";
import { useInView } from "framer-motion";
import { useRef } from "react";
async function getLighthouseScores() {
  const res = await fetch("http://localhost:3010/api/lighthouse?limit=1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["lighthouse"] },
  });

  const data = res.json();

  return data;
}

// async function getLighthouseScores() {
//   const res = await fetch("/features/api");
//   const { data } = await res.json();
//   console.log(
//     data,
//     JSON.stringify({
//       score: data,
//     })
//   );
//   const post = await fetch("http://localhost:3010/api/lighthouse", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       score: data?.lighthouseResult?.categories,
//     }),
//   });
//   console.log(post, "POST");

//   return data;
// }

// export async function Display() {
//   const data = await getLighthouseScores();

//   return (
//     <div className="flex  flex-col w-full h-full lg:h-full items-stretch justify-between">
//       <Scores data={data?.docs[0]} />

//       <div className="flex items-center space-x-2 self-end">
//         <span className="text-xs">
//           Berekend op: <Code>{data?.docs[0]?.createdAt}</Code>
//         </span>

//         <Status />
//         {/* <Button disabled={completedFetching === false}>
//           {completedFetching === false ? (
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           ) : null}
//           {completedFetching === false
//             ? "Bezig met ophalen"
//             : "Haal lighthouse scores op"}
//         </Button> */}
//       </div>
//     </div>
//   );
// }

export function Display() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // const data = await getLighthouseScores()apps/docs/app/[lang]/(marketing)/features/score.json;
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
          whileInView={{ height: 175 }}
          transition={{ duration: 0.25, delay: 1 }}
          className="border-t w-full bg-gray-100 absolute px-4 self-end bottom-0 flex items-end"
        >
          <Scores data={score?.lighthouseResult?.categories} />
        </motion.div>
      ) : null}
    </>
  );
}
