// @ts-nocheck
import React from "react";
import { H2, H4 } from "ui/typography";
import { cn } from "lib";

type SummaryProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  summary: React.ReactNode;
  index: number;
};

export function Section({ summary, title, index, children }: SummaryProps) {
  return (
    <div
      className={cn(
        " mb-4 flex flex-col justify-center space-y-4 md:mb-0 md:mx-8"
      )}
    >
      <div>
        <H4 className="text-[3.5rem] mb-0">#00{index + 1}</H4>
        <H2 className={"md:mt-0 md:space-y-0 dark:text-white text-blue-950"}>
          {title}
        </H2>
      </div>
      <summary className="list-none">{summary}</summary>
      {children}
    </div>
  );
}
