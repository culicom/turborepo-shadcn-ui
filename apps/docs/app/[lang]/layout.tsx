import "@/styles/globals.css";
import { Metadata } from "next";

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
      <html lang="nl" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="container flex min-h-screen flex-col">
              <SiteHeader />

              {children}

              <Adam />
              <ProfileForm />
            </div>
            <Footer />

            <TailwindIndicator />
          </ThemeProvider>
        </body>
        <Script
          strategy="afterInteractive"
          src={`https://umami.culicom.amsterdam/script.js`}
          data-website-id={process.env.UMAMI_ID}
        ></Script>
      </html>
    </>
  );
}
