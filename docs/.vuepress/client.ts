import { defineClientConfig } from '@vuepress/client'
import { installComponent, rootComponentsGlobal } from './components'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册自定义全局组件
    installComponent(app)
  },
  setup() {},
  // 注册全局组件，放在根节点
  rootComponents: rootComponentsGlobal
})
