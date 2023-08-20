import { cookies } from "next/headers";
import { Button } from "ui";
// import { Data } from "./data";
export async function Action() {
  const res = await fetch("http://localhost:3000/features/cookie/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

    next: {
      tags: ["cookie"],
      revalidate: 0,
    },
  });
  const { data } = await res.json();

  return <div>{/* <Data acceptCookies={data} /> */}</div>;
}
