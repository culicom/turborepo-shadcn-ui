import { Card } from "ui";
import React from "react";

type MockupProps = {
  children: React.ReactNode;
};

export function Mockup({ children }: MockupProps) {
  return (
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
        {children}
      </div>
    </Card>
  );
}
