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
  request,
});
