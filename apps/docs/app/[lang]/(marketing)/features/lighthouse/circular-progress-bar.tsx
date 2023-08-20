"use client";

import * as React from "react";

type CircularProps = {
  sqSize: number;
  strokeWidth: number;
  percentage: number;
};
import { motion } from "framer-motion";
export function CircularProgressBar(props: CircularProps) {
  const [counter, setCounter] = React.useState(0);
  const [startCounting, setStartCounting] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStartCounting(true);
      setCounter(counter + 1);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (startCounting && counter < props.percentage) {
        setCounter(counter + 1);
      }

      return;
    }, Math.floor(Math.random() * 10));

    return () => {
      clearTimeout(timeout);
    };
  }, [counter, props.percentage]);

  // Size of the enclosing square
  const sqSize = props.sqSize;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (props.sqSize - props.strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * counter) / 100;

  if (!startCounting) {
    return null;
  }

  return (
    <svg
      className="mb-2"
      width={props.sqSize}
      height={props.sqSize}
      viewBox={viewBox}
    >
      <circle
        className="circle-background fill-none stroke-transparant"
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
      />
      <circle
        className="circle-progress fill-none stroke-green-500"
        cx={props.sqSize / 2}
        cy={props.sqSize / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          strokeLinecap: "round",
        }}
      />
      <text
        className="fill-primary"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${counter}%`}
      </text>
    </svg>
  );
}

export function Scores({ data }: any) {
  console.log(data, "PDDDATA");
  return (
    <span className="w-full flex flex-wrap justify-center self-center">
      {data ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 1 }}
          className="flex flex-col"
        >
          <div className="flex">
            {Object.keys(data).map((category) => (
              <label
                key={category}
                className="text-success mx-2 flex flex-col space-y-2 py-2 text-center text-sm"
              >
                <CircularProgressBar
                  key={1}
                  strokeWidth={5}
                  sqSize={75}
                  percentage={data[category]?.score * 100}
                />
                <div className="w-full h-4 bg-gray-500 mt-4 block mx-auto rounded-sm"></div>
              </label>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 2 }}
          >
            <div className="flex justify-around">
              <div className="flex space-x-1 fit-content ">
                <div className="w-2 h-2 bg-green-600 mt-4 rounded-sm"></div>
                <div className="w-24 h-2 bg-gray-500 mt-4 rounded-sm"></div>
              </div>
              <div className="flex space-x-1 fit-content ">
                <div className="w-2 h-2 bg-green-600 mt-4 rounded-sm"></div>
                <div className="w-20 h-2 bg-gray-500 mt-4 rounded-sm"></div>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="flex space-x-1 fit-content ">
                <div className="w-2 h-2 bg-green-600 mt-4 rounded-sm"></div>
                <div className="w-20 h-2 bg-gray-500 mt-4 rounded-sm"></div>
              </div>
              <div className="flex space-x-1 fit-content ">
                <div className="w-2 h-2 bg-green-600 mt-4 rounded-sm"></div>
                <div className="w-16 h-2 bg-gray-500 mt-4 rounded-sm"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <div className="items-center mx-auto text-success flex space-y-2 py-2 text-center text-sm">
          Geen score gevonden
        </div>
      )}
    </span>
  );
}
