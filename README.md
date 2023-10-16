# best-prettier-config

> The best [prettier][] config in the world :earth_americas:

I add this file to all my projects, so I made a CLI to make it easier to do so.

```sh
bunx best-prettier-config
```

> **Note:** As of v2, I use Bun to execute one-off scripts, so this module is only supported for usage with `bunx`. I try to keep APIs compatiable with Node and `npx` but it's not guaranteed.

This will write a `.prettierrc` file with the following contents to your current working directory:

```json
{
  "jsxSingleQuote": true,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

If you need to add a couple plugins, like working on an Astro project with Tailwind, you can use the `--plugin` command line argument:

```sh
# These are all the same
bunx best-prettier-config --plugin prettier-plugin-astro --plugin prettier-plugin-tailwind
bunx best-prettier-config --plugin astro --plugin tailwind
bunx best-prettier-config -p astro -p tailwind
```

Example output:

```json
{
  "jsxSingleQuote": true,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwind"]
}
```

[prettier]: https://github.com/prettier/prettier
