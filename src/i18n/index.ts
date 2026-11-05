import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import mr from "./locales/mr.json";
import hi from "./locales/hi.json";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "mr", label: "मराठी" },
  { code: "hi", label: "हिन्दी" },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

const STORAGE_KEY = "varadbuilds-lang";

const isSupported = (value: string | null): value is LanguageCode =>
  !!value && SUPPORTED_LANGUAGES.some((lang) => lang.code === value);

// Maharashtra-facing site: honour a saved choice, then a Marathi/Hindi browser
// locale, otherwise English.
function detectLanguage(): LanguageCode {
  const saved = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
  if (isSupported(saved)) return saved;

  const browser = typeof navigator !== "undefined" ? navigator.language?.slice(0, 2) : null;
  if (isSupported(browser)) return browser;

  return "en";
}

function applyDocumentLanguage(language: string) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mr: { translation: mr },
    hi: { translation: hi },
  },
  lng: detectLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", applyDocumentLanguage);
applyDocumentLanguage(i18n.language);

export function setLanguage(code: LanguageCode) {
  i18n.changeLanguage(code);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, code);
  }
}

export default i18n;
