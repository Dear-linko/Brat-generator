'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { locales, defaultLocale, languages } from "@/config";
import { getTranslation } from '@/utils/translations';

function detectBrowserLanguage(supportedLanguages) {
  if (typeof window === 'undefined') return null;
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];
  return supportedLanguages.includes(langCode) ? langCode : null;
}

function getLanguageName(detectedLanguage) {
  const foundLanguage = languages.find(lang => lang.lang === detectedLanguage);
  return foundLanguage ? foundLanguage.language : null;
}

const LanguageSwitchModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState(null);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenLanguageModal');
    if (!hasSeenModal) {
      const detected = detectBrowserLanguage(locales);
      const currentLocale = pathname.split('/')[1] || defaultLocale;
      if (detected && detected !== currentLocale && detected !== defaultLocale) {
        setDetectedLanguage(detected);
        setShowModal(true);
      }
      localStorage.setItem('hasSeenLanguageModal', 'true');
    }
  }, [pathname]);

  const handleSwitch = () => {
    const currentLocale = pathname.split('/')[1];
    let newPathname;
    if (locales.includes(currentLocale)) {
      newPathname = pathname.replace(`/${currentLocale}`, `/${detectedLanguage}`);
    } else {
      newPathname = `/${detectedLanguage}${pathname}`;
    }
    router.push(newPathname);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenLanguageModal', 'true');
  };

  if (!showModal || !detectedLanguage) {
    return null;
  }

  
  const t = getTranslation(detectedLanguage);
  console.log("detected",detectedLanguage)
  const detectedLanguageName = getLanguageName(detectedLanguage);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 m-4 max-w-sm w-full">
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          {t.message}<span className="font-medium">{detectedLanguageName || detectedLanguage}</span>。
          {t.question}
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-gray-500 transition-colors duration-200"
          >
            {t.cancel}
          </button>
          <button
            onClick={handleSwitch}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
          >
            {t.switch}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitchModal;