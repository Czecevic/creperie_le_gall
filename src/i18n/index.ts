import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr";
import en from "./locales/en";
import es from "./locales/es";
import zh from "./locales/zh";
import ko from "./locales/ko";
import ja from "./locales/ja";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    es: { translation: es },
    zh: { translation: zh },
    ko: { translation: ko },
    ja: { translation: ja },
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
  react: {
    useSuspense: false,
  },
});

export default i18n;
