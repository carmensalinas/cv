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
      // /es and /en decide the language; on / the saved choice or the browser does
      order: ["path", "querystring", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      lookupQuerystring: "lang",
      lookupLocalStorage: "cvLanguage",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

const siteUrl = process.env.REACT_APP_SITE_URL || "";

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

// keep <html lang>, title and the search/social meta tags in sync with the language.
// The canonical address is always the language page (/es or /en), so / is not
// indexed as a separate duplicate.
const syncDocument = (lng) => {
  const url = `${siteUrl}/${lng}`;
  document.documentElement.setAttribute("lang", lng);
  document.title = i18n.t("pageTitle");
  setMeta('meta[name="description"]', "content", i18n.t("metaDescription"));
  setMeta('link[rel="canonical"]', "href", url);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:title"]', "content", i18n.t("pageTitle"));
  setMeta('meta[property="og:description"]', "content", i18n.t("metaDescription"));
  setMeta('meta[property="og:locale"]', "content", i18n.t("ogLocale"));
  setMeta(
    'meta[property="og:locale:alternate"]',
    "content",
    i18n.t("ogLocale", { lng: lng === "es" ? "en" : "es" })
  );
};
i18n.on("languageChanged", syncDocument);
if (i18n.isInitialized) syncDocument(i18n.resolvedLanguage);

export default i18n;
