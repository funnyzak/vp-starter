import { defineClientConfig } from '@vuepress/client'
import { installComponent, rootComponentsGlobal } from './components'
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册自定义全局组件
    installComponent(app)
  },
  layouts: {
    Layout
  },
  setup() {},
  // 注册全局组件，放在根节点
  rootComponents: rootComponentsGlobal
})
