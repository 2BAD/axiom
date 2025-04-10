import { includeIgnoreFile } from '@eslint/compat'
import type { Linter } from 'eslint'
import { resolve } from 'node:path'
import { axiom as axiomRules } from './configs/axiom.ts'
import { strict } from './configs/strict.ts'
import { stylistic } from './configs/stylistic.ts'
// biome-ignore lint/style/noNamespaceImport: acceptable for this case
import * as plugins from './plugins/index.ts'

type PluginName = 'import' | 'jsdoc' | 'neostandard' | 'node' | 'promise' | 'vitest'

type PluginOptions = {
  [K in PluginName]?: boolean
}

/**
 * Generates an array of ESLint configuration objects for the Axiom setup.
 *
 * @param path - The directory path to use as a base for resolving configurations.
 * @param pluginOptions - Optional configuration flags for enabling/disabling individual plugins.
 * @returns An array of ESLint configuration objects.
 *
 * @description
 * This function creates an array of ESLint configuration objects that set up the Axiom
 * environment. It includes configurations for:
 * 1. Ignoring files based on .gitignore and adding 'eslint.config.mjs' to ignored files.
 * 2. Setting up language options with TypeScript project service.
 * 3. Specifying file extensions to be linted.
 * 4. Including plugin configurations based on provided options.
 *
 * @example
 * // Use all plugins (default behavior)
 * export default axiom(import.meta.dirname);
 *
 * // Disable specific plugins
 * export default axiom(import.meta.dirname, { vitest: false, node: false });
 *
 * // Enable only specific plugins
 * export default axiom(import.meta.dirname, {
 *   import: true,
 *   jsdoc: false,
 *   neostandard: false,
 *   node: false,
 *   promise: false,
 *   vitest: false
 * });
 */
export const axiom = (path: string, pluginOptions?: PluginOptions): Linter.Config[] => {
  // Default to enabling all plugins if no options provided
  const enabledPlugins = getEnabledPlugins(pluginOptions)

  return [
    {
      name: 'axiom/setup/ignore-files',
      // TODO: ESLint doesn't yet support .ts config files.
      // When 'ignores' is the only key in a config object, the patterns are treated as global ignores.
      ignores: [...(includeIgnoreFile(resolve(path, '.gitignore'))?.ignores ?? []), 'eslint.config.mjs']
    },
    {
      name: 'axiom/setup/language-options',
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: path
        }
      }
    },
    {
      name: 'axiom/setup/file-extension',
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}']
    },
    strict,
    ...enabledPlugins,
    stylistic,
    axiomRules
  ].flat()
}

/**
 * Determines which plugins to enable based on provided options.
 *
 * @param options - Plugin configuration options.
 * @returns Array of enabled plugin configurations.
 */
const getEnabledPlugins = (options?: PluginOptions): Linter.Config[][] => {
  // If no options provided, enable all plugins (maintain backward compatibility)
  if (!options) {
    return Object.values(plugins)
  }

  const enabledPlugins: Linter.Config[][] = []

  for (const pluginName of Object.keys(plugins) as PluginName[]) {
    if (options[pluginName] === true || !(pluginName in options)) {
      // eslint-disable-next-line import-x/namespace
      enabledPlugins.push(plugins[pluginName])
    }
  }

  return enabledPlugins
}
