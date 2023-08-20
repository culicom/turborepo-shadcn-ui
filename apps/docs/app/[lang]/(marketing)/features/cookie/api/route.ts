import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(cookies().getAll());

  return NextResponse.json({});
}

export async function POST(request: Request) {
  const acceptsCookies = cookies().get("accept-cookies");

  cookies().set({
    name: "acceptsCookies",
    value: !!acceptsCookies === true ? "false" : "true",
    httpOnly: true,
    path: "/",
  });

  return NextResponse.json({ data: acceptsCookies });
}
