/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 100,
  plugins: ['prettier-plugin-tailwindcss'],
  pluginSearchDirs: ['.'],
}
