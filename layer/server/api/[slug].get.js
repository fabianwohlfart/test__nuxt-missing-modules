import { resolve } from 'path'
import { pathExists } from '@test/node_modules/fs-extra/lib/esm.mjs'

export default defineEventHandler(async (event) => {
  if (await pathExists(resolve('.'))) return true
  return false
})