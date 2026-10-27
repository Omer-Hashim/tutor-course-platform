import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { DEFAULT_LANGUAGE, LANGUAGES, type Language } from "@/config/app"

import ar from "./ar.json"
import en from "./en.json"

const STORAGE_KEY = "lang"

function getInitialLanguage(): Language {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return LANGUAGES.find((language) => language === saved) ?? DEFAULT_LANGUAGE
    } catch {
        return DEFAULT_LANGUAGE
    }
}

function applyLanguage(language: string) {
    document.documentElement.lang = language
    document.documentElement.dir = i18n.dir(language)
}

i18n.on("languageChanged", applyLanguage)

i18n.use(initReactI18next).init({
    resources: {
        ar: { translation: ar },
        en: { translation: en },
    },
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: { escapeValue: false },
    initAsync: false,
})

applyLanguage(i18n.language)

export function setLanguage(language: Language) {
    try {
        localStorage.setItem(STORAGE_KEY, language)
    } catch {
        // storage unavailable (e.g. private mode): the choice just isn't remembered
    }
    return i18n.changeLanguage(language)
}