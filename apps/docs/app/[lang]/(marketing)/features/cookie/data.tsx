"use client";

import { Button } from "ui";
export function Data({ acceptCookies }) {
  return (
    <div>
      <Button
        onClick={async () =>
          await fetch("http://localhost:3000/features/cookie/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
        }
      >
        {`${acceptCookies}`}
      </Button>
    </div>
  );
}
