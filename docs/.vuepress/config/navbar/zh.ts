import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '支持中心',
    children: [
      { text: '官方网站', link: 'https://www.yycc.me', target: '_blank' },
      { text: '联系我', link: 'mailto:y@yycc.me', target: '_blank' }
    ]
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/funnyzak/vuepress-starter/blob/main/CHANGELOG.md'
      }
    ]
  }
]
