import { Badge } from "ui";
import { Renderer } from "../renderer";
import { H2, H3 } from "ui/typography";

type StepType = {
  title: string;
  fase: string;
  richText: string;
};

type TimeLineBlockType = {
  title: string;
  richText: any;
  list: StepType[];
};

export function TimeLineBlock({ title, richText, list }: TimeLineBlockType) {
  return (
    <section className="my-8">
      <div className="py-4 sm:px-6 lg:mx-16 lg:px-8 ">
        <H2 className="text-blue-950 dark:text-white mt-0 border-none  mb-4 font-bold md:text-center">
          {title}
        </H2>
        <div className="mx-auto mb-8 flex max-w-3xl items-center justify-center md:text-center">
          <Renderer content={richText} />
        </div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 lg:ml-[50%]">
          {list?.map(({ fase, title, richText }: StepType) => (
            <li
              key={title}
              className="mx-6 mb-10 rounded-lg dark:bg-muted p-4 pr-0 shadow-lg lg:mr-6 lg:w-[95%] lg:pr-4 odd:lg:ml-[-100%]"
            >
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <Badge className="mb-2">{fase}</Badge>
              <H3 className="my-2">{title}</H3>

              <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <Renderer content={richText} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
