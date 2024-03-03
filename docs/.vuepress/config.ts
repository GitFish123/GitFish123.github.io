/*
 * @Author: Mecora i_akio@126.com
 * @Date: 2024-02-29 23:12:39
 * @LastEditors: Mecora i_akio@126.com
 * @LastEditTime: 2024-03-03 11:44:52
 * @FilePath: /GitFish123.github.io/docs/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'


export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/image/theme.jpeg",
    repo: "https://github.com/GitFish123/GitFish123.github.io", // github 地址
    navbar: [
      { text: "首页", link: "/index.md"},
      {
        text: "前端",
        children: [
          { text: "React", link: "/React/react.md" },
          { text: "Vue", link: "/Vue/vue.md" },
          { text: "文章", link: "/Article/article.md" },
        ],
      },
    ],
    sidebarDepth: 6, // 侧边栏最多显示级别层数
    sidebar: [
      {
        text: '前端',   // 必要的
        // path: '/',  // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: true, // 可选的, 默认值是 true,
        // sidebarDepth: 6,    // 可选的, 默认值是 1
        children: [
          {
            text: 'React',
            link: '/React/react.md'
          },
          {
            text: 'Vue',
            link: '/Vue/vue.md' 
          },
          {
            text: '文章',
            link: '/Article/article.md' 
          },
        ]
      },
      // {
      //   title: '计算机网络',
      //   children: [ /* ... */ ],
      //   initialOpenGroupIndex: 0 // 可选的, 默认值是 0，默认展开第一个侧边栏组
      // }
    ],
    lastUpdated: true,
    lastUpdatedText: "最近更新时间",
    contributorsText: '贡献者'
  }),
  lang: 'zh-CN',
  title: "Mecora 知识空间", // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  description: "Just playing around",

  base: '/main/',
  // themeConfig: {
  //   search: true, // 默认的搜索框,默认开启
  //   searchMaxSuggestions: 10, //调整默认搜索框显示的搜索结果数量
  //   lastUpdated: "最后更新时间", // 最后更新时间
  //   prevLinks: true, // 上一篇 链接
  //   nextLinks: true, // 下一篇 链接
  //   smoothScroll: true, // 点击页面内部的链接时，触发平滑滚动效果
  //   docsDir: 'docs', // 指定包含Markdown文件的目录
  //   displayAllHeaders: true, // 是否显示所有标题的链接，默认值：false
  // },
  markdown: {
    code: {
      lineNumbers: true, // 代码块显示行号
    }
  },
  plugins: <any>[
    'vuepress-plugin-nprogress', // 加载进度条
    // '@vuepress/back-to-top', // 返回顶部
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

    // ['@vuepress/plugin-search', {
    //   isSearchable: (page) => page.path !== '/',
    //   locales: {
    //     '/': {
    //       placeholder: 'Search',
    //     },
    //   },
    // }],
  ]
})
