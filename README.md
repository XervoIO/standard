# JavaScript Standard Modulus Style

[![version](https://img.shields.io/npm/v/@modulus/standard.svg?style=flat-square)][version]
[![build](https://img.shields.io/travis/onmodulus/standard/master.svg?style=flat-square)][build]
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)][license]

A [standard-engine][engine] implementation wrapping the
[eslint-config-modulus][eslint] shared config.

## Install

```bash
npm install @modulus/standard --save-dev
```

## Usage

```bash
$ mod-standard
Error: Use JavaScript Standard Modulus Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

## Lint before testing

```json
// package.json
{
  "scripts": {
    "pretest": "mod-standard",
    "test": "lab -c"
  }
}
```

[engine]: https://github.com/Flet/standard-engine
[eslint]: https://github.com/onmodulus/eslint-config

[version]: https://www.npmjs.com/package/@modulus/standard
[build]: https://travis-ci.org/onmodulus/standard
[license]: https://raw.githubusercontent.com/onmodulus/standard/master/LICENSE
