import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: ['/zh/guide/getting-started.md', '/zh/guide/index.md', '/zh/guide/vpstarter.md', '/zh/guide/document.md']
    }
  ]
}
