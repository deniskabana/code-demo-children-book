// Languages used throughout the application
export const languages = {
  en: 'English',
} as const

// Enum for language codes
export enum Lang {
  En = 'en',
}

// Type for languages
export type Languages = {
  [K in keyof typeof languages]: K
}

// Union of language codes
export type LanguagesUnion = keyof typeof languages

// Languages object mapper for IntelliSense
export const LANGUAGES = ((): Languages => {
  const ret: Record<string, string> = {}

  Object.keys(languages).forEach((lng) => {
    ret[lng] = lng
  })

  return ret as Languages
})()

// Language codelist for select
export const languageCodelist = Object.entries(languages).map(([value, label]) => ({
  label,
  value,
}))
