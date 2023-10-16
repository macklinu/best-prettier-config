import parseArgs from 'minimist'
import { z } from 'zod'

import defaultPrettierConfig from '../.prettierrc.json'

export function createPrettierConfig(argv: string[]) {
  const args = parseArgs(argv, {
    alias: {
      p: 'plugin',
    },
  })

  const argsSchema = z.object({
    plugin: z
      .union([z.string().transform((value) => [value]), z.array(z.string())])
      .optional()
      .transform(
        (plugins) =>
          plugins?.map((plugin) =>
            plugin.startsWith('prettier-plugin')
              ? plugin
              : `prettier-plugin-${plugin}`
          )
      ),
  })

  const { plugin } = argsSchema.parse(args)

  return { ...defaultPrettierConfig, plugins: plugin }
}
