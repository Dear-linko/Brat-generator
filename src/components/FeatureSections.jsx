import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function FeatureSections({ FeatureSectionsLanguageText }) {
  const nameGenerators = [
    { href: "https://blog.reedsy.com/character-name-generator/language/japanese/", text: FeatureSectionsLanguageText.nameGenerators[0].text },
    { href: "https://www.fantasynamegenerators.com/japanese-names.php", text: FeatureSectionsLanguageText.nameGenerators[1].text },
    { href: "https://namegen.jp/en", text: FeatureSectionsLanguageText.nameGenerators[2].text },
  ];

  return (
    <div className="dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-4xl transition-colors duration-300">
            {FeatureSectionsLanguageText.title}
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            {FeatureSectionsLanguageText.description}
          </p>
        </div>
        <div className="mt-8 space-y-4 sm:space-y-6">
          {nameGenerators.map((generator, index) => (
            <a
              key={index}
              title={generator.text}
              href={generator.href}
              className="group flex items-center justify-between p-4 sm:p-6 w-full rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={FeatureSectionsLanguageText.ariaLabel.replace('{0}', generator.text)}
            >
              <span className="flex items-center space-x-4">
                <span className="text-base sm:text-2xl text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                  0{index + 1}
                </span>
                <h3 className="text-base sm:text-xl text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                  {generator.text}
                </h3>
              </span>
              <ExternalLink className="text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300" size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}