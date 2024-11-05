import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '',
  },
  // 配置多语言
  locales: [
    {id: 'zh-CN', name: '中文'},
    {id: 'en-US', name: 'EN'},
    {id: 'ko-KR', name: '한국어'},
  ]
});
