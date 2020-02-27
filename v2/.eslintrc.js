const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': ['error', { 'allow': ['log', 'debug', 'warn', 'error'] }],
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: [
        ['@', path.resolve(__dirname, 'src')],
        ['~', path.resolve(__dirname, 'src')],
      ],
    },
  },
}
