module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'plugin:vue/recommended'
    ],
    // add your custom rules here
    rules: {
      'no-mixed-operators': 'off',
      'semi': ['error', 'never']
    }
  }
  