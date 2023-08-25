"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function addItem() {
  const acceptsCookies = cookies().get("acceptsCookies");

  cookies().set({
    name: "acceptsCookies",
    value: acceptsCookies?.value === "true" ? "false" : "true",
    httpOnly: true,
    path: "/",
  });

  revalidateTag("cookie");
}
