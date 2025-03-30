// https://vitepress.dev/reference/site-config
export default {
  title: "墨韵文苑",
  description: "优秀作文展示与分享平台",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "分类浏览", link: "/markdown-examples" },
      { text: "精选推荐", link: "/markdown-examples" },
      { text: "投稿分享", link: "/markdown-examples" },
      { text: "关于我们", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "首页",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

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
