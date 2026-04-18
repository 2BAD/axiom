# Axiom

A shared [oxlint](https://oxc.rs/docs/guide/usage/linter.html) config for TypeScript projects.

## Overview

Axiom is a curated, opinionated set of oxlint rules — the linting distilled from years of ESLint configs, now running on the OXC toolchain. Drop it into `oxlint.config.ts` and get a sensible baseline without picking rules one by one.

Covers 137 rules across 9 plugins: `eslint`, `typescript`, `oxc`, `import`, `jsdoc`, `promise`, `node`, `unicorn`, and `vitest`/`jest` (scoped to test files).

## Install

```bash
pnpm add -D @2bad/axiom oxlint
```

`oxlint` is a peer dependency. Version `>= 1.60` is required.

## Usage

Create `oxlint.config.ts` in your project root:

```ts
import { axiom } from '@2bad/axiom'
import { defineConfig } from 'oxlint'

export default defineConfig({ extends: [axiom] })
```

Add lint scripts to `package.json`:

```json
{
  "scripts": {
    "check": "oxlint ./source",
    "fix": "oxlint --fix ./source"
  }
}
```

## Overriding rules

`extends` merges — add your own `rules`, `overrides`, or `ignorePatterns` alongside and they win:

```ts
import { axiom } from '@2bad/axiom'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [axiom],
  rules: {
    'typescript/no-explicit-any': 'off'
  }
})
```

## Formatting

Axiom only handles linting. Pair with [oxfmt](https://www.npmjs.com/package/oxfmt) for formatting — all stylistic concerns (quotes, indentation, semis, spacing) live there, not in the lint rules.

## Why "Axiom"?

In mathematics, an axiom is a statement taken to be true without proof. These rules are the baseline; debate ends here.

## Contributing

Contributions welcome. See [issues](https://github.com/2BAD/axiom/issues) or submit a PR.
