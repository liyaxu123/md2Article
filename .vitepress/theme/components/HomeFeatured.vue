<script setup lang="ts">
import { useData } from "vitepress";
import { data as postsData } from "../articles.data";
const { frontmatter: fm } = useData();

console.log("posts:", postsData);
</script>

<template>
  <section class="featured" v-if="fm.featured">
    <div class="container">
      <h2 class="section-title">{{ fm.featured.title }}</h2>
      <div class="featured-grid" v-if="postsData.featureds.length > 0">
        <!-- 卡片 -->
        <div
          class="featured-card"
          v-for="item in postsData.featureds"
          :key="item.url"
        >
          <div
            class="card-image"
            :style="{ backgroundImage: `url(${item.frontmatter.cover})` }"
          ></div>
          <div class="card-content">
            <span class="category">{{ item.frontmatter.category }}</span>
            <h3>
              <a :href="item.url">{{ item.frontmatter.title }}</a>
            </h3>
            <p>
              {{ item.frontmatter.details }}
            </p>
            <div class="card-meta">
              <span
                ><i class="bi bi-person"></i>
                {{ item.frontmatter.author }}</span
              >
              <span><i class="bi bi-eye"></i> 1342</span>
              <span><i class="bi bi-hand-thumbs-up"></i> 238</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 添加空状态展示 -->
      <div class="empty-state" v-else>
        <div class="empty-icon">
          <i class="bi bi-journal-bookmark"></i>
        </div>
        <h3>暂无{{ fm.featured.title }}文章</h3>
        <p>快来添加一篇作文，并将其 md 文件头部的 frontmatter 里的 isFeatured 设置为 true 试试吧</p>
      </div>

      <div class="view-more" v-if="fm.featured.action">
        <a :href="fm.featured.action.link" class="btn">{{
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

.featured-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: 25px;
}

.category {
  display: inline-block;
  padding: 5px 12px;
  background-color: #f0ebe1;
  color: #8c7853;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 15px;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #5a6268;
}

.card-content p {
  color: #666;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
}

.card-meta {
  display: flex;
  color: #888;
  font-size: 0.9rem;
}

.card-meta span {
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.card-meta i {
  margin-right: 5px;
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
