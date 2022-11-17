import { fs, path } from '@vuepress/utils'
import { createRequire } from 'node:module'
import { UserConfig } from 'vuepress'
import { logInfo } from '../utils/logger'

const require = createRequire(import.meta.url)
export interface CustomConfig {
  configName: string
  configFilePath: string
  config: any
  userConfig: UserConfig
}

export const getCustomConfig = (config_name?: string): CustomConfig | undefined => {
  try {
    const configName = config_name || 'default'
    const configPath = path.join(__dirname, `${configName}.json`)
    if (!fs.existsSync(configPath)) {
      throw new Error(`custom config file ${configPath} not found`)
    }
    const customConfig = fs.readJsonSync(require.resolve(configPath))
    const appConfig = customConfig.vuepress || {}
    return {
      configName: configName,
      configFilePath: configPath,
      config: customConfig,
      userConfig: appConfig
    }
  } catch (error: any) {
    logInfo(error.message)
    return undefined
  }
}

const custom = getCustomConfig(process.env.CONFIG_NAME)

export default custom
