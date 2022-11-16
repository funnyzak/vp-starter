import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '昆仑文保',
    children: [
      { text: '官方网站', link: 'https://www.kunlunwenbao.com/', target: '_blank' },
      { text: '联系我们', link: 'mailto:support@kunlunwenbao.com', target: '_blank' }
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
