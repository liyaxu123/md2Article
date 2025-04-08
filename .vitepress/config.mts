// https://vitepress.dev/reference/site-config
export default {
  base: "/md2Article/",
  title: "墨韵文苑",
  description: "优秀作文展示与分享平台",
  themeConfig: {
    // 顶部导航配置
    nav: [
      { text: "首页", link: "/" },
      { text: "分类浏览", link: "/category.html" },
      { text: "精选推荐", link: "/markdown-examples" },
      { text: "投稿分享", link: "/markdown-examples" },
      { text: "关于我们", link: "/about.html" },
    ],

    // 页脚配置
    footer: {
      copyright: "2023 墨韵文苑 - 优秀作文展示与分享平台. 保留所有权利.",
      contactUs: {
        emile: "contact@moyunwenyuan.com",
        phone: "123-456-7890",
        wx: "",
        weibo: "",
        qq: "",
      },
    },
  },
};
