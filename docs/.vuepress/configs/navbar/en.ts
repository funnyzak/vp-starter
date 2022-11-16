import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Support',
    children: [
      { text: 'Site', link: 'https://www.yycc.me', target: '_blank' },
      { text: 'Contact', link: 'mailto:y@yycc.me', target: '_blank' }
    ]
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'CHANGELOG',
        link: 'https://github.com/funnyzak/vuepress-starter/blob/main/CHANGELOG.md'
      }
    ]
  }
]
