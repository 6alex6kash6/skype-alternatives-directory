"use client";

import Script from "next/script";

export default function TinyAdz() {
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) return null;

  return (
    <Script
      src="https://app.tinyadz.com/scripts/ads.js"
      site-id="682a3360e17149eacc86fdfb"
      async
    />
  );
}
