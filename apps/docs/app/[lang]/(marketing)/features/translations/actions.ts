"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function addItem() {
  const currentLocale = cookies().get("currentLocale");

  cookies().set({
    name: "currentLocale",
    value: currentLocale?.value === "nl" ? "en" : "nl",
    httpOnly: true,
    path: "/",
  });

  revalidateTag("translations");
}
