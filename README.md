# Vuepress Starter

[![action][ci-image]][ci-url] [![Release Date][rle-image]][rle-url] [![GitHub last commit][last-commit-image]][repository-url] [![tag][tag-image]][rle-url] [![license][license-image]][repository-url]

基于 [vuepress 2.0](https://v2.vuepress.vuejs.org/) 构建文档站点的脚手架。[在线预览](https://vuepress.yycc.dev/)。

 <!-- [![Sourcegraph][sg-image]][sg-url]  -->
<!-- [![GitHub repo size][repo-size-image]][repository-url]
 -->

[ci-image]: https://github.com/funnyzak/vuepress-starter/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/funnyzak/vuepress-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/vuepress-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/vuepress-starter
[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/vuepress-starter
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/vuepress-starter?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/vuepress-starter?style=flat-square&lable=commit
[rle-image]: https://img.shields.io/github/release-date/funnyzak/vuepress-starter.svg?label=release
[rle-url]: https://github.com/funnyzak/vuepress-starter/releases/latest
[sg-url]: https://sourcegraph.com/github.com/funnyzak/vuepress-starter
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square
[tag-image]: https://img.shields.io/github/tag/funnyzak/vuepress-starter.svg

## Features

- TypeScript 支持。
- 中英文切换配置支持。
- docsearch 配置支持。
- google analytics 配置支持。

## Quick Start

```bash
# 安装依赖
yarn

# 启动开发环境
yarn docs:dev

# 构建
yarn docs:build

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
    │   │   ├── config                           // vuepress 页面配置
    │   │   ├── config.ts                        // vuepress 配置文件
    │   │   ├── dist                             // vuepress 构建目录
    │   │   ├── public                           // vuepress 静态资源目录
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

## Reference

- [Vitest](https://cn.vitest.dev/guide/features.html)
- [Vuepress](https://v2.vuepress.vuejs.org/)
- [Vuepress Plugin PWA](https://vuepress-plugin-pwa.danielroe.com/)
- [Vuepress Plugin Container](https://vuepress-plugin-container.danielroe.com/)

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/vuepress-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/vuepress-starter" />
</a>

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
