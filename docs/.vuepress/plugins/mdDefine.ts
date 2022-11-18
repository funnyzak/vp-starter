import type { App, PluginObject } from '@vuepress/core'

export interface MdDefineOptions {
  [key: string]: any
}

export const useMdDefine = (options: MdDefineOptions): PluginObject => {
  const name = 'vuepress-plugin-use-pages'
  const multiple = true

  const extendsMarkdown: PluginObject['extendsMarkdown'] = (md: any, app: App) => {
    const render = md.render
    md.render = (src: any, ...args: any) => {
      // maybe this can be exported as a vuepress plugin
      let content = src
      Object.entries(options).forEach(([key, value]) => {
        // replace key as value globally
        content = content.replace(new RegExp(key, 'g'), value)
      })
      const result = render.call(md, content, ...args)
      return result
    }
  }

  return {
    name,
    multiple,
    extendsMarkdown
  }
}
