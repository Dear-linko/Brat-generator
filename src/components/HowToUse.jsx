export default function HowToUse({HowToUseLanguageText}) {
  const steps = [
    {
      name: HowToUseLanguageText.step_title1,
      description: HowToUseLanguageText.step_description1,
    },
    {
      name: HowToUseLanguageText.step_title2,
      description: HowToUseLanguageText.step_description2,
    },
    {
      name: HowToUseLanguageText.step_title3,
      description: HowToUseLanguageText.step_description3,
    },
    {
      name: HowToUseLanguageText.step_title4,
      description: HowToUseLanguageText.step_description4,
    },
    {
      name: HowToUseLanguageText.step_title5,
      description: HowToUseLanguageText.step_description5,
    },
    {
      name: HowToUseLanguageText.step_title6,
      description: HowToUseLanguageText.step_description6,
    },
    {
      name: HowToUseLanguageText.step_title7,
      description: HowToUseLanguageText.step_description7,
    },
  ];
  return (
    <div id="how-to-use" className="mx-auto max-w-7xl px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {HowToUseLanguageText.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {HowToUseLanguageText.description}
        </p>
      </div>
      <div className="">
      {steps.map((howToUse) => (
        <div key={howToUse.name} className="flex flex-col my-4">
          <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
            {howToUse.name}
          </h3>
          <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
            <p className="flex-auto">{howToUse.description}</p>
          </dd>
          </div>
        ))} 
      </div>
    </div>
  )
}
