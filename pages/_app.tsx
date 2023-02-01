import type { AppProps } from "next/app";
import { Blogkit } from "blogkit";
import { Analytics } from "@vercel/analytics/react";
import config from "../blogkit.config";

import "blogkit-theme-minimal/style.css";
import Script from "next/script";

export const blogkit = new Blogkit(config);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1620652447931544"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default MyApp;
