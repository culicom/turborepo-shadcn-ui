"use client";

import { Card } from "ui";
import { H2, H4 } from "ui/typography";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { cn } from "lib";

type MockupProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  summary: React.ReactNode;
  action: React.ReactNode;
  index: number;
};

export function Mockup({
  title,
  summary,
  children,
  index,
  action,
}: MockupProps) {
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // position: relative;
  // scroll-snap-align: center;
  // perspective: 500px;
  return (
    <section
      className={cn(
        "grid grid-cols-1 py-8 lg:grid-cols-2 my-16"

        // styles.mockup
      )}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        viewport={{ once: true }}
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
        {action}
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className=" relative h-fit lg:h-[24rem]">
          <div className="shadow-mockup w-4 -ml-2 shadow-gray-300 h-4 absolute top-4 rounded-full"></div>
          <div className="flex h-full self-start-end justify-center w-full p-2">
            {children}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
