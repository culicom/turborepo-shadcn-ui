"use server";

import { revalidateTag } from "next/cache";

export async function addItem() {
  const res = await fetch("http://localhost:3000/features/api", {
    cache: "no-store",
  });
  const { data } = await res.json();

  const post = await fetch("http://localhost:3010/api/lighthouse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      score: data?.lighthouseResult?.categories,
    }),
  });

  revalidateTag("lighthouse");

  return data;
}
