import GoogleAdsense from '../GoogleAdsense'

/**
 * A display ad component with fixed size
 * @param {Object} props
 * @param {string} props.slot - The ad slot ID from Google AdSense
 * @param {number} props.width - Width of the ad in pixels
 * @param {number} props.height - Height of the ad in pixels
 * @param {string} [props.format='rectangle'] - The ad format
 * @param {string} [props.className=''] - Additional CSS classes for the ad container
 */
const DisplayAd = ({ 
  slot,
  width = 300,
  height = 250,
  format = 'rectangle',
  className = ''
}) => {
  if (!slot) {
    console.warn('DisplayAd: No slot provided')
    return null
  }
  
  return (
    <div className={`ad-container my-4 ${className}`}>
      <GoogleAdsense 
        slot={slot}
        format={format}
        responsive={false}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}

export default DisplayAd 