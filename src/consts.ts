// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Risco Cognitivo";
export const SITE_DESCRIPTION =
  "A modern, fully featured Astro template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.";

export const GITHUB_URL =
  "https://github.com/shadcnblocks/mainline-astro-template";

export const SITE_METADATA = {
  title: {
    default: "Risco Cognitivo",
    template: "%s | Risco Cognitivo",
  },
  description:
    "A modern Astro template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
  keywords: [
    "Astro",
    "astro template",
    "astro theme",
    "astro starter",
    "shadcn template",
    "shadcn theme",
    "shadcn starter",
    "tailwind template",
    "tailwind theme",
    "tailwind starter",
    "mdx template",
    "mdx theme",
    "mdx starter",
  ],
  authors: [{ name: "shadcnblocks.com" }],
  creator: "shadcnblocks.com",
  publisher: "shadcnblocks.com",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Risco Cognitivo",
    description:
      "A modern Astro template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
    siteName: "Risco Cognitivo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Risco Cognitivo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risco Cognitivo",
    description:
      "A modern Astro template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
    images: ["/og-image.jpg"],
    creator: "@ausrobdev",
  },
};
