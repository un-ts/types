# @rxts/types

[![GitHub Actions](https://github.com/rx-ts/types/workflows/Node%20CI/badge.svg)](https://github.com/rx-ts/types/actions?query=workflow%3A%22Node+CI%22)
[![Codacy Grade](https://img.shields.io/codacy/grade/8e5221c1a3d344d3bb6221d26bc4fdcf)](https://www.codacy.com/app/rx-ts/types)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Ftypes%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![GitHub release](https://img.shields.io/github/release/rx-ts/types)](https://github.com/rx-ts/types/releases)
[![David Dev](https://img.shields.io/david/dev/rx-ts/types.svg)](https://david-dm.org/rx-ts/types?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org)
[![codechecks.io](https://raw.githubusercontent.com/codechecks/docs/master/images/badges/badge-default.svg?sanitize=true)](https://codechecks.io)

> TypeScript Type Definitions same as DefinitelyTyped.

- [Install](#install)
- [Usage](#usage)
  - [Link to `@types` Automatically](#link-to-types-automatically)
  - [Prefer Configuring Manually](#prefer-configuring-manually)
- [Changelog](#changelog)
- [License](#license)

## Install

```sh
# yarn
yarn add -D @d-ts/core

# npm
npm i -D @d-ts/core
```

## Usage

### Link to `@types` Automatically

```sh
# yarn
yarn add -D @d-ts/bin

# npm
npm i -D @d-ts/bin
```

```jsonc
// package.json
{
  "scripts": {
    "postinstall": "t"
  }
}
```

### Prefer Configuring Manually

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "typeRoots": ["./node_modules/@types", "./node_modules/@d-ts"]
  }
}
```

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
