import get from 'lodash.get'
import set from 'lodash.set'
import { LANGUAGES } from './languages'
import { GenerateDictionaryReturn } from './types'

const generateDictionaryLoop = (tKeys: any, dictionary: any, path: string, tree: any) => {
  const actualObject = path ? get(tree, path) : tree
  const keys = Object.keys(actualObject)
  keys.forEach((key: string) => {
    const previousFullPath = path ? path : ''
    const fullPath: string = path ? `${path}.${key}` : key

    if (typeof actualObject[key] === 'string') {
      const value: string = actualObject[key]
      const isKeysOK = !Object.values(LANGUAGES).find((lang) => lang === key)

      if (key === '_all') {
        Object.keys(LANGUAGES).forEach((lang) => {
          set(dictionary, `${lang}.translation.${previousFullPath}`, value)
        })
      } else if (isKeysOK) {
        throw new Error(
          `Translation key "${actualObject[key]}", ${key} does not have the required prefix.`,
        )
      } else if (value) {
        set(dictionary, `${key.replace(/_/g, '')}.translation.${previousFullPath}`, value)
      }

      if (key === LANGUAGES.en) {
        set(tKeys, previousFullPath, previousFullPath)
      }
    } else if (typeof actualObject[key] === 'object') {
      generateDictionaryLoop(tKeys, dictionary, fullPath, tree)
    }
  })
}

export const generateDictionary = <T = unknown>(tree: any): GenerateDictionaryReturn<T> => {
  const tKeys: any = {}
  const dictionary: any = {}

  generateDictionaryLoop(tKeys, dictionary, '', tree)

  return {
    dictionary,
    tKeys,
  }
}
