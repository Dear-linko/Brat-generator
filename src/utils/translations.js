// translations.js

export const translations = {
  en: {
    message: "We've detected that your browser language is ",
    question: "Would you like to switch to this language?",
    cancel: "Cancel",
    switch: "Switch"
  },
  zh: {
    message: "我们检测到您的浏览器语言是",
    question: "是否切换到该语言？",
    cancel: "取消",
    switch: "切换"
  },
  'zh-TW': {
    message: "我們檢測到您的瀏覽器語言是",
    question: "是否切換到該語言？",
    cancel: "取消",
    switch: "切換"
  },
  ja: {
    message: "ブラウザの言語が検出されました：",
    question: "この言語に切り替えますか？",
    cancel: "キャンセル",
    switch: "切り替え"
  },
  ko: {
    message: "브라우저 언어가 감지되었습니다: ",
    question: "이 언어로 전환하시겠습니까?",
    cancel: "취소",
    switch: "전환"
  },
  es: {
    message: "Hemos detectado que el idioma de su navegador es ",
    question: "¿Le gustaría cambiar a este idioma?",
    cancel: "Cancelar",
    switch: "Cambiar"
  },
  fr: {
    message: "Nous avons détecté que la langue de votre navigateur est ",
    question: "Voulez-vous passer à cette langue ?",
    cancel: "Annuler",
    switch: "Changer"
  },
  de: {
    message: "Wir haben festgestellt, dass Ihre Browsersprache ",
    question: "ist. Möchten Sie zu dieser Sprache wechseln?",
    cancel: "Abbrechen",
    switch: "Wechseln"
  },
  vi: {
    message: "Chúng tôi phát hiện ngôn ngữ trình duyệt của bạn là ",
    question: "Bạn có muốn chuyển sang ngôn ngữ này không?",
    cancel: "Hủy",
    switch: "Chuyển"
  },
  nl: {
    message: "We hebben gedetecteerd dat uw browsertaal ",
    question: "is. Wilt u overschakelen naar deze taal?",
    cancel: "Annuleren",
    switch: "Overschakelen"
  },
  uk: {
    message: "Ми виявили, що мова вашого браузера ",
    question: ". Бажаєте перейти на цю мову?",
    cancel: "Скасувати",
    switch: "Перейти"
  },
  pt: {
    message: "Detectamos que o idioma do seu navegador é ",
    question: "Deseja mudar para este idioma?",
    cancel: "Cancelar",
    switch: "Mudar"
  }
};

export function getTranslation(lang) {
  return translations[lang] || translations.en; // 默认使用英语
}