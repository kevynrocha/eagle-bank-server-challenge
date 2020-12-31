module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: 'build',
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'simple-import-sort/imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^next$' },
    ],
  },
};
