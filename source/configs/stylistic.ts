import type { Linter } from 'eslint'

export const stylistic: Linter.Config[] = [
  {
    name: 'axiom/rules/stylistic',
    rules: {
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/lines-between-class-members': 'off'
    }
  }
]
