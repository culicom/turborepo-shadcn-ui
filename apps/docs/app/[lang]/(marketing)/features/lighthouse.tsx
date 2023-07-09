"use client";
import { useCallback, useState } from "react";

import score from "./score.json";
import { Button } from "ui";
import { Loader2 } from "lucide-react";
import { Scores } from "./circular-progress-bar";
import { Code } from "ui/typography";

async function getLighthouseScores() {
  const res = await fetch("http://localhost:3000/features/api");
  const data = res.json();

  const post = fetch("http://culicom.amsterdam:3001/api/send", {
    method: "POST",
    body: JSON.stringify({
      payload: {
        hostname: "your-hostname",
        language: "en-US",
        referrer: "",
        screen: "1920x1080",
        title: "dashboard",
        url: "/",
        website: "39aa1be2-2c1f-4e48-8c4d-74484ce92e50",
        name: "lighthouse",
        data: {
          foo: "bar",
        },
      },
      type: "event",
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("No post");
    })
    .catch((e) => console.log(e));

  return data;
}

export function Lighthouse() {
  const [completedFetching, setCompletedFetching] = useState(null);
  const [data, setData] = useState(null);

  const startFetching = useCallback(async () => {
    setCompletedFetching(false);
    const { data } = await getLighthouseScores();

    setCompletedFetching(true);
    setData(data);
  }, []);

  return (
    <div className="flex  flex-col w-full h-full lg:h-full items-stretch justify-between">
      {data && completedFetching !== false ? (
        <Scores data={data} />
      ) : (
        <Scores data={score} />
      )}
      <div className="flex items-center space-x-2 self-end">
        <span className="text-xs">
          Berekend op: <Code>{score?.analysisUTCTimestamp}</Code>
        </span>
        <Button onClick={startFetching} disabled={completedFetching === false}>
          {completedFetching === false ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {completedFetching === false
            ? "Bezig met ophalen"
            : "Haal lighthouse scores op"}
        </Button>
      </div>
    </div>
  );
}
