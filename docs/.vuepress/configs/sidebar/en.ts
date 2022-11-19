import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: ['/guide/getting-started.md', '/guide/index.md', '/guide/pagedata.md']
    }
  ]
}
