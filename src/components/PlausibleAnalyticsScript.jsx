"use client"
import Script from 'next/script'

export default function PlausibleAnalyticsScript() {
  return (
    <Script
      src="https://click.pageview.click/js/script.js"
      data-domain={process.env.DOMAIN}
      strategy="lazyOnload"
      onLoad={() => {
        console.log('Analytics script loaded successfully')
      }}
    />
  )
}