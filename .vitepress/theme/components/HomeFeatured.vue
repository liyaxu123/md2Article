<script setup lang="ts">
import { useData, withBase } from "vitepress";
import { data as postsData } from "../articles.data";
import ArticleCard from "./ArticleCard.vue";
const { frontmatter: fm } = useData();

console.log("posts:", postsData);
</script>

<template>
  <section class="featured" v-if="fm.featured">
    <div class="container">
      <h2 class="section-title">{{ fm.featured.title }}</h2>
      <div class="featured-grid" v-if="postsData.featureds.length > 0">
        <!-- 文章卡片 -->
        <ArticleCard
          v-for="item in postsData.featureds"
          :key="item.url"
          :title="item.frontmatter.title"
          :url="withBase(item.url)"
          :cover="item.frontmatter.cover"
          :category="item.frontmatter.category"
          :details="item.frontmatter.details"
          :author="item.frontmatter.author"
        />
      </div>
      <!-- 添加空状态展示 -->
      <div class="empty-state" v-else>
        <div class="empty-icon">
          <i class="bi bi-journal-bookmark"></i>
        </div>
        <h3>暂无{{ fm.featured.title }}文章</h3>
        <p>
          快来添加一篇作文，并将其 md 文件头部的 frontmatter 里的 isFeatured
          设置为 true 试试吧
        </p>
      </div>

      <div class="view-more" v-if="fm.featured.action">
        <a :href="withBase(fm.featured.action.link)" class="btn">{{
          fm.featured.action.text
        }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured {
  padding: 80px 0;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

/* 空状态样式 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 20px 0;
}

.empty-icon {
  font-size: 3rem;
  color: #d0d0d0;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #5a6268;
  margin-bottom: 10px;
}

.empty-state p {
  color: #888;
  max-width: 400px;
  margin: 0 auto;
}

.view-more {
  text-align: center;
  margin-top: 40px;
}

@media (max-width: 992px) {
  .featured-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
}
</style>
