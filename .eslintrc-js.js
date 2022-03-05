module.exports = {
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ],
    parser: 'babel-eslint',
    plugins: [
      'react',
      'react-hooks',
    ],
  
    rules: {
      // ignore variables called _ - they are unused
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_+$', argsIgnorePattern: '^_+$', ignoreRestSiblings: true },
      ],
      'no-use-before-define': 0,
      'no-await-in-loop': 0,
      'no-continue': 0,
      'class-methods-use-this': 0,
      'consistent-return': 0,
      'max-classes-per-file': 0,
      'no-return-assign': ['error', 'except-parens'],
      'lines-between-class-members': 0,
      'import/prefer-default-export': 0,
      'import/no-extraneous-dependencies': ['warn', { devDependencies: ['**/*.test.*'] }],
      // taken from airbnb but loosened
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'WithStatement',
          message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
      // allow shadowing _, since it is unused
      'no-shadow': ['warn', { allow: ['_'] }],
      'no-param-reassign': ['warn'],
      'react/forbid-prop-types': [2, { forbid: ['any', 'array'] }],
      'react/jsx-props-no-spreading': 0,
      'react/jsx-curly-newline': 0,
      'react/jsx-curly-brace-presence': 0,
      'react/jsx-one-expression-per-line': 0,
      'react/jsx-wrap-multilines': 0,
      'react/jsx-indent': 0,
      'jsx-a11y/label-has-for': 0,
      'jsx-a11y/label-has-associated-control': [
        'warn',
        {
          controlComponents: ['Input'],
        },
      ],
      'import/extensions': ['error', {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      }],
    },
  
    settings: {
      'import/resolver': {
        alias: {
          map: [
            // this is common enough that we just make it the default
            ['@', './src'],
            ['~', './src'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  };
  