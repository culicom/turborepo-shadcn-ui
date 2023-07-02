"use client";

import * as React from "react";

type CircularProps = {
  sqSize: number;
  strokeWidth: number;
  percentage: number;
};

export function CircularProgressBar(props: CircularProps) {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (counter < props.percentage) {
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
  return (
    <span className="my-16 flex flex-wrap justify-center self-center">
      {Object.keys(data?.lighthouseResult?.categories).map((category) => (
        <label
          key={category}
          className="text-success mx-2 flex flex-col space-y-2 py-2 text-center text-sm"
        >
          <CircularProgressBar
            key={1}
            strokeWidth={10}
            sqSize={100}
            percentage={
              data?.lighthouseResult?.categories[category]?.score * 100
            }
          />
          {category}
        </label>
      ))}
    </span>
  );
}
