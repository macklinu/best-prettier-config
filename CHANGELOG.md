# best-prettier-config

## 2.0.2

### Patch Changes

- 3ef66ec: Generate CLI binary to fix bunx usage

## 2.0.1

### Patch Changes

- a20bbc8: Update bin path to fix bunx execution

## 2.0.0

### Major Changes

- 8d7ec43: Migrates to Bun for installation and removes index.json for importing best-prettier-config in code

  ## Breaking changes

  ### From `npx` to `bunx`

  Moving forward for a small package that's a one-off script, I am only intentionally supporting `bunx` for installation.

  Instead of running `npx best-prettier-config`, please use `bunx best-prettier-config`. The `npx` version may still work because Bun aims to be compatible with Node APIs, but it will not be intentionally supported.

  ### Removed `index.json`

  When I first wrote this, I exported the prettier config as an importable JavaScript module.

  ```ts
  const config = require('best-prettier-config')
  ```

  This has been removed in v2. I never used it and would rather just update/overwrite a config file in my project with the CLI (which rarely needs to happen) than to import the config in JavaScript and extend it.

  ## Features

  ### `--plugin` flag

  You can now add plugins to your prettier config with the `--plugin` flag. This is useful for projects like Astro that require a plugin to work with prettier.

  ```sh
  bunx best-prettier-config --plugin prettier-plugin-astro --plugin prettier-plugin-tailwind
  ```

  You can use a shorthand for the plugin name, so `prettier-plugin-astro` can be written as `astro`.

  ```sh
  bunx best-prettier-config --plugin astro --plugin tailwind
  ```

  Shorten it even more by using `-p` in place of `--plugin`.

  ```sh
  bunx best-prettier-config -p astro -p tailwind
  ```
