import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '指南',
    link: '/zh/guide/getting-started.md'
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/funnyzak/vuepress-starter/blob/main/CHANGELOG.md'
      }
    ]
  },
  {
    text: '赞助',
    link: 'https://github.com/funnyzak/funnyzak/blob/main/pro/Coffee.md',
    target: '_blank'
  }
]
