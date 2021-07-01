module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2021',
    node: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'plugin:unicorn/recommended',
    // https://github.com/mysticatea/eslint-plugin-node
    'plugin:node/recommended',
  ],
  plugins: ['graphql', 'unicorn', 'standard', 'vue'],
  rules: {
    'no-debugger': 'off',
    'no-console': 'off',

    'unicorn/prefer-module': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-document-cookie': 'off',

    'vue/no-v-html': 'off',

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          'g-link',
          'g-image',
          'component',
          'template',
          'transition',
          'transition-group',
          'keep-alive',
          'slot',
          'i18n',
        ],
      },
    ],

    'unicorn/catch-error-name': [
      'error',
      {
        name: 'error',
        caughtErrorsIgnorePattern: '^(_)$',
      },
    ],

    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    // 'unicorn/no-for-loop': 'on',
    'unicorn/consistent-function-scoping': 'off', // it's bugged in v12

    'node/no-unpublished-require': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-extraneous-import': 'error',
    'node/no-missing-import': [
      'off',
      {
        tryExtensions: ['.js', '.vue', '.json'],
      },
    ],
    'node/no-unsupported-features/es-syntax': [
      'off',
      // { ignores: ['modules'] },
    ],
  },
  overrides: [
    {
      files: [
        '*/src/**/*',
        '*/tests/unit/**/*',
        '*/tests/e2e/**/*',
        'shared-frontend/**/*',
      ],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
    },
    {
      files: ['**/*.unit.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: { jest: true },
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false,
      },
    },
  ],
}
