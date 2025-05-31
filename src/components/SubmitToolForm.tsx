"use client";

import Script from "next/script";

export default function SubmitToolForm() {
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) return null;

  return (
    <Script
      id="tinyadz-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          const s = document.createElement("script");
          s.src = "https://app.tinyadz.com/libs/manager.js";
          s.onload = () => $ta?.init("68383093a43c8f411286091c",
          {
            "form-example-key": "example-value"
          }, false, { theme: "light" });
          document.head.appendChild(s);
        `,
      }}
    />
  );
}
