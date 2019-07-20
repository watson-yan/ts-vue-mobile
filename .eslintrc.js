module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    'comma-dangle': ['error', 'never'],
    // 允许使用tab缩进
    'no-tabs': ['off'],
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off'
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
};
