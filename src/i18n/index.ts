import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import { en } from "./locales/en"
import { vi } from "./locales/vi"
import { ja } from "./locales/ja"
import { ko } from "./locales/ko"
import { zh } from "./locales/zh"

export const LANGUAGES = [
  { code: "en", native: "English" },
  { code: "vi", native: "Tiếng Việt" },
  { code: "ja", native: "日本語" },
  { code: "ko", native: "한국어" },
  { code: "zh", native: "中文" },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]["code"]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      ja: { translation: ja },
      ko: { translation: ko },
      zh: { translation: zh },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "vi", "ja", "ko", "zh"],
    load: "languageOnly",
    detection: {
      // Same persistence pattern as the theme: localStorage first, then browser language
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "iruslang",
    },
    interpolation: { escapeValue: false },
  })

// Keep <html lang> in sync (SEO / screen readers)
const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng
}
syncHtmlLang(i18n.language)
i18n.on("languageChanged", syncHtmlLang)

export default i18n
