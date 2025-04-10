import { includeIgnoreFile } from '@eslint/compat'
import { resolve } from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import { axiom } from './axiom.ts'

const ignores = ['**/logs', '**/tmp', '**/node_modules', '**/build', '**/coverage', '**/.env']

vi.mock('@eslint/compat', () => ({
  includeIgnoreFile: vi.fn(() => ({
    name: 'axiom/setup/ignore-files',
    ignores
  }))
}))

// Mock specific plugin configs for testing
vi.mock('./plugins/index.ts', () => ({
  import: { name: 'import' },
  jsdoc: { name: 'jsdoc' },
  neostandard: { name: 'neostandard' },
  node: { name: 'node' },
  promise: { name: 'promise' },
  vitest: { name: 'vitest' }
}))

describe('axiom', () => {
  it('should return an array of FlatConfig objects with correct properties', () => {
    const dirname = 'axiom'

    const result = axiom(dirname)

    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBeGreaterThan(0)

    expect(result[0]).toEqual({
      name: 'axiom/setup/ignore-files',
      ignores: ['**/logs', '**/tmp', '**/node_modules', '**/build', '**/coverage', '**/.env', 'eslint.config.mjs']
    })

    expect(result[1]).toMatchObject({
      name: 'axiom/setup/language-options',
      languageOptions: {
        parserOptions: {
          projectService: true
        }
      }
    })

    // expect(result[1]?.languageOptions?.parserOptions?.['tsconfigRootDir']).toContain(dirname)

    expect(result[2]).toEqual({
      name: 'axiom/setup/file-extension',
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}']
    })
  })

  it('should correctly resolve the .gitignore path', () => {
    const dirname = '/another/dir'
    const result = axiom(dirname)
    const resolvedPath = resolve(dirname, '.gitignore')

    expect(includeIgnoreFile).toHaveBeenCalledWith(resolvedPath)
    expect(result[0]).toEqual({
      name: 'axiom/setup/ignore-files',
      ignores: ignores.concat(['eslint.config.mjs'])
    })
  })

  it('should include the file-extension object in the result', () => {
    const dirname = '/any/dir'
    const result = axiom(dirname)
    const fileExtensionConfig = result.find((config) => config.name === 'axiom/setup/file-extension')

    expect(fileExtensionConfig).toBeDefined()
    expect(fileExtensionConfig?.files).toEqual(['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'])
  })

  describe('plugin configuration', () => {
    it('should include all plugins when no options are provided', () => {
      const dirname = '/test/dir'
      const result = axiom(dirname)

      const pluginNames = ['import', 'jsdoc', 'neostandard', 'node', 'promise', 'vitest']

      for (const pluginName of pluginNames) {
        const plugin = result.find((config) => config.name === pluginName)
        expect(plugin).toBeDefined()
      }
    })

    it('should exclude plugins that are explicitly disabled', () => {
      const dirname = '/test/dir'
      const result = axiom(dirname, {
        vitest: false,
        node: false
      })

      // These plugins should be excluded
      expect(result.find((config) => config.name === 'vitest')).toBeUndefined()
      expect(result.find((config) => config.name === 'node')).toBeUndefined()

      // These plugins should still be included
      expect(result.find((config) => config.name === 'import')).toBeDefined()
      expect(result.find((config) => config.name === 'jsdoc')).toBeDefined()
      expect(result.find((config) => config.name === 'neostandard')).toBeDefined()
      expect(result.find((config) => config.name === 'promise')).toBeDefined()
    })

    it('should only include plugins that are explicitly enabled when others are disabled', () => {
      const dirname = '/test/dir'
      const result = axiom(dirname, {
        import: true,
        jsdoc: false,
        neostandard: false,
        node: false,
        promise: false,
        vitest: false
      })

      // Only import should be included
      expect(result.find((config) => config.name === 'import')).toBeDefined()

      // These plugins should be excluded
      expect(result.find((config) => config.name === 'jsdoc')).toBeUndefined()
      expect(result.find((config) => config.name === 'neostandard')).toBeUndefined()
      expect(result.find((config) => config.name === 'node')).toBeUndefined()
      expect(result.find((config) => config.name === 'promise')).toBeUndefined()
      expect(result.find((config) => config.name === 'vitest')).toBeUndefined()
    })
  })
})
