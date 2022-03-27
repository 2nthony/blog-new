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
        name: "Newsletter",
        url: "https://newsletter.2nthony.com",
      },
      {
        name: "RSS",
        url: "/api/rss",
      },
    ],
    introduceHTML: `
      <p>我是一名普通的程序员，擅长 web 前端开发，现生活在广州。</p>
      <p>我的目标是真正的成为一名自由职业者，拥有一些小产品，并进入 FIRE(Financial Independence Retire Early) 人生。</p>
    `,
  },
  request,
});
