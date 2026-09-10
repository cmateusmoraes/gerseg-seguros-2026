import Script from "next/script";

const GOOGLE_ANALYTICS_ID = "G-TMJ78HTMLC";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics-config" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
}
