import type { Linter } from 'eslint'

export const axiom: Linter.Config[] = [
  {
    name: 'axiom/rules/all',
    rules: {
      // Reason: https://github.com/standard/standard/issues/1464
      // Reason: https://github.com/eslint/eslint/pull/12613
      'no-void': ['error', { allowAsStatement: true }],
      '@typescript-eslint/no-floating-promises': 'error',
      // Reason: for..of works on any iterable
      // Reason: for..of supports all kinds of control flow in the loop body, like `continue`, `break`, `return`, `yield` and `await`.
      '@typescript-eslint/prefer-for-of': 'error',
      // Reason: style differs from biome fixer
      '@stylistic/multiline-ternary': 'off'
    }
  }
]
