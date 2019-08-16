const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    '@nuxtjs',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': ['error', { 'allow': ['log', 'debug', 'warn', 'error'] }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
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
