import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LANGUAGES } from './languages'
import { generateDictionary } from './utils'
import { translations } from './translations'

const { tKeys, dictionary } = generateDictionary<typeof translations>(translations)

i18next.use(initReactI18next).init({
  fallbackLng: LANGUAGES.en,
  interpolation: {
    escapeValue: false,
  },
  resources: dictionary,
})

export { tKeys }
