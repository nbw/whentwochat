const { i18n } = require('./next-i18next.config')

module.exports = {
  env: {
    googleApiKey: process.env.GOOGLE_API_KEY,
  },
  i18n,
  reactStrictMode: true
}