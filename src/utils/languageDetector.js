// utils/languageDetector.js

export function detectBrowserLanguage(supportedLanguages) {
    if (typeof window === 'undefined') return null; // 服务器端渲染时返回 null
  
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0]; // 获取主要语言代码
  
    return supportedLanguages.includes(langCode) ? langCode : null;
  }