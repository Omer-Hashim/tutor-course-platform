export const LANGUAGES = ["ar", "en"] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = "ar"