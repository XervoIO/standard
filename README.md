# JavaScript Standard Modulus Style

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
