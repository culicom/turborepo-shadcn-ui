export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Service",
      href: "/service",
    },
    {
      title: "Work",
      href: "/posts/work",
    },
    {
      title: "Blog",
      href: "/posts/blog",
    },
  ],
}
