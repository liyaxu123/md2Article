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
  const categoryMap = new Map();

  posts.forEach((post) => {
    // 获取文章的分类信息，可能是字符串或数组
    const categories =
      post.frontmatter.category || post.frontmatter.categories || ['未分类'];

    // 将字符串转换为数组以统一处理
    const categoryArray = Array.isArray(categories) ? categories : [categories];

    // 统计每个分类的文章数量
    categoryArray.forEach((category) => {
      if (category && typeof category === "string") {
        if (categoryMap.has(category)) {
          categoryMap.set(category, categoryMap.get(category) + 1);
        } else {
          categoryMap.set(category, 1);
        }
      }
    });
  });

  // 将Map转换为数组形式
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
    // 可以添加该分类的链接
    link: `/category/${name.toLowerCase().replace(/\s+/g, "-")}`,
  }));
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
