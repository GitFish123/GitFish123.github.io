/*
 * @Author: Mecora i_akio@126.com
 * @Date: 2024-02-29 23:12:39
 * @LastEditors: Mecora i_akio@126.com
 * @LastEditTime: 2024-03-01 21:47:16
 * @FilePath: /GitFish123.github.io/docs/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require("vuepress/config");

module.exports = defineConfig({
  title: "Mecora 知识空间", // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  description: "Just playing around",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mecora 小飞鱼",
      description: "anything",
    },
  },
  themeConfig: {
    logo: "/image/theme.jpeg",
    repo: "https://github.com/GitFish123/GitFish123.github.io", // github 地址
    search: true, // 默认的搜索框,默认开启
    searchMaxSuggestions: 10, //调整默认搜索框显示的搜索结果数量
    lastUpdated: "最后更新时间", // 最后更新时间
    prevLinks: true, // 上一篇 链接
    nextLinks: true, // 下一篇 链接
    // smoothScroll: true, // 启用页面滚动效果
    // docsDir: 'docs',
    nav: [
      { text: "首页", link: "/index.md" },
      {
        text: "前端",
        items: [
          { text: "React", link: "/React/react.md" },
          { text: "Vue", link: "/Vue/index.md" },
          { text: "文章", link: "/article/index.md" },
        ],
      },
      // { text: "Node生态", link: "/index.md" },
      // { text: "计算机网络", link: "/index.md" },
      // { text: "算法与设计模式", link: "/index.md" },
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      // {
      //   title: "前端",
      //   children: [
      //     { title: "React", path: "/React/react.md" },
      //     { title: "Vue", path: "/Vue/index.md" },
      //     { title: "文章", path: "/article/index.md" },
      //   ],
      // },
      // {
      //   title: "计算机网络",
      // }
    ],
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  plugins: [
    'vuepress-plugin-nprogress', // 加载进度条
    '@vuepress/back-to-top', // 返回顶部
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    // 点击复制
    'one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功!', // default is 'Copied successfully!'
      toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
      duration: 300, // prompt message display time
    },
    // 放大图片
    [
      'vuepress-plugin-zooming',
      {
        // selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
  ]
})
