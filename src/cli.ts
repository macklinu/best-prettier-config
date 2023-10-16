import fs from 'fs/promises'

import { createPrettierConfig } from './create-prettier-config'

const config = createPrettierConfig(process.argv.slice(2))
await fs.writeFile('.prettierrc', JSON.stringify(config, null, 2), 'utf-8')
console.log('😎 Enjoy the best prettier config in the world')
