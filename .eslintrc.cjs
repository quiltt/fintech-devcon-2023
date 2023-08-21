const prettierConfig = import('./prettier.config.js').then((config) => config.default)

module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
