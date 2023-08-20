import { cn } from "lib";

export function Action() {
  <div className="w-full grid grid-cols-6 items-start mt-8">
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
  </div>;
}
