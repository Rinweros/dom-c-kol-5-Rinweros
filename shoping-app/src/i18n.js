import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false, // React automaticky escapuje HTML
  },
  resources: {
    en: {
      translation: {
        switchMode: "Switch to {{mode}} mode",
        dark: "dark",
        light: "light",
        pageNotFound: "Page not found",
      },
    },
    cs: {
      translation: {
        switchMode: "Přepnout na {{mode}} režim",
        dark: "tmavý",
        light: "světlý",
        pageNotFound: "Stránka nenalezena",
      },
    },
  },
});

export default i18n;
