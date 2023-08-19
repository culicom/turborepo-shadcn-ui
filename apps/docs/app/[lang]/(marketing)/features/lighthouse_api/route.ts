import { NextResponse } from "next/server";

function setUpQuery(key) {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const parameters = {
    url: encodeURIComponent("https://developers.google.com"),
  };
  let query = `${api}?`;
  for (let key in parameters) {
    query += `${key}=${parameters[key]}`;
  }
  return `${query}&key=${key}&category=performance&category=seo&category=best_practices&category=accessibility`;
}

export async function GET() {
  const url = setUpQuery(process.env.PAGE_SPEED_KEY);

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json({ data });
}

export const revalidate = 5;
