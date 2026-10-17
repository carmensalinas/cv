import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

// the translations (bundled, so no http backend is needed)
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  // detect user language: saved choice first, then the browser language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    supportedLngs: ["es", "en"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    fallbackLng: "en",
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "cvLanguage",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

// keep <html lang> and the tab title in sync with the selected language
const syncDocument = (lng) => {
  document.documentElement.setAttribute("lang", lng);
  document.title = i18n.t("pageTitle");
};
i18n.on("languageChanged", syncDocument);
if (i18n.isInitialized) syncDocument(i18n.resolvedLanguage);

export default i18n;
