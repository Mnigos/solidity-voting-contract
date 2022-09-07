module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parser': '@typescript-eslint/parser',
    'import/resolver': {
      node: {
        paths: ['~/'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
      alias: {
        map: [['~', './app/']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers',
    'mocha',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
  ],
  ignorePatterns: ['truffle-config.js'],
  overrides: [
    {
      files: ['**/migrations-ts/**/*.ts'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              snakeCase: true,
            },
          },
        ],
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['**/scripts/**/*.ts'],
      rules: {
        'unicorn/no-process-exit': 'off',
        'unicorn/prefer-top-level-await': 'off',
      },
    },
  ],
  rules: {
    eqeqeq: 'error',
    'prettier/prettier': 'warn',
    'prefer-const': 'warn',
    'sonarjs/no-duplicate-string': 'off',
    'no-console': 'off',
    'eslint-comments/no-unused-disable': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    // empty functions are helpful for defining default values
    '@typescript-eslint/no-empty-function': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'import-helpers/order-imports': 'off',
    // ignore only until https://github.com/sindresorhus/eslint-plugin-unicorn/pull/1628 is opened
    'unicorn/filename-case': [
      'error',
      { case: 'kebabCase', ignore: [/^\$/, 'README.md$'] },
    ],
    'unicorn/no-null': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    // we use typescript instead of propTypes
    'react/prop-types': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          // props and ref are popular lingo in react world
          Props: true,
          props: true,
          ref: true,
        },
      },
    ],
  },
}
