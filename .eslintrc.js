module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'prettier/standard', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['@babel/eslint-plugin', '@emotion', 'import', 'react', 'react-hooks'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'default-param-last': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: 'React|^_$', args: 'none', ignoreRestSiblings: true },
    ],
    '@babel/no-unused-expressions': ['error', { allowTernary: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    semi: ['error', 'always'],
    'react/jsx-uses-vars': [2],
  },
};
