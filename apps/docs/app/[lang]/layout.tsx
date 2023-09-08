import "@/styles/globals.css";
import { Metadata } from "next";
import { Toaster } from "ui";
import { cn } from "@/lib/utils";

import { Adam } from "./../../components/adam";
import { Footer } from "./../../components/footer";
import { ProfileForm } from "./../../components/form";
import { SiteHeader } from "./../../components/site-header";
import { TailwindIndicator } from "./../../components/tailwind-indicator";
import { ThemeProvider } from "./../../components/theme-provider";

import { siteConfig } from "../../config/site";
import { fontSans } from "../../lib/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children, params }: any) {
  return (
    <>
      <html lang={params?.lang || "nl"} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <div className="fixed z-0 w-full">
              <div className="grid z-0 gap-4 container mx-auto grid-cols-12">
                {new Array(12).fill(0).map((col, index) => (
                  <div
                    className="z-0 bg-red-100 opacity-30 h-screen"
                    key={index}
                  >
                    a
                  </div>
                ))}
              </div>
            </div> */}
            <div className="z-10 relative container flex min-h-screen flex-col">
              <SiteHeader lang={params?.lang} />

              {children}

              <Adam />
              <ProfileForm {...params} />
            </div>

            <Footer {...params} />

            <Toaster />

            <TailwindIndicator />
          </ThemeProvider>
        </body>
        <Script
          strategy="afterInteractive"
          src={`http://178.62.218.134:3001/script.js`}
          data-website-id={process.env.UMAMI_ID}
        ></Script>
      </html>
    </>
  );
}
