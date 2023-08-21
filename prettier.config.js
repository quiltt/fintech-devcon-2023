/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 100,
  plugins: ['prettier-plugin-tailwindcss'],
  pluginSearchDirs: ['.'],
}
