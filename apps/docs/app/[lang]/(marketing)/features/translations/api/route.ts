import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";

const i18n = {
  nl: "Kobalt vertaalt jouw website slim met behulp van AI. Zo bereik je meer klanten, met minder moeite.",
  en: "Kobalt translates your website smartly using AI. This way, you reach more customers with less effort.",
};

export async function GET(request: Request) {
  const currentLocale = cookies().get("currentLocale")?.value || "nl";

  return NextResponse.json({
    data: currentLocale,
  });
}
