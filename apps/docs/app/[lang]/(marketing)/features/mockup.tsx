import { Button, Card } from "ui";
import { H2, H4 } from "ui/typography";
// import { motion } from "framer-motion";
import { cn } from "lib";
import { Action, Display } from "./cookie";
import { Display as I18NDisplay } from "./translations";
import { Display as LighthouseDisplay } from "./lighthouse";
import { Display as DarkmodeDisplay } from "./darkmode";
import { Display as AnalyticsDisplay } from "./analytics";
import React from "react";

const components = {
  cookies: { display: Display, action: Action },
  darkmode: { display: DarkmodeDisplay, action: Action },
  i18n: { display: I18NDisplay, action: Action },
  analytics: { display: AnalyticsDisplay, action: Action },
  lighthouse: { display: LighthouseDisplay, action: Action },
};

type MockupProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  summary: React.ReactNode;
  action: React.ReactNode;
  index: number;
  slug: string;
};

export function Mockup({ title, summary, slug, index }: MockupProps) {
  return (
    <section className={cn("grid grid-cols-1 py-8 lg:grid-cols-2 my-16")}>
      <div
        className={cn(
          " mb-4 flex flex-col justify-center space-y-4 md:mb-0 md:mx-8",
          index % 2 === 0 ? "order-1" : "order-0"
        )}
      >
        <div>
          <H4 className="text-[3.5rem] mb-0">#00{index + 1}</H4>
          <H2 className={"md:mt-0 md:space-y-0 dark:text-white text-blue-950"}>
            {title}
          </H2>
        </div>
        <summary className="list-none">{summary}</summary>
        {React.createElement(components[slug].action, {})}
      </div>

      <div>
        <Card className="rounded-none relative h-fit ">
          <div className="bg-gray-200 rounded-none flex items-center h-12">
            <div className="shadow-mockup w-4 -ml-2 shadow-gray-300 h-4 absolute top-4 rounded-full"></div>
            <div className="shadow-gray-300 justify-center flex items-center bg-white h-6 w-1/2 mx-auto my-auto rounded-full">
              <span className="text-xs text-gray-500 text-center">
                https://kobalt.amsterdam
              </span>
            </div>
          </div>
          <div className="flex h-full self-start-end justify-center w-full">
            {React.createElement(components[slug].display)}
          </div>
        </Card>
      </div>
    </section>
  );
}

{
  /* <>
      <header className="shadow-sm">
        <div className="bg-blue-300 py-1"></div>
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 mx-auto px-8">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a
              className="text-white no-underline hover:text-white hover:no-underline pl-2"
              href="#"
            >
              <div className="h-8 bg-gray-500 w-16 block mx-auto rounded-sm"></div>
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

      <main className="flex-grow flex justify-center items-center">
        <div className="mx-auto px-4 sm:px-8 py-2 text-center">
          <div className="text-center max-w-lg mx-auto mt-6">
            <div className="h-4 bg-gray-500 w-40 block mx-auto rounded-sm"></div>
            <div className="h-2 bg-gray-400 w-64 mt-4 block mx-auto rounded-sm"></div>
            <div className="h-2 bg-gray-400 w-48 mt-2 block mx-auto rounded-sm"></div>
          </div>

          <div className="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">
            <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
              <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                <div className="mx-auto h-40 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
                <div className="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
                <div className="flex justify-center mt-4">
                  <div className="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                  <div className="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
                </div>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
              <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                <div className="mx-auto h-40 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
                <div className="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
                <div className="flex justify-center mt-4">
                  <div className="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                  <div className="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
                </div>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
              <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                <div className="mx-auto h-40 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
                <div className="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
                <div className="flex justify-center mt-4">
                  <div className="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                  <div className="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </> */
}
