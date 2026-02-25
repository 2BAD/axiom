import tsconfigPaths from 'vite-tsconfig-paths'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['build', 'node_modules'],
    coverage: {
      exclude: ['build', ...coverageConfigDefaults.exclude],
      include: ['source/**/*.{ts,tsx}'],
      provider: 'v8',
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    },
    testTimeout: 30000
  },
  plugins: [tsconfigPaths()]
})
