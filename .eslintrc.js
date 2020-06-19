// https://eslint.org/docs/user-guide/configuring
// File taken from https://github.com/vuejs-templates/webpack/blob/1.3.1/template/.eslintrc.js, thanks.

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    webextensions: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-unused-vars': process.env.PRE_COMMIT ? 'error' : 'warn',
    'vue/v-slot-style': ["warn", { atComponent: "v-slot", default: "shorthand", named: "shorthand" }],
    'vue/comma-dangle': 'off',
    'vue/no-unused-components': process.env.PRE_COMMIT ? 'error' : 'warn',
    'vue/no-unused-vars': process.env.PRE_COMMIT ? 'error' : 'warn',
    'no-unreachable': process.env.PRE_COMMIT ? 'error' : 'warn',
  }
}
