// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translation data from data.json
import translationEN from "./locales/en.json";
import translationES from "./locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    fallbackLng: "en", // Default language
    detection: {
      order: ["localStorage", "navigator"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
