'use client'

import { useEffect } from 'react'

const GoogleAdsense = ({ type = 'auto', slot = '', format = 'auto', responsive = true, style = {} }) => {
  useEffect(() => {
    // Load Google AdSense script if not already loaded
    if (!window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [])

  const defaultStyle = responsive
    ? { display: 'block' }
    : { display: 'inline-block' }

  return (
    <div className="google-adsense">
      <ins
        className="adsbygoogle"
        style={{ ...defaultStyle, ...style }}
        data-ad-client="ca-pub-3313287752284032"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

export default GoogleAdsense 