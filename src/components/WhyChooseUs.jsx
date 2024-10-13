import React from 'react';
import { BeakerIcon, SparklesIcon, Square3Stack3DIcon, ArrowDownTrayIcon, UserCircleIcon, GiftIcon } from '@heroicons/react/20/solid'

export default function WhyChooseUs({ WhyChooseUsLanguageText }) {
  const features = [
    {
      name: WhyChooseUsLanguageText.feature_name1,
      description: WhyChooseUsLanguageText.feature_description1,
      icon: SparklesIcon,
    },
    {
      name: WhyChooseUsLanguageText.feature_name2,
      description: WhyChooseUsLanguageText.feature_description2,
      icon: BeakerIcon,
    },
    {
      name: WhyChooseUsLanguageText.feature_name3,
      description: WhyChooseUsLanguageText.feature_description3,
      icon: Square3Stack3DIcon,
    },
    {
      name: WhyChooseUsLanguageText.feature_name4,
      description: WhyChooseUsLanguageText.feature_description4,
      icon: ArrowDownTrayIcon,
    },
    {
      name: WhyChooseUsLanguageText.feature_name5,
      description: WhyChooseUsLanguageText.feature_description5,
      icon: UserCircleIcon,
    },
    {
      name: WhyChooseUsLanguageText.feature_name6,
      description: WhyChooseUsLanguageText.feature_description6,
      icon: GiftIcon,
    },
  ]

  return (
    <div id="why-choose-us" className="bg-white dark:bg-gray-900 pt-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {WhyChooseUsLanguageText.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {WhyChooseUsLanguageText.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}