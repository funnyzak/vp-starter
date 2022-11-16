import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme, defineUserConfig } from 'vuepress'
import { head, navbarEn, navbarZh, siderbar } from './config/index.js'

const isProd = process.env.NODE_ENV === 'production'

const config = defineUserConfig({
  title: 'Vuepress Starter',
  description: 'Vuepress Starter',

  // extra tags in `<head>`
  head,

  // set site base to default value
  base: '/',

  port: 3000,
  open: false,
  public: `docs/.vuepress/public`,

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuepress Starter',
      description: 'Vuepress Starter to build your documentation'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuepress 脚手架',
      description: 'Vuepress 脚手架，用于快速搭建文档'
    }
  },
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
  plugins: [
    docsearchPlugin({
      appId: '33',
      apiKey: '333',
      indexName: 'vuepress-starter',
      locales: {
        '/': {},
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    })
  ],

  theme: defaultTheme({
    logo: 'logo.png',
    repo: 'funnyzak/vuepress-starter',
    docsDir: 'docs',

    locales: {
      '/': {
        colorMode: 'auto',
        colorModeSwitch: true,
        home: '/',
        sidebarDepth: 3,
        backToHome: 'Back to home',
        navbar: navbarEn
      },
      '/zh/': {
        logoDark: null,
        colorMode: 'auto',
        colorModeSwitch: true,
        home: '/',

        sidebarDepth: 3,
        editLink: false,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
        navbar: navbarZh,
        lastUpdated: true,
        sidebar: siderbar
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd
    }
  })
})

export default config
