import { createContentLoader } from "vitepress";

// data 类型
export interface Data {
  featureds: any[]; // 精选推荐的文章
  allPosts: any[]; // 所有文章
  categorys: any[]; // 所有的文章分类
}

declare const data: Data;
export { data };

// 封装统计分类的函数
function getCategorys(posts: any[]): any[] {
  const homePost = posts.find((item) => item?.frontmatter?.layout === "home");
  const allCategorys = homePost?.frontmatter?.categories?.items || [];
  return allCategorys;
}

// 封装获取精选文章的函数
function getFeaturedPosts(posts: any[], limit: number = 0): any[] {
  const featured = posts.filter((post) => post.frontmatter.isFeatured === true);

  return limit > 0 ? featured.slice(0, limit) : featured;
}

export default createContentLoader("*.md", {
  includeSrc: true, // 包含原始 markdown 源?
  render: true, // 包含渲染的整页 HTML?
  excerpt: true, // 包含摘录?
  transform(rawData) {
    const resData: Data = {
      featureds: [],
      allPosts: [],
      categorys: [],
    };

    // 获取所有的文章
    resData.allPosts = rawData
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
      })
      .map((posts) => {
        return {
          url: posts?.url,
          excerpt: posts?.excerpt,
          html: posts?.html,
          frontmatter: posts?.frontmatter,
          markdown: posts?.src,
        };
      });

    // 获取文章分类数据
    resData.categorys = getCategorys(resData.allPosts);

    // 获取精选推荐的文章（最多6篇）
    resData.featureds = getFeaturedPosts(resData.allPosts, 6);

    return resData;
  },
});
