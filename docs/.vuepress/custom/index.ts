import { fs, path } from '@vuepress/utils'
import _ from 'lodash'
import { createRequire } from 'node:module'
import { UserConfig } from 'vuepress'
import { logInfo } from '../utils/logger'

const require = createRequire(import.meta.url)
export interface CustomConfig {
  configName: string
  configFilePath: string
  config: CustomConfigOptions
}
export interface CustomConfigOptions {
  app?: Pick<
    UserConfig,
    | 'title'
    | 'description'
    | 'base'
    | 'lang'
    | 'public'
    | 'pagePatterns'
    | 'port'
    | 'open'
    | 'locales'
    | 'markdown'
    | 'head'
    | 'define'
  >
  extendConfig?: {
    [key: string]: any
  }
}

export const getCustomConfig = (config_name?: string): CustomConfig | undefined => {
  try {
    const configName = config_name || 'default'
    const configPath = path.join(__dirname, `${configName}.json`)
    if (!fs.existsSync(configPath)) {
      throw new Error(`custom config file ${configPath} not found`)
    }
    const customConfig = fs.readJsonSync(require.resolve(configPath))
    return {
      configName: configName,
      configFilePath: configPath,
      config: customConfig
    }
  } catch (error: any) {
    logInfo(error.message)
    return undefined
  }
}

const custom = process.env.CONFIG_NAME ? getCustomConfig(process.env.CONFIG_NAME) : undefined

export const defaultCustomConfig = { ...getCustomConfig('default')! }

export default custom
