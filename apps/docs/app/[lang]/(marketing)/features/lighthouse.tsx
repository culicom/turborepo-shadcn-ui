"use client";
import { useCallback, useState } from "react";

import score from "./score.json";
import { Button } from "ui";
import { Loader2 } from "lucide-react";
import { Scores } from "./circular-progress-bar";
import { Code } from "ui/typography";

function setUpQuery(key) {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const parameters = {
    url: encodeURIComponent("https://developers.google.com"),
  };
  let query = `${api}?`;
  for (let key in parameters) {
    query += `${key}=${parameters[key]}`;
  }
  return `${query}&key=${key}&category=performance&category=seo&category=best_practices&category=pwa&category=accessibility`;
}

async function getLighthouseScores(key: string) {
  const url = setUpQuery(key);
  console.log(url);
  const data = await fetch(url)
    .then((response) => {
      // 1. check response.ok
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response); // 2. reject instead of throw
    })
    .catch((error) => {
      console.log(error);
      return score;
    });

  return data;
}

export function Lighthouse({ pageSpeedKey }) {
  const [completedFetching, setCompletedFetching] = useState(null);
  const [data, setData] = useState(null);

  const startFetching = useCallback(async () => {
    setCompletedFetching(false);
    const res = await getLighthouseScores(pageSpeedKey);

    setTimeout(() => {
      setCompletedFetching(true);
      setData(res);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-stretch justify-between">
      {data && completedFetching !== false ? (
        <Scores data={data} />
      ) : (
        <div className="h-48" />
      )}
      <div className="flex items-center space-x-2 self-end">
        <span className="text-xs">
          Laatste berekend op: <Code>{score?.analysisUTCTimestamp}</Code>
        </span>
        <Button onClick={startFetching} disabled={completedFetching === false}>
          {completedFetching === false ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Bereken
        </Button>
      </div>
    </div>
  );
}
