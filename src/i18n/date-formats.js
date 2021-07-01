const { SUPPORTED_LOCALES } = require('./locales')

const DEFAULT_FORMAT = {
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  medium: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
  long: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  },
  month: {
    month: 'long',
  },
}

module.exports.DATE_FORMATS = Object.freeze({
  ...SUPPORTED_LOCALES.reduce(
    (acc, l) => ({ ...acc, [l]: DEFAULT_FORMAT }),
    {}
  ),
  // Overwrite formats here for specific locales
})
