export default function CTA({CTALanguageText}) {
    return (
      <div id="cta" className="bg-white dark:bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {CTALanguageText.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {CTALanguageText.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#banner"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                {CTALanguageText.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
