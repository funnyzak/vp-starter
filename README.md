# Vuepress Starter

[![action][ci-image]][ci-url] [![Release Date][rle-image]][rle-url] [![GitHub last commit][last-commit-image]][repository-url] [![tag][tag-image]][rle-url] [![license][license-image]][repository-url]

基于 [vuepress 2.0](https://v2.vuepress.vuejs.org/) 构建文档站点的脚手架。[在线预览](https://vuepress.gp.yycc.dev/)。

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

## Feature

- TypeScript 支持。
- 中英文切换配置支持。
- docsearch 配置支持。
- google analytics 配置支持。

## Usage

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
