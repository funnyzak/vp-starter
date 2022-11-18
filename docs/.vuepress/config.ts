import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'
import { usePagesPlugin } from './plugins/usePages'
import { path } from '@vuepress/utils'
import _ from 'lodash'
import { App, defaultTheme, defineUserConfig, UserConfig } from 'vuepress'
import { head, navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'
import CustomConfig, { defaultCustomConfig } from './custom'
import { logInfo } from './utils/logger'

// 轻量搜索插件
// import { searchPlugin } from '@vuepress/plugin-search'

const isProd = process.env.NODE_ENV === 'production'

logInfo('isProd', isProd, 'custom', CustomConfig, 'defaultCustomConfig', defaultCustomConfig)

const config = defineUserConfig(
  _.merge<UserConfig, UserConfig>(
    {
      title: 'Vuepress Starter',
      description: 'Vuepress Starter',

      // extra tags in `<head>`
      head,

      // set site base to default value
      base: '/',

      // set site lang to default value
      lang: 'zh-CN',

      port: 3000,
      open: false,

      public: path.join(__dirname, 'public'),

      // Specify the temporary directory for client.
      // temp: path.join(__dirname, 'temp'),

      // Specify the directory for storing cache files.
      // cache: path.join(__dirname, 'cache'),

      debug: !isProd,

      // Node App Hooks
      onInitialized: (app: App) => {
        logInfo('onInitialized')
      },

      onWatched: (app: App, watchers: any) => {
        // logInfo('onWatched')
      },
      onPrepared: async (app) => {
        // write node vars to client
        await app.writeTemp('author.js', `export const author = 'Leon'`)
      },
      // Node App Hooks End

      bundler: viteBundler({
        viteOptions: {
          resolve: {
            alias: {
              '@component': path.resolve(__dirname, 'components'),
              '@public': path.resolve(__dirname, 'public'),
              '@configs': path.resolve(__dirname, 'configs')
            }
          }
        },
        vuePluginOptions: {}
      }),

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
        // use pages
        usePagesPlugin({
          file: 'pages.js'
        }),
        // Svg Icons
        svgIconPlugin({
          svgsDir: path.resolve(__dirname, 'public/svg')
        }),
        // Markdown Enhancements
        mdEnhancePlugin({
          flowchart: false,
          mermaid: false,
          chart: false

        }),
        // 复制代码插件
        copyCodePlugin({
          // your options
        }),
        pwaPlugin({
          skipWaiting: true
        }),
        // 去掉注释，开启搜索插件
        // searchPlugin({
        //   // 配置项
        // }),
        // 使用此插件需要配置爬虫，创建数据索引，具体看这里：https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html
        docsearchPlugin({
          appId: '6KVW073BWJ',
          apiKey: 'e7c9d8d3e543cb3373c831d0d4ac372e',
          indexName: 'vuepress',
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
        }),
        googleAnalyticsPlugin({
          // we have multiple deployments, which would use different id
          id: process.env.DOCS_GA_ID ?? ''
        }),
        registerComponentsPlugin({
          componentsDir: path.resolve(__dirname, './components')
        }),
        // only enable shiki plugin in production mode
        isProd ? shikiPlugin({ theme: 'dark-plus' }) : []
      ],

      theme: defaultTheme({
        logo: '/images/icons/logo-mask.png',
        repo: 'funnyzak/vuepress-starter',
        docsDir: 'docs',

        locales: {
          '/': {
            colorMode: 'auto',
            colorModeSwitch: true,
            home: '/',
            sidebarDepth: 3,
            backToHome: 'Back to home',
            navbar: navbarEn,
            sidebar: sidebarEn,
            editLinkText: 'Edit this page on GitHub'
          },
          '/zh/': {
            logoDark: null,
            colorMode: 'auto',
            colorModeSwitch: true,
            home: '/',

            sidebarDepth: 3,
            editLink: true,
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
            sidebar: sidebarZh
          }
        },

        themePlugins: {
          // only enable git plugin in production mode
          git: isProd,
          // use shiki plugin in production mode instead
          prismjs: !isProd,
          externalLinkIcon: true,
          nprogress: true,
          mediumZoom: true,
          activeHeaderLinks: true
        }
      }),

      // configure markdown
      markdown: {
        importCode: {}
      }
    },
    CustomConfig ? CustomConfig.config.app : {}
  )
)

export default config
