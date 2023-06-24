import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "nl"],
  defaultLocale: "nl",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
