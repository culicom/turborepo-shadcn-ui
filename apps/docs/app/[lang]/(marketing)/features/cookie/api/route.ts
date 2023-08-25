import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(cookies().get("acceptsCookies"));
  return NextResponse.json({
    data: cookies().get("acceptsCookies")?.value,
  });
}

// export async function POST(request: Request) {
//   const acceptsCookies = cookies().get("acceptsCookies");

//   cookies().set({
//     name: "acceptsCookies",
//     value: acceptsCookies?.value === "true" ? "false" : "true",
//     httpOnly: true,
//     path: "/",
//   });

//   revalidateTag("cookie");
//   revalidatePath("/");

//   return NextResponse.json({ data: acceptsCookies });
// }
