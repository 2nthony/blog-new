import type { AppProps } from "next/app";
import { Blogkit } from "blogkit";
import { Analytics } from "@vercel/analytics/react";
import config from "../blogkit.config";

import "blogkit-theme-minimal/style.css";

export const blogkit = new Blogkit(config);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
