# ESLint to OXC Lint Migration

## Overview

This document tracks the migration from ESLint to [oxlint](https://oxc.rs/docs/guide/usage/linter.html). Rules are grouped by source plugin with their current severity, configuration, and OXC equivalent status.

**Legend:**
- ✅ = OXC equivalent available
- ❌ = No OXC equivalent
- 🔧 = Handled by Biome/formatter (not a linter concern)

---

## Summary

| Category | Total | ✅ Available | ❌ No Equivalent | 🔧 Formatter |
|---|---|---|---|---|
| ESLint core | 68 | 60 | 8 | 0 |
| @typescript-eslint | 30 | 24 | 6 | 0 |
| @stylistic | 53 | 0 | 0 | 53 |
| import-x | 12 | 11 | 1 | 0 |
| jsdoc | 33 | 12 | 21 | 0 |
| n (node) | 18 | 3 | 15 | 0 |
| promise | 12 | 12 | 0 | 0 |
| vitest | 10 | 10 | 0 | 0 |
| **Total** | **236** | **132** | **51** | **53** |

---

## @stylistic rules (53 rules) — 🔧 Formatter

All `@stylistic` rules handle formatting and are **already covered by Biome**. These do not need OXC equivalents.

| Rule | Severity | Status |
|---|---|---|
| `@stylistic/array-bracket-spacing` | error | 🔧 Biome |
| `@stylistic/arrow-spacing` | error | 🔧 Biome |
| `@stylistic/block-spacing` | error | 🔧 Biome |
| `@stylistic/brace-style` | error | 🔧 Biome |
| `@stylistic/comma-dangle` | warn | 🔧 Biome |
| `@stylistic/comma-spacing` | error | 🔧 Biome |
| `@stylistic/comma-style` | error | 🔧 Biome |
| `@stylistic/computed-property-spacing` | error | 🔧 Biome |
| `@stylistic/dot-location` | error | 🔧 Biome |
| `@stylistic/eol-last` | error | 🔧 Biome |
| `@stylistic/func-call-spacing` | error | 🔧 Biome |
| `@stylistic/generator-star-spacing` | error | 🔧 Biome |
| `@stylistic/indent` | error | 🔧 Biome |
| `@stylistic/jsx-closing-bracket-location` | error | 🔧 Biome |
| `@stylistic/jsx-closing-tag-location` | error | 🔧 Biome |
| `@stylistic/jsx-curly-brace-presence` | error | 🔧 Biome |
| `@stylistic/jsx-curly-newline` | error | 🔧 Biome |
| `@stylistic/jsx-curly-spacing` | error | 🔧 Biome |
| `@stylistic/jsx-equals-spacing` | error | 🔧 Biome |
| `@stylistic/jsx-first-prop-new-line` | error | 🔧 Biome |
| `@stylistic/jsx-indent` | error | 🔧 Biome |
| `@stylistic/jsx-indent-props` | error | 🔧 Biome |
| `@stylistic/jsx-pascal-case` | error | 🔧 Biome |
| `@stylistic/jsx-props-no-multi-spaces` | error | 🔧 Biome |
| `@stylistic/jsx-quotes` | error | 🔧 Biome |
| `@stylistic/jsx-tag-spacing` | error | 🔧 Biome |
| `@stylistic/jsx-wrap-multilines` | error | 🔧 Biome |
| `@stylistic/key-spacing` | error | 🔧 Biome |
| `@stylistic/keyword-spacing` | error | 🔧 Biome |
| `@stylistic/lines-between-class-members` | off | 🔧 Biome |
| `@stylistic/multiline-ternary` | off | 🔧 Biome |
| `@stylistic/new-parens` | error | 🔧 Biome |
| `@stylistic/no-extra-parens` | error | 🔧 Biome |
| `@stylistic/no-floating-decimal` | error | 🔧 Biome |
| `@stylistic/no-mixed-operators` | error | 🔧 Biome |
| `@stylistic/no-mixed-spaces-and-tabs` | error | 🔧 Biome |
| `@stylistic/no-multi-spaces` | error | 🔧 Biome |
| `@stylistic/no-multiple-empty-lines` | error | 🔧 Biome |
| `@stylistic/no-tabs` | error | 🔧 Biome |
| `@stylistic/no-trailing-spaces` | error | 🔧 Biome |
| `@stylistic/no-whitespace-before-property` | error | 🔧 Biome |
| `@stylistic/object-curly-newline` | error | 🔧 Biome |
| `@stylistic/object-curly-spacing` | error | 🔧 Biome |
| `@stylistic/object-property-newline` | error | 🔧 Biome |
| `@stylistic/operator-linebreak` | error | 🔧 Biome |
| `@stylistic/padded-blocks` | error | 🔧 Biome |
| `@stylistic/quote-props` | error | 🔧 Biome |
| `@stylistic/quotes` | error | 🔧 Biome |
| `@stylistic/rest-spread-spacing` | error | 🔧 Biome |
| `@stylistic/semi` | error | 🔧 Biome |
| `@stylistic/semi-spacing` | error | 🔧 Biome |
| `@stylistic/space-before-blocks` | error | 🔧 Biome |
| `@stylistic/space-before-function-paren` | off | 🔧 Biome |
| `@stylistic/space-in-parens` | error | 🔧 Biome |
| `@stylistic/space-infix-ops` | error | 🔧 Biome |
| `@stylistic/space-unary-ops` | error | 🔧 Biome |
| `@stylistic/spaced-comment` | error | 🔧 Biome |
| `@stylistic/template-curly-spacing` | error | 🔧 Biome |
| `@stylistic/template-tag-spacing` | error | 🔧 Biome |
| `@stylistic/wrap-iife` | error | 🔧 Biome |
| `@stylistic/yield-star-spacing` | error | 🔧 Biome |

---

## ESLint core rules (68 rules)

| Rule | Severity | Options | OXC | Status |
|---|---|---|---|---|
| `accessor-pairs` | error | `{enforceForTSTypes: false, enforceForClassMembers: true, setWithoutGet: true}` | `eslint/accessor-pairs` | ✅ |
| `array-callback-return` | error | `{allowImplicit: false, checkForEach: false}` | `eslint/array-callback-return` | ✅ |
| `camelcase` | error | `{allow: ["^UNSAFE_"], ignoreGlobals: true, properties: "never"}` | — | ❌ |
| `curly` | error | `"multi-line"` | `eslint/curly` | ✅ |
| `default-case-last` | error | | `eslint/default-case-last` | ✅ |
| `eqeqeq` | error | `"always", {null: "ignore"}` | `eslint/eqeqeq` | ✅ |
| `for-direction` | error | | `eslint/for-direction` | ✅ |
| `new-cap` | error | `{capIsNew: false, newIsCap: true}` | `eslint/new-cap` | ✅ |
| `no-async-promise-executor` | error | | `eslint/no-async-promise-executor` | ✅ |
| `no-caller` | error | | `eslint/no-caller` | ✅ |
| `no-case-declarations` | error | | `eslint/no-case-declarations` | ✅ |
| `no-class-assign` | error | | `eslint/no-class-assign` | ✅ |
| `no-compare-neg-zero` | error | | `eslint/no-compare-neg-zero` | ✅ |
| `no-cond-assign` | error | `"except-parens"` | `eslint/no-cond-assign` | ✅ |
| `no-constant-binary-expression` | error | | `eslint/no-constant-binary-expression` | ✅ |
| `no-constant-condition` | error | `{checkLoops: false}` | `eslint/no-constant-condition` | ✅ |
| `no-control-regex` | error | | `eslint/no-control-regex` | ✅ |
| `no-debugger` | error | | `eslint/no-debugger` | ✅ |
| `no-delete-var` | error | | `eslint/no-delete-var` | ✅ |
| `no-dupe-else-if` | error | | `eslint/no-dupe-else-if` | ✅ |
| `no-duplicate-case` | error | | `eslint/no-duplicate-case` | ✅ |
| `no-empty` | error | `{allowEmptyCatch: true}` | `eslint/no-empty` | ✅ |
| `no-empty-character-class` | error | | `eslint/no-empty-character-class` | ✅ |
| `no-empty-pattern` | error | | `eslint/no-empty-pattern` | ✅ |
| `no-empty-static-block` | error | | `eslint/no-empty-static-block` | ✅ |
| `no-eval` | error | | `eslint/no-eval` | ✅ |
| `no-ex-assign` | error | | `eslint/no-ex-assign` | ✅ |
| `no-extend-native` | error | | `eslint/no-extend-native` | ✅ |
| `no-extra-bind` | error | | `eslint/no-extra-bind` | ✅ |
| `no-extra-boolean-cast` | error | | `eslint/no-extra-boolean-cast` | ✅ |
| `no-fallthrough` | error | | `eslint/no-fallthrough` | ✅ |
| `no-global-assign` | error | | `eslint/no-global-assign` | ✅ |
| `no-implied-eval` | error | | `eslint/no-implied-eval` | ✅ |
| `no-invalid-regexp` | error | | `eslint/no-invalid-regexp` | ✅ |
| `no-irregular-whitespace` | error | `{skipStrings: true}` | `eslint/no-irregular-whitespace` | ✅ |
| `no-iterator` | error | | `eslint/no-iterator` | ✅ |
| `no-labels` | error | | `eslint/no-labels` | ✅ |
| `no-lone-blocks` | error | | `eslint/no-lone-blocks` | ✅ |
| `no-misleading-character-class` | error | | `eslint/no-misleading-character-class` | ✅ |
| `no-multi-str` | error | | `eslint/no-multi-str` | ✅ |
| `no-new` | error | | `eslint/no-new` | ✅ |
| `no-new-func` | error | | `eslint/no-new-func` | ✅ |
| `no-new-wrappers` | error | | `eslint/no-new-wrappers` | ✅ |
| `no-nonoctal-decimal-escape` | error | | `eslint/no-nonoctal-decimal-escape` | ✅ |
| `no-object-constructor` | error | | `eslint/no-object-constructor` | ✅ |
| `no-octal` | error | | — | ❌ |
| `no-octal-escape` | error | | — | ❌ |
| `no-proto` | error | | `eslint/no-proto` | ✅ |
| `no-prototype-builtins` | error | | `eslint/no-prototype-builtins` | ✅ |
| `no-regex-spaces` | error | | `eslint/no-regex-spaces` | ✅ |
| `no-return-assign` | error | `"except-parens"` | `eslint/no-return-assign` | ✅ |
| `no-self-assign` | error | | `eslint/no-self-assign` | ✅ |
| `no-self-compare` | error | | `eslint/no-self-compare` | ✅ |
| `no-sequences` | error | | `eslint/no-sequences` | ✅ |
| `no-shadow-restricted-names` | error | | `eslint/no-shadow-restricted-names` | ✅ |
| `no-sparse-arrays` | error | | `eslint/no-sparse-arrays` | ✅ |
| `no-template-curly-in-string` | error | | `eslint/no-template-curly-in-string` | ✅ |
| `no-throw-literal` | error | | `eslint/no-throw-literal` | ✅ |
| `no-undef-init` | error | | — | ❌ |
| `no-unexpected-multiline` | error | | `eslint/no-unexpected-multiline` | ✅ |
| `no-unmodified-loop-condition` | error | | `eslint/no-unmodified-loop-condition` | ✅ |
| `no-unneeded-ternary` | error | `{defaultAssignment: false}` | `eslint/no-unneeded-ternary` | ✅ |
| `no-unreachable-loop` | error | | — | ❌ |
| `no-unsafe-finally` | error | | `eslint/no-unsafe-finally` | ✅ |
| `no-unsafe-optional-chaining` | error | | `eslint/no-unsafe-optional-chaining` | ✅ |
| `no-unused-labels` | error | | `eslint/no-unused-labels` | ✅ |
| `no-unused-private-class-members` | error | | `eslint/no-unused-private-class-members` | ✅ |
| `no-useless-backreference` | error | | `eslint/no-useless-backreference` | ✅ |
| `no-useless-call` | error | | `eslint/no-useless-call` | ✅ |
| `no-useless-catch` | error | | `eslint/no-useless-catch` | ✅ |
| `no-useless-computed-key` | error | `{enforceForClassMembers: true}` | `eslint/no-useless-computed-key` | ✅ |
| `no-useless-escape` | error | | `eslint/no-useless-escape` | ✅ |
| `no-useless-rename` | error | | `eslint/no-useless-rename` | ✅ |
| `no-useless-return` | error | | `eslint/no-useless-return` | ✅ |
| `no-var` | warn | | `eslint/no-var` | ✅ |
| `no-void` | error | `{allowAsStatement: true}` | `eslint/no-void` | ✅ |
| `no-with` | error | | `eslint/no-with` | ✅ |
| `object-shorthand` | warn | `"properties"` | — | ❌ |
| `one-var` | error | `{initialized: "never"}` | — | ❌ |
| `prefer-const` | error | `{destructuring: "all"}` | `eslint/prefer-const` | ✅ |
| `prefer-promise-reject-errors` | error | | `eslint/prefer-promise-reject-errors` | ✅ |
| `prefer-regex-literals` | error | `{disallowRedundantWrapping: true}` | `eslint/prefer-regex-literals` | ✅ |
| `prefer-rest-params` | error | | `eslint/prefer-rest-params` | ✅ |
| `prefer-spread` | error | | `eslint/prefer-spread` | ✅ |
| `require-yield` | error | | `eslint/require-yield` | ✅ |
| `symbol-description` | error | | `eslint/symbol-description` | ✅ |
| `unicode-bom` | error | `"never"` | `eslint/unicode-bom` | ✅ |
| `use-isnan` | error | `{enforceForIndexOf: true, enforceForSwitchCase: true}` | `eslint/use-isnan` | ✅ |
| `valid-typeof` | error | `{requireStringLiterals: true}` | `eslint/valid-typeof` | ✅ |
| `yoda` | error | `"never"` | `eslint/yoda` | ✅ |

---

## @typescript-eslint rules (30 rules)

| Rule | Severity | Options | OXC | Status |
|---|---|---|---|---|
| `@typescript-eslint/ban-ts-comment` | error | `{minimumDescriptionLength: 10}` | `typescript/ban-ts-comment` | ✅ |
| `@typescript-eslint/no-array-constructor` | error | | `eslint/no-array-constructor` | ✅ |
| `@typescript-eslint/no-dupe-class-members` | error | | `eslint/no-dupe-class-members` | ✅ |
| `@typescript-eslint/no-duplicate-enum-values` | error | | — | ❌ |
| `@typescript-eslint/no-dynamic-delete` | error | | `typescript/no-dynamic-delete` | ✅ |
| `@typescript-eslint/no-empty-object-type` | error | | `typescript/no-empty-object-type` | ✅ |
| `@typescript-eslint/no-explicit-any` | error | | `typescript/no-explicit-any` | ✅ |
| `@typescript-eslint/no-extra-non-null-assertion` | error | | `typescript/no-extra-non-null-assertion` | ✅ |
| `@typescript-eslint/no-extraneous-class` | error | | `typescript/no-extraneous-class` | ✅ |
| `@typescript-eslint/no-floating-promises` | error | | `typescript/no-floating-promises` | ✅ |
| `@typescript-eslint/no-invalid-void-type` | error | | `typescript/no-invalid-void-type` | ✅ |
| `@typescript-eslint/no-loss-of-precision` | error | | `eslint/no-loss-of-precision` | ✅ |
| `@typescript-eslint/no-misused-new` | error | | `typescript/no-misused-new` | ✅ |
| `@typescript-eslint/no-namespace` | error | | `typescript/no-namespace` | ✅ |
| `@typescript-eslint/no-non-null-asserted-nullish-coalescing` | error | | `typescript/no-non-null-asserted-nullish-coalescing` | ✅ |
| `@typescript-eslint/no-non-null-asserted-optional-chain` | error | | — | ❌ |
| `@typescript-eslint/no-non-null-assertion` | error | | — | ❌ |
| `@typescript-eslint/no-redeclare` | error | `{builtinGlobals: false}` | `eslint/no-redeclare` | ✅ |
| `@typescript-eslint/no-require-imports` | error | | `typescript/no-require-imports` | ✅ |
| `@typescript-eslint/no-this-alias` | error | | `typescript/no-this-alias` | ✅ |
| `@typescript-eslint/no-unnecessary-type-constraint` | error | | `typescript/no-unnecessary-type-constraint` | ✅ |
| `@typescript-eslint/no-unsafe-declaration-merging` | error | | `typescript/no-unsafe-declaration-merging` | ✅ |
| `@typescript-eslint/no-unsafe-function-type` | error | | `typescript/no-unsafe-function-type` | ✅ |
| `@typescript-eslint/no-unused-expressions` | error | `{allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true}` | `eslint/no-unused-expressions` | ✅ |
| `@typescript-eslint/no-unused-vars` | error | `{args: "none", caughtErrors: "none", ignoreRestSiblings: true}` | `eslint/no-unused-vars` | ✅ |
| `@typescript-eslint/no-use-before-define` | error | `{functions: false, classes: false, variables: false}` | `eslint/no-use-before-define` | ✅ |
| `@typescript-eslint/no-useless-constructor` | error | | `eslint/no-useless-constructor` | ✅ |
| `@typescript-eslint/no-wrapper-object-types` | error | | — | ❌ |
| `@typescript-eslint/prefer-as-const` | error | | `typescript/prefer-as-const` | ✅ |
| `@typescript-eslint/prefer-for-of` | error | | `typescript/prefer-for-of` | ✅ |
| `@typescript-eslint/prefer-literal-enum-member` | error | | `typescript/prefer-literal-enum-member` | ✅ |
| `@typescript-eslint/prefer-namespace-keyword` | error | | `typescript/prefer-namespace-keyword` | ✅ |
| `@typescript-eslint/triple-slash-reference` | error | | — | ❌ |
| `@typescript-eslint/unified-signatures` | error | | `typescript/unified-signatures` | ✅ |

---

## import-x rules (12 rules)

| Rule | Severity | Options | OXC | Status |
|---|---|---|---|---|
| `import-x/default` | error | | `import/default` | ✅ |
| `import-x/export` | error | | `import/export` | ✅ |
| `import-x/first` | error | | `import/first` | ✅ |
| `import-x/namespace` | error | | `import/namespace` | ✅ |
| `import-x/no-absolute-path` | error | | `import/no-absolute-path` | ✅ |
| `import-x/no-default-export` | error | | `import/no-default-export` | ✅ |
| `import-x/no-duplicates` | error | | `import/no-duplicates` | ✅ |
| `import-x/no-named-as-default` | warn | | `import/no-named-as-default` | ✅ |
| `import-x/no-named-as-default-member` | warn | | `import/no-named-as-default-member` | ✅ |
| `import-x/no-named-default` | error | | `import/no-named-default` | ✅ |
| `import-x/no-unresolved` | error | | — | ❌ |
| `import-x/no-webpack-loader-syntax` | error | | `import/no-webpack-loader-syntax` | ✅ |

---

## jsdoc rules (33 rules)

| Rule | Severity | Options | OXC | Status |
|---|---|---|---|---|
| `jsdoc/check-access` | warn | | `jsdoc/check-access` | ✅ |
| `jsdoc/check-alignment` | warn | | — | ❌ |
| `jsdoc/check-param-names` | warn | `{checkDestructured: false}` | — | ❌ |
| `jsdoc/check-property-names` | warn | | `jsdoc/check-property-names` | ✅ |
| `jsdoc/check-tag-names` | warn | `{typed: true}` | `jsdoc/check-tag-names` | ✅ |
| `jsdoc/check-types` | warn | | — | ❌ |
| `jsdoc/check-values` | warn | | — | ❌ |
| `jsdoc/empty-tags` | warn | | `jsdoc/empty-tags` | ✅ |
| `jsdoc/escape-inline-tags` | warn | | — | ❌ |
| `jsdoc/implements-on-classes` | warn | | `jsdoc/implements-on-classes` | ✅ |
| `jsdoc/multiline-blocks` | warn | | — | ❌ |
| `jsdoc/no-defaults` | warn | | `jsdoc/no-defaults` | ✅ |
| `jsdoc/no-multi-asterisks` | warn | | — | ❌ |
| `jsdoc/no-types` | warn | | — | ❌ |
| `jsdoc/reject-any-type` | warn | | — | ❌ |
| `jsdoc/reject-function-type` | warn | | — | ❌ |
| `jsdoc/require-hyphen-before-param-description` | warn | | — | ❌ |
| `jsdoc/require-jsdoc` | warn | `{require: {FunctionExpression: true, ArrowFunctionExpression: true}}` | — | ❌ |
| `jsdoc/require-next-type` | warn | | — | ❌ |
| `jsdoc/require-param` | warn | `{checkDestructured: false}` | `jsdoc/require-param` | ✅ |
| `jsdoc/require-param-description` | warn | | `jsdoc/require-param-description` | ✅ |
| `jsdoc/require-param-name` | warn | | `jsdoc/require-param-name` | ✅ |
| `jsdoc/require-property` | warn | | `jsdoc/require-property` | ✅ |
| `jsdoc/require-property-description` | warn | | `jsdoc/require-property-description` | ✅ |
| `jsdoc/require-property-name` | warn | | `jsdoc/require-property-name` | ✅ |
| `jsdoc/require-returns-check` | warn | | — | ❌ |
| `jsdoc/require-returns-description` | warn | | `jsdoc/require-returns-description` | ✅ |
| `jsdoc/require-throws` | warn | | — | ❌ |
| `jsdoc/require-throws-type` | warn | | — | ❌ |
| `jsdoc/require-yields` | warn | | `jsdoc/require-yields` | ✅ |
| `jsdoc/require-yields-check` | warn | | — | ❌ |
| `jsdoc/require-yields-type` | warn | | — | ❌ |
| `jsdoc/tag-lines` | warn | `"any", {startLines: 1}` | — | ❌ |
| `jsdoc/ts-no-empty-object-type` | warn | | — | ❌ |
| `jsdoc/valid-types` | warn | | — | ❌ |

---

## n (node) rules (18 rules)

| Rule | Severity | Options | OXC | Status |
|---|---|---|---|---|
| `n/handle-callback-err` | error | `"^(err\|error)$"` | — | ❌ |
| `n/hashbang` | error | | — | ❌ |
| `n/no-callback-literal` | error | | — | ❌ |
| `n/no-deprecated-api` | error | | — | ❌ |
| `n/no-exports-assign` | error | | `node/no-exports-assign` | ✅ |
| `n/no-extraneous-require` | error | | — | ❌ |
| `n/no-missing-require` | error | | — | ❌ |
| `n/no-new-require` | error | | `node/no-new-require` | ✅ |
| `n/no-path-concat` | error | | `node/no-path-concat` | ✅ |
| `n/no-process-exit` | error | | — | ❌ |
| `n/no-unpublished-bin` | error | | — | ❌ |
| `n/no-unpublished-import` | error | | — | ❌ |
| `n/no-unpublished-require` | error | | — | ❌ |
| `n/no-unsupported-features/es-builtins` | error | | — | ❌ |
| `n/no-unsupported-features/es-syntax` | error | `{ignores: ["modules"]}` | — | ❌ |
| `n/no-unsupported-features/node-builtins` | error | | — | ❌ |
| `n/prefer-node-protocol` | error | | — | ❌ |
| `n/process-exit-as-throw` | error | | — | ❌ |

---

## promise rules (12 rules)

| Rule | Severity | Options | OXC | Status |
|---|---|---|---|---|
| `promise/always-return` | error | | `promise/always-return` | ✅ |
| `promise/catch-or-return` | error | | `promise/catch-or-return` | ✅ |
| `promise/no-callback-in-promise` | warn | | `promise/no-callback-in-promise` | ✅ |
| `promise/no-nesting` | warn | | `promise/no-nesting` | ✅ |
| `promise/no-new-statics` | error | | `promise/no-new-statics` | ✅ |
| `promise/no-promise-in-callback` | warn | | `promise/no-promise-in-callback` | ✅ |
| `promise/no-return-in-finally` | warn | | `promise/no-return-in-finally` | ✅ |
| `promise/no-return-wrap` | error | | `promise/no-return-wrap` | ✅ |
| `promise/param-names` | error | | `promise/param-names` | ✅ |
| `promise/prefer-await-to-callbacks` | error | | `promise/prefer-await-to-callbacks` | ✅ |
| `promise/prefer-await-to-then` | error | `{strict: true}` | `promise/prefer-await-to-then` | ✅ |
| `promise/valid-params` | warn | | `promise/valid-params` | ✅ |

---

## vitest rules (10 rules)

| Rule | Severity | Options | OXC | Status |
|---|---|---|---|---|
| `vitest/expect-expect` | error | | `jest/expect-expect` | ✅ |
| `vitest/no-commented-out-tests` | error | | `jest/no-commented-out-tests` | ✅ |
| `vitest/no-identical-title` | error | | `jest/no-identical-title` | ✅ |
| `vitest/no-import-node-test` | error | | `vitest/no-import-node-test` | ✅ |
| `vitest/require-local-test-context-for-concurrent-snapshots` | error | | `vitest/require-local-test-context-for-concurrent-snapshots` | ✅ |
| `vitest/valid-describe-callback` | error | | `jest/valid-describe-callback` | ✅ |
| `vitest/valid-expect` | error | | `jest/valid-expect` | ✅ |
| `vitest/valid-title` | error | | `jest/valid-title` | ✅ |
| `vitest/max-nested-describe` | error | `{max: 3}` (test files only) | `jest/max-nested-describe` | ✅ |
| `vitest/no-hooks` | error | `{allow: ["afterEach"]}` (test files only) | `jest/no-hooks` | ✅ |

---

## Rules with no OXC equivalent (51 rules)

These rules have no direct OXC replacement and need decisions:

### Accept the gap (low impact)
- `no-octal` — rarely encountered in modern code
- `no-octal-escape` — rarely encountered in modern code
- `no-undef-init` — minor style preference
- `no-unreachable-loop` — edge case detection
- `object-shorthand` — style preference
- `one-var` — style preference
- `camelcase` — naming convention (Biome has `useNamingConvention`)
- `@typescript-eslint/no-non-null-asserted-optional-chain` — niche
- `@typescript-eslint/no-non-null-assertion` — consider if critical
- `@typescript-eslint/no-wrapper-object-types` — niche
- `@typescript-eslint/triple-slash-reference` — rarely used
- `@typescript-eslint/no-duplicate-enum-values` — TypeScript itself catches some of this

### May need alternative tooling
- `import-x/no-unresolved` — TypeScript compiler handles this
- `n/*` rules (15 rules) — Node.js-specific checks with no OXC coverage
- `jsdoc/*` rules (21 rules) — JSDoc validation with limited OXC coverage

---

## Migration checklist

- [x] Install oxlint: `npm install -D oxlint@1.50.0`
- [x] Create oxlint config — uses `oxlint.config.ts` with `defineConfig` (not JSON)
- [x] Configure OXC equivalent rules for ESLint core (60 rules)
- [x] Configure OXC equivalent rules for @typescript-eslint (21 rules)
- [x] Configure OXC equivalent rules for import (11 rules)
- [x] Configure OXC equivalent rules for promise (12 rules)
- [x] Configure OXC equivalent rules for vitest/jest (10 rules)
- [x] Configure OXC equivalent rules for jsdoc (14 rules)
- [x] Configure OXC equivalent rules for node (3 rules)
- [x] Verify Biome covers all @stylistic formatting rules
- [x] Decide on rules with no OXC equivalent — accepted gap for 51 rules (mostly jsdoc/node)
- [x] Run oxlint on codebase and compare output with ESLint
- [x] Update scripts to use oxlint (`check:oxlint` replaces `check:eslint`)
- [x] Remove all 12 ESLint dependencies from package.json
- [x] Rearchitect as shared oxlint config object (downstream uses `extends: [axiom]`)

## Final disposition

- **132 rules** migrated to oxlint (ESLint core, TypeScript, import, jsdoc, promise, node, vitest)
- **53 rules** dropped — formatting handled by Biome
- **51 rules** accepted as gaps — mostly jsdoc (21) and node (15) rules with no OXC equivalent
- **1 rule** (`no-irregular-whitespace`) options dropped — OXC version does not accept options
- Package transformed from ESLint config generator function to shared oxlint config object
