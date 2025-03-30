import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的作文笔记",
  description: "跟我一起学习写作文",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '分类浏览', link: '/markdown-examples' },
      { text: '精选推荐', link: '/markdown-examples' },
      { text: '投稿分享', link: '/markdown-examples' },
      { text: '关于我们', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '首页',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
