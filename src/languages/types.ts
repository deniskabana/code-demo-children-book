import { LANGUAGES } from './languages'

type GenerateDictionaryReturnTree<O> = {
  [K in keyof O]: O[K] extends Record<string, string> ? string : GenerateDictionaryReturnTree<O[K]>
}

export type GenerateDictionaryReturn<T> = {
  dictionary: Record<keyof typeof LANGUAGES, { translation: string }>
  tKeys: GenerateDictionaryReturnTree<T>
}
