import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Kunlunwenbao',
    children: [
      { text: 'Offical Site', link: 'mailto:support@kunlunwenbao.com', target: '_blank' },
      { text: 'Contact Us', link: 'mailto:support@kunlunwenbao.com', target: '_blank' }
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
