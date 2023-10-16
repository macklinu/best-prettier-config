import { expect, test } from 'bun:test'

import defaultPrettierConfig from '../.prettierrc.json'
import { createPrettierConfig } from './create-prettier-config'

test('returns default config with no plugins when no arguments are passed', () => {
  expect(createPrettierConfig([])).toEqual(defaultPrettierConfig)
})

test('includes full plugin name with full plugin option name', () => {
  expect(createPrettierConfig(['--plugin', 'prettier-plugin-foo'])).toEqual({
    ...defaultPrettierConfig,
    plugins: ['prettier-plugin-foo'],
  })
})

test('supports multiple plugins', () => {
  expect(
    createPrettierConfig([
      '--plugin',
      'prettier-plugin-foo',
      '--plugin',
      'prettier-plugin-bar',
    ])
  ).toEqual({
    ...defaultPrettierConfig,
    plugins: ['prettier-plugin-foo', 'prettier-plugin-bar'],
  })
})

test('supports short plugin option name', () => {
  expect(createPrettierConfig(['-p', 'prettier-plugin-foo'])).toEqual({
    ...defaultPrettierConfig,
    plugins: ['prettier-plugin-foo'],
  })
})

test('supports plugin without prettier-plugin- prefix', () => {
  expect(
    createPrettierConfig(['--plugin', 'astro', '--plugin', 'tailwind'])
  ).toEqual({
    ...defaultPrettierConfig,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwind'],
  })
})
