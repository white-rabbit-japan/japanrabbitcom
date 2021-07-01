const SUPPORTED_LANGUAGES = [
  {
    locale: 'en',
    path: 'en',
    name: 'English',
    native: 'English',
    flag: '🇺🇸',
  },
  // {
  //   locale: 'es',
  //   path: 'es',
  //   name: 'Spanish',
  //   native: 'Español',
  //   flag: '🇪🇸',
  // },
]

const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale)
const DEFAULT_LOCALE =
  process.env.GRIDSOME_DEFAULT_LOCALE || SUPPORTED_LOCALES[0]
const FALLBACK_LOCALE = DEFAULT_LOCALE

module.exports = {
  SUPPORTED_LANGUAGES,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
}
