import Script from 'next/script'

const GoogleAdsenseScript = () => {
  return (
    <Script
      id="google-adsense"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3313287752284032"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

export default GoogleAdsenseScript 