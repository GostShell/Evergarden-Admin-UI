module.exports = {
  root: false,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    "plugin:vue/base",
    "plugin:vue/recommended",
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off'
  }
}
