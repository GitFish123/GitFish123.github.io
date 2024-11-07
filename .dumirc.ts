import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/GitFish123.github.io',
  publicPath: '/GitFish123.github.io/',
  themeConfig: {
    name: '时光的博客', // 配置导航栏上的站点名称，不配置时不展示
    // logo: '/logo.png', // 导航栏站点LOGO
    lastUpdated: true, // 最近更新时间
    rtl: true, // 是否开启 RTL 切换，用于将站点文本阅读方向切换为『从右到左』
    showLineNum: true, // 在代码块中展示行号
    nprogress: true, // 切换页面时是否在页面顶部展示进度条
    // prefersColor: { default: 'auto' }, // 配置站点的主题色
    // 配置顶部导航栏右侧的社交网站外链图标，目前最多支持配置 5 个
    socialLinks: {
      github: 'https://github.com/GitFish123',
      // weibo: 'https://xxxx',
      // twitter: 'https://xxxx',
      // gitlab: 'https://xxxx',
      // facebook: 'https://xxxx',
      // zhihu: 'https://xxxx',
      // yuque: 'https://xxxx',
      // linkedin: 'https://xxxx',
    },
  },
  // 配置多语言
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
    { id: 'ko-KR', name: '한국어' },
  ],
});
