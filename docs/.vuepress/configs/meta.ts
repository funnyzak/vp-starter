import { fs } from '@vuepress/utils'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const version = fs.readJsonSync(require.resolve('../../../package.json')).version
