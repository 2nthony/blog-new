import { defineConfig } from "blogkit";
import { request } from "blogkit-notion";
import { theme } from "blogkit-theme-minimal";

export default defineConfig({
  siteConfig: {
    title: "2nthony",
    author: "2nthony",
    url: "https://2nthony.com",
  },
  theme,
  themeConfig: {
    links: [
      {
        name: "Resume",
        url: "https://2nthony.notion.site/1bc46522121b4975b07f019107358460",
      },
      {
        name: "GitHub",
        url: "https://github.com/2nthony",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/_2nthony",
      },
      {
        name: "RSS",
        url: "/api/rss",
      },
    ],
  },
  request,
});
