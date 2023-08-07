const prettierConfig = require('./prettier.config')

module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
