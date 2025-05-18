import GoogleAdsense from '../GoogleAdsense'

/**
 * A responsive ad component that can be used anywhere in the application
 * @param {Object} props
 * @param {string} props.slot - The ad slot ID from Google AdSense
 * @param {string} [props.format='auto'] - The ad format
 * @param {Object} [props.style={}] - Additional styles for the ad container
 * @param {string} [props.className=''] - Additional CSS classes for the ad container
 */
const ResponsiveAd = ({ 
  slot,
  format = 'auto',
  style = {},
  className = ''
}) => {
  if (!slot) {
    console.warn('ResponsiveAd: No slot provided')
    return null
  }
  
  return (
    <div className={`ad-container my-4 ${className}`}>
      <GoogleAdsense 
        slot={slot}
        format={format}
        responsive={true}
        style={style}
      />
    </div>
  )
}

export default ResponsiveAd 