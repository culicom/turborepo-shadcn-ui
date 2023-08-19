import { Scores } from "../circular-progress-bar";
import { Code } from "ui/typography";

import { Status } from "./status";

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

export async function Lighthouse() {
  const data = await getLighthouseScores();

  return (
    <div className="flex  flex-col w-full h-full lg:h-full items-stretch justify-between">
      <Scores data={data?.docs[0]} />

      <div className="flex items-center space-x-2 self-end">
        <span className="text-xs">
          Berekend op: <Code>{data?.docs[0]?.createdAt}</Code>
        </span>

        <Status />
        {/* <Button disabled={completedFetching === false}>
          {completedFetching === false ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {completedFetching === false
            ? "Bezig met ophalen"
            : "Haal lighthouse scores op"}
        </Button> */}
      </div>
    </div>
  );
}
