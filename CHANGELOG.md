# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0]

### Breaking Changes

- Migrated from ESLint to oxlint. The package now exports a shared oxlint config object instead of an ESLint flat-config generator function.
- Consumers must replace `eslint.config.mjs` with `oxlint.config.ts` using `defineConfig({ extends: [axiom] })`.
- Peer dependency is now `oxlint >= 1.60` (ESLint dependencies removed).
- Formatting rules are no longer handled here — pair with `oxfmt` (or any formatter of choice).

### Added

- `unicorn` plugin with `no-process-exit` and `prefer-node-protocol`.
- Closed gaps in the TypeScript plugin: `no-duplicate-enum-values`, `no-non-null-asserted-optional-chain`, `no-non-null-assertion`, `no-wrapper-object-types`, `triple-slash-reference`.
- `eslint/object-shorthand` and `node/handle-callback-err`.

### Changed

- `no-implied-eval` now lives under the `typescript/` plugin (moved upstream).

### Removed

- `prefer-regex-literals` — removed upstream in oxlint with no replacement.
- All 53 `@stylistic` rules — formatting is out of scope for the linter.
