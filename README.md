# best-prettier-config

> The best [prettier][] config in the world

I add this file to all my projects, so I made a CLI to make it easier to do so.

```
npx best-prettier-config
```

This will write a `.prettierrc` file with the following contents to your current working directory:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

If you really need it, you can also require this module:

```js
const config = require('best-prettier-config')
```

[prettier]: https://github.com/prettier/prettier
