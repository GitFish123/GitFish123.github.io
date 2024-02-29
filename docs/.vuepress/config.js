/*
 * @Author: Mecora i_akio@126.com
 * @Date: 2024-02-29 23:12:39
 * @LastEditors: Mecora i_akio@126.com
 * @LastEditTime: 2024-03-01 00:24:07
 * @FilePath: /GitFish123.github.io/docs/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

module.exports = {
  title: 'Mecora 知识空间', // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  description: 'Just playing around',
  locales: {
    '/': {
      lang: "zh-CN",
      title: "Mecora 知识空间",
      description: 'anything'
    }
  },
  themeConfig: {
    logo: '/image/theme.jpeg',
    search: true, // 默认的搜索框,默认开启
    searchMaxSuggestions: 10, //调整默认搜索框显示的搜索结果数量
    lastUpdated: '最后更新时间', // 最后更新时间
    prevLinks: true, // 上一篇 链接
    nextLinks: true, // 下一篇 链接
    smoothScroll: true, // 启用页面滚动效果
    nav: [
      {text: "前端", link: '/index.md'},
      {text: "Node生态", link: '/index.md'},
      {text: "计算机网络", link: '/index.md'},
      {text: "算法与设计模式", link: '/index.md'}
    ]
    
  }
}