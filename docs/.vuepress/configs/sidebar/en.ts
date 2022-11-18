import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: ['/guide/index.md', '/guide/getting-started.md', '/guide/pagedata.md']
    }
  ]
}
