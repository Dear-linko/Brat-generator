import { ResponsiveAd, DisplayAd } from './Ads'

const AdExample = () => {
  return (
    <div className="my-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Google AdSense Example</h2>
      
      {/* Basic responsive ad */}
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Responsive Ad</h3>
        <ResponsiveAd 
          slot="1234567890" 
          format="auto"
        />
      </div>

      {/* Display ad with specific dimensions */}
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Display Ad (300x250)</h3>
        <DisplayAd 
          slot="0987654321"
          width={300}
          height={250}
        />
      </div>

      {/* In-feed ad */}
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">In-Feed Ad</h3>
        <ResponsiveAd 
          slot="1357924680"
          format="fluid"
        />
      </div>
    </div>
  )
}

export default AdExample 