module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import',
    'eslint-plugin-import-helpers',
    'jest',
  ],
  extends: ['eslint:recommended', 'plugin:import/typescript'],
  noInlineConfig: true,
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@(modules|lib|common|enums|interfaces)/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  overrides: [
    {
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
      },
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
