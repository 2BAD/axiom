export const axiom = {
  plugins: ['eslint', 'typescript', 'oxc', 'import', 'jsdoc', 'promise', 'node', 'unicorn', 'vitest'],

  rules: {
    // ── ESLint core ─────────────────────────────────────────────────────
    'eslint/accessor-pairs': ['error', { enforceForTSTypes: false, enforceForClassMembers: true, setWithoutGet: true }],
    'eslint/array-callback-return': ['error', { allowImplicit: false, checkForEach: false }],
    'eslint/curly': ['error', 'multi-line'],
    'eslint/default-case-last': 'error',
    'eslint/eqeqeq': ['error', 'always', { null: 'ignore' }],
    'eslint/new-cap': ['error', { capIsNew: false, newIsCap: true }],
    'eslint/no-array-constructor': 'error',
    'eslint/no-case-declarations': 'error',
    'eslint/no-cond-assign': ['error', 'except-parens'],
    'eslint/no-constant-condition': ['error', { checkLoops: false }],
    'eslint/no-empty': ['error', { allowEmptyCatch: true }],
    'eslint/no-extend-native': 'error',
    'eslint/no-extra-bind': 'error',
    'eslint/no-fallthrough': 'error',
    'eslint/no-labels': 'error',
    'eslint/no-lone-blocks': 'error',
    'eslint/no-multi-str': 'error',
    'eslint/no-new': 'error',
    'eslint/no-new-func': 'error',
    'eslint/no-new-wrappers': 'error',
    'eslint/no-object-constructor': 'error',
    'eslint/no-proto': 'error',
    'eslint/no-prototype-builtins': 'error',
    'eslint/no-redeclare': ['error', { builtinGlobals: false }],
    'eslint/no-regex-spaces': 'error',
    'eslint/no-return-assign': ['error', 'except-parens'],
    'eslint/no-self-compare': 'error',
    'eslint/no-sequences': 'error',
    'eslint/no-template-curly-in-string': 'error',
    'eslint/no-throw-literal': 'error',
    'eslint/no-unexpected-multiline': 'error',
    'eslint/no-unmodified-loop-condition': 'error',
    'eslint/no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'eslint/no-unreachable': 'error',
    'eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }
    ],
    'eslint/no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
    'eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'eslint/no-useless-call': 'error',
    'eslint/no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'eslint/no-useless-constructor': 'error',
    'eslint/no-useless-return': 'error',
    'eslint/no-var': 'warn',
    'eslint/no-void': ['error', { allowAsStatement: true }],
    'eslint/object-shorthand': ['warn', 'properties'],
    'eslint/prefer-const': ['error', { destructuring: 'all' }],
    'eslint/prefer-promise-reject-errors': 'error',
    'eslint/prefer-rest-params': 'error',
    'eslint/prefer-spread': 'error',
    'eslint/symbol-description': 'error',
    'eslint/unicode-bom': ['error', 'never'],
    'eslint/use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
    'eslint/valid-typeof': ['error', { requireStringLiterals: true }],
    'eslint/yoda': ['error', 'never'],

    // ── TypeScript ──────────────────────────────────────────────────────
    'typescript/ban-ts-comment': ['error', { minimumDescriptionLength: 10 }],
    'typescript/no-dynamic-delete': 'error',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-extraneous-class': 'error',
    'typescript/no-invalid-void-type': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-asserted-nullish-coalescing': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-require-imports': 'error',
    'typescript/no-unnecessary-type-constraint': 'error',
    'typescript/no-unsafe-function-type': 'error',
    'typescript/prefer-for-of': 'error',
    'typescript/prefer-literal-enum-member': 'error',
    'typescript/unified-signatures': 'error',

    // ── Import ──────────────────────────────────────────────────────────
    'import/default': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // ── JSDoc ───────────────────────────────────────────────────────────
    'jsdoc/check-access': 'warn',
    'jsdoc/check-property-names': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/empty-tags': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/no-defaults': 'warn',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-property': 'warn',
    'jsdoc/require-property-description': 'warn',
    'jsdoc/require-property-name': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-yields': 'warn',

    // ── Promise ─────────────────────────────────────────────────────────
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-nesting': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': ['error', { strict: true }],
    'promise/valid-params': 'warn',

    // ── Node ────────────────────────────────────────────────────────────
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',

    // ── Unicorn ─────────────────────────────────────────────────────────
    'unicorn/no-process-exit': 'error',
    'unicorn/prefer-node-protocol': 'error'
  },

  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        'jest/expect-expect': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-identical-title': 'error',
        'vitest/no-import-node-test': 'error',
        'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
        'jest/max-nested-describe': ['error', { max: 3 }],
        'jest/no-hooks': ['error', { allow: ['afterEach'] }]
      }
    },
    {
      files: ['*.config.ts', '**/index.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ],

  ignorePatterns: ['build', 'node_modules', 'coverage']
} as const

export default axiom
