# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0]

### Changed

- Toolchain maintenance: TypeScript 7, oxlint 1.76, oxfmt 0.61, pnpm 11, `@2bad/tsconfig` 4.
- Build now emits declarations via TypeScript 7. Types are unchanged; only quoting in the emitted `.d.ts` differs.

The exported config is unchanged from 2.0.0. No rules were added, removed, or re-severed, and the `oxlint >= 1.60` peer range still applies.

## [2.0.0]

### Breaking Changes

- Moved from ESLint to oxlint. The package now exports a shared oxlint config object instead of an ESLint flat-config generator.
- Swap `eslint.config.mjs` for `oxlint.config.ts` with `defineConfig({ extends: [axiom] })`.
- Peer dep is now `oxlint >= 1.60`. ESLint deps are gone.
- Formatting is no longer handled here. Use `oxfmt` (or whatever formatter you like).

### Added

- `unicorn` plugin: `no-process-exit`, `prefer-node-protocol`.
- TypeScript plugin gaps closed: `no-duplicate-enum-values`, `no-non-null-asserted-optional-chain`, `no-non-null-assertion`, `no-wrapper-object-types`, `triple-slash-reference`.
- `eslint/object-shorthand`, `node/handle-callback-err`.

### Changed

- `no-implied-eval` now lives under the `typescript/` plugin (moved upstream).
- Rewrote the README for the oxlint workflow.
- Trimmed 50 rule entries that oxlint already enables by default. No behavior change, they still fire via the `correctness` defaults.

### Removed

- `prefer-regex-literals` — removed upstream in oxlint with no replacement.
- All 53 `@stylistic` rules — formatting isn't a linter concern here.
