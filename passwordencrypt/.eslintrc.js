module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    'semi': ['error', 'always'],
    'space-in-parens': ['error', 'always', { 'exceptions': ['{}', '[]', '()'] }],
    'key-spacing': ['error', { 'align': 'colon' }]
  },
};
