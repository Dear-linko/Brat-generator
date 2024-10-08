export default function Banner({ BannerLanguageText }) {
    return (<>
        <div id="banner" className="mx-auto mt-16 mb-12 max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{BannerLanguageText.title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
            {BannerLanguageText.description}
            </p>
        </div>
    </>)
}