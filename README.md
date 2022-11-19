# VP Starter

[![Release Date][rle-image]][rle-url] [![GitHub last commit][last-commit-image]][repository-url] [![tag][tag-image]][rle-url] [![license][license-image]][repository-url]

基于 [vuepress 2.0](https://v2.vuepress.vuejs.org/) 构建文档站点的脚手架。[在线预览](https://vuepress.yycc.dev/)。

<!-- [![action][ci-image]][ci-url]  -->
<!-- [![Sourcegraph][sg-image]][sg-url]  -->
<!-- [![GitHub repo size][repo-size-image]][repository-url]
 -->

[ci-image]: https://github.com/funnyzak/vp-starter/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/funnyzak/vp-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/vp-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/vp-starter
[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/vp-starter
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/vp-starter?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/vp-starter?style=flat-square&lable=commit
[rle-image]: https://img.shields.io/github/release-date/funnyzak/vp-starter.svg?label=release
[rle-url]: https://github.com/funnyzak/vp-starter/releases/latest
[sg-url]: https://sourcegraph.com/github.com/funnyzak/vp-starter
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square
[tag-image]: https://img.shields.io/github/tag/funnyzak/vp-starter.svg

## Features

- TypeScript 支持。
- 中英文切换配置支持。
- docsearch 配置支持。
- google analytics 配置支持。
- Pwa 配置支持。
- 支持自定义配置构建。

## Preview

[![preview](https://raw.githubusercontent.com/funnyzak/vp-starter/main/.github/docs/images/preview.png)](https://vuepress.yycc.dev/)

## Quick Start

```bash
# 安装依赖
yarn

# 启动开发环境
yarn docs:dev

# 构建
yarn docs:build

# 根据 custom/*.json 配置构建所有（注意每个自定义配置的的输出目录需要单独定义，否则多个构建输出会覆盖）
yarn docs:build:all

# 根据 custom/*.json 配置构建所有并压缩为zip（注意每个自定义配置的的输出目录需要单独定义，否则多个构建输出会覆盖）
yarn docs:build2zip:all

# EsLint 检查
yarn eslint:check

# ESLint 修复
yarn eslint:fix

# 使用 prettier 代码格式检查
yarn style:check

# 使用 prettier 代码格式化
yarn style:fix

# lint staged hook 检查
yarn lint:staged

# lint
yarn lint:check

# lint 样式、js 并修复
yarn lint:fix

# 自定义开发、打包，以下读取 docs/.vuepress/custom/default.json 自定义配置进行打包
npx cross-env CONFIG_NAME=default yarn docs:dev
npx cross-env CONFIG_NAME=default yarn docs:build
```

## Structure

    ├── .editorconfig                            // 编辑器配置文件
    ├── .eslintignore                            // eslint 忽略文件
    ├── .eslintrc.cjs                            // eslint 配置文件
    ├── .github                                  // github 配置文件
    ├── .gitignore                               // git 忽略文件
    ├── .husky                                   // husky 配置文件
    ├── .npmrc                                   // npm 配置文件
    ├── .vscode                                  // vscode 配置文件
    ├── docs                                     // 文档目录
    │   ├── .vuepress                            // vuepress 配置目录
    │   │   ├── client.ts                        // 客户端配置
    │   │   ├── components                       // vuepress 组件目录
    │   │   ├── custom                           // 自定义构建配置目录
    │   │   ├── config                           // vuepress 页面配置
    │   │   ├── config.ts                        // vuepress 配置文件
    │   │   ├── dist                             // vuepress 构建目录
    │   │   ├── public                           // vuepress 静态资源目录
    │   │   ├── server.ts                        // 服务端配置
    │   │   ├── styles                           // vuepress 样式目录
    │   │   ├── templates                        // vuepress 模板目录
    │   │   └── theme                            // vuepress 主题目录
    │   ├── guide                                // 文档
    │   │   ├── getting-started.md
    │   │   ├── hello.md
    │   │   └── index.md
    │   ├── index.md
    │   └── zh
    │       ├── guide
    │       └── index.md
    ├── package.json                            // package.json
    ├── prettier.config.cjs                     // prettier 配置文件
    ├── renovate.json                           // renovate 配置文件
    ├── tsconfig.json                           // ts 配置文件
    ├── tsconfig.node.json                      // node 环境下的 ts 配置
    └── yarn.lock                               // yarn 锁文件

## FAQ

### 如何进行自定义配置进行开发或构建？

1. 在 docs/.vuepress/custom 目录下复制 `default.json`， 并创建自定义 JSON 配置文件，例如 `app_custom.json`。
2. 在文件内 `app` 属性增加自定义配置，配置变量可参考 [vuepress 配置](https://vuepress.vuejs.org/zh/config/)。
3. 使用以下命令进行开发或构建，其中 `CONFIG_NAME` 为自定义配置文件名，不包含 `.json` 后缀。
4. 进行开发或构建：
   ```bash
   # 启动开发
   npx cross-env CONFIG_NAME=app_custom yarn docs:dev
   # 构建
   npx cross-env CONFIG_NAME=app_custom yarn docs:build
   ```
5. 也可以在 `package.json` 中配置 `scripts`，例如：
   ```json
   {
     "scripts": {
       "docs:dev:app_custom": "npx cross-env CONFIG_NAME=app_custom yarn docs:dev",
       "docs:build:app_custom": "npx cross-env CONFIG_NAME=app_custom yarn docs:build"
     }
   }
   ```

## Reference

- **[vuepress](https://v2.vuepress.vuejs.org/)** is a minimalistic Vue-powered static site generator, made with love by Evan You.
- **[vuepress-plugin-md-enhance](https://vuepress-theme-hope.github.io/v2/md-enhance/)** is a plugin for VuePress that provides a lot of useful features for markdown.
- **[awesome-vuepress](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md)** is a curated list of awesome things related to VuePress.
- **[vuepress-plugin-pwa](https://vuepress-plugin-pwa.danielroe.com/)** is a VuePress plugin that adds PWA support to your site.
- **[theme config](https://v2.vuepress.vuejs.org/reference/default-theme/config.html)** is the default theme configuration for VuePress.
- **[offical plugins](https://v2.vuepress.vuejs.org/reference/plugin/back-to-top.html)** is a list of official plugins.

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/vp-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/vp-starter" />
</a>

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
