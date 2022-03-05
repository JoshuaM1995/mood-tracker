module.exports = {
  extends: [
    '.eslintrc-js.js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // TODO: somehow resolve the correct subproject in a monorepo without having to have .eslintrc.js
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    tsconfigRootDir: process.cwd(),
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-for-in-array': ['error'],
    'no-unused-vars': 0,
    // constructor shorthand syntax can't be recognized
    'no-useless-constructor': 0,
    'no-empty-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', 'tsx'] }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-misused-promises': ['error', { checksConditionals: false, checksVoidReturn: false }],
    '@typescript-eslint/no-unsafe-member-access': ['warn'],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/prefer-readonly': ['warn', { 'onlyInlineLambdas': true }],
    '@typescript-eslint/prefer-optional-chain': ['warn'],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_+$',
        argsIgnorePattern: '^_+$',
        ignoreRestSiblings: true,
      },
    ],
  },
};
