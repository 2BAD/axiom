import tsParser from '@typescript-eslint/parser'
import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-import-x'

export const config: Linter.Config[] = [
  {
    ...plugin.flatConfigs.recommended,
    name: 'eslint/plugin/import/recommended'
  } as Linter.Config,
  // @ts-expect-error this is unlikely to be fixed
  {
    ...plugin.flatConfigs.typescript,
    name: 'eslint/plugin/import/typescript'
  },
  {
    name: 'axiom/plugin/import/overrides',
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      'import-x/resolver': {
        typescript: true
      }
    },
    rules: {
      'import-x/no-default-export': 'error'
    }
  }
]
