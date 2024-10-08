// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// // import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
// .use(Backend) // JSON fayllarni yuklash uchun
// // .use(LanguageDetector) // Brauzer tilini aniqlash uchun
// .use(initReactI18next) // React uchun i18next
// .init({
//   fallbackLng: 'kz',
//   debug: true,
//   interpolation: {
//     escapeValue: false, // React uchun xos
//   },
//   backend: {
//     loadPath: '/locales/{{lng}}/translation.json', // JSON fayl yo'li
//   },
// });

// export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'kz',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
        }
      }
    }
  });

export default i18n;