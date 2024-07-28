import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // JSON fayllarni yuklash uchun
  // .use(LanguageDetector) // Brauzer tilini aniqlash uchun
  .use(initReactI18next) // React uchun i18next
  .init({
    fallbackLng: 'kz',
    debug: true,
    interpolation: {
      escapeValue: false, // React uchun xos
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // JSON fayl yo'li
    },
  });

export default i18n;
