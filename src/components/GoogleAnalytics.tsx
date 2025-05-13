"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V57M157Q6C"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V57M157Q6C');
        `}
      </Script>
    </>
  );
}
