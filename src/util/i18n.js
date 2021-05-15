import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_hi from "../assets/text/hi_IN";
import common_en from "../assets/text/en_US";

const resources = {
  en: {
    translation: common_en,
  },
  hi: {
    translation: common_hi,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
    resources,
  });

export default i18n;