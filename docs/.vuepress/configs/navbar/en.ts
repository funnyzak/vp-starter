import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'About',
    children: [
      { text: 'Blog', link: 'https://yycc.me', target: '_blank' },
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
  },
  {
    text: 'Donate',
    link: 'https://github.com/funnyzak/funnyzak/blob/main/pro/Coffee.md',
    target: '_blank'
  }
]
