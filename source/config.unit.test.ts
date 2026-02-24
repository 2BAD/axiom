import { describe, expect, it } from 'vitest'
import defaultExport, { axiom } from './index.ts'

describe('axiom oxlint config', () => {
  it('should export as both named and default', () => {
    expect(axiom).toBeDefined()
    expect(defaultExport).toBe(axiom)
  })

  it('should include all required plugins', () => {
    const expected = ['eslint', 'typescript', 'oxc', 'import', 'jsdoc', 'promise', 'node', 'vitest']
    expect(axiom.plugins).toEqual(expected)
  })

  it('should have more than 100 rules configured', () => {
    const ruleCount = Object.keys(axiom.rules).length
    expect(ruleCount).toBeGreaterThan(100)
  })

  it('should scope vitest/jest rules to test files via overrides', () => {
    expect(axiom.overrides.length).toBeGreaterThanOrEqual(1)

    const testOverride = axiom.overrides.find((o) => o.files.includes('**/*.test.ts'))
    expect(testOverride).toBeDefined()

    const ruleNames = Object.keys(testOverride?.rules ?? {})
    expect(ruleNames.some((r) => r.startsWith('jest/') || r.startsWith('vitest/'))).toBe(true)
  })

  it('should include ignorePatterns', () => {
    expect(axiom.ignorePatterns).toEqual(['build', 'node_modules', 'coverage'])
  })

  it('should preserve rule severity and options', () => {
    expect(axiom.rules['eslint/eqeqeq']).toEqual(['error', 'always', { null: 'ignore' }])
    expect(axiom.rules['eslint/no-void']).toEqual(['error', { allowAsStatement: true }])
    expect(axiom.rules['eslint/no-var']).toBe('warn')
    expect(axiom.rules['typescript/ban-ts-comment']).toEqual(['error', { minimumDescriptionLength: 10 }])
    expect(axiom.rules['jest/max-nested-describe']).toBeUndefined()
  })
})
